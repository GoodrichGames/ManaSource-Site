import BaseTemplate from './../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss'

export default function About() {
  return (
    <BaseTemplate title="About" date="" description="About Mana Source and Goodrich Games">
      <section>
        <div>
          <div>
            <ul>
              <li>
                <h3>About Mana Source</h3>
                <div>
                  <p>
                    Mana Source is an upcoming competitive living card game (LCG) for 1-4 players.
                    It focuses around player vs player arena-style combat to battle for control of Mana
                    Wells scattered
                    throughout the mysterious world of Kainan. It features five playable primary
                    classes,
                    one exclusively secondary class, and over 300 unique cards in the release set.
                  </p>
                  <p>Experiment, strategize, and mindgame to reduce your opponent&apos;s health to zero and
                    win!</p>
                  <br />
                  <p>Playtime: 20-60 minutes</p>
                  <p>Players: 1-4</p>
                  <p>Ages: 8+</p>
                  <br />
                  <p>
                    - Simultaneous turns for low downtime<br />
                    - Opportunity for first of its kind update system using push notifications and sticker modifiers<br />
                    - Modular class system is budget friendly<br />
                    - Easy for newcomers, depth for strategists<br />
                    - Minimal Randomness, Maximum Options<br />
                    - Thematic Magicpunk genre<br />
                  </p>
                  <br />
                  <h4><u>Game Modes</u></h4>
                  <p>Constructed - 1v1, 1v2, 2v2</p>
                  <p>Draft - 1v1</p>
                  <p>Limited - 1v1</p>
                  <p> PvE campaigns - 1-4 players</p>
                  <br />
                  <p>
                    <b>Actively seeking a publisher! Contact me at <a href="mailto:softwarealchemist@protonmail.com">softwarealchemist@protonmail.com</a>.</b>
                  </p>
                </div>
              </li>
              <li>
                <h3>About Goodrich Games</h3>
                <div>
                  <p>Paul Goodrich</p>
                  <p className={styles.mb1}><i>Principal Owner / Lead Designer</i></p>
                  <p className={styles.mb1}>
                    Web Technical Architect by day, game designer by night.
                  </p>
                  <p><u>Education</u></p>
                  <p className={styles.mb1}>
                    Paul graduated from North Carolina State University in 2013 with a Bachelor&apos;s degree in Computer Science.
                    He designed and produced 5 video games <em>(Sunken, Defector, Space Invaders remake, Asteroids remake, Estate of Hell)</em> and 1 board game <em>(Conquest)</em> as part of the program.
                  </p>
                  <p><u>Video Game experience</u></p>
                  <p className={styles.mb1}>
                    Former professional support and jungler for Team C in the MOBA Infinite Crisis, Masters
                    in Overwatch pre-OWL, and Diamond 1 in League of Legends in S3.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="aside">
            <ul>
              <li>
                <h3>Be Part of Our Community!</h3>
                <div>
                  <p>
                    If you have suggestions on balance changes or other improvements, please
                    visit the <a href="https://github.com/GoodrichGames/ManaSource-Site/issues">Mana Source
                      Github</a> and create an issue!
                  </p>
                </div>
              </li>
              <li>
                <h3>Upcoming Release Schedule</h3>
                <div>
                  <p>
                    TBA once a publisher or crowdfunding is secured.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </BaseTemplate>
  )
}
