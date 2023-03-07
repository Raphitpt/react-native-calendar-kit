"use strict";(self.webpackChunkreact_native_calendar_kit_document=self.webpackChunkreact_native_calendar_kit_document||[]).push([[515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:10},i="Locale",l={unversionedId:"guides/locale",id:"guides/locale",title:"Locale",description:"The calendar can be localized by adding custom locales.",source:"@site/docs/guides/locale.md",sourceDirName:"guides",slug:"/guides/locale",permalink:"/react-native-calendar-kit/docs/guides/locale",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Available methods",permalink:"/react-native-calendar-kit/docs/guides/methods"},next:{title:"Other Props",permalink:"/react-native-calendar-kit/docs/guides/other-props"}},c={},s=[],p={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"locale"},"Locale"),(0,a.kt)("p",null,"The calendar can be localized by adding custom locales."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example"',title:'"Example"'},"import React from 'react';\nimport { SafeAreaView, StyleSheet } from 'react-native';\nimport { MomentConfig } from '@howljs/calendar-kit';\n\nMomentConfig.updateLocale('ja', {\n  weekdaysShort: '\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f'.split('_'),\n});\n\nMomentConfig.updateLocale('vi', {\n  weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),\n});\n\nconst Calendar = () => {\n  return (\n    <SafeAreaView style={styles.container}>\n      <TimelineCalendar\n        viewMode=\"week\"\n        locale=\"ja\" // Language settings will be displayed. Default is `en`\n      />\n    </SafeAreaView>\n  );\n};\n\nexport default Calendar;\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, backgroundColor: '#FFF' },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"View mode",src:n(2679).Z,width:"746",height:"342"})))}d.isMDXComponent=!0},2679:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/locale-686c13556779675e78399a8ab2c33d95.png"}}]);