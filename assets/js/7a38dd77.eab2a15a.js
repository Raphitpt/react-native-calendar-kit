"use strict";(self.webpackChunkreact_native_calendar_kit_document=self.webpackChunkreact_native_calendar_kit_document||[]).push([[741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={},o="Other Props",i={unversionedId:"guides/other-props",id:"guides/other-props",title:"Other Props",description:"Some other properties of TimelineCalendar",source:"@site/docs/guides/other-props.md",sourceDirName:"guides",slug:"/guides/other-props",permalink:"/react-native-calendar-kit/docs/guides/other-props",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Available methods",permalink:"/react-native-calendar-kit/docs/guides/methods"}},s={},p=[{value:"minDate",id:"mindate",level:3},{value:"maxDate",id:"maxdate",level:3},{value:"initialDate",id:"initialdate",level:3},{value:"start",id:"start",level:3},{value:"end",id:"end",level:3},{value:"hourWidth",id:"hourwidth",level:3},{value:"firstDay",id:"firstday",level:3},{value:"timeInterval",id:"timeinterval",level:3},{value:"syncedLists",id:"syncedlists",level:3},{value:"spaceFromTop",id:"spacefromtop",level:3},{value:"spaceFromBottom",id:"spacefrombottom",level:3},{value:"isShowHalfLine",id:"isshowhalfline",level:3},{value:"showNowIndicator",id:"shownowindicator",level:3},{value:"scrollToNow",id:"scrolltonow",level:3},{value:"rightEdgeSpacing",id:"rightedgespacing",level:3},{value:"overlapEventsSpacing",id:"overlapeventsspacing",level:3},{value:"renderDayBarItem",id:"renderdaybaritem",level:3},{value:"renderEventContent",id:"rendereventcontent",level:3},{value:"onPressDayNum",id:"onpressdaynum",level:3},{value:"onPressBackground",id:"onpressbackground",level:3},{value:"onLongPressBackground",id:"onlongpressbackground",level:3},{value:"onPressOutBackground",id:"onpressoutbackground",level:3},{value:"onPressEvent",id:"onpressevent",level:3},{value:"isShowHeader",id:"isshowheader",level:3},{value:"onChange",id:"onchange",level:3},{value:"hourFormat",id:"hourformat",level:3},{value:"eventAnimatedDuration",id:"eventanimatedduration",level:3},{value:"useHaptic",id:"usehaptic",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"other-props"},"Other Props"),(0,l.kt)("p",null,"Some other properties of TimelineCalendar"),(0,l.kt)("h3",{id:"mindate"},"minDate"),(0,l.kt)("p",null,"Minimum display date. Format: (YYYY-MM-DD). Default is ",(0,l.kt)("strong",{parentName:"p"},"2 year ago")),(0,l.kt)("span",{style:{color:"grey"}},"string"),(0,l.kt)("h3",{id:"maxdate"},"maxDate"),(0,l.kt)("p",null,"Maximum display date. Format: (YYYY-MM-DD). Default is ",(0,l.kt)("strong",{parentName:"p"},"2 year later")),(0,l.kt)("span",{style:{color:"grey"}},"string"),(0,l.kt)("h3",{id:"initialdate"},"initialDate"),(0,l.kt)("p",null,"Initial display date. Format: (YYYY-MM-DD). Default is ",(0,l.kt)("strong",{parentName:"p"},"today")),(0,l.kt)("span",{style:{color:"grey"}},"string"),(0,l.kt)("h3",{id:"start"},"start"),(0,l.kt)("p",null,"Start hour of the day. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"end"},"end"),(0,l.kt)("p",null,"End hour of the day. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"24")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"hourwidth"},"hourWidth"),(0,l.kt)("p",null,"Width of hour column. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"53")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"firstday"},"firstDay"),(0,l.kt)("p",null,"First day of the week. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," (Monday)"),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"timeinterval"},"timeInterval"),(0,l.kt)("p",null,"The interval of time slots. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"60")," minutes"),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"syncedlists"},"syncedLists"),(0,l.kt)("p",null,"Auto scroll header when scroll time slots view. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("span",{style:{color:"grey"}},"boolean"),(0,l.kt)("h3",{id:"spacefromtop"},"spaceFromTop"),(0,l.kt)("p",null,"Space between header view and time slots view. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"16")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"spacefrombottom"},"spaceFromBottom"),(0,l.kt)("p",null,"Space below time slots view. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"16")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"isshowhalfline"},"isShowHalfLine"),(0,l.kt)("p",null,"Show a line in the middle of the interval. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("span",{style:{color:"grey"}},"boolean"),(0,l.kt)("h3",{id:"shownowindicator"},"showNowIndicator"),(0,l.kt)("p",null,"Show a line at current time. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("span",{style:{color:"grey"}},"boolean"),(0,l.kt)("h3",{id:"scrolltonow"},"scrollToNow"),(0,l.kt)("p",null,"Auto scroll to current time. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("span",{style:{color:"grey"}},"boolean"),(0,l.kt)("h3",{id:"rightedgespacing"},"rightEdgeSpacing"),(0,l.kt)("p",null,"Spacing at the right edge of events. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"1")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"overlapeventsspacing"},"overlapEventsSpacing"),(0,l.kt)("p",null,"Spacing between overlapping events. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"1")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"renderdaybaritem"},"renderDayBarItem"),(0,l.kt)("p",null,"Custom header component"),(0,l.kt)("span",{style:{color:"grey"}},"function"),(0,l.kt)("h3",{id:"rendereventcontent"},"renderEventContent"),(0,l.kt)("p",null,"Custom component rendered inside an event"),(0,l.kt)("span",{style:{color:"grey"}},"function"),(0,l.kt)("h3",{id:"onpressdaynum"},"onPressDayNum"),(0,l.kt)("p",null,"Callback function will be called when day in header is pressed"),(0,l.kt)("span",{style:{color:"grey"}},"function"),(0,l.kt)("h3",{id:"onpressbackground"},"onPressBackground"),(0,l.kt)("p",null,"Callback function will be called when time slots view is pressed"),(0,l.kt)("span",{style:{color:"grey"}},"function"),(0,l.kt)("h3",{id:"onlongpressbackground"},"onLongPressBackground"),(0,l.kt)("p",null,"Callback function will be called when time slots view is long pressed"),(0,l.kt)("span",{style:{color:"grey"}},"function"),(0,l.kt)("h3",{id:"onpressoutbackground"},"onPressOutBackground"),(0,l.kt)("p",null,"Callback function will be called when time slots view is pressed out"),(0,l.kt)("span",{style:{color:"grey"}},"function"),(0,l.kt)("h3",{id:"onpressevent"},"onPressEvent"),(0,l.kt)("p",null,"Callback function will be called when the event item is pressed"),(0,l.kt)("span",{style:{color:"grey"}},"function"),(0,l.kt)("h3",{id:"isshowheader"},"isShowHeader"),(0,l.kt)("p",null,"Show/Hide header component. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("span",{style:{color:"grey"}},"boolean"),(0,l.kt)("h3",{id:"onchange"},"onChange"),(0,l.kt)("p",null,"Callback function will be called when the timeline is scrolling"),(0,l.kt)("span",{style:{color:"grey"}},"boolean"),(0,l.kt)("h3",{id:"hourformat"},"hourFormat"),(0,l.kt)("p",null,"Hour format. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"HH:mm")),(0,l.kt)("span",{style:{color:"grey"}},"string"),(0,l.kt)("h3",{id:"eventanimatedduration"},"eventAnimatedDuration"),(0,l.kt)("p",null,"How long the animation should last when the style of the event is changed. Default is ",(0,l.kt)("inlineCode",{parentName:"p"},"250")),(0,l.kt)("span",{style:{color:"grey"}},"number"),(0,l.kt)("h3",{id:"usehaptic"},"useHaptic"),(0,l.kt)("p",null,"Haptic Feedback when drag to create/edit. If set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", you need install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/junina-de/react-native-haptic-feedback"},"react-native-haptic-feedback")),(0,l.kt)("span",{style:{color:"grey"}},"boolean"))}u.isMDXComponent=!0}}]);