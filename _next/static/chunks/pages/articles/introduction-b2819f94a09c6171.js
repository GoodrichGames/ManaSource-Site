(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{8946:function(e,a,t){"use strict";t.d(a,{Z:function(){return b}});var n=t(7156),i=t.n(n),s=t(1058),r=t(5893),o=function(e){var a=e.title,t=e.description,n=e.image;return(0,r.jsxs)("header",{className:n?i().imageHeader:i().header,children:[n&&(0,r.jsx)(s.Z,{src:n,alt:a,layout:"fill"}),(0,r.jsx)("h1",{className:i().title,children:a}),(0,r.jsx)("p",{className:i().description,children:t})]})},c=(t(7294),t(1163)),l=t(9008),m=t(3239),d=t.n(m),u=function(e){var a=e.name,t=e.description,n=e.image,i=void 0===n?d().shareImage:n,s=e.isArticle,o=d().baseUri,m=(void 0===o?"":o)+(0,c.useRouter)().pathname,u=a;return(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:u}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"canonical",href:m}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,r.jsx)("meta",{name:"application-name",content:u}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:m}),(0,r.jsx)("meta",{name:"twitter:title",content:u}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("meta",{property:"og:title",content:u}),(0,r.jsx)("meta",{property:"og:image",content:i}),(0,r.jsx)("meta",{property:"og:site_name",content:d().name}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:url",content:m}),s&&(0,r.jsx)("meta",{property:"og:type",content:"article"})]})},h=(t(5675),t(1664)),_=t(7643),p=t.n(_),x="/about",g="/news",j="/resources",f="/contactus",v=function(){var e=(0,c.useRouter)(),a="/".concat(e.pathname.split("/")[1]);return(0,r.jsx)("nav",{className:p().navigation,children:(0,r.jsx)("div",{className:p().navigation,children:(0,r.jsxs)("div",{className:p().navigationTop,children:[(0,r.jsx)(h.default,{href:"/",children:(0,r.jsx)("a",{className:p().logo,children:"Mana Source"})}),(0,r.jsx)("div",{className:p().navigationOverlay,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"/"===a?p().selected:"",children:(0,r.jsx)(h.default,{href:"/",children:(0,r.jsx)("a",{className:p().menu1,children:"Home"})})},"home"),(0,r.jsx)("li",{className:a===x?p().selected:"",children:(0,r.jsx)(h.default,{href:x,children:(0,r.jsx)("a",{className:p().menu2,children:"About"})})},"about"),(0,r.jsx)("li",{className:a===g?p().selected:"",children:(0,r.jsx)(h.default,{href:g,children:(0,r.jsx)("a",{className:p().menu3,children:"News"})})},"news"),(0,r.jsx)("li",{className:a===j?p().selected:"",children:(0,r.jsx)(h.default,{href:j,children:(0,r.jsx)("a",{className:p().menu4,children:"Resources"})})},"resources"),(0,r.jsx)("li",{className:a===f?p().selected:"",children:(0,r.jsx)(h.default,{href:f,children:(0,r.jsx)("a",{className:p().menu5,children:"Contact Us"})})},"contactus")]})})]})})})},N=t(1459),y=t.n(N),b=function(e){var a=e.children,t=e.title,n=e.date,i=e.description,s=e.image,c=e.isArticle;return(0,r.jsxs)("div",{className:y().backgroundWrap,children:[(0,r.jsx)(u,{name:t,description:i,image:s,isArticle:c}),(0,r.jsx)(v,{}),(0,r.jsx)("main",{className:y().main,children:(0,r.jsx)("div",{className:y().bodyWrapper,children:(0,r.jsxs)("div",{className:y().bodyContent,children:[c&&(0,r.jsx)(o,{title:t,date:n,description:i,image:s}),a]})})}),(0,r.jsx)("footer",{className:y().footer,children:(0,r.jsx)("div",{className:y().footerContent,children:(0,r.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2022. All rights reserved."})})})]})}},4777:function(e){e.exports=[{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.png",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an arena-style card game where players battle for control of Mana Wellsscattered throughout the mysterious magicpunk world of Kainan.",shareImage:"/share.png",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},423:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return l}});var n=t(1163),i=(t(7294),t(4777)),s=t.n(i),r=t(8946),o=t(5893),c=function(e){var a=e.children,t=e.useImage,i=(0,n.useRouter)(),c=s().find((function(e){return e.link===i.pathname}));return(0,o.jsx)(r.Z,{title:c.title,image:t&&c.image,isArticle:!0,children:(0,o.jsx)("section",{children:a})})},l=function(){return(0,o.jsx)(c,{useImage:!0,children:(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:"About Mana Source"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Mana Source is an upcoming competitive living card game (LCG) for 1-4 players. It focuses around player vs player arena-style combat to battle for control of Mana Wells scattered throughout the mysterious world of Kainan. It features five playable primary classes, one exclusively secondary class, and over 300 unique cards in the release set."}),(0,o.jsx)("p",{children:"Experiment, strategize, and mindgame to reduce your opponent's health to zero and win!"}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:"Playtime: 20-60 minutes"}),(0,o.jsx)("p",{children:"Players: 1-4"}),(0,o.jsx)("p",{children:"Ages: 8+"}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsxs)("b",{children:["Actively seeking a publisher! Contact me at ",(0,o.jsx)("a",{href:"mailto:softwarealchemist@protonmail.com",children:"softwarealchemist@protonmail.com"}),"."]})})]})]})})})})}},9002:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/introduction",function(){return t(423)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,774,888,179],(function(){return a=9002,e(e.s=a);var a}));var a=e.O();_N_E=a}]);