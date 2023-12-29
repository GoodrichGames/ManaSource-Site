import Link from 'next/link';
import ContentSection from '../components/content/ContentSection/ContentSection';
import ContentItem from './../components/content/ContentSection/ContentItem';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ExportedImage from "next-image-export-optimizer";
import prefix from '../utils/prefix';
import ArticleList from './../components/content/ArticleList/ArticleList';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';

export default function Resources() {
  return (
    <BaseTemplate title="Resources" description="Game Resources">
      <ContentSection>
        <ContentItem title='Watch it Played'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jnfqC_cbxvg?si=A45uegKEV9bfFeHT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </ContentItem>
        <ContentItem title='How to Play'>
          <ol>
            <li>1. Each player selects 1 card and plays it facedown in the center area.</li>
            <li>2. Players simultaneously reveal the cards, pay the card cost, resolve the action, and resolve other active effects.</li>
            <li>3. Played cards enter the Recharge zone to indicate that it cannot be used again until sufficient rounds have passed.</li>
            <li>4. Cards and effects in the Recharge zone move one space down.</li>
            <li>5. Play continues until one player/team is out of health, the other player/team wins!</li>
          </ol>
          <br />
          <div style={{ position: 'relative', height: '22rem' }}>
            <ExportedImage src={prefix + '/images/HowToPlay.webp'} alt='Image of how cards move down the recharge zone when played' layout='fill' objectFit='contain' priority={true} />
          </div>
        </ContentItem>
        <ContentItem title='Rules'>
          <Link href='/resources/rules'>
            Rules &amp; FAQ
          </Link>
        </ContentItem>
        <ContentItem title='Newsletter'>
          <EmailSignup ctaText="Start your adventure!" />
        </ContentItem>
        <ContentItem title='Latest Balance Changes'>
          Come back here when the game launches!
          <ArticleList category='patchnotes' max='3' />
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  )
}
