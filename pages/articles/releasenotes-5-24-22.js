
import ContentItem from '../../components/content/ContentSection/ContentItem';
import ContentSection from '../../components/content/ContentSection/ContentSection';
import ArticleTemplate from '../../components/Templates/ArticleTemplate';
import ExportedImage from 'next-image-export-optimizer';
import prefix from '../../utils/prefix';

const Notes05242022 = () => {
  return <ArticleTemplate useImage={true}>
    <ContentSection>
      <ContentItem>
        <p>This is an example set of Release notes.</p><br />
        <ul>
          <li className='cardShortDetails' style={{position: 'relative'}}>
            <ExportedImage src={prefix + "/images/cards/trick%20of%20the%20light.jpg"} alt="Trick of the Light card" layout='intrinsic' objectFit='contain' width='150px' height='100px' />
            <p>
              <b>Trick of the Light</b>
            </p>
            <p>
              Mana cost increased 1 &gt;&gt; 2
            </p>
          </li>
        </ul>
      </ContentItem>
    </ContentSection>
  </ArticleTemplate>
}

export default Notes05242022;