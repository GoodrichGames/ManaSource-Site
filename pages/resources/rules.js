
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
          <br />
          <Accordion title='What are the release classes?' defaultExpanded={true}>
            <strong>
              Knight
            </strong>
            <p><em>Talents: Convert Mana to Adrenaline.  Convert Adrenaline to strength, speed, endurance.</em></p><br />
            <p>
              Knights live under honor or the law, and almost unilaterally come from a brutal history.  Various wars were fought over land control, power, and a fear of more outward talent users.  At this time, the majority of the humans in the world are Knights.  They rarely directly outwardly convert mana in the same way that the other nations do, preferring the strength found in adrenaline coursing through their veins.  It is not well known that Knights still draw and convert mana in this process.  Due to physical training and method, they use it at a more efficient rate than other Shapers.
            </p><br />
            <strong>Reagent</strong>
            <p><em>Talents: Convert Mana to and Influence Hydrogen, Nitrogen, Oxygen, Sodium, Silicon, Heat, and Electromagnetism.</em></p><br />
            <p>
              Historically, Reagents have lived as traveling merchants to other nations.  They are long sought after for their terraforming, forging, water duct, and farming abilities.  More recently, they have organized into Corporations and taken up Artifacting, a means of generating elements from mana in a mechanically repeatable fashion via the use of handstones.  Overall, they live the most freely due to a high degree of self-sufficiency.  Outsiders are typically not allowed into their community, out of fear of what has happened to the other nations.
            </p><br />
            <strong>Doctor</strong>
            <p><em>Talents: Convert Health to Mana.  Convert Mana to Instruction, Healing, and Malaise.</em></p><br />
            <p>An all but lost art.  Once the doctors and medics of the Knight empires, many were forced into creating human mana sources, plagues, and combat automatons that directly opposed their underlying belief in the sanctity of life.  Many chose to take on the appearance of death itself instead of serving those who would subvert that.  Their automatons still roam the land searching for ways to fulfill their defined purpose, unbeholden to any master but the one who created them.  They have dwindled much in number, and until recently, only the automatons evidence that they ever existed at all.</p>
            <br />
            <strong>Illusionist</strong>
            <p><em>Talents: Convert Mana to Illusions.  Influence over perception and displacement.</em></p><br />
            <p>Illusionists are widely thought of as vagrants, criminals, and untrustworthy by nature.  To some extent this is true, as many have engaged in a variety of criminal activity such as forgery, suggestion, and “gambling”.  As such, their numbers have dwindled over the years due to prosecution and persecution.  Illusionists that prefer honest work often live as performers, soothers, councilors, and criminologists.  Many others are builders - they value reality.  There is one last known Illusionist city, though somehow outsiders never manage to visit.</p>
            <br />
            <strong>Warden</strong>
            <p><em>Talents: Convert Mana to Pheromones.  Influence over Flora and Pheromones.</em></p><br />
            <p>Wardens prefer wooded communities.  Traditionally many of the cities were constructed from natural materials on the ground floor of the forest, then raised up to just below canopy level via growth into the tree and controlled vines.  As Knights grew aggressive and learned that Warden lodging relied on flammable timber, this became indefensible.  Some claim at least one of these villages still exists, though its manner of concealment is not disclosed.  Others were driven underground to vast networks of caves in mountains and steep ridges, villages extending far up into the rock.  They provide a great deal of natural medicine, toxins, and food for non-Knight nations.</p>
            <br />
          </Accordion><br />
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