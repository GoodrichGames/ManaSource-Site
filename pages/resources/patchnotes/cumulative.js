import BaseTemplate from '../../../components/Templates/BaseTemplate';
import styles from '../../../components/Templates/BaseTemplate.module.scss';
import patchData from '../../../metadata/patchdata';
import PatchRecord from '../../../components/content/PatchRecord/PatchRecord';
import ContentSection from '../../../components/content/ContentSection/ContentSection';
import ContentItem from '../../../components/content/ContentSection/ContentItem';

function aggregatePatchData(data) {
  // Sort by date asc
  const sorted = data.slice().sort((left, right) => new Date(left.date) - new Date(right.date));
  const map = {};

  for (const patchRecord of sorted) {
    const patchSource = { id: patchRecord.id, date: patchRecord.date, title: patchRecord.title };
    if (!patchRecord.entries) continue;
    for (const patchEntry of patchRecord.entries) {
      const actionId = patchEntry.actionId;
      if (!map[actionId]) map[actionId] = { actionId: actionId, name: patchEntry.name, changes: {}, source: null };

      for (const [changeKey, changeObj] of Object.entries(patchEntry.changes || {})) {
        // assume changeObj is { previous, current }
        map[actionId].changes[changeKey] = { value: changeObj.current, patch: patchSource };
      }
      map[actionId].name = patchEntry.name || map[actionId].name;
    }
  }

  // convert to list
  return Object.values(map).sort((a, b) => a.name.localeCompare(b.name));
}

export default function Cumulative() {
  const items = aggregatePatchData(patchData);

  

  return (
    <BaseTemplate title="Cumulative Balance Changes" description="Latest cumulative balance values for patched actions.">
      <ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContentItem>
          <h1 className={styles.logo + ' ' + styles.tCenter}>Cumulative Balance Changes</h1>
          <br />
          <p className={styles.tCenter}>This page shows the most recent version for actions that have received patchnotes.</p>
        </ContentItem>
      </ContentSection>
      <br />
      <ContentSection>
        <ContentItem>
          <div className={styles.maxW960 + ' ' + styles.center}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Action</th>
                  <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Latest Changes</th>
                  <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Source</th>
                </tr>
              </thead>
              <tbody>
                {items.map(it => (
                  <tr key={it.actionId}>
                    <td style={{ padding: 8, verticalAlign: 'top' }}>{it.name}</td>
                    <td style={{ padding: 8 }}>
                      <PatchRecord changes={it.changes} />
                    </td>
                    <td style={{ padding: 8 }}>
                      {(() => {
                        const any = Object.values(it.changes)[0];
                        if (!any) return null;
                        const p = any.patch;
                        return <a href={`/articles/${p.id}`}>{p.title} — {p.date}</a>;
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentItem>
        <br />
        <br />
        <br />
        <br />
        <br />
      </ContentSection>
    </BaseTemplate>
  )
}
