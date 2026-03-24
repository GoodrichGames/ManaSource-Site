
import BaseTemplate from './../../components/Templates/BaseTemplate';
import ContentSection from './../../components/content/ContentSection/ContentSection';
import ContentItem from './../../components/content/ContentSection/ContentItem';
import Accordion from './../../components/content/Accordion/Accordion';
import Link from 'next/link';
import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import styles from './../../components/Templates/BaseTemplate.module.scss'

const faqs = [
  {
    question: "When will Mana Source be released?",
    answer: "TBD once crowdfunding is secured. If you are interested in working with us, please <a href='/contactus'>contact us</a>!<br><br>At the current rate of progress, Mana Source will Kickstart in Summer 2026. The email signup below is the best way I can keep you updated.",
  },
  {
    question: "How much will Mana Source cost?",
    answer: "This will largely depend on the final components and interest. We are aiming for pricing around $70.",
  },
  {
    question: "What are the release classes?",
    answer: `
      <strong>Knight</strong><br>
      <em>Talents: Strength, speed, and endurance.</em><br><br>
      Knights live in honor-based societies...<br><br>

      <strong>Reagent</strong><br>
      <em>Talents: Influence hydrogen, nitrogen, oxygen, sodium, silicon, heat, and electromagnetism.</em><br><br>
      Historically, Reagents lived as traveling merchants...<br><br>

      <strong>Doctor</strong><br>
      <em>Talents: Healing and malaise, health as a resource, creating living directives.</em><br><br>
      An all but lost art...<br><br>

      <strong>Illusionist</strong><br>
      <em>Talents: Illusions. Influence over perception and displacement.</em><br><br>
      Illusionists are widely thought of as vagrants...<br><br>

      <strong>Warden</strong><br>
      <em>Talents: Influence flora, pheromones, and by extension animal behavior.</em><br><br>
      Wardens prefer wooded communities...
    `,
  },
  {
    question: "How many cards make up a deck?",
    answer: "There is no concept of a deck in the base version of Mana Source. Players construct a hand of 9 cards to play with, without duplicates.",
  },
];

function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default function Rules() {
  const faqSchema = generateFAQSchema();

  return (
    <BaseTemplate title="Rules" description="Game Rules">
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
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
            {faqs.map((faq, index) => (
              <div key={index}>
                <Accordion 
                  title={faq.question} 
                  defaultExpanded={false}
                >
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  {index === 0 && <EmailSignup ctaText="Start your adventure!" />}
                </Accordion>
                <br />
              </div>
            ))}
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