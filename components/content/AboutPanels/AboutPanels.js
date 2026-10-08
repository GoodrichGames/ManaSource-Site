import styles from '../../Templates/BaseTemplate.module.scss';
import ContentItem from '../ContentSection/ContentItem';
import HoverReveal from '../HoverReveal/HoverReveal';
import SectionArt from '../SectionArt/SectionArt';
import BrandName from '../BrandName/BrandName';

const panelClasses = styles.artSection + " " + styles.fullW;

const AboutPanels = () => (
  <ContentItem classes={styles.fullW + " " + styles.flex + " " + styles.minHeight700}>
    <ContentItem classes={panelClasses}>
      <SectionArt classes={styles.aboutArt + " " + styles.redSkyArt} />
      <HoverReveal title="Gameplay" tilt>
        <div>
          Combat in <BrandName /> is highly interactive and euro-inspired.  Players must rely on planning and dynamic execution to win.
          <span className="spacer1" aria-hidden="true"></span>
          In the Campaign, a streamlined <strong>solo mode</strong> ensures that you can focus on playing your character. Every action is balanced for head-to-head competitive play.
        </div>
      </HoverReveal>
    </ContentItem>
    <ContentItem classes={panelClasses}>
      <SectionArt classes={styles.aboutArt + " " + styles.highlandsArt} />
      <HoverReveal title="Setting" tilt>
        <div>
          <BrandName />&nbsp; is a thrilling high-fantasy adventure set in a world where nation has ravaged nation following the onset of a mechanical revolution. Join a scrappy group on the outskirts of civilization. As you venture out, you&apos;ll have to explore, solve puzzles, and defeat deadly adversaries if you&apos;re going to survive.
        </div>
      </HoverReveal>
    </ContentItem>
    <ContentItem classes={panelClasses}>
      <SectionArt classes={styles.aboutArt + " " + styles.cultistsArt} />
      <HoverReveal title="Design Philosophy" tilt>
        <div className={styles.tLeft}>
          <strong>Light on Core Rules:</strong>  You shouldn&apos;t have to spend hours teaching a game before you can play.
          <span className="spacer1" aria-hidden="true"></span>
          <strong>Gradually build complexity:</strong>  Each class begins with low complexity actions in order to make getting started easy. Over the course of the campaign, players unlock new actions, gather resources, and complete challenges that add layers of strategy.  Discover new combos while adapting to every unique encounter thrown your way!
          <span className="spacer1" aria-hidden="true"></span>
          <strong>Story is a Feature not a Flavor:</strong> Many board games contain only a light, loosely connected narrative. In <BrandName />&nbsp; the story, characters, and various twists are a focal point. The story favors a tight, high-quality narrative of over 140,000 words across 25 scenarios that you&apos;ll remember for years to come.
        </div>
      </HoverReveal>
    </ContentItem>
  </ContentItem>
);

export default AboutPanels;
