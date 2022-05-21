import ContentSection from '../../components/content/ContentSection/ContentSection';
import BaseTemplate from './../../components/Templates/BaseTemplate';
import ContentItem from './../../components/content/ContentSection/ContentItem';

export default function ExploreClasses() {
  return <BaseTemplate title="Resources" description="Game Resources">
    <ContentSection>
      <ContentItem title='Explore the classes'>
        <p>
          <b>Reagent</b><br />
          <em>Eleformer</em><br />
          Class primary bonus: Mana Reserves. player starts the game with 10 Mana.<br />
          Talent: Convert Mana to Fire, Water, Stone, Electricity, Air<br />
          Playstyle: Aggressive, Spell damage or Control based<br />
          <br />
          Historically, Reagents have lived as traveling merchants to other nations.  They are long
          sought after for their terraforming, forging, water duct, and farming abilities.  More recently,
          they have organized into Corporations and taken up Artifacting, a means of generating elements
          from mana in a mechanically repeatable fashion.  Overall, they live the most freely due to a
          high degree of self-sufficiency.  Outsiders are not allowed into their community, out of
          fear of what has happened to the other nations.
        </p>
        <br />
        <p>
          <b>Warden</b><br />
          <em>Ecoformer</em><br />
          Class primary bonus: Mana Growth.  You may gather up an additional Mana during the end of the round.<br />
          Talent: Convert Mana to Living Aid (Nature or Animal).  Increased control over their own mana flow.<br />
          Playstyle: Aggressive, Attack and Condition based damage, Traps<br />
          <br />
          Wardens prefer wooded communities for obvious reasons.  Traditionally many of the cities
          were constructed from natural materials on the ground floor of the forest, then raised up
          to just below canopy level via growth into the tree and controlled vines.  As Knights grew
          aggressive and learned that Warden lodging relied on flammable timber, this became
          indefensible.  Some claim at least one of these villages still exists, though its manner
          of concealment is not disclosed.  Others were driven underground to vast networks of caves
          in mountains and steep ridges, villages extending far up into the rock.  They provide a
          great deal of natural medicine, toxins, and food for non-Knight nations.
        </p>
        <br />
        <p>
          <b>Illusionist</b><br />
          <em>Illusioformer</em><br />
          Class primary bonus: Sleight of Hand.  Your may have their effects applied in an action phase before your opponent’s action.<br />
          Talent: Convert Mana to Illusions.  Control over perception.<br />
          Playstyle: Control, Condition and Threat-based damage<br />
          <br />
          Illusionists are widely thought of as vagrants, criminals, and untrustworthy by nature.
          To some extent this is true, as many have engaged in a variety of criminal activity such
          as forgery, suggestion, and “gambling”.  As such, their numbers have dwindled over the
          years due to prosecution and persecution.  Illusionists that prefer honest work often
          live as performers, soothers, councilors, and criminologists.  Many others are builders -
          they value reality.  There is one last known Illusionist city, though somehow outsiders
          never manage to visit.
        </p>
        <br />
        <p>
          <b>Knight</b><br />
          <em>Vigorformer</em><br />
          Class Primary Bonus: Physical Training. Deal 1 extra damage to primary target when using an attack skill.<br />
          Talent: Convert Mana to Adrenaline.  Convert Adrenaline to strength, speed, endurance.<br />
          Playstyle: Straightforward, Attack damage based<br />
          <br />
          Knights live under honor or the law, and almost unilaterally come from a brutal history.
          Various wars were fought over land control, power, and a fear of more outward talent users.
          At this time, the majority of the humans in the world are Knights.  They rarely directly channel
          mana in the same way that the other nations do, preferring the strength found in
          adrenaline coursing through their veins.  It is not well known that Knights still draw
          and convert mana in this process.  Due to physical training and method, they use it at
          a more efficient rate than other Formers.
        </p>
        <br />
        <p>
          <b>Doctor</b><br />
          <em>Bioformer</em><br />
          Class primary bonus: Life Capture.  Gain a mana when a health target is depleted,
          a pet dies, a minion, or enemy group (PvE) dies.<br />
          Talent: Convert Mana to Healing &amp; Malaise, Convert Health to Mana.  Control over unbound Life force.<br />
          Playstyle: Sustain, Control, Ramp<br />
          <br />
          An all but lost art.  Once the doctors and medics of the vigorformer empires, many were
          forced into creating human mana sources, plagues, and combat automatons that directly
          opposed their underlying belief in the sanctity of life.  Many chose to take on the
          appearance of death itself instead of serving those who would subvert that.  Their
          automatons still roam the land searching for ways to fulfill their defined purpose,
          unbeholden to any master but the one who created them.  They have dwindled much in number,
          and until recently, only the automatons evidence that they ever existed at all.  This
          all changed when a young Warden found their underground vault...
        </p>
        <br />
        <p>
          <b>Unknown</b><br />
          <em>Solarformer</em><br />
          Talent: Convert Mana to Light, Heat, Purification, Mystery<br />
          Playstyle: Healing, Advantages, Anti-Control<br />
          <br />
          Primary Solarformers are considered extinct and are unavailable for selection as a
          primary class, though their skills may be used as a secondary class.  Much about them
          exists as myth, but they were known to be mediators, teachers, scholars, and leaders.
          Their nation was wiped out roughly 40 years ago, though many of their gems are tightly
          controlled and used by vigorformer leadership.
        </p>
      </ContentItem>
    </ContentSection>
  </BaseTemplate>
}
