(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9835:function(e,a,t){"use strict";t(7294);var i=t(1163),n=t(9008),s=t.n(n),r=t(3239),l=t.n(r),c=t(5893);a.Z=function(e){var a=e.name,t=e.description,n=e.image,r=void 0===n?l().shareImage:n,o=e.isArticle,d="https://www.manasourcegame.com"+(0,i.useRouter)().pathname,m=a;return(0,c.jsxs)(s(),{children:[(0,c.jsx)("title",{children:m}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,c.jsx)("link",{rel:"canonical",href:d}),(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,c.jsx)("meta",{name:"application-name",content:m}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,c.jsx)("meta",{name:"twitter:site",content:d}),(0,c.jsx)("meta",{name:"twitter:title",content:m}),(0,c.jsx)("meta",{name:"twitter:description",content:t}),(0,c.jsx)("meta",{name:"twitter:image",content:r}),(0,c.jsx)("meta",{property:"og:title",content:m}),(0,c.jsx)("meta",{property:"og:image",content:r}),(0,c.jsx)("meta",{property:"og:site_name",content:l().name}),(0,c.jsx)("meta",{property:"og:description",content:t}),(0,c.jsx)("meta",{property:"og:url",content:d}),o&&(0,c.jsx)("meta",{property:"og:type",content:"article"})]})}},5821:function(e,a,t){"use strict";t(5675);var i=t(1664),n=t.n(i),s=t(1163),r=(t(7294),t(3239),t(7643)),l=t.n(r),c=t(5893),o="/about",d="/news",m="/resources",u="/contactus";a.Z=function(e){var a=(0,s.useRouter)(),t="/".concat(a.pathname.split("/")[1]);return(0,c.jsx)("nav",{className:l().navigation,children:(0,c.jsx)("div",{className:l().navigation,children:(0,c.jsxs)("div",{className:l().navigationTop,children:[(0,c.jsx)(n(),{href:"/",children:(0,c.jsx)("h1",{children:(0,c.jsx)("a",{className:l().logo,children:"Mana Source"})})}),(0,c.jsx)("div",{className:l().navigationOverlay,children:!e.disableLinks&&(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"/"===t?l().selected:"",children:(0,c.jsx)(n(),{href:"/",children:(0,c.jsx)("a",{className:l().menu1,children:"Home"})})},"home"),(0,c.jsx)("li",{className:t===o?l().selected:"",children:(0,c.jsx)(n(),{href:o,children:(0,c.jsx)("a",{className:l().menu2,children:"About"})})},"about"),(0,c.jsx)("li",{className:t===d?l().selected:"",children:(0,c.jsx)(n(),{href:d,children:(0,c.jsx)("a",{className:l().menu3,children:"News"})})},"news"),(0,c.jsx)("li",{className:t===m?l().selected:"",children:(0,c.jsx)(n(),{href:m,children:(0,c.jsx)("a",{className:l().menu4,children:"Resources"})})},"resources"),(0,c.jsx)("li",{className:t===u?l().selected:"",children:(0,c.jsx)(n(),{href:u,children:(0,c.jsx)("a",{className:l().menu5,children:"Contact Us"})})},"contactus")]})})]})})})}},5858:function(e,a,t){"use strict";var i=t(4623),n=t(9835),s=t(5821),r=t(1459),l=t.n(r),c=t(1058),o=t(2279),d=t(5893);a.Z=function(e){var a=e.children,t=e.title,r=e.date,m=e.description,u=e.image,h=e.isArticle;return(0,d.jsxs)("div",{className:l().backgroundWrap,children:[(0,d.jsx)(n.Z,{name:t,description:m,image:u,isArticle:h}),(0,d.jsx)(s.Z,{}),(0,d.jsx)("main",{className:l().main,children:(0,d.jsx)("div",{className:l().bodyWrapper,children:(0,d.jsxs)("div",{className:l().bodyContent,children:[h&&(0,d.jsx)(i.Z,{title:t,date:r,description:m,image:u}),a]})})}),(0,d.jsx)("footer",{className:l().footer,children:(0,d.jsxs)("div",{className:l().footerContent,children:[(0,d.jsx)("p",{children:"Mana Source \xa9 Goodrich Games 2023. All rights reserved."}),(0,d.jsx)("br",{}),(0,d.jsx)(c.Z,{src:o.Z+"/images/GG-Logo-dark-bg.webp",alt:"Goodrich Games Logo",width:"100%",height:"5%",layout:"responsive",objectFit:"contain",priority:!0})]})})]})}},2214:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var i=t(4777),n=t.n(i),s=t(287),r=t.n(s),l=t(1664),c=t.n(l),o=t(1058),d=t(2279),m=t(5893),u=function(e){var a=e.article;return(0,m.jsx)(c(),{href:a.link,children:(0,m.jsxs)("a",{className:r().articleLink,children:[(0,m.jsx)("div",{className:r().imageContainer,children:(0,m.jsx)(o.Z,{src:d.Z+a.image,alt:a.title,layout:"fill",className:a.imageVAlign})}),(0,m.jsxs)("div",{className:r().articleContent,children:[a.date&&(0,m.jsx)("date",{children:a.date}),(0,m.jsx)("div",{className:r().articleTitle,children:a.title}),(0,m.jsx)("p",{children:a.description})]})]})})},h=function(e){var a=e.category,t=e.max,i=n().filter((function(e){return e.categories.includes(a)})).slice(0,t);return(0,m.jsx)("div",{children:i.map((function(e){return(0,m.jsx)("div",{className:r().article,children:(0,m.jsx)(u,{article:e})},e.title)}))})}},5099:function(e,a,t){"use strict";var i=t(5893);a.Z=function(e){var a=e.children,t=e.title;return(0,i.jsxs)("li",{children:[t&&(0,i.jsx)("h3",{children:t}),(0,i.jsx)("div",{children:a})]})}},9401:function(e,a,t){"use strict";var i=t(5893);a.Z=function(e){var a=e.children;return(0,i.jsx)("section",{children:(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:a})})})}},7580:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var i=t(4711),n=t(453),s=t.n(n),r=t(7294),l=t(5893),c=function(e){return/[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\u2018{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)},o=function(e){var a=e.ctaText,t=e.status,i=(e.message,e.onValidated),n=(0,r.useState)(""),o=n[0],d=n[1],m=(0,r.useRef)(),u=(0,r.useRef)();return(0,l.jsxs)("div",{className:s().emailSignup,children:[(0,l.jsx)("h2",{children:"Sign up for updates"}),(0,l.jsxs)("div",{className:s().emailFieldGroup,children:[(0,l.jsxs)("label",{htmlFor:"mce-EMAIL",children:["Email Address  ",(0,l.jsx)("span",{className:s().asterisk,children:"*"})]}),(0,l.jsx)("input",{type:"email",name:"EMAIL",className:s().required+" "+s().email,value:o,onChange:function(e){d(e.target.value),e.target.value&&!c(e.target.value)||u.current.classList.add(s().hidden)},onBlur:function(e){e.target.value&&!c(e.target.value)&&u.current.classList.remove(s().hidden)}})]}),(0,l.jsx)("div",{ref:u,className:s().errorBlock+" "+s().hidden,children:"You have entered an invalid email address.  Please check your entry and try again."}),"error"===t&&(0,l.jsx)("div",{ref:m,className:s().errorBlock+" "+s().hidden,children:"An error occurred in submission, please try again later."}),(0,l.jsx)("div",{className:s().notName,"aria-hidden":"true",children:(0,l.jsx)("input",{type:"text",name:"b_a2c1595175259c6cf93c9b708_70002bf500",tabIndex:"-1",defaultValue:""})}),(0,l.jsx)("div",{className:s().optionalParent,children:(0,l.jsx)("div",{className:s().foot,children:(0,l.jsx)("input",{type:"submit",value:a,name:"subscribe",className:s().button,onClick:function(){c(o)&&i({EMAIL:o})}})})})]})},d=function(e){return(0,l.jsx)(i.Z,{url:"https://github.us10.list-manage.com/subscribe/post?u=a2c1595175259c6cf93c9b708&amp;id=70002bf500",render:function(a){var t=a.subscribe,i=a.status,n=a.message;return(0,l.jsxs)("div",{children:["success"!==i&&(0,l.jsx)(o,{ctaText:e.ctaText,status:i,message:n,onValidated:function(e){return t(e)}}),"success"===i&&(0,l.jsx)("div",{className:s().subscribedMsg,children:"Thank you!  We'll be in touch soon!"})]})}})}},4623:function(e,a,t){"use strict";var i=t(7156),n=t.n(i),s=t(1058),r=t(2279),l=t(5893);a.Z=function(e){var a=e.title,t=e.description,i=e.image;return(0,l.jsxs)("header",{className:i?n().imageHeader:n().header,children:[i&&(0,l.jsx)(s.Z,{src:r.Z+i,alt:a,layout:"fill"}),(0,l.jsx)("h1",{className:n().title,children:a}),(0,l.jsx)("p",{className:n().description,children:t})]})}},4677:function(e,a,t){"use strict";var i=t(3913),n=t(5893);a.Z=function(e){var a=e.videoId,t=e.height,s=e.width,r=e.isAutoplay,l={height:t,width:s,playerVars:{autoplay:r?1:0}};return(0,n.jsx)(i.Z,{videoId:a,opts:l,onReady:function(e){r||e.target.pauseVideo()}})}},4777:function(e){e.exports=[{title:"EOY 2023 Update",description:"",image:"/images/articles/nextImageExportOptimizer/purpleflowers-opt-1920.WEBP",link:"/articles/eoy2023update",categories:["all","devnotes","announcements"],date:"Dec 29, 2023"},{title:"July / August 2023 Update",description:"",image:"/images/articles/road-1072823_1920.webp",link:"/articles/aug2023update",categories:["all","devnotes","announcements"],date:"Sept 12, 2023"},{title:"May / June 2023 Update",description:"",image:"/images/articles/sunset-3325080_1920.webp",link:"/articles/june2023update",categories:["all","devnotes","announcements"],date:"June 27, 2023"},{title:"March / April 2023 Update",description:"",image:"/images/articles/planet-1702788_1280.webp",link:"/articles/mar2023update",categories:["all","devnotes","announcements"],date:"Mar 28, 2023"},{title:"February 2023 Update",description:"",image:"/images/articles/painting-3995999_1280.webp",link:"/articles/feb2023update",categories:["all","devnotes","announcements"],date:"Feb 13, 2023"},{title:"January 2023 Update",description:"Start of 2023 Newsletter",image:"/images/timbatia-small.webp",imageVAlign:"vAlignTop",link:"/articles/jan2023update",categories:["all","devnotes","announcements"],date:"Jan 22, 2023"},{title:"New Teaser Trailer!",description:"Mana Source - Teaser Trailer",image:"/images/cave.webp",link:"/articles/firstpromo",categories:["all","devnotes","announcements"],date:"Nov 29, 2022"},{title:"Introduction",description:"What is Mana Source?",image:"/images/cave.webp",link:"/articles/introduction",categories:["all","devnotes","announcements"],date:"May 22, 2022"},{title:"Release Notes 5-24-22",description:"Patches the Llama delivers release notes",image:"/images/articles/llama-time.webp",imageVAlign:"vAlignTop",link:"/articles/releasenotes-5-24-22",categories:[],date:"May 24, 2022"}]},3239:function(e){e.exports={name:"Mana Source Game",description:"Mana source is an adventure board game focuses around arena-style combat you&apos;ll need to survive in the mysterious fantasy world of Kainan.",shareImage:"/share.webp",pages:[{name:"Home",title:"Home",link:"/"},{name:"About",link:"/about"},{name:"News",link:"/news"},{name:"Resources",link:"/resources"},{name:"Contact Us",link:"/contactus"}]}},2748:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return v}});var i=t(5858),n=t(2214),s=t(3239),r=t.n(s),l=t(1058),c=t(2279),o=t(1459),d=t.n(o),m=t(5099),u=t(9401),h=t(1664),_=t.n(h),p=t(7580),g=t(4677),x=t(5893);function v(){return(0,x.jsxs)(i.Z,{title:r().name,description:r().description,children:[(0,x.jsx)("div",{className:d().heroImage,children:(0,x.jsx)(l.Z,{src:c.Z+"/images/featured-game.webp",alt:"mana well in cave",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})}),(0,x.jsx)(u.Z,{children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)("p",{className:d().fontPhilosopher,children:(0,x.jsxs)("em",{children:["For thousands of years the nations have fought to control Mana wells, which are now essential to modern life. ",(0,x.jsx)("br",{}),"Each nation has unique weapons, talents, and battlefield-warping effects to emerge victorious.",(0,x.jsx)("br",{}),"But be careful, each opponent may have a few tricks they've picked up from another nation..."]})}),(0,x.jsx)("br",{}),(0,x.jsx)(g.Z,{videoId:"h9tHSCE1T84",width:"900",height:"508",isAutoplay:!1}),(0,x.jsx)("br",{}),(0,x.jsxs)("h4",{className:d().tCenter+" "+d().medWPadding,children:[(0,x.jsxs)("div",{className:d().mB10,children:[(0,x.jsx)("span",{className:d().fontArkhip,children:"Mana Source"})," is an adventure board game with deadly adversaries."]}),(0,x.jsx)("div",{children:"You'll need to rely on your wits to survive."})]}),(0,x.jsxs)("p",{className:d().tCenter+" "+d().medWPadding+" "+d().vAlignTop,children:["Choose a primary and secondary class \u2013 Construct a hand of 10 cards \u2013 Gain an edge over the competition!",(0,x.jsx)("br",{}),(0,x.jsx)("br",{})]}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:d().medWPadding,children:[(0,x.jsxs)("div",{className:d().thirdW+" "+d().inline+" "+d().vAlignTop+" ",children:[(0,x.jsx)("h4",{children:"Don't wait for your turn to play!"}),"Simultaneous turns keep everyone focused on the action."]}),(0,x.jsxs)("div",{className:d().thirdW+" "+d().inline+" "+d().vAlignTop+" ",children:[(0,x.jsx)("h4",{children:"Spend less time learning, more time playing!"}),"You can ",(0,x.jsx)(_(),{href:"/resources",children:"learn the basics"})," in < 10 minutes."]}),(0,x.jsxs)("div",{className:d().thirdW+" "+d().inline+" "+d().vAlignTop+" ",children:[(0,x.jsx)("h4",{children:"How much game are we talking here?"}),"Campaign: 20+ story-rich scenarios",(0,x.jsx)("br",{}),"Clash competitively with 300+ skills",(0,x.jsx)("br",{})]})]}),(0,x.jsx)("br",{}),(0,x.jsxs)("p",{className:d().tCenter,children:["Visit the ",(0,x.jsx)(_(),{href:"/about",children:"About"})," or ",(0,x.jsx)(_(),{href:"/resources",children:"Resources"})," pages to learn more."]}),(0,x.jsx)(p.Z,{ctaText:"Start your adventure!"})]})}),(0,x.jsx)(u.Z,{children:(0,x.jsxs)(m.Z,{title:"Latest Articles",children:[(0,x.jsx)(n.Z,{category:"all",max:"5"}),(0,x.jsx)(_(),{href:"/news",children:"View All"})]})})]})}},2279:function(e,a){"use strict";a.Z=""},5557:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2748)}])},7643:function(e){e.exports={navigation:"Navigation_navigation__c4pxv",navigationTop:"Navigation_navigationTop__jog_J",navigationOverlay:"Navigation_navigationOverlay__3uR_W",logo:"Navigation_logo__h6ccb",menu1:"Navigation_menu1__dH7TD",menu2:"Navigation_menu2__D5tzg",menu3:"Navigation_menu3__U23_W",menu4:"Navigation_menu4__p9q7m",menu5:"Navigation_menu5__muhnq",selected:"Navigation_selected__JX0lY"}},1459:function(e){e.exports={backgroundWrap:"BaseTemplate_backgroundWrap__OJl8F",main:"BaseTemplate_main__2_ilg",mb1:"BaseTemplate_mb1__jxM8k",bodyWrapper:"BaseTemplate_bodyWrapper__yNXJS",bodyContent:"BaseTemplate_bodyContent__f_v_k",heroImage:"BaseTemplate_heroImage__Qzzh4",card:"BaseTemplate_card__U7_vl",mainNoLinks:"BaseTemplate_mainNoLinks__cFENf",footer:"BaseTemplate_footer__e3ACp",footerContent:"BaseTemplate_footerContent__NhW6d",facebook:"BaseTemplate_facebook__Cfdmy",twitter:"BaseTemplate_twitter__fYGZs",flex:"BaseTemplate_flex__pmXR4",mR10:"BaseTemplate_mR10__KFLm7",mL10:"BaseTemplate_mL10__I7h__",mL20:"BaseTemplate_mL20__OqsQe",mB10:"BaseTemplate_mB10__nzJQ2",vAlignTop:"BaseTemplate_vAlignTop__J5yfr",thirtyW:"BaseTemplate_thirtyW__xv_gG",thirdW:"BaseTemplate_thirdW__a_avi",fourtyW:"BaseTemplate_fourtyW__L8FZX",fiftyW:"BaseTemplate_fiftyW__s0Kom",seventyW:"BaseTemplate_seventyW__bnNCQ",fullW:"BaseTemplate_fullW__nMPDt",minHeight250:"BaseTemplate_minHeight250__PoT8i",miniGrid:"BaseTemplate_miniGrid__MY_E_",center:"BaseTemplate_center__1FEac",tCenter:"BaseTemplate_tCenter__tHJSf",inline:"BaseTemplate_inline__4xc5V",fontArkhip:"BaseTemplate_fontArkhip__Catmv",fontPhilosopher:"BaseTemplate_fontPhilosopher__hkuIa",emphasisCtn:"BaseTemplate_emphasisCtn__Jzn5s",medWPadding:"BaseTemplate_medWPadding__ISurX",xsWPadding:"BaseTemplate_xsWPadding__WJ5bk",darkThinBorder:"BaseTemplate_darkThinBorder__cHTRI",lightThinBorder:"BaseTemplate_lightThinBorder__Zy116"}},287:function(e){e.exports={articleLink:"ArticleList_articleLink__aV2EH",imageContainer:"ArticleList_imageContainer__t6JZq",articleTitle:"ArticleList_articleTitle__hnQSs",articleContent:"ArticleList_articleContent__qnKhN"}},453:function(e){e.exports={emailSignup:"EmailSignup_emailSignup__vLpln",email:"EmailSignup_email__YI2o6",emailFieldGroup:"EmailSignup_emailFieldGroup__GXoXM",asterisk:"EmailSignup_asterisk__OgPws",response:"EmailSignup_response__ZzUq9",button:"EmailSignup_button__ZED7e",notName:"EmailSignup_notName___Ck5D",errorBlock:"EmailSignup_errorBlock__Meniz",subscribedMsg:"EmailSignup_subscribedMsg__mPZQi",hidden:"EmailSignup_hidden__lgNDg"}},7156:function(e){e.exports={header:"PageHeader_header__vZ3Qm",imageHeader:"PageHeader_imageHeader__nRaD_",title:"PageHeader_title__6fS_C"}}},function(e){e.O(0,[402,711,913,774,888,179],(function(){return a=5557,e(e.s=a);var a}));var a=e.O();_N_E=a}]);