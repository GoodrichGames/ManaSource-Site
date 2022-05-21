import ContentSection from '../components/content/ContentSection/ContentSection';
import ContentItem from './../components/content/ContentSection/ContentItem';
import BaseTemplate from './../components/Templates/BaseTemplate';

export default function ContactUs() {
  return (
    <BaseTemplate title="Contact Us" description="About Mana Source and Goodrich Games">
      <ContentSection>
        <ContentItem title='email'>
          For business inquires contact us at <a href="mailto:softwarealchemist@protonmail.com">softwarealchemist@protonmail.com</a>.
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  )
}
