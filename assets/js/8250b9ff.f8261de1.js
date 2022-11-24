"use strict";(self.webpackChunkreact_native_calendar_kit_document=self.webpackChunkreact_native_calendar_kit_document||[]).push([[971],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>c});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),u=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,v=p["".concat(o,".").concat(c)]||p[c]||m[c]||l;return n?t.createElement(v,i(i({ref:a},d),{},{components:n})):t.createElement(v,i({ref:a},d))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4362:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>v});var t=n(7462),r=(n(7294),n(3905));const l=n.p+"assets/images/unavailable-all-days-9a086f5961edf5ca3b97bb3ff97851c9.png",i=n.p+"assets/images/unavailable-week-day-9b88e063db80ae7b1782977248b9a6b3.png",s=n.p+"assets/images/holidays-de6592411e6a8a53120203ea618f43d4.png",o=n.p+"assets/images/unavailable-bg-color-877b19e37d6d549d18be61254c50ba80.png",u=n.p+"assets/images/unavailable-custom-74755a630605da804b63fb40eac6c4d4.png",d={sidebar_position:7},m="Unavailable Time",p={unversionedId:"guides/unavailable-time",id:"guides/unavailable-time",title:"Unavailable Time",description:"Customize unavailable time",source:"@site/docs/guides/unavailable-time.mdx",sourceDirName:"guides",slug:"/guides/unavailable-time",permalink:"/react-native-calendar-kit/docs/guides/unavailable-time",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Custom Header",permalink:"/react-native-calendar-kit/docs/guides/custom-header"},next:{title:"Available methods",permalink:"/react-native-calendar-kit/docs/guides/methods"}},c={},v=[{value:"unavailableHours",id:"unavailablehours",level:2},{value:"Set unavailable hours for all days in a week",id:"set-unavailable-hours-for-all-days-in-a-week",level:3},{value:"Set unavailable hours by week day.",id:"set-unavailable-hours-by-week-day",level:3},{value:"holidays",id:"holidays",level:2},{value:"theme",id:"theme",level:2},{value:"renderCustomUnavailableItem",id:"rendercustomunavailableitem",level:2}],b={toc:v};function y(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unavailable-time"},"Unavailable Time"),(0,r.kt)("p",null,"Customize ",(0,r.kt)("strong",{parentName:"p"},"unavailable time")),(0,r.kt)("h2",{id:"unavailablehours"},"unavailableHours"),(0,r.kt)("h3",{id:"set-unavailable-hours-for-all-days-in-a-week"},"Set unavailable hours for all days in a week"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example"',title:'"Example"'},'const unavailableHours = [\n  { start: 0, end: 7 },\n  { start: 18, end: 24 },\n];\n\n<TimelineCalendar viewMode="week" unavailableHours={unavailableHours} />;\n')),(0,r.kt)("img",{src:l,style:{maxWidth:"320px"}}),(0,r.kt)("h3",{id:"set-unavailable-hours-by-week-day"},"Set unavailable hours by week day."),(0,r.kt)("p",null,"It's a object with key: ",(0,r.kt)("inlineCode",{parentName:"p"},"0 -> 6")," <=> ",(0,r.kt)("inlineCode",{parentName:"p"},"Sunday -> Saturday"),", you can set any day"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example"',title:'"Example"'},'const unavailableHours = {\n  //Sunday\n  0: [{ start: 0, end: 24 }],\n  //Monday\n  1: [\n    { start: 0, end: 7 },\n    { start: 18, end: 24 },\n  ],\n  //Tuesday\n  2: [\n    { start: 0, end: 7 },\n    { start: 18, end: 24 },\n  ],\n  //Wednesday\n  3: [\n    { start: 0, end: 7 },\n    { start: 18, end: 24 },\n  ],\n  //Thursday\n  4: [\n    { start: 0, end: 7 },\n    { start: 18, end: 24 },\n  ],\n  //Friday\n  5: [\n    { start: 0, end: 7 },\n    { start: 18, end: 24 },\n  ],\n  //Saturday\n  6: [{ start: 0, end: 24 }],\n};\n\n<TimelineCalendar viewMode="week" unavailableHours={unavailableHours} />;\n')),(0,r.kt)("img",{src:i,style:{maxWidth:"320px"}}),(0,r.kt)("h2",{id:"holidays"},"holidays"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example"',title:'"Example"'},"const unavailableHours = [\n  { start: 0, end: 7 },\n  { start: 18, end: 24 },\n];\n\n<TimelineCalendar\n  viewMode=\"week\"\n  unavailableHours={unavailableHours}\n  holidays={['2022-11-09', '2022-11-11']}\n/>;\n")),(0,r.kt)("img",{src:s,style:{maxWidth:"320px"}}),(0,r.kt)("h2",{id:"theme"},"theme"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example"',title:'"Example"'},"const unavailableHours = [\n  { start: 0, end: 7 },\n  { start: 18, end: 24 },\n];\n\n<TimelineCalendar\n  viewMode=\"week\"\n  unavailableHours={unavailableHours}\n  holidays={['2022-11-09', '2022-11-11']}\n  theme={{ unavailableBackgroundColor: '#D6E4E5' }}\n/>;\n")),(0,r.kt)("img",{src:o,style:{maxWidth:"320px"}}),(0,r.kt)("h2",{id:"rendercustomunavailableitem"},"renderCustomUnavailableItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CustomUnavailableItem.tsx"',title:'"CustomUnavailableItem.tsx"'},'import type { UnavailableItemProps } from \'@howljs/calendar-kit\';\nimport React from \'react\';\nimport Animated, { useAnimatedProps } from \'react-native-reanimated\';\nimport Svg, { Defs, Line, Pattern, Rect } from \'react-native-svg\';\n\nconst AnimatedRect = Animated.createAnimatedComponent(Rect);\n\nconst CustomUnavailableItem = (props: UnavailableItemProps) => {\n  const patternSize = 5;\n\n  const rectProps = useAnimatedProps(() => ({\n    height: props.hour * props.timeIntervalHeight.value,\n  }));\n\n  return (\n    <Svg>\n      <Defs>\n        <Pattern\n          id="stripe-pattern"\n          patternUnits="userSpaceOnUse"\n          width={patternSize}\n          height={patternSize}\n          patternTransform="rotate(-45)"\n        >\n          <Line\n            x1={0}\n            y={0}\n            x2={0}\n            y2={patternSize + 5}\n            stroke="#e8e8e8"\n            strokeWidth={1.5}\n            strokeLinecap="butt"\n          />\n        </Pattern>\n      </Defs>\n      <AnimatedRect\n        x="0"\n        y="0"\n        width="100%"\n        fill="url(#stripe-pattern)"\n        animatedProps={rectProps}\n      />\n    </Svg>\n  );\n};\n\nexport default CustomUnavailableItem;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example"',title:'"Example"'},"const unavailableHours = [\n  { start: 0, end: 7 },\n  { start: 18, end: 24 },\n];\n\nconst _renderCustomUnavailableItem = useCallback(\n  (props: UnavailableItemProps) => <CustomUnavailableItem {...props} />,\n  []\n);\n\n<TimelineCalendar\n  viewMode=\"week\"\n  unavailableHours={unavailableHours}\n  holidays={['2022-11-09', '2022-11-11']}\n  theme={{ unavailableBackgroundColor: 'transparent' }}\n  renderCustomUnavailableItem={_renderCustomUnavailableItem}\n/>;\n")),(0,r.kt)("img",{src:u,style:{maxWidth:"320px"}}))}y.isMDXComponent=!0}}]);