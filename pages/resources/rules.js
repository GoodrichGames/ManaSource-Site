
import BaseTemplate from './../../components/Templates/BaseTemplate';
import ContentSection from './../../components/content/ContentSection/ContentSection';
import ContentItem from './../../components/content/ContentSection/ContentItem';
import Accordion from './../../components/content/Accordion/Accordion';
import Link from 'next/link';

export default function Rules() {
  return (
    <BaseTemplate title="Rules" description="Game Rules">
      <ContentSection>
        <ContentItem title='Download Rules'>
          Once the game is released, the rules will be available here.
          {/* <a href='/documents/ms-rules-1-0.docx'>Version 1.0</a> */}
        </ContentItem>
        <ContentItem title='FAQ'>
        <Accordion title='When will Mana Source be released?' defaultExpanded={true}>
            <em>
              TBA once a publisher or crowdfunding is secured.  If you are interested in working with us, please
              <Link href='/contactus'> contact us!</Link>
            </em>
          </Accordion>
          <Accordion title='How many cards make up a deck?'>
            <em>
              There is no concept of a deck in the base version of Mana Source.
              Players construct a hand of 9 cards and 1 Basic Attack card to play with, without duplicates.
            </em>
          </Accordion>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  )
}