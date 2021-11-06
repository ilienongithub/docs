(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),b=r,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||n;return a?i.a.createElement(h,s(s({ref:t},d),{},{components:a})):i.a.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<n;d++)o[d]=a[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),i=a(7),n=(a(0),a(114)),o={id:"businessDataDashboard",title:"Dashboard statistical rule description",sidebar_label:"Dashboard statistical rule description"},s={unversionedId:"businessDataDashboard",id:"businessDataDashboard",isDocsHomePage:!1,title:"Dashboard statistical rule description",description:"Dashboard statistical rule description",source:"@site/docs/businessDataDashboard.md",slug:"/businessDataDashboard",permalink:"/docs/jp/docs/businessDataDashboard",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/businessDataDashboard.md",version:"current",sidebar_label:"Dashboard statistical rule description",sidebar:"someSidebar",previous:{title:"DODO Trade API",permalink:"/docs/jp/docs/tradeApi"},next:{title:"\u30c8\u30fc\u30af\u30f3\u306e\u7d4c\u6e08\u30e2\u30c7\u30eb",permalink:"/docs/jp/docs/dodonomics"}},c=[{value:"Dashboard statistical rule description",id:"dashboard-statistical-rule-description",children:[{value:"Related Subgraph data statistics table description",id:"related-subgraph-data-statistics-table-description",children:[]},{value:"Core Metrics",id:"core-metrics",children:[]},{value:"Trading Pair Data",id:"trading-pair-data",children:[]}]}],d={toc:c};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"dashboard-statistical-rule-description"},"Dashboard statistical rule description"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://app.dodoex.io/dashboard"},"Dodoex Dashboards")),Object(n.b)("h3",{id:"related-subgraph-data-statistics-table-description"},"Related Subgraph data statistics table description"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"All of the data for the core metrics comes from the Subgraph, which gets its data from the events thrown when the contract is invoked."),Object(n.b)("li",{parentName:"ul"},"When it comes to the statistics of date dimension in Subgraph, the international standard time is used to make the data statistics for one day. Therefore, when the horizontal axis is the date on Dashboard, it represents the date of the international standard time."),Object(n.b)("li",{parentName:"ul"},"There are several basic pools when we calculate the dollar-related price. The first is the stablecoin trading pool. We take the trading pool with the highest locked position as the benchmark pool and calculate the dollar price of the stablecoin according to the weight of the trading volume. In addition, the chain's base token-to-stablecoin trading pool will also be considered as the base pool to offer dollar prices.")),Object(n.b)("h3",{id:"core-metrics"},"Core Metrics"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We use PairdayData to track daily data for each transaction and TokenDayData to track daily trading data for each token."),Object(n.b)("li",{parentName:"ul"},"For some pools with poor liquidity, we used filtering conditions to discard their data, and pools with current cumulative trading times less than 10 or cumulative trading volume less than $1,000 were not included in the statistics.")),Object(n.b)("h3",{id:"trading-pair-data"},"Trading Pair Data"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The trade pair data provides information about the trade pairs that have been traded at Dodo. Since Dodo intelligent routing helps users find the best price, the volume in the external pool is user-initiated transactions that do not enter the Dodo flow pool.")))}l.isMDXComponent=!0}}]);