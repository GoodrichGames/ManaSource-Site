import styles from '../../Templates/BaseTemplate.module.scss';
import ContentItem from '../ContentSection/ContentItem';
import HoverReveal from '../HoverReveal/HoverReveal';

const AboutPanels = () => (
  <ContentItem classes={styles.fullW + " " + styles.flex + " " + styles.minHeight700}>
    <ContentItem classes={styles.redSkyBg + " " + styles.bgCover + " " + styles.fullW}>
      <HoverReveal title="Gameplay">
        <div>
          Combat in <span className={styles.fontArkhip}>Mana Source</span> is highly interactive and euro-inspired.  Players must rely on planning and dynamic execution to win.
          <span className="spacer1" aria-hidden="true"></span>
          In the Campaign, a streamlined <strong>solo mode</strong> ensures that you can focus on playing your character. Every action is balanced for head-to-head competitive play.
        </div>
      </HoverReveal>
    </ContentItem>
    <ContentItem classes={styles.highlandsBg + " " + styles.bgCover + " " + styles.fullW}>
      <HoverReveal title="Setting">
        <div>
          <strong><span className={styles.fontArkhip}>Mana Source</span></strong>&nbsp; is a thrilling high-fantasy adventure set in a world where nation has ravaged nation following the onset of a mechanical revolution. Join a scrappy group on the outskirts of civilization. As you venture out, you&apos;ll have to explore, solve puzzles, and defeat deadly adversaries if you&apos;re going to survive.
        </div>
      </HoverReveal>
    </ContentItem>
    <ContentItem classes={styles.cultistsBg + " " + styles.bgCover + " " + styles.fullW}>
      <HoverReveal title="Design Philosophy">
        <div className={styles.tLeft}>
          <strong>Light on Core Rules:</strong>  You shouldn&apos;t have to spend hours teaching a game before you can play.
          <span className="spacer1" aria-hidden="true"></span>
          <strong>Gradually build complexity:</strong>  Each class begins with low complexity actions in order to make getting started easy. Over the course of the campaign, players unlock new actions, gather resources, and complete challenges that add layers of strategy.  Discover new combos while adapting to every unique encounter thrown your way!
          <span className="spacer1" aria-hidden="true"></span>
          <strong>Story is a Feature not a Flavor:</strong> Many board games contain only a light, loosely connected narrative. In <span className={styles.fontArkhip}>Mana Source</span>&nbsp; the story, characters, and various twists are a focal point. The story favors a tight, high-quality narrative of over 140,000 words across 20+ scenarios that you&apos;ll remember for years to come.
        </div>
      </HoverReveal>
    </ContentItem>
  </ContentItem>
);

export default AboutPanels;
