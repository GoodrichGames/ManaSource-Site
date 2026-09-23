import styles from '../components/Templates/BaseTemplate.module.scss';
import ContentSection from '../components/content/ContentSection/ContentSection';
import InfoBox from '../components/content/InfoBox/InfoBox';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';
import { isMetaPixelConfigured } from '../utils/metaPixel';

const LAST_UPDATED = 'August 24, 2026';

export default function Privacy() {
  return (
    <BaseTemplate title="Privacy Policy" description="How Goodrich Games collects, uses, and protects your information on the Mana Source website.">
      <ContentSection>
        <span className="spacer5" aria-hidden="true"></span>
        <ContentItem>
          <h1 className={styles.tCenter}>Privacy Policy</h1>
          <p className={styles.tCenter}><em>Last updated: {LAST_UPDATED}</em></p>
        </ContentItem>
        <span className="spacer2" aria-hidden="true"></span>
      </ContentSection>

      <ContentSection>
        <ContentItem>
          <InfoBox>
            <p>
              This policy explains what information the Mana Source website collects, why we collect it, and what you can do about it. Goodrich Games is a small independent board game publisher based in the United States. We are not in the business of collecting or selling personal data, and we keep what we gather to the minimum needed to run a mailing list and understand how the site is used.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              <strong>We do not sell or share your personal information, and we never have.</strong>
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Who We Are</h3>
        <ContentItem>
          <InfoBox>
            <p>
              This site is operated by Goodrich Games, the publisher of Mana Source. For any question about this policy or about your information, contact us at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>What We Collect</h3>
        <ContentItem>
          <InfoBox>
            <p><strong>Your email address, if you give it to us.</strong></p>
            <p>
              When you sign up for updates, we collect the email address you enter. That is the only field on the form. We use it to send news about Mana Source development and, eventually, the Kickstarter launch. Every email we send includes an unsubscribe link, and unsubscribing removes you from the list.
            </p>
            <span className="spacer1" aria-hidden="true"></span>

            <p><strong>Basic analytics about your visit.</strong></p>
            <p>
              If optional services are enabled, we use Google Analytics to understand which pages people read and how they found us. This collects things like the pages you view, roughly where in the world you are, your approximate device and browser type, and the site or search that referred you. We use it in aggregate to decide what to write and build next. We do not use it to identify you personally.
            </p>
            <span className="spacer1" aria-hidden="true"></span>

            {isMetaPixelConfigured && (
              <>
                <p><strong>Whether an advertisement brought you here.</strong></p>
                <p>
                  If optional services are enabled, the Meta pixel tells Meta that you visited this site. We use it to find out which of our Facebook and Instagram advertisements actually bring people to Mana Source, so we do not keep paying for ones that do not. Meta receives your IP address, the page you are on, and identifiers from Meta cookies already in your browser, and may match that to a Facebook or Instagram account. Meta acts as a data controller for what it collects, which means it also uses this information for its own purposes under its own policy. This is the one service on the site that shares information with a company for advertising, and it never loads unless optional services are enabled.
                </p>
                <span className="spacer1" aria-hidden="true"></span>
              </>
            )}

            <p><strong>Push notification subscriptions, if you opt in.</strong></p>
            <p>
              On the patch notes page you can opt in to browser notifications for balance changes and announcements. If you accept, your browser creates a subscription that lets us send you those notifications, and we store it along with the topics you chose. This requires an explicit permission prompt from your browser, and you can revoke it at any time in your browser settings.
            </p>
            <span className="spacer1" aria-hidden="true"></span>

            <p><strong>What we do not collect.</strong></p>
            <p>
              We do not ask for your name, address, phone number, date of birth, or payment information anywhere on this site. There are no user accounts and no passwords. We do not collect any information from you beyond what is described above.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Services We Use</h3>
        <ContentItem>
          <InfoBox>
            <p>
              A few third-party services handle parts of this site. Each one has its own privacy policy, and your information is subject to that policy as well as this one.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              <strong>Mailchimp</strong> — stores and sends our mailing list. Your email address is held on Mailchimp&apos;s servers. See <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer">Intuit Mailchimp&apos;s privacy statement</a>.
            </p>
            <p>
              <strong>Cloudflare</strong> — protects and routes traffic to this site. Cloudflare uses the IP address already needed to deliver the site to determine the visitor&apos;s country. The site receives only a yes-or-no answer about whether prior consent is required; it does not receive or store the IP address or country for this purpose. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare&apos;s privacy policy</a>.
            </p>
            <p>
              <strong>Google Analytics</strong> — provides the site usage statistics described above. For visitors Cloudflare identifies as being in the UK, EU, EEA, or Switzerland, Google Analytics does not load unless the visitor accepts optional services. Other visitors can reject or later disable it through the Privacy Choices control in the footer. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s privacy policy</a>.
            </p>
            <p>
              <strong>YouTube</strong> — hosts the videos embedded on this site. YouTube embeds follow the same optional-services choice as Google Analytics. When they are blocked, the page displays a placeholder and sends nothing to YouTube. When they are enabled, YouTube may set cookies and receive information about your visit, whether or not you press play. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s privacy policy</a>.
            </p>
            {isMetaPixelConfigured && (
              <p>
                <strong>Meta (Facebook and Instagram)</strong> — measures whether our advertisements bring visitors to this site. The Meta pixel follows the same optional-services choice as Google Analytics: it does not load for visitors Cloudflare identifies as being in the UK, EU, EEA, or Switzerland unless they accept, and any visitor can reject or later disable it through the Privacy Choices control in the footer. See <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta&apos;s privacy policy</a>.
              </p>
            )}
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              Links to Discord, BoardGameGeek, Facebook, X, and our artists&apos; portfolios take you to sites we do not control. This policy does not apply once you leave manasourcegame.com.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Cookies and Similar Technologies</h3>
        <ContentItem>
          <InfoBox>
            <p>
              Google Analytics{isMetaPixelConfigured ? ', the Meta pixel,' : ''} and embedded YouTube videos may set cookies when optional services are enabled. Before any of them loads, the site checks your saved privacy choice in your browser&apos;s local storage. If you have not made a choice, Cloudflare uses the IP address needed to deliver the site to decide whether prior consent is required in your country. The site receives only that decision. If the country cannot be determined, the site asks for consent before loading optional services.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              {isMetaPixelConfigured
                ? 'The Meta pixel is the only advertising cookie on this site. It is never set unless optional services are enabled, and rejecting removes it.'
                : 'We do not use cookies for advertising on this site today. If that changes, we will update this policy and say so.'}
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              Visitors identified as being in the UK, EU, EEA, or Switzerland are asked to accept or reject optional services before those services load. Rejecting leaves the rest of the site available and replaces YouTube videos with privacy placeholders. You can change your choice at any time with the Privacy Choices control in the footer. Rejecting after previously accepting removes this site&apos;s Google Analytics{isMetaPixelConfigured ? ' and Meta pixel' : ''} cookies and reloads the page without {isMetaPixelConfigured ? 'Google Analytics, the Meta pixel, or YouTube' : 'Google Analytics or YouTube'}. You can also block or delete cookies in your browser settings or install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>How Long We Keep It</h3>
        <ContentItem>
          <InfoBox>
            <p>
              We keep your email address until you unsubscribe or ask us to delete it. Analytics data is retained according to Google Analytics&apos; standard retention period. Push notification subscriptions last until you revoke the permission or the subscription expires.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Your Choices and Rights</h3>
        <ContentItem>
          <InfoBox>
            <p>
              Whoever and wherever you are, you can ask us to tell you what information we hold about you, correct it, or delete it. Email <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a> and we will handle it. We will not treat you differently for asking.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              <strong>If you are in the United States.</strong> Several states, including California, give residents specific rights over their personal information — to know what is collected, to have it deleted, to correct it, and to opt out of its sale or sharing. We do not sell or share personal information, so there is nothing to opt out of, but the other rights are yours and the email address above is how to use them.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              <strong>If you are in the UK, the EU, or the EEA.</strong> You have rights of access, correction, erasure, restriction, portability, and objection under the GDPR. Our legal basis for the mailing list is your consent, given when you submit the signup form and withdrawable at any time via the unsubscribe link. Our legal basis for Google Analytics{isMetaPixelConfigured ? ', the Meta pixel,' : ''} and YouTube cookies is your consent through the optional-services choice. Because Goodrich Games and our service providers are based in the United States, your information is processed there when you enable those services.{isMetaPixelConfigured ? ' Meta decides for itself how it uses what the pixel sends, so for that data Meta is a controller in its own right and you can also exercise these rights directly with Meta.' : ''}
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Children</h3>
        <ContentItem>
          <InfoBox>
            <p>
              Mana Source is intended for players aged 13 and up, and this site is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has given us their email address, contact us and we will delete it.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Security</h3>
        <ContentItem>
          <InfoBox>
            <p>
              This site is served over HTTPS, and the mailing list is held by Mailchimp under their security practices rather than on servers we run. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. Because the only personal information we hold is an email address, the impact of any incident is limited by design.
            </p>
          </InfoBox>
        </ContentItem>
      </ContentSection>

      <ContentSection>
        <h3 className={styles.tCenter}>Changes to This Policy</h3>
        <ContentItem>
          <InfoBox>
            <p>
              We will update this policy when what we collect changes{isMetaPixelConfigured ? '' : ' — for example, if we add advertising pixels ahead of the Kickstarter launch'}. The date at the top always reflects the current version. If a change materially affects people already on the mailing list, we will say so in a newsletter rather than only changing the page.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
            <p>
              Questions about any of this? Email <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.
            </p>
            <span className="spacer1" aria-hidden="true"></span>
          </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  );
}
