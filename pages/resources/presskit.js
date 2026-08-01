import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import styles from '../../components/Templates/BaseTemplate.module.scss';
import ContentSection from '../../components/content/ContentSection/ContentSection';
import InfoBox from '../../components/content/InfoBox/InfoBox';
import BaseTemplate from '../../components/Templates/BaseTemplate';
import ContentItem from '../../components/content/ContentSection/ContentItem';

export default function PressKit() {
  return (
    <BaseTemplate title="Press Kit" description="Mana Source Press Kit and Media Resources">
      <ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContentItem>
          <h1 className={styles.tCenter}>Press Kit</h1>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>About Mana Source</h3>
        <ContentItem>
          <InfoBox>
            <p>
              <strong>Mana Source</strong> is an adventure board game featuring simultaneous turn gameplay, compelling narrative, and strategic depth. Players choose from 6 unique classes to embark on 20+ story-rich scenarios, compete in skirmish encounters, or challenge each other in player-versus-player modes.
            </p><br />
            <p>
              <strong>Key Features:</strong><br />
              Simultaneous turn-based gameplay • Learn the basics in 15 minutes • 3 distinct gamemodes: Adventure, Skirmish, and Clash • 6 playable classes with 240+ unique skills • Over 140,000 words of hand-crafted narrative across 25 scenarios • 100% human-created art (zero AI-generated art, cards, and story)
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Quick Facts</h3>
        <ContentItem>
          <InfoBox>
            <p><strong>Designer:</strong> Paul Goodrich</p>
            <p><strong>Publisher:</strong> Goodrich Games</p>
            <p><strong>Lead Artists:</strong> Nele Diel & Amanda Brack</p>
            <p><strong>Players:</strong> 1-4</p>
            <p><strong>Age:</strong> 13+</p>
            <p><strong>Play Time:</strong> 60-180 minutes (Adventure/Skirmish), 20-30 minutes (Clash)</p>
            <p><strong>Status:</strong> Coming to Kickstarter in 2026</p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Connect With Us</h3>
        <ContentItem>
          <InfoBox classes={styles.tCenter}>
            <p>
              Join our community to stay updated on game announcements and Kickstarter launch details.
            </p><br />
            <p>
              <strong>Discord:</strong> <a href="https://discord.com/invite/drQDa7MQ3e" target="_blank" rel="noopener noreferrer">Official Discord Server</a>
            </p>
            <p>
              <strong>Facebook:</strong> <a href="https://www.facebook.com/Mana-Source-102398542746103" target="_blank" rel="noopener noreferrer">Mana Source Facebook</a>
            </p>
            <p>
              <strong>X (Twitter):</strong> <a href="https://x.com/ManaSourceGame" target="_blank" rel="noopener noreferrer">@ManaSourceGame</a>
            </p>
            <p>
              <strong>BoardGameGeek:</strong> <a href="https://boardgamegeek.com/boardgame/391828/mana-source" target="_blank" rel="noopener noreferrer">Mana Source BGG Page</a>
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Media Inquiries</h3>
        <ContentItem>
          <InfoBox>
            <p>
              For press inquiries, interview requests, or to arrange a review copy, please contact:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>
            </p>
            <br />
          </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  );
}
