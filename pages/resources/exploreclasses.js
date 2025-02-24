import ContentSection from '../../components/content/ContentSection/ContentSection';
import BaseTemplate from './../../components/Templates/BaseTemplate';
import ContentItem from './../../components/content/ContentSection/ContentItem';
import styles from './../../components/Templates/BaseTemplate.module.scss'
import InfoBox from './../../components/content/InfoBox/InfoBox';

export default function ExploreClasses() {
  return <BaseTemplate title="Resources" description="Game Resources">
    <ContentSection>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContentItem>
        <h1 className={styles.logo + " " + styles.tCenter}>Explore the Classes</h1>
      </ContentItem>
      <br />
      <br />
    </ContentSection>
    <div className={styles.maxW960 + " " + styles.center}>
      <ContentSection>
        <ContentItem title=''>
          <InfoBox classes={styles.maxW960 + " " + styles.center + " " + styles.flex}>
            <p>
              <b>Reagent</b><br />
              <em>Eleshaper</em><br />
              Class primary bonus: Mana Reserves.  Starts with 5 additional Mana.<br />
              Talent:  Influence hydrogen, nitrogen, oxygen, sodium, silicon, heat, and electromagnetism.<br />
              Playstyle: Flexible talent damage.<br />
              <br />
              Historically, Reagents lived as traveling merchants, leveraging their talents in forging, construction, and water management.  Reagents live the most freely due to a high degree of self-sufficiency and ability to shape the land itself.  Outsiders are typically not allowed into their communities, out of fear of what has happened to the other nations.
            </p>
          </InfoBox>
          <br />
          <InfoBox classes={styles.maxW960 + " " + styles.center + " " + styles.flex}>
            <p>
              <b>Warden</b><br />
              <em>Ecoshaper</em><br />
              Class primary bonus: Harmony.  Gain an attack token when you play an attack.  Gain a talent token when you play a talent.  Each time you have 1 of each, lose both in order to gain 1 mana.<br />
              Talent: Influence flora, pheromones, and by extension animal behavior.<br />
              Playstyle: Long-term value, hidden actions, mixed damage.<br />
              <br />
              Wardens prefer living in harmony with nature in wooded communities.  However, the ongoing aggression from Knights has made them largely indefensible.  The few who remain are on constant watch for forest fires and new ways to hide their homes.  Many others chose to flee underground, surviving using low sunlight farms.  Wardens provide a great deal of natural medicine, toxins, and food for non-Knight nations.
            </p>
          </InfoBox>
          <br />
          <InfoBox classes={styles.maxW960 + " " + styles.center + " " + styles.flex}>
            <p>
              <b>Illusionist</b><br />
              <em>Illusoshaper</em><br />
              Class primary bonus: Mirage.  Start with 3 illusion cards in hand that can be played for free at the end of a round.<br />
              Talent: Illusions.  Influence over perception and displacement.<br />
              Playstyle: Control, Condition and Threat-based damage<br />
              <br />
              Illusionists are widely thought of as vagrants, criminals, and untrustworthy by nature.  To some extent this critique is well-warranted, as many engage in a variety of criminal activity such as forgery, suggestion, and “gambling”.  Illusionists that prefer honest work often live as performers, soothers, councilors, criminologists, and builders.  There are only a few last known Illusionist cities, though somehow outsiders never manage to visit.
            </p>
          </InfoBox>
          <br />
          <InfoBox classes={styles.maxW960 + " " + styles.center + " " + styles.flex}>
            <p>
              <b>Knight</b><br />
              <em>Vigorshaper</em><br />
              Class Primary Bonus: Physical Training. Deal +1 damage on your attacks.<br />
              Talent: Strength, speed, and endurance.<br />
              Playstyle: Synergistic, control, attack damage.<br />
              <br />
              Knights live in honor-based societies, almost all of which have brutal histories.  Due to their physical prowess, war is often the first choice for many of these kingdoms rather than a last resort.  Their legendary disdain for outward talent usage fueled many of these wars, driving the other nations into hiding.  In the present day, the majority of the humans in the world are Knights.
              <br /><br />
              Due to physical training, Knights use mana at a more efficient rate than other shapers.
            </p>
          </InfoBox>
          <br />
          <InfoBox classes={styles.maxW960 + " " + styles.center + " " + styles.flex}>
            <p>
              <b>Doctor</b><br />
              <em>Bioshaper</em><br />
              Class primary bonus: Life Capture.  Keep track of lost health.
              Gain 1 mana whenever you lose 8 health.<br />
              Talent: Healing and malaise, health as a resource, creating living directives.<br />
              Playstyle: Sustain, control, talent damage<br />
              <br />
              An all but lost art.  Once the medics of Knight empires, many were forced into creating plagues and combat automatons that opposed their underlying belief in the sanctity of life.  Their automatons still roam the land searching for ways to fulfill their defined purpose, unbeholden to any master but the one who created them.  Doctors have dwindled much in number, to the point where some question if they still exist at all...
            </p>
          </InfoBox>
          <br />
          <InfoBox classes={styles.maxW960 + " " + styles.center + " " + styles.flex}>
            <p>
              <b>Unknown</b><br />
              <em>Solarshaper</em><br />
              Talent: Light, Purification<br />
              Playstyle: Healing, Advantages,  Defensive<br />
              <br />
              Primary Solarshapers are considered extinct and are only available as a secondary class.  Their last known nation was wiped out by the Kydarian knights nearly 40 years ago.  When they lived, it was often near the Eastern pole, a secluded region of constant sunlight.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>
      <br />
      <br />
      <br />
      <br />
    </div>
  </BaseTemplate>
}
