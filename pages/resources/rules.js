
import BaseTemplate from './../../components/Templates/BaseTemplate';
import ContentSection from './../../components/content/ContentSection/ContentSection';
import ContentItem from './../../components/content/ContentSection/ContentItem';
import Accordion from './../../components/content/Accordion/Accordion';
import Link from 'next/link';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import styles from './../../components/Templates/BaseTemplate.module.scss'

export default function Rules() {
  return (
    <BaseTemplate title="Rules" description="Game Rules">
      <ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContentItem>
          <h1 className={styles.logo + " " + styles.tCenter}>Rules</h1>
        </ContentItem>
        <br />
        <br />
      </ContentSection>
      <div className={styles.maxW960 + " " + styles.center}>
        <ContentSection>
          <ContentItem title='Download Rules'>
            <br />
            Once the game is released, the rules will be available here.
            <br /><br />
            {/* <a href='/documents/ms-rules-1-0.docx'>Version 1.0</a> */}
          </ContentItem>
          <ContentItem title='FAQ'>
            <br />
            <Accordion title='When will Mana Source be released?' defaultExpanded={false}>
              <em>
                TBD once crowdfunding is secured.  If you are interested in working with us, please
                <Link href='/contactus'> contact us!</Link><br /><br />
                At the current rate of progress, Mana Source will Kickstart in Summer 2025.  The email signup below is the best way I can keep you updated.
                <EmailSignup ctaText="Start your adventure!" />
              </em>
            </Accordion>
            <br />
            <Accordion title='How much will Mana Source cost?' defaultExpanded={false}>
              <em>
                This will largely depend on the final components.  We are aiming for tiered pricing of $15 and $70.
              </em>
            </Accordion>
            <br />
            <Accordion title='What are the release classes?' defaultExpanded={false}>
              <strong>
                Knight
              </strong>
              <p><em>Talents: Strength, speed, and endurance.</em></p><br />
              <p>
              Knights live in honor-based societies, almost all of which have brutal histories.  Due to their physical prowess, war is often the first choice for many of these kingdoms rather than a last resort.  Their legendary disdain for outward talent usage fueled many of these wars, driving the other nations into hiding.  In the present day, the majority of the humans in the world are Knights.   Due to physical training, Knights use mana at a more efficient rate than other shapers.
              </p><br />
              <strong>Reagent</strong>
              <p><em>Talents: Influence hydrogen, nitrogen, oxygen, sodium, silicon, heat, and electromagnetism.</em></p><br />
              <p>
              Historically, Reagents lived as traveling merchants, leveraging their skills in forging, construction, and water management.  Reagents live the most freely due to a high degree of self-sufficiency and ability to shape the land itself.  Outsiders are typically not allowed into their communities, out of fear of what has happened to the other nations.
              </p><br />
              <strong>Doctor</strong>
              <p><em>Talents: Healing and malaise, health as a resource, creating living directives.</em></p><br />
              <p>An all but lost art.  Once the medics of Knight empires, many were forced into creating plagues and combat automatons that opposed their underlying belief in the sanctity of life.  Their automatons still roam the land searching for ways to fulfill their defined purpose, unbeholden to any master but the one who created them.  Doctors have dwindled much in number, to the point where some question if they still exist at all...</p>
              <br />
              <strong>Illusionist</strong>
              <p><em>Talents: Illusions.  Influence over perception and displacement.</em></p><br />
              <p>Illusionists are widely thought of as vagrants, criminals, and untrustworthy by nature.  To some extent this critique is well-warranted, as many engage in a variety of criminal activity such as forgery, suggestion, and “gambling”.  Illusionists that prefer honest work often live as performers, soothers, councilors, criminologists, and builders.  There are only a few last known Illusionist cities, though somehow outsiders never manage to visit.</p>
              <br />
              <strong>Warden</strong>
              <p><em>Talents: Influence flora, pheromones, and by extension animal behavior.</em></p><br />
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
        <br />
        <br />
        <br />
        <br />
      </div>
    </BaseTemplate>
  )
}