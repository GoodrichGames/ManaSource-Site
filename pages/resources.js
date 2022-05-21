import Link from 'next/link';
import ContentSection from '../components/content/ContentSection/ContentSection';
import ContentItem from './../components/content/ContentSection/ContentItem';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ExportedImage from "next-image-export-optimizer";

export default function Resources() {
  return (
    <BaseTemplate title="Resources" description="Game Resources">
      <ContentSection>
        {/* <ContentItem title='Watch it Played'>
          Coming soon!
        </ContentItem> */}
      </ContentSection>
      <ContentSection>
        <ContentItem title='How to Play'>
          <ol>
            <li>1. Each player selects 1 card and plays it facedown in the center area.</li>
            <li>2. Players simultaneously reveal the cards, pay the card cost, resolve the action, and resolve other active effects.</li>
            <li>3. Cards and effects in the Recharge zone move one space down.</li>
            <li>4. Played cards enter the Recharge zone to indicate that it cannot be cast again until sufficient rounds have passed.</li>
            <li>5. Play continues until one player/team is out of health, the other player/team wins!</li>
          </ol>
          <br />
          <div style={{ position: 'relative', height: '22rem' }}>
            <ExportedImage src='/images/Recharge Zone explanation.png' alt='Image of how cards move down the recharge zone when played' layout='fill' objectFit='contain' priority={true} />
          </div>
        </ContentItem>
        <ContentItem title='Rules'>
          <Link href='/resources/rules'>
            Download the full rules.
          </Link>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  )
}
