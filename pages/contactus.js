import BaseTemplate from './../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss'

export default function ContactUs() {
  return (
    <BaseTemplate title="Contact Us" description="About Mana Source and Goodrich Games">
      <section>
        <div>
          <div>
            <ul>
              <li>
                <h3>Email</h3>
                <div>
                  For business inquires contact us at <a href="mailto:softwarealchemist@protonmail.com">softwarealchemist@protonmail.com</a>.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </BaseTemplate>
  )
}
