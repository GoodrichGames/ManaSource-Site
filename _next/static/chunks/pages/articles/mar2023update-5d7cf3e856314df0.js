(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[847],{9835:function(e,a,t){"use strict";t(7294);var s=t(1163),n=t(9008),i=t.n(n),r=t(3239),o=t.n(r),l=t(5893);a.Z=function(e){var a=e.name,t=e.description,n=e.image,r=void 0===n?o().shareImage:n,c=e.isArticle,m="https://www.manasourcegame.com"+(0,s.useRouter)().pathname,d=a;return(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:d}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,l.jsx)("link",{rel:"canonical",href:m}),(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,l.jsx)("meta",{name:"application-name",content:d}),(0,l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,l.jsx)("meta",{name:"twitter:site",content:m}),(0,l.jsx)("meta",{name:"twitter:title",content:d}),(0,l.jsx)("meta",{name:"twitter:description",content:t}),(0,l.jsx)("meta",{name:"twitter:image",content:r}),(0,l.jsx)("meta",{property:"og:title",content:d}),(0,l.jsx)("meta",{property:"og:image",content:r}),(0,l.jsx)("meta",{property:"og:site_name",content:o().name}),(0,l.jsx)("meta",{property:"og:description",content:t}),(0,l.jsx)("meta",{property:"og:url",content:m}),c&&(0,l.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var s=t(1664),n=t.n(s),i=t(1163),r=(t(7294),t(3239),t(7643)),o=t.n(r),l=t(5893),c="/about",m="/news",d="/resources",h="/contactus";a.Z=function(e){var a=(0,i.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,l.jsx)("nav",{className:o().navigation,children:(0,l.jsx)("div",{className:o().navigation,children:(0,l.jsxs)("div",{className:o().navigationTop,children:[(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("h1",{children:(0,l.jsx)("a",{className:o().logo,children:"Mana Source"})})}),(0,l.jsx)("div",{className:o().navigationOverlay,children:!e.disableLinks&&(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"/"===t?o().selected:"",children:(0,l.jsx)(n(),{href:"/",children:(0,l.jsx)("a",{className:o().menu1,children:"Home"})})},"home"),(0,l.jsx)("li",{className:t===c?o().selected:"",children:(0,l.jsx)(n(),{href:c,children:(0,l.jsx)("a",{className:o().menu2,children:"About"})})},"about"),(0,l.jsx)("li",{className:t===m?o().selected:"",children:(0,l.jsx)(n(),{href:m,children:(0,l.jsx)("a",{className:o().menu3,children:"News"})})},"news"),(0,l.jsx)("li",{className:t===d?o().selected:"",children:(0,l.jsx)(n(),{href:d,children:(0,l.jsx)("a",{className:o().menu4,children:"Resources"})})},"resources"),(0,l.jsx)("li",{className:t===h?o().selected:"",children:(0,l.jsx)(n(),{href:h,children:(0,l.jsx)("a",{className:o().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5591:function(e,a,t){"use strict";var s=t(1163),n=(t(7294),t(4777)),i=t.n(n),r=t(5858),o=t(5893);a.Z=function(e){var a=e.children,t=e.useImage,n=(0,s.useRouter)(),l=i().find((function(e){return e.link===n.pathname}));return(0,o.jsx)(r.Z,{title:l.title,image:t&&l.image,isArticle:!0,children:(0,o.jsx)("section",{children:a})})}},5858:function(e,a,t){"use strict";var s=t(4623),n=t(9835),i=t(5821),r=t(1459),o=t.n(r),l=t(1058),c=t(2279),m=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,d=e.description,h=e.image,u=e.isArticle;return(0,m.jsxs)("div",{className:o().backgroundWrap,children:[(0,m.jsx)(n.Z,{name:t,description:d,image:h,isArticle:u}),(0,m.jsx)(i.Z,{}),(0,m.jsx)("main",{className:o().main,children:(0,m.jsx)("div",{className:o().bodyWrapper,children:(0,m.jsxs)("div",{className:o().bodyContent,children:[u&&(0,m.jsx)(s.Z,{title:t,date:r,description:d,image:h}),a]})})}),(0,m.jsx)("footer",{className:o().footer,children:(0,m.jsxs)("div",{className:o().footerContent,children:[(0,m.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."}),(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{src:c.Z+"/images/GG-Logo-dark-bg.webp",alt:"Goodrich Games Logo",width:"100%",height:"5%",layout:"responsive",objectFit:"contain",priority:!0})]})})]})}},7580:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var s=t(4711),n=t(453),i=t.n(n),r=t(7294),o=t(5893),l=function(e){return/[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)},c=function(e){var a=e.ctaText,t=e.status,s=(e.message,e.onValidated),n=(0,r.useState)(""),c=n[0],m=n[1],d=(0,r.useRef)(),h=(0,r.useRef)();return(0,o.jsxs)("div",{className:i().emailSignup,children:[(0,o.jsx)("h2",{children:"Sign up for updates"}),(0,o.jsxs)("div",{className:i().emailFieldGroup,children:[(0,o.jsxs)("label",{htmlFor:"mce-EMAIL",children:["Email Address  ",(0,o.jsx)("span",{className:i().asterisk,children:"*"})]}),(0,o.jsx)("input",{type:"email",name:"EMAIL",className:i().required+" "+i().email,value:c,onChange:function(e){m(e.target.value),e.target.value&&!l(e.target.value)||h.current.classList.add(i().hidden)},onBlur:function(e){e.target.value&&!l(e.target.value)&&h.current.classList.remove(i().hidden)}})]}),(0,o.jsx)("div",{ref:h,className:i().errorBlock+" "+i().hidden,children:"You have entered an invalid email address.  Please check your entry and try again."}),"error"===t&&(0,o.jsx)("div",{ref:d,className:i().errorBlock+" "+i().hidden,children:"An error occurred in submission, please try again later."}),(0,o.jsx)("div",{className:i().notName,"aria-hidden":"true",children:(0,o.jsx)("input",{type:"text",name:"b_a2c1595175259c6cf93c9b708_70002bf500",tabIndex:"-1",defaultValue:""})}),(0,o.jsx)("div",{className:i().optionalParent,children:(0,o.jsx)("div",{className:i().foot,children:(0,o.jsx)("input",{type:"submit",value:a,name:"subscribe",className:i().button,onClick:function(){l(c)&&s({EMAIL:c})}})})})]})},m=function(e){return(0,o.jsx)(s.Z,{url:"https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500",render:function(a){var t=a.subscribe,s=a.status,n=a.message;return(0,o.jsxs)("div",{children:["success"!==s&&(0,o.jsx)(c,{ctaText:e.ctaText,status:s,message:n,onValidated:function(e){return t(e)}}),"success"===s&&(0,o.jsx)("div",{className:i().subscribedMsg,children:"Thank you!  We'll be in touch soon!"})]})}})}},4623:function(e,a,t){"use strict";var s=t(7156),n=t.n(s),i=t(1058),r=t(2279),o=t(5893);a.Z=function(e){var a=e.title,t=e.description,s=e.image;return(0,o.jsxs)("header",{className:s?n().imageHeader:n().header,children:[s&&(0,o.jsx)(i.Z,{src:r.Z+s,alt:a,layout:"fill"}),(0,o.jsx)("h1",{className:n().title,children:a}),(0,o.jsx)("p",{className:n().description,children:t})]})}},4777:function(e){e.exports=[{title:"EOY 2023 Update",description:"",image:"/images/articles/nextImageExportOptimizer/purpleflowers-opt-1920.WEBP",link:"/articles/eoy2023update",categories:["all","devnotes","announcements"],date:"Dec 29, 2023"},{title:"July / August 2023 Update",description:"",image:"/images/articles/road-1072823_1920.webp",link:"/articles/aug2023update",categories:["all","devnotes","announcements"],date:"Sept 12, 2023"},{title:"May / June 2023 Update",description:"",image:"/images/articles/sunset-3325080_1920.webp",link:"/articles/june2023update",categories:["all","devnotes","announcements"],date:"June 27, 2023"},{title:"March / April 2023 Update",description:"",image:"/images/articles/planet-1702788_1280.webp",link:"/articles/mar2023update",categories:["all","devnotes","announcements"],date:"Mar 28, 2023"},{title:"February 2023 Update",description:"",image:"/images/articles/painting-3995999_1280.webp",link:"/articles/feb2023update",categories:["all","devnotes","announcements"],date:"Feb 13, 2023"},{title:"January 2023 Update",description:"Start of 2023 Newsletter",image:"/images/timbatia-small.webp",imageVAlign:"vAlignTop",link:"/articles/jan2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"New Teaser Trailer!",description:"Mana Source - Teaser Trailer",image:"/images/cave.webp",link:"/articles/firstpromo",categories:["all","devnotes","announcements"],date:"Nov 29, 2022"},{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.webp",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.webp",imageVAlign:"vAlignTop",link:"/articles/releasenotes-5-24-22",categories:[],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an adventure board game focuses around arena-style combat you&apos;ll need to survive in the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},1618:function(e,a,t){"use strict";t.r(a);var s=t(7580),n=t(5591),i=t(5893);a.default=function(){return(0,i.jsx)(n.Z,{useImage:!0,children:(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"March / April Update"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"It's been a busy March, hope everyone is well!  Importantly, I ask that you share the teaser trailer with your friends who might like the game and ask them to sign up for the newsletter.  That is the best thing you can do to help this game come to market.  Appreciate it!  Onto the update!"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"This time I'm combining the March and April updates as there is more than I thought to re-work.  The good news is I have streamlined my card prototyping workflow so future balancing and card creation will be much faster than before.  I also had some broader playtesting this month I wasn't planning on, which was well received, but did require some additional balancing to smooth out the difficulty curve between scenarios.  I don't have any plans for a easier or harder difficulty tiers at the moment but if there's interest for that it's something I can look into."}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"PvE scenarios are currently averaging about 2 hours of playtime each, which I feel is about optimal for a session.  As players learn the game this may drop to closer to 90 minutes.  So if you only ever played the PvE campaign with the current content, I would expect about 20-30 hours of playtime.  More if you play PvP or the replayable PvE modes."}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Last month included:",(0,i.jsx)("br",{}),"- First pass on rules, cards, components rework.",(0,i.jsx)("br",{}),"- Prototypes on campaign management tooling.",(0,i.jsx)("br",{}),"- Scenario 6 design.  This is less than my planned 2 due to higher per scenario word counts but it's been worth it to deliver high quality, engaging content.",(0,i.jsx)("br",{}),"- Playtesting for Scenario 3, 6, new components, and NPC characters.  Early feedback on scenario 6 was very good and possibly the best writing I've done so far.",(0,i.jsx)("br",{}),"- Scenarios 1, 2, 3, 4, 5, 6, 7, 18 out of 21~ are playtest complete and fairly stable."]}),(0,i.jsx)("br",{}),(0,i.jsx)("h4",{children:"April"}),(0,i.jsx)("b",{children:"Goals for this month"}),(0,i.jsx)("br",{}),"- Schedule additional publisher meeting(s).  This is my top priority for this month.  If I wait too long, I may potentially write too much that may have to later majorly change.",(0,i.jsx)("br",{}),"- Continued core system changes, rulebook updates, campaign management tools.  Streamline out-of-the-box player experience.",(0,i.jsx)("br",{}),"- Complete development for Scenario 8.  My internal goal is still to complete 2 but realistically I think it will be one again this month, maybe 1.5.",(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"I've included another Design Corner section below if you're interested.  Thank you for your support!"}),(0,i.jsx)("br",{}),"Until next time, ",(0,i.jsx)("br",{}),"Paul Goodrich ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("h4",{children:"Design Corner"}),"This section is a behind the scenes look at some aspect of the design or release process that is on my mind.  Hopefully this helps a future designer someday.  Today's topic is Scenario design.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"I have some rules for myself when it comes to scenarios.  Many games are wildly successful without following any of these rules, but I'm setting out to create something different.  For example, Gloomhaven focuses more on mechanics than story content.  Don't get me wrong, I love Gloomhaven, it's one of my favorite board games at over 500 hours played.  But I would describe the story more as light theming and some interesting decision making rather than compelling.  Out of all the characters in Gloomhaven, I remember our player characters, Hale, and Jekserra.  The character development of the NPCs was very limited.  The gameplay carried the game.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"I want Mana Source to not just have fun gameplay, but create engaging characters, places, and mechanics you'll be thinking about for years to come.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Player actions and dialog must:",(0,i.jsx)("br",{}),"- Allow for a variety of backgrounds someone has created for their character.",(0,i.jsx)("br",{}),"- Allow for at least 2 significant choices, as long as those choices wouldn't completely derail the campaign.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Characters must:",(0,i.jsx)("br",{}),"- Grow and change over the course of the campaign.",(0,i.jsx)("br",{}),"- Interact with each other, not just with the player.",(0,i.jsx)("br",{}),"- Comment, interject, make jokes, tease.  They should feel like real people with flaws, not props or means to an end.",(0,i.jsx)("br",{}),"- Allow the player characters agency.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Scenarios must be:",(0,i.jsx)("br",{}),"- Unique.",(0,i.jsx)("br",{}),"- Progress the story.",(0,i.jsx)("br",{}),"- Feature different mechanics.",(0,i.jsx)("br",{}),"- Highlight the strengths of different party members.",(0,i.jsx)("br",{}),"- Feature a reason to replay the scenario and present some kind of optional additional challenge.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Scenario 6 ended up at around 7000 words of total text.  So the text alone ends up about 20-24 hours for me to write spread across 2-4 hour blocks.  The remaining mechanic design, balancing, playtesting, etc takes roughly 15 hours additional for a first draft.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Feel free to email us directly at ",(0,i.jsx)("a",{href:"mailto:goodrichgames@pm.me",children:"goodrichgames@pm.me."}),(0,i.jsxs)("p",{children:["Join the ",(0,i.jsx)("a",{href:"https://discord.com/invite/drQDa7MQ3e",children:"official Discord"})," to chat with the community or ask questions.",(0,i.jsx)("br",{}),"Follow the game on ",(0,i.jsx)("a",{href:"https://www.facebook.com/Mana-Source-102398542746103%C2%A0",children:"Facebook"}),". ",(0,i.jsx)("br",{})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("em",{children:"To receive this update sooner along with some additional insider details, sign up for the email newsletter below!"})}),(0,i.jsx)(s.Z,{ctaText:"Start your adventure!"})]})]})})})})}},2279:function(e,a){"use strict";a.Z=""},8048:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/mar2023update",function(){return t(1618)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",flex:"BaseTemplate_flex__pmXR4",mR10:"BaseTemplate_mR10__KFLm7",mL10:"BaseTemplate_mL10__I7h__",mL20:"BaseTemplate_mL20__OqsQe",mB10:"BaseTemplate_mB10__nzJQ2",vAlignTop:"BaseTemplate_vAlignTop__J5yfr",thirtyW:"BaseTemplate_thirtyW__xv_gG",thirdW:"BaseTemplate_thirdW__a_avi",fourtyW:"BaseTemplate_fourtyW__L8FZX",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",fullW:"BaseTemplate_fullW__nMPDt",minHeight250:"BaseTemplate_minHeight250__PoT8i",miniGrid:"BaseTemplate_miniGrid__MY_E_",center:"BaseTemplate_center__1FEac",tCenter:"BaseTemplate_tCenter__tHJSf",inline:"BaseTemplate_inline__4xc5V",fontArkhip:"BaseTemplate_fontArkhip__Catmv",fontPhilosopher:"BaseTemplate_fontPhilosopher__hkuIa",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",medWPadding:"BaseTemplate_medWPadding__ISurX",xsWPadding:"BaseTemplate_xsWPadding__WJ5bk",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},453:function(e){e.exports={emailSignup:"EmailSignup_emailSignup__vLpln",email:"EmailSignup_email__YI2o6",emailFieldGroup:"EmailSignup_emailFieldGroup__GXoXM",asterisk:"EmailSignup_asterisk__OgPws",response:"EmailSignup_response__ZzUq9",button:"EmailSignup_button__ZED7e",notName:"EmailSignup_notName___Ck5D",errorBlock:"EmailSignup_errorBlock__Meniz",subscribedMsg:"EmailSignup_subscribedMsg__mPZQi",hidden:"EmailSignup_hidden__lgNDg"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,711,774,888,179],(function(){return a=8048,e(e.s=a);var a}));var a=e.O();_N_E=a}]);