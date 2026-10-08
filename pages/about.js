import styles from '../components/Templates/BaseTemplate.module.scss';
import factStyles from '../components/content/KeyFacts/KeyFacts.module.scss';
import ContentSection from '../components/content/ContentSection/ContentSection';
import InfoBox from '../components/content/InfoBox/InfoBox';
import BaseTemplate from '../components/Templates/BaseTemplate';
import ContentItem from '../components/content/ContentSection/ContentItem';
import { baseUrl, designerSchema, organizationSchema } from '../metadata/structureddata';


const EMAIL = 'goodrichgames@pm.me';
const DISCORD_URL = 'https://discord.com/invite/drQDa7MQ3e';
const SOCIAL_LINKS = [
  { name: 'Discord', url: DISCORD_URL },
  { name: 'Facebook', url: 'https://www.facebook.com/Mana-Source-102398542746103' },
  { name: 'X (@ManaSourceGame)', url: 'https://x.com/ManaSourceGame' },
  { name: 'BoardGameGeek', url: 'https://boardgamegeek.com/boardgame/391828/mana-source' },
];

const faqs = [
  {
    question: 'When is Mana Source coming out?',
    answer: 'Mana Source is coming to Kickstarter in early 2027. Sign up on the home page to hear when the campaign launches.',
  },
  {
    question: 'How many players, and how long does it take?',
    answer: 'Mana Source plays 1–4 players, ages 13 and up. Adventure and Skirmish run 60–180 minutes; Clash runs 20–30 minutes.',
  },
  {
    question: 'How much will Mana Source cost?',
    answer: 'Pricing will be announced before the Kickstarter launch. Sign up on the home page to hear as soon as it is set.',
  },
  {
    question: 'Is any of the art or writing AI-generated?',
    answer: 'No. All art, cards, and story in Mana Source are made by people.',
  },
  {
    question: 'Does Mana Source use a deck?',
    answer: 'No. Players build a hand of 10 cards with no duplicates: 8 actions from their two classes, plus a Basic Attack and Gather Mana.',
  },
  {
    question: 'Can I playtest it?',
    answer: 'Yes. Ask on the official Discord to set up an alpha playtest of the campaign or PvP.',
  },
];

const pageUrl = `${baseUrl}/about`;

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${pageUrl}#page`,
      url: pageUrl,
      name: 'About Goodrich Games',
      inLanguage: 'en-US',
      mainEntity: { '@id': organizationSchema['@id'] },
    },
    {
      ...organizationSchema,
      description: 'Goodrich Games is an independent board game publisher that makes Mana Source, an adventure board game with a story-driven campaign, dual-class character building, and simultaneous turns, for 1–4 players ages 13 and up.',
      foundingDate: '2024',
      founder: { '@id': designerSchema['@id'] },
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'NC',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: EMAIL,
        url: DISCORD_URL,
        availableLanguage: 'English',
      },
      sameAs: SOCIAL_LINKS.map((link) => link.url),
      makesOffer: {
        '@type': 'Offer',
        itemOffered: { '@id': `${baseUrl}/#game` },
      },
    },
    {
      ...designerSchema,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'North Carolina State University',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function About() {
  return (
    <BaseTemplate title="About Goodrich Games" description="Goodrich Games is an independent board game publisher that makes Mana Source, an adventure board game for 1–4 players.">
      <script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <ContentSection>
        <span className="spacer5" aria-hidden="true"></span>
        <ContentItem>
          <h1 className={styles.tCenter}>About Goodrich Games</h1>
        </ContentItem>
        <span className="spacer2" aria-hidden="true"></span>
      </ContentSection>

      <ContentSection>
        <ContentItem>
          <InfoBox>
            <p>
              Goodrich Games is an independent board game publisher that makes Mana Source, an adventure board game with a story-driven campaign, dual-class character building, and simultaneous turns, for 1–4 players ages 13 and up.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h2 className={styles.tCenter}>What Goodrich Games Does</h2>
        <ContentItem>
          <InfoBox>
            <h3>Mana Source: Adventure mode</h3>
            <p>
              A story campaign across 25 scenarios with over 140,000 words of hand-written narrative. Players pick from 6 classes and build their character as the story unfolds. Play time is 60–180 minutes.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Mana Source: Skirmish mode</h3>
            <p>
              The replayable co-op mode, where players team up against the game in a series of encounters outside the campaign. Play time is 60–180 minutes.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Mana Source: Clash mode</h3>
            <p>
              Player-versus-player matches that play in 20–30 minutes.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h2 className={styles.tCenter}>What Makes Mana Source Different</h2>
        <ContentItem>
          <InfoBox>
            <h3>Build your own character</h3>
            <p>
              Each player combines two of the 6 classes and builds a hand of 10 cards with no duplicates: 8 actions from their two classes, plus a Basic Attack and Gather Mana. Across all 6 classes there are 240 skills to choose from. No two characters have to play the same way.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Action combinations</h3>
            <p>
              Your turn can be simple, or you can chain skills into combos to earn a scenario bonus or get the edge in PvP. New players can learn the basics in 15 minutes, while experienced players still have room to master the game.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Everyone takes their turn at the same time</h3>
            <p>
              Mana Source uses simultaneous turns, so no one sits waiting for other players to finish. The whole table stays involved every round.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>A real story</h3>
            <p>
              The campaign has over 140,000 words of hand-written narrative across 25 scenarios. The story is a core part of the game, not flavor text on the side.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>100% human-made art and writing</h3>
            <p>
              No AI-generated art, cards, or story anywhere in Mana Source. Every illustration comes from our artists, Nele Diel and Amanda Brack, and every word of the story is written by people.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h2 className={styles.tCenter}>The Team Behind Goodrich Games</h2>
        <ContentItem>
          <InfoBox>
            <p>
              Paul started Mana Source because there were few games that combined story, gameplay, and character customization, and the ones that did were often too complex to get into or too expensive. Goodrich Games was founded in 2024 to publish it. The team is one designer, two lead artists, and one creature concept contributor.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Paul Goodrich — Founder &amp; Lead Designer</h3>
            <p>
              Paul graduated from North Carolina State University with a Bachelor&apos;s degree in Computer Science and concentration in game design. He has a long history of competitive gaming, including professionally as the support and jungler for Team C in the MOBA Infinite Crisis, Masters in Overwatch pre-OWL, and Diamond 1 in League of Legends in S3.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Nele Diel — Lead Artist</h3>
            <p>
              Nele is a full-time freelance illustrator living in Wiesbaden, Germany, whose board game work includes art for The Lord of the Rings, Arkham Horror, and Legend of the Five Rings trading card games. See more of her work at <a href="https://nelediel.com/">nelediel.com</a>.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Amanda Brack — Lead Artist</h3>
            <p>
              Amanda is a NYC-based digital freelance illustrator who has worked on character designs, book covers, children&apos;s books, and more. See more of her work at <a href="https://www.amandabrack.art/">amandabrack.art</a>.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <h3>Sandi Goodrich — Creature Concepts</h3>
            <p>
              Sandi Goodrich is the wife of Paul Goodrich and resident knower of all trivia. In her spare time she enjoys crocheting, cooking delicious meals, exploring Hyrule, and playing games with Paul. Her favorite games include Cubitos, Super Motherload, Argent the Consortium, Aeon&apos;s End, and Mana Source.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h2 className={styles.tCenter}>How Goodrich Games Works</h2>
        <ContentItem>
          <InfoBox>
            <ul>
              <li><strong>Who you&apos;ll talk to:</strong> Paul Goodrich, directly.</li>
              <li><strong>Communication:</strong> Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or the <a href={DISCORD_URL}>official Discord</a>.</li>
              <li><strong>Response times:</strong> Within 48 hours.</li>
              <li><strong>Press and reviews:</strong> Media inquiries, interviews, and review copies go to the email above.</li>
              <li><strong>Playtesting:</strong> Alpha playtests of the campaign or PvP are available on request through Discord.</li>
            </ul>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h2 className={styles.tCenter}>Key Facts</h2>
        <ContentItem>
          <InfoBox>
            <dl className={factStyles.keyFacts}>
              <dt>Company Name</dt><dd>Goodrich Games</dd>
              <dt>Type</dt><dd>Independent board game publisher</dd>
              <dt>Founded</dt><dd>2024</dd>
              <dt>Founder</dt><dd>Paul Goodrich</dd>
              <dt>Headquarters</dt><dd>North Carolina, United States</dd>
              <dt>Website</dt><dd><a href={baseUrl}>www.manasourcegame.com</a></dd>
              <dt>Core Offering</dt><dd>Mana Source, an adventure board game for 1–4 players</dd>
              <dt>Pricing</dt><dd>To be announced before the Kickstarter launch</dd>
              <dt>Services</dt><dd>Adventure, Skirmish, and Clash game modes</dd>
              <dt>Communication</dt><dd>Email (<a href={`mailto:${EMAIL}`}>{EMAIL}</a>) and Discord; replies within 48 hours</dd>
              <dt>Social</dt>
              <dd>
                {SOCIAL_LINKS.map((link, index) => (
                  <span key={link.url}>
                    {index > 0 && ', '}
                    <a href={link.url}>{link.name}</a>
                  </span>
                ))}
              </dd>
            </dl>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h2 className={styles.tCenter}>Frequently Asked Questions</h2>
        <ContentItem>
          <InfoBox>
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                {index > 0 && <span className="spacer1" aria-hidden="true"></span>}
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </InfoBox>
        </ContentItem>
        <span className="spacer4" aria-hidden="true"></span>
      </ContentSection>
    </BaseTemplate>
  );
}
