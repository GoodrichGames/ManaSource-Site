(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{9835:function(e,a,t){"use strict";t(7294);var i=t(1163),s=t(9008),n=t.n(s),r=t(3239),o=t.n(r),l=t(5893);a.Z=function(e){var a=e.name,t=e.description,s=e.image,r=void 0===s?o().shareImage:s,c=e.isArticle,d="https://www.manasourcegame.com"+(0,i.useRouter)().pathname,m=a;return(0,l.jsxs)(n(),{children:[(0,l.jsx)("title",{children:m}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,l.jsx)("link",{rel:"canonical",href:d}),(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,l.jsx)("meta",{name:"application-name",content:m}),(0,l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,l.jsx)("meta",{name:"twitter:site",content:d}),(0,l.jsx)("meta",{name:"twitter:title",content:m}),(0,l.jsx)("meta",{name:"twitter:description",content:t}),(0,l.jsx)("meta",{name:"twitter:image",content:r}),(0,l.jsx)("meta",{property:"og:title",content:m}),(0,l.jsx)("meta",{property:"og:image",content:r}),(0,l.jsx)("meta",{property:"og:site_name",content:o().name}),(0,l.jsx)("meta",{property:"og:description",content:t}),(0,l.jsx)("meta",{property:"og:url",content:d}),c&&(0,l.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var i=t(1664),s=t.n(i),n=t(1163),r=(t(7294),t(3239),t(7643)),o=t.n(r),l=t(5893),c="/about",d="/news",m="/resources",u="/contactus";a.Z=function(e){var a=(0,n.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,l.jsx)("nav",{className:o().navigation,children:(0,l.jsx)("div",{className:o().navigation,children:(0,l.jsxs)("div",{className:o().navigationTop,children:[(0,l.jsx)(s(),{href:"/",children:(0,l.jsx)("h1",{children:(0,l.jsx)("a",{className:o().logo,children:"Mana Source"})})}),(0,l.jsx)("div",{className:o().navigationOverlay,children:!e.disableLinks&&(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"/"===t?o().selected:"",children:(0,l.jsx)(s(),{href:"/",children:(0,l.jsx)("a",{className:o().menu1,children:"Home"})})},"home"),(0,l.jsx)("li",{className:t===c?o().selected:"",children:(0,l.jsx)(s(),{href:c,children:(0,l.jsx)("a",{className:o().menu2,children:"About"})})},"about"),(0,l.jsx)("li",{className:t===d?o().selected:"",children:(0,l.jsx)(s(),{href:d,children:(0,l.jsx)("a",{className:o().menu3,children:"News"})})},"news"),(0,l.jsx)("li",{className:t===m?o().selected:"",children:(0,l.jsx)(s(),{href:m,children:(0,l.jsx)("a",{className:o().menu4,children:"Resources"})})},"resources"),(0,l.jsx)("li",{className:t===u?o().selected:"",children:(0,l.jsx)(s(),{href:u,children:(0,l.jsx)("a",{className:o().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5591:function(e,a,t){"use strict";var i=t(1163),s=(t(7294),t(4777)),n=t.n(s),r=t(5858),o=t(5893);a.Z=function(e){var a=e.children,t=e.useImage,s=(0,i.useRouter)(),l=n().find((function(e){return e.link===s.pathname}));return(0,o.jsx)(r.Z,{title:l.title,image:t&&l.image,isArticle:!0,children:(0,o.jsx)("section",{children:a})})}},5858:function(e,a,t){"use strict";var i=t(4623),s=t(9835),n=t(5821),r=t(1459),o=t.n(r),l=t(1058),c=t(2279),d=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,m=e.description,u=e.image,h=e.isArticle;return(0,d.jsxs)("div",{className:o().backgroundWrap,children:[(0,d.jsx)(s.Z,{name:t,description:m,image:u,isArticle:h}),(0,d.jsx)(n.Z,{}),(0,d.jsx)("main",{className:o().main,children:(0,d.jsx)("div",{className:o().bodyWrapper,children:(0,d.jsxs)("div",{className:o().bodyContent,children:[h&&(0,d.jsx)(i.Z,{title:t,date:r,description:m,image:u}),a]})})}),(0,d.jsx)("footer",{className:o().footer,children:(0,d.jsxs)("div",{className:o().footerContent,children:[(0,d.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."}),(0,d.jsx)("br",{}),(0,d.jsx)(l.Z,{src:c.Z+"/images/GG-Logo-dark-bg.webp",alt:"Goodrich Games Logo",width:"100%",height:"5%",layout:"responsive",objectFit:"contain",priority:!0})]})})]})}},7580:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var i=t(4711),s=t(453),n=t.n(s),r=t(7294),o=t(5893),l=function(e){return/[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)},c=function(e){var a=e.ctaText,t=e.status,i=(e.message,e.onValidated),s=(0,r.useState)(""),c=s[0],d=s[1],m=(0,r.useRef)(),u=(0,r.useRef)();return(0,o.jsxs)("div",{className:n().emailSignup,children:[(0,o.jsx)("h2",{children:"Sign up for updates"}),(0,o.jsxs)("div",{className:n().emailFieldGroup,children:[(0,o.jsxs)("label",{htmlFor:"mce-EMAIL",children:["Email Address  ",(0,o.jsx)("span",{className:n().asterisk,children:"*"})]}),(0,o.jsx)("input",{type:"email",name:"EMAIL",className:n().required+" "+n().email,value:c,onChange:function(e){d(e.target.value),e.target.value&&!l(e.target.value)||u.current.classList.add(n().hidden)},onBlur:function(e){e.target.value&&!l(e.target.value)&&u.current.classList.remove(n().hidden)}})]}),(0,o.jsx)("div",{ref:u,className:n().errorBlock+" "+n().hidden,children:"You have entered an invalid email address.  Please check your entry and try again."}),"error"===t&&(0,o.jsx)("div",{ref:m,className:n().errorBlock+" "+n().hidden,children:"An error occurred in submission, please try again later."}),(0,o.jsx)("div",{className:n().notName,"aria-hidden":"true",children:(0,o.jsx)("input",{type:"text",name:"b_a2c1595175259c6cf93c9b708_70002bf500",tabIndex:"-1",defaultValue:""})}),(0,o.jsx)("div",{className:n().optionalParent,children:(0,o.jsx)("div",{className:n().foot,children:(0,o.jsx)("input",{type:"submit",value:a,name:"subscribe",className:n().button,onClick:function(){l(c)&&i({EMAIL:c})}})})})]})},d=function(e){return(0,o.jsx)(i.Z,{url:"https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500",render:function(a){var t=a.subscribe,i=a.status,s=a.message;return(0,o.jsxs)("div",{children:["success"!==i&&(0,o.jsx)(c,{ctaText:e.ctaText,status:i,message:s,onValidated:function(e){return t(e)}}),"success"===i&&(0,o.jsx)("div",{className:n().subscribedMsg,children:"Thank you!  We'll be in touch soon!"})]})}})}},4623:function(e,a,t){"use strict";var i=t(7156),s=t.n(i),n=t(1058),r=t(2279),o=t(5893);a.Z=function(e){var a=e.title,t=e.description,i=e.image;return(0,o.jsxs)("header",{className:i?s().imageHeader:s().header,children:[i&&(0,o.jsx)(n.Z,{src:r.Z+i,alt:a,layout:"fill"}),(0,o.jsx)("h1",{className:s().title,children:a}),(0,o.jsx)("p",{className:s().description,children:t})]})}},4777:function(e){e.exports=[{title:"EOY 2023 Update",description:"",image:"/images/articles/nextImageExportOptimizer/purpleflowers-opt-1920.WEBP",link:"/articles/eoy2023update",categories:["all","devnotes","announcements"],date:"Dec 29, 2023"},{title:"July / August 2023 Update",description:"",image:"/images/articles/road-1072823_1920.webp",link:"/articles/aug2023update",categories:["all","devnotes","announcements"],date:"Sept 12, 2023"},{title:"May / June 2023 Update",description:"",image:"/images/articles/sunset-3325080_1920.webp",link:"/articles/june2023update",categories:["all","devnotes","announcements"],date:"June 27, 2023"},{title:"March / April 2023 Update",description:"",image:"/images/articles/planet-1702788_1280.webp",link:"/articles/mar2023update",categories:["all","devnotes","announcements"],date:"Mar 28, 2023"},{title:"February 2023 Update",description:"",image:"/images/articles/painting-3995999_1280.webp",link:"/articles/feb2023update",categories:["all","devnotes","announcements"],date:"Feb 13, 2023"},{title:"January 2023 Update",description:"Start of 2023 Newsletter",image:"/images/timbatia-small.webp",imageVAlign:"vAlignTop",link:"/articles/jan2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"New Teaser Trailer!",description:"Mana Source - Teaser Trailer",image:"/images/cave.webp",link:"/articles/firstpromo",categories:["all","devnotes","announcements"],date:"Nov 29, 2022"},{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.webp",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.webp",imageVAlign:"vAlignTop",link:"/articles/releasenotes-5-24-22",categories:[],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an adventure board game focuses around arena-style combat you&apos;ll need to survive in the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},1066:function(e,a,t){"use strict";t.r(a);var i=t(7580),s=t(5591),n=t(1058),r=t(2279),o=t(5893);a.default=function(){return(0,o.jsx)(s.Z,{useImage:!0,children:(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:"May / June Update"}),(0,o.jsxs)("div",{children:["Lot of good work came from this two month period but I also made a major mistake when it came to the time estimate of Scenario 8.  It's a good scenario now that it's complete, but it took much longer to put together than I originally planned for.  I'll talk about further it in the design corner below if you're interested.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("h4",{children:"On Publishing"}),"I am leaning heavily toward a Kickstarter at this point in time rather than finding a publisher.  The primary reason is to retain creative control over the campaign.  I've been working on this now for over 6 years and it would be difficult to turn that over to someone else.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"This does mean a few things, alpha visual design becomes more important than it has been previously and there is more work for me personally to decide between a wide range of product choices.  The bright side is the game may release sooner than through a publisher and with more content included in the base game.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Last 2 months included:",(0,o.jsx)("br",{}),"- New Action Card and card back designs, game board design (3 iterations). - Project timeline and task tracking via Jira.  Aiming for a Summer 2024 Kickstarter.",(0,o.jsx)("br",{}),"- NPC deck rework, Illusionist primary rework, round steps rework.",(0,o.jsx)("br",{}),"- Rulebook updates (ongoing).",(0,o.jsx)("br",{}),"- You can now follow us on Board Game Geek !",(0,o.jsx)("br",{}),"- Scenario 8, 9 design.  Outlining the rest of the story.",(0,o.jsx)("br",{}),"- Playtesting for Scenario 4, 5, 8, new components.",(0,o.jsx)("br",{}),"- Scenarios 1, 2, 3, 4, 5, 6, 7, 8, 18 out of 21~ are playtest complete and fairly stable.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Preview of the new Action Card design (not final).",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(n.Z,{src:r.Z+"/images/cards/W-Focused-Shot.webp",alt:"Focused Shot - a Warden skill card",width:"100%",height:"50%",layout:"responsive",objectFit:"contain",priority:!0}),(0,o.jsx)("br",{}),"These are the cards that will make up your hand.  Focused Shot is a 2 Mana attack card with a recharge of 3.",(0,o.jsx)("br",{}),"While it deals above average damage, there's a high risk if the opponent is not Stunned or otherwise occupied.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"New round reference card design.  Featuring art by the talented Nele Diel of course.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(n.Z,{src:r.Z+"/images/cards/Round-Reference-Card.webp",alt:"Round reference steps",width:"100%",height:"50%",layout:"responsive",objectFit:"contain",priority:!0}),(0,o.jsx)("br",{}),(0,o.jsx)("h4",{children:"July / August Goals"}),"- Complete development for Scenario 9, 10, 11.",(0,o.jsx)("br",{}),"- Obtain component quotes from manufacturers.  My preferred goal is to offer different entry price points with some creative discounts through digital experiences.",(0,o.jsx)("br",{}),"- Obtain art quotes from design firms.",(0,o.jsx)("br",{}),"- Streamline out-of-the-box player experience in advance of 1-2 blind playtests.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Thank you for your support! ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Until next time, ",(0,o.jsx)("br",{}),"Paul Goodrich ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("h4",{children:"Design Corner"}),"This section is a behind the scenes look at some aspect of the design or release process that is on my mind.  Hopefully this helps a future designer someday.  Today's topic is Estimations.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Estimations are notoriously difficult to do correctly, even across different industries.  Why is that?",(0,o.jsx)("br",{}),"You can often divide tasks into 4 categories of knowledge.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"1. What you know.  The time to accomplish this task is well understood.  You are able to draw on past experience.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Example: Writing a scenario with 5000-7000 words takes around 40 hours.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"2. What you don't know you know.  The task is easier to accomplish than you expected.  This rarely happens but helps make up for a small amount of extra time spent on #3 and #4.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Example: You're able to streamline one of the locations in a scenario because of other decisions you made along the way.  Great!",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"3. What you know you don't know.  The task is complex or the solution largely unknown.  Estimates for this category of task vary and can come in way under or over budget depending on the actual time spent.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Example: Often scenario mechanics and bonus designs fall into this category.  Balancing numbers should be tight for a scenario to feel appropriately challenging but not overly punishing.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"4. What you don't know you don't know.  The most dangerous category as it is not captured in an estimate at all.  The way you plan for this category is reasonable additional buffer time beyond the tasked estimate.  This may range from 20-100% buffer time depending on your familiarity with the task and its complexity.  This category should become smaller over time as you gain more experience in the tasks and estimations.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Example: Necessary narrative clues and exposition, puzzles, and a growing party size contribute to longer narratives per location than expected.  You write twice as much as normal for scenario 8.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("h4",{children:"Community"}),"Feel free to email us directly at ",(0,o.jsx)("a",{href:"mailto:goodrichgames@pm.me",children:"goodrichgames@pm.me."}),(0,o.jsxs)("p",{children:["Join the ",(0,o.jsx)("a",{href:"https://discord.com/invite/drQDa7MQ3e",children:"official Discord"})," to chat with the community or ask questions.",(0,o.jsx)("br",{}),"Follow the game on ",(0,o.jsx)("a",{href:"https://boardgamegeek.com/boardgame/391828/mana-source",children:"Board Game Geek"})," and ",(0,o.jsx)("a",{href:"https://www.facebook.com/Mana-Source-102398542746103%C2%A0",children:"Facebook"}),". ",(0,o.jsx)("br",{})]}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsx)("em",{children:"To receive this update sooner along with some additional insider details, sign up for the email newsletter below!"})}),(0,o.jsx)(i.Z,{ctaText:"Start your adventure!"})]})]})})})})}},2279:function(e,a){"use strict";a.Z=""},4862:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/june2023update",function(){return t(1066)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",flex:"BaseTemplate_flex__pmXR4",mR10:"BaseTemplate_mR10__KFLm7",mL10:"BaseTemplate_mL10__I7h__",mL20:"BaseTemplate_mL20__OqsQe",mB10:"BaseTemplate_mB10__nzJQ2",vAlignTop:"BaseTemplate_vAlignTop__J5yfr",thirtyW:"BaseTemplate_thirtyW__xv_gG",thirdW:"BaseTemplate_thirdW__a_avi",fourtyW:"BaseTemplate_fourtyW__L8FZX",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",fullW:"BaseTemplate_fullW__nMPDt",minHeight250:"BaseTemplate_minHeight250__PoT8i",miniGrid:"BaseTemplate_miniGrid__MY_E_",center:"BaseTemplate_center__1FEac",tCenter:"BaseTemplate_tCenter__tHJSf",inline:"BaseTemplate_inline__4xc5V",fontArkhip:"BaseTemplate_fontArkhip__Catmv",fontPhilosopher:"BaseTemplate_fontPhilosopher__hkuIa",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",medWPadding:"BaseTemplate_medWPadding__ISurX",xsWPadding:"BaseTemplate_xsWPadding__WJ5bk",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},453:function(e){e.exports={emailSignup:"EmailSignup_emailSignup__vLpln",email:"EmailSignup_email__YI2o6",emailFieldGroup:"EmailSignup_emailFieldGroup__GXoXM",asterisk:"EmailSignup_asterisk__OgPws",response:"EmailSignup_response__ZzUq9",button:"EmailSignup_button__ZED7e",notName:"EmailSignup_notName___Ck5D",errorBlock:"EmailSignup_errorBlock__Meniz",subscribedMsg:"EmailSignup_subscribedMsg__mPZQi",hidden:"EmailSignup_hidden__lgNDg"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,711,774,888,179],(function(){return a=4862,e(e.s=a);var a}));var a=e.O();_N_E=a}]);