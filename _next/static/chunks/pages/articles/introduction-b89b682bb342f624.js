(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{9835:function(e,a,t){"use strict";t(7294);var n=t(1163),s=t(9008),i=t(3239),r=t.n(i),c=t(5893);a.Z=function(e){var a=e.name,t=e.description,i=e.image,l=void 0===i?r().shareImage:i,o=e.isArticle,u=r().baseUri,m=(void 0===u?"":u)+(0,n.useRouter)().pathname,d=a;return(0,c.jsxs)(s.default,{children:[(0,c.jsx)("title",{children:d}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,c.jsx)("link",{rel:"canonical",href:m}),(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,c.jsx)("meta",{name:"application-name",content:d}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{name:"twitter:site",content:m}),(0,c.jsx)("meta",{name:"twitter:title",content:d}),(0,c.jsx)("meta",{name:"twitter:description",content:t}),(0,c.jsx)("meta",{name:"twitter:image",content:l}),(0,c.jsx)("meta",{property:"og:title",content:d}),(0,c.jsx)("meta",{property:"og:image",content:l}),(0,c.jsx)("meta",{property:"og:site_name",content:r().name}),(0,c.jsx)("meta",{property:"og:description",content:t}),(0,c.jsx)("meta",{property:"og:url",content:m}),o&&(0,c.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var n=t(1664),s=t(1163),i=(t(7294),t(3239),t(7643)),r=t.n(i),c=t(5893),l="/about",o="/news",u="/resources",m="/contactus";a.Z=function(e){var a=(0,s.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,c.jsx)("nav",{className:r().navigation,children:(0,c.jsx)("div",{className:r().navigation,children:(0,c.jsxs)("div",{className:r().navigationTop,children:[(0,c.jsx)(n.default,{href:"/",children:(0,c.jsx)("a",{className:r().logo,children:"Mana Source"})}),(0,c.jsx)("div",{className:r().navigationOverlay,children:!e.disableLinks&&(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"/"===t?r().selected:"",children:(0,c.jsx)(n.default,{href:"/",children:(0,c.jsx)("a",{className:r().menu1,children:"Home"})})},"home"),(0,c.jsx)("li",{className:t===l?r().selected:"",children:(0,c.jsx)(n.default,{href:l,children:(0,c.jsx)("a",{className:r().menu2,children:"About"})})},"about"),(0,c.jsx)("li",{className:t===o?r().selected:"",children:(0,c.jsx)(n.default,{href:o,children:(0,c.jsx)("a",{className:r().menu3,children:"News"})})},"news"),(0,c.jsx)("li",{className:t===u?r().selected:"",children:(0,c.jsx)(n.default,{href:u,children:(0,c.jsx)("a",{className:r().menu4,children:"Resources"})})},"resources"),(0,c.jsx)("li",{className:t===m?r().selected:"",children:(0,c.jsx)(n.default,{href:m,children:(0,c.jsx)("a",{className:r().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5591:function(e,a,t){"use strict";var n=t(1163),s=(t(7294),t(4777)),i=t.n(s),r=t(5858),c=t(5893);a.Z=function(e){var a=e.children,t=e.useImage,s=(0,n.useRouter)(),l=i().find((function(e){return e.link===s.pathname}));return(0,c.jsx)(r.Z,{title:l.title,image:t&&l.image,isArticle:!0,children:(0,c.jsx)("section",{children:a})})}},5858:function(e,a,t){"use strict";var n=t(4623),s=t(9835),i=t(5821),r=t(1459),c=t.n(r),l=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,o=e.description,u=e.image,m=e.isArticle;return(0,l.jsxs)("div",{className:c().backgroundWrap,children:[(0,l.jsx)(s.Z,{name:t,description:o,image:u,isArticle:m}),(0,l.jsx)(i.Z,{}),(0,l.jsx)("main",{className:c().main,children:(0,l.jsx)("div",{className:c().bodyWrapper,children:(0,l.jsxs)("div",{className:c().bodyContent,children:[m&&(0,l.jsx)(n.Z,{title:t,date:r,description:o,image:u}),a]})})}),(0,l.jsx)("footer",{className:c().footer,children:(0,l.jsx)("div",{className:c().footerContent,children:(0,l.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2022. All rights reserved."})})})]})}},7580:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var n=t(4711),s=t(453),i=t.n(s),r=t(7294),c=t(5893),l=function(e){return/[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)},o=function(e){var a=e.ctaText,t=e.status,n=(e.message,e.onValidated),s=(0,r.useState)(""),o=s[0],u=s[1],m=(0,r.useRef)(),d=(0,r.useRef)();return(0,c.jsxs)("div",{className:i().emailSignup,children:[(0,c.jsx)("h2",{children:"Sign up for updates"}),(0,c.jsxs)("div",{className:i().emailFieldGroup,children:[(0,c.jsxs)("label",{htmlFor:"mce-EMAIL",children:["Email Address  ",(0,c.jsx)("span",{className:i().asterisk,children:"*"})]}),(0,c.jsx)("input",{type:"email",name:"EMAIL",className:i().required+" "+i().email,value:o,onChange:function(e){u(e.target.value),e.target.value&&!l(e.target.value)||d.current.classList.add(i().hidden)},onBlur:function(e){e.target.value&&!l(e.target.value)&&d.current.classList.remove(i().hidden)}})]}),(0,c.jsx)("div",{ref:d,className:i().errorBlock+" "+i().hidden,children:"You have entered an invalid email address.  Please check your entry and try again."}),"error"===t&&(0,c.jsx)("div",{ref:m,className:i().errorBlock+" "+i().hidden,children:"An error occurred in submission, please try again later."}),(0,c.jsx)("div",{className:i().notName,"aria-hidden":"true",children:(0,c.jsx)("input",{type:"text",name:"b_a2c1595175259c6cf93c9b708_70002bf500",tabIndex:"-1",defaultValue:""})}),(0,c.jsx)("div",{className:i().optionalParent,children:(0,c.jsx)("div",{className:i().foot,children:(0,c.jsx)("input",{type:"submit",value:a,name:"subscribe",className:i().button,onClick:function(){l(o)&&n({EMAIL:o})}})})})]})},u=function(e){return(0,c.jsx)(n.Z,{url:"https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500",render:function(a){var t=a.subscribe,n=a.status,s=a.message;return(0,c.jsxs)("div",{children:["success"!==n&&(0,c.jsx)(o,{ctaText:e.ctaText,status:n,message:s,onValidated:function(e){return t(e)}}),"success"===n&&(0,c.jsx)("div",{className:i().subscribedMsg,children:"Thank you!  We'll be in touch soon!"})]})}})}},4623:function(e,a,t){"use strict";var n=t(7156),s=t.n(n),i=t(1058),r=t(2279),c=t(5893);a.Z=function(e){var a=e.title,t=e.description,n=e.image;return(0,c.jsxs)("header",{className:n?s().imageHeader:s().header,children:[n&&(0,c.jsx)(i.Z,{src:r.Z+n,alt:a,layout:"fill"}),(0,c.jsx)("h1",{className:s().title,children:a}),(0,c.jsx)("p",{className:s().description,children:t})]})}},4777:function(e){e.exports=[{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.png",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.jpg",link:"/articles/releasenotes-5-24-22",categories:["all","patchnotes"],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an arena-style card game where players battle for control of Mana Wells scattered throughout the mysterious fantasy world of Kainan.",shareImage:"/share.png",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},202:function(e,a,t){"use strict";t.r(a);var n=t(5591),s=t(7580),i=t(5893);a.default=function(){return(0,i.jsx)(n.Z,{useImage:!0,children:(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"About Mana Source"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Mana Source is an upcoming competitive living card game (LCG) for 1-4 players. It focuses around arena-style combat to battle for control of Mana Wells scattered throughout the mysterious world of Kainan. It features five playable primary classes, one exclusively secondary class, and over 300 unique cards in the release set."}),(0,i.jsx)("p",{children:"Experiment, strategize, and mindgame to reduce your opponent's health to zero and win!"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Playtime: 20-60 minutes"}),(0,i.jsx)("p",{children:"Players: 1-4"}),(0,i.jsx)("p",{children:"Ages: 8+"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:["Actively seeking a publisher! Contact me at ",(0,i.jsx)("a",{href:"mailto:goodrichgames@pm.me",children:"goodrichgames@pm.me"}),"."]})}),(0,i.jsx)(s.Z,{ctaText:"Start your adventure!"})]})]})})})})}},2279:function(e,a){"use strict";a.Z="/ManaSource-Site"},9002:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/introduction",function(){return t(202)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",fiftyW:"BaseTemplate_fiftyW__s0Kom",center:"BaseTemplate_center__1FEac",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s"}},453:function(e){e.exports={emailSignup:"EmailSignup_emailSignup__vLpln",email:"EmailSignup_email__YI2o6",emailFieldGroup:"EmailSignup_emailFieldGroup__GXoXM",asterisk:"EmailSignup_asterisk__OgPws",response:"EmailSignup_response__ZzUq9",button:"EmailSignup_button__ZED7e",notName:"EmailSignup_notName___Ck5D",errorBlock:"EmailSignup_errorBlock__Meniz",subscribedMsg:"EmailSignup_subscribedMsg__mPZQi",hidden:"EmailSignup_hidden__lgNDg"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,711,774,888,179],(function(){return a=9002,e(e.s=a);var a}));var a=e.O();_N_E=a}]);