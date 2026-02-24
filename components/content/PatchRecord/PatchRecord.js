import React from 'react';

export function formatLabel(label) {
  if (!label) return '';
  return String(label)
    .split(/[-_ ]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function PatchRecord({ changes = {}, inline = false }) {
  const entries = Object.entries(changes || {});

  if (entries.length === 0) return null;

  const renderValue = (changeObj) => {
    if (changeObj && typeof changeObj === 'object') {
      if ('previous' in changeObj && 'current' in changeObj) {
        return <>{changeObj.previous} → {changeObj.current}</>;
      }
      if ('value' in changeObj) {
        return <>{String(changeObj.value)}</>;
      }
      // fallback for unexpected objects
      return <>{JSON.stringify(changeObj)}</>;
    }

    return <>{String(changeObj)}</>;
  };

  if (inline) {
    return (
      <>
        {entries.map(([key, changeObj], idx) => (
          <React.Fragment key={key}>
            <strong>{formatLabel(key)}:</strong> {renderValue(changeObj)}{idx < entries.length - 1 ? '. ' : ''}
          </React.Fragment>
        ))}
      </>
    );
  }

  return (
    <>
      {entries.map(([key, changeObj]) => (
        <div key={key}><strong>{formatLabel(key)}:</strong> {renderValue(changeObj)}</div>
      ))}
    </>
  );
}
