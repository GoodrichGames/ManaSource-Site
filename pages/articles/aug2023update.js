import EmailSignup from './../../components/content/EmailSignup/EmailSignup';
import ArticleTemplate from './../../components/Templates/ArticleTemplate';
import ExportedImage from 'next-image-export-optimizer';
import prefix from '../../utils/prefix';
import ContentSection from '../../components/content/ContentSection/ContentSection';
import ContentItem from './../../components/content/ContentSection/ContentItem';
import Container from './../../components/content/Container/Container';
import styles from '../../components/Templates/BaseTemplate.module.scss'

const Article = () => {
  return <ArticleTemplate useImage={true}>
    <div>
      <ul>
        <li>
          <h3>July / August Update</h3>
          <div>
            Happy summer everyone!<br />
            <br />
            I had the pleasure of meeting several of you last weekend at the first public playtest and demo of Mana Source at Dragoncon 2023 in Atlanta!  First off, THANK YOU so much for your time and valuable feedback!
            <br /><br />
            <ExportedImage src={prefix + '/images/playtest1.webp'} alt='Playtester playing Mana Source in person' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
            <ExportedImage src={prefix + '/images/playtest2.webp'} alt='Group of playtesters playing Mana Source in person' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
            <br />
            Overall I received very positive feedback, especially from people who have not been able to get into this type of game before.  That&apos;s exciting for me as a designer as I want this game to be accessible and hit the table more often than many of the other campaign-oriented board games out there.  We consistently taught players how to play in 10 minutes or less.  One of the things I love about this system is that your playstyle can be simple or you can try pull off complex combos as you seek to complete a scenario bonus or get an edge in PvP.
            <br /><br />
            At our next convention outing, we&apos;ll run multiple games simultaneously and streamline the experience as unfortunately this time we couldn&apos;t get to everyone who wanted to play.  That said, I will set up a few Tabletop Simulator games in the next week for anyone who would like to play.  The best place to do this is on our official Discord.
            <br />
            If you have not yet, it would help us out quite a bit if you can follow and wishlist us on Board Game Geek.
            <br />
            <h5>Last 2 months of work included</h5>
            - Minor balance pass on all skills.<br />
            - Art and fulfilment quotes.<br />
            - New primary bonus for Doctor and Warden.  These are playtesting better than their old bonuses so far.<br />
            - Scenario 9 and 10 design.<br />
            - New equipment card designs (20~).<br />
            - Convention prep.<br />
            - Playtesting for Scenario 1, 5, 7, 8, 9.<br />
            - Scenarios 1 - 10, 18 are designed which officially puts us at the halfway point!  A few require some minor redesigns (enemy difficulty, length tweaks, editing).<br />
            - In universe writing such as below.<br />
            <br />
            <ContentSection>
              <ContentItem>
                <ExportedImage src={prefix + '/images/hummingbear-small.webp'} alt='Hummingbear creature' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
                <Container classes={styles.seventyW + " " + styles.tCenter}><em>The Hummingbear - Nele Diel</em>
                  
                </Container>
                <br />
                The hummingbear (Vomvos Arktose) is an omnivorous featherin endemic to the northern rockpool region.  While primarily found among the Enovet mountain range in cliffside dens, they have been reported as far south as the Twisted Highlands and as east as Imeranea in winter months.
                <br /><br />
                Due to the similarity of their facial structure to other members of the Arktose family, hummingbears were once thought to be members of the hairin classification.  This is now largely accepted as incorrect, as instead their body consists of thick layers of contoured iridescent feathers.  The plumage is heavy and varied, its visible color ranging from leafy greens to obsidian blacks.  Their most distinctive feature is an air-sac that sits just below the throat.  It often appears as a light ruby or white color, though this can vary based on time of year and even mood.
                <br /><br />
                The hummingbear name comes from the sound its wings make - a distinctive low hum at high frequency.  At publish time, the aero-analysis of its flight ability is still inconclusive.  The weight-to-wingspan ratio is far higher than any other known featherin to-date.
                <br /><br />
                Its diet considers primarily of small, cliff-dwelling creatures such as dregs and rakes, though it is also infamous for taking on prey many times its size through the use of its powerful vocal sac and claws.  The vocal sac can rapidly expand to draw in, pressurize, and release air with such force that it causes an audible boom.  The force and volume of this vocal assault often immobilizes any creature in its path.  Once the scream is released, the Hummingbear crouches and leaps from its staunch back legs into the air.  Even if the prey manages to escape, the hummingbear&apos;s long snout (recorded up to 56cm in length!) can retrieve the would-be escapees from tight crevices and burrowed dens.  In periods of low prey availability or mating season, the hummingbear will often turn to a diet of tulip tree blossoms and subterranean mushroom stems.
                <br /><br />
                Hummingbear sightings in the modern era are rare.  Their affinity for locations with natural camouflage such as moss and hanging ivy typically places them far away from human-occupied areas.  The availability of these areas shrink by the day.  Even more concerning is the rise of lawlessness since the Kydarian occupation of Baile Tigherna.  The hummingbear&apos;s beautiful plumage and impressive wings are increasingly sought after by poachers for use in fashion and suspected military applications.  Thus, we humbly ask for your valuable support in preserving this elegant and magnificent creature.  With your help, we can keep them humming for a long time to come.
                <br /><br />
                Tax-deductible* donations can be made to the <strong><span style={{color:'green'}}>Save</span> the <span style={{color:'burntorange'}}>Hummingbears</span></strong> foundation.
                <br /><br />
                article by Saava Merryfield<br />
                <em>Baile Tigherna Zoological Institute<br /></em>
                <br />
                <span style={{fontSize:'14px'}}><em>* While tax-deductible by law, the Baile Tigherna Zoological Institute cannot guarantee that any such deductions will be honored by the occupying Kydarian government.  The Zoological Institute recommends compensat...consulting a Kydarian tax professional before deducting a donation.</em></span>
                <br />
              </ContentItem>
            </ContentSection>
            <h4>September & October Goals</h4>
            - Complete development for Scenario 11, 12.  Small redesigns for scenarios 1, 4, 6.  Scenario 13 is a stretch goal but that will be a very important and in-depth scenario that I expect to take longer to design.
            <br />


            - Additional equipment development.<br />
            - Balance changes and blind playtesting contacts.<br />
            - Local playtesting at my FLGS - <a href="https://www.atomicempire.com/">https://www.atomicempire.com/</a>.<br />
            - Obtain art quotes from additional design firms.<br />
            <br />
            I have a bit of a longer Design Corner below this time.  This one is a bit of insight into why I chose an easier introductory scenario and skills for first time players compared to the average scenario.
            <br /><br />
            Thank you for your support!<br />
            <br />
            Until next time,<br />
            Paul Goodrich<br />
            <h4>Design Corner</h4>
            This section is a behind the scenes look at some aspect of the design or release process that is on my mind.  Hopefully this helps a future designer someday.  Today&apos;s topic is designing for an audience.
            <br /><br />
            First, let me state the obvious - we all have different preferences and past experiences when it comes to board games.  That&apos;s readily apparent by examining the most popular board game of the past 100 years, one I can almost guarantee if you&apos;re reading this that you have played at some point. Monopoly has sold over 275 million copies in multiple versions worldwide.  It must be pretty well loved right?
            <br /><br />
            <ExportedImage src={prefix + '/images/articles/Monopoly.webp'} alt='Board Game Geek profile of Monopoly' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
            <em style={{fontSize:'12px'}}>Image credit: <a href="https://boardgamegeek.com/boardgame/1406/monopoly">https://boardgamegeek.com/boardgame/1406/monopoly</a></em><br />
            <br />
            Whoops.  Well, I guess not.  At least, you wouldn&apos;t know it by only looking at Board Game Geek, where it rates at a measly 4.4/10.  Why is there such a disconnect?  I can think of a few possible reasons:
            <br />
            - Little agency from being very dice dependent.<br />
            - Long, longer when you&apos;re losing.<br />
            - Low complexity.<br />
            - Played too often.<br />
            - Don&apos;t care for the theme.<br />
            - Perception as a &quot;must have&quot; starter game.<br />
            - The average board game geek user has different tastes than the average buyer.<br />
            <br />
            That last one sticks out to me - there&apos;s a whole untapped audience out there of new players to share board games with!<br />
            <br />
            Do I like Monopoly?  No, but I did play a ton of it as a child.  All of these and more are reasonable criticisms and flaws of the game, but I think it&apos;s far more interesting to look at what has given it such staying power when designing your own game.  There&apos;s probably many reasons, including popularity because it&apos;s popular, but there&apos;s a few in particular that stand that I think we can learn from.
            <br />
            - People like getting resources based on their actions and spending resources.<br />
            - Replayability (different sets of lots get purchased, chance/community chest cards)<br />
            - Personalized player (car, thimble, hat, etc).<br />
            - Visual appeal.<br />
            - Themed.<br />
            - Fairly easy to learn.<br />
            <br />
            Let&apos;s see if there are any overlaps in positives with the current number 1 game on Board Game Geek - Brass: Birmingham.
            <ExportedImage src={prefix + '/images/articles/Brass-Bir.webp'} alt='Board Game Geek profile of Brass Birmingham' width="100%" height="50%" layout="responsive" objectFit="contain" priority={true} />
            <em style={{fontSize:'12px'}}>Image credit: <a href="https://boardgamegeek.com/boardgame/224517/brass-birmingham">https://boardgamegeek.com/boardgame/224517/brass-birmingham</a></em><br />
            <br />
            - People like getting resources based on their actions and spending resources.<br />
            - Replayability (different cards, strategies, etc).<br />
            - Personalized player (different character icons)<br />
            - Themed.<br />
            - Visual appeal.<br />
            <br />
            Interesting, a lot of shared attributes.  Additionally, Brass: Birmingham certainly has more agency, is more unique, has shorter playtime, and is more novel than Monopoly.  All attributes that contribute to a much higher score that it enjoys on Board Game Geek.
            <br /><br />
            Now that we&apos;ve briefly looked at both.  I&apos;m going ask a controversial and seemingly obvious question:<br />
            <br />
            - Is Brass: Birmingham a better game than Monopoly?<br />
            <br />
            Here&apos;s my opinion.  I love the theme.  I love games with a high amount of decision making and strategy.  By most accounts it&apos;s right up my alley.  But ultimately I have no idea.  <strong>I haven&apos;t played it.</strong>
            <br /><br />
            Why?<br />
            - None of my friends own it.<br />
            - I don&apos;t own it because I don&apos;t know if it will ever make it to the table on game days.  The complexity is too high for many people and some would find the theme boring.
            <br /><br />
            Is this a bad thing?<br />
            - No, I believe there is room for games of all differing complexities and themes.  Just know that&apos;s it&apos;s a decision that will impact how your game performs in sales.  In the end, you have to decide if it&apos;s worth the tradeoff in complexity or theme for broader audience.
            <br /><br />
            Thankfully, I haven&apos;t really had to choose.  I have done my best to make Mana Source a game that will appeal to both groups - new players and seasoned board game veterans.  This is admittedly more difficult than picking one of those groups to appeal to, but worth it to me to make sure everyone at the table is having fun.  I believe the best games with staying power are easy to learn and hard to master.  We&apos;ll see if it pays off in the end.
            <br /><br />
            I want to leave you with two suggestions if you are getting into game design:<br />
            <br />
            1. Determine your end goal in making a game.<br />
            - Do you want to sell more copies or make *the* game you want to play?<br />
            <br />
            2. Regardless of your goal, make a game you love to play.  You&apos;re going to be doing that a lot, over and over and over again.

            <br />
            <br />
            Feel free to email us directly at <a href="mailto:goodrichgames@pm.me">goodrichgames@pm.me.</a>

            <p>
              Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> to chat with the community or ask questions.<br />
              Follow the game on <a href="https://boardgamegeek.com/boardgame/391828/mana-source">Board Game Geek</a> and <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a> <br />
            </p>
            <br />
            <p><em>
              To receive this update sooner along with some additional insider details, sign up for the email newsletter below!
            </em></p>
            <EmailSignup ctaText="Start your adventure!" />
          </div>
        </li>
      </ul>
    </div>
  </ArticleTemplate >
}

export default Article


