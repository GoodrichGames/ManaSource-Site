import ContentSection from '../components/content/ContentSection/ContentSection';
import ContentItem from './../components/content/ContentSection/ContentItem';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ExportedImage from "next-image-export-optimizer";
import prefix from '../utils/prefix';

export default function ContactUs() {
  return (
    <BaseTemplate title="Contact Us" description="About Mana Source and Goodrich Games">
      <ContentSection>
        <ContentItem title='email'>
          For business inquires contact us at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me</a>.
        </ContentItem>
        <ContentItem title='discord'>
          <p>
            Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with us directly!
          </p>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  )
}
