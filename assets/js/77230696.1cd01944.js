(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(97)),i={id:"nftCoreFeatures",title:"DODO NFT Core Features",sidebar_label:"Core Features"},l={unversionedId:"nftCoreFeatures",id:"nftCoreFeatures",isDocsHomePage:!1,title:"DODO NFT Core Features",description:"DODO NFT Vault fragmentation",source:"@site/docs/nftIntro.md",slug:"/nftCoreFeatures",permalink:"/docs/docs/nftCoreFeatures",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/nftIntro.md",version:"current",sidebar_label:"Core Features",sidebar:"someSidebar",previous:{title:"Frequently Asked Questions (FAQs)",permalink:"/docs/docs/commonQuestions"}},c=[{value:"DODO NFT Vault fragmentation",id:"dodo-nft-vault-fragmentation",children:[]},{value:"Low Cost Creation of Liquidity Pools",id:"low-cost-creation-of-liquidity-pools",children:[]},{value:"Buyout of DODO NFT Vault (optional)",id:"buyout-of-dodo-nft-vault-optional",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"dodo-nft-vault-fragmentation"},"DODO NFT Vault fragmentation"),Object(a.b)("p",null,"Pledging NFT (or multiple NFTs) into the DODO NFT Vault will automatically generate an ERC20 token contract. Owners of the DODO NFT Vault can set the percentage of tokens going into the secondary market, and set aside token distributions to the primary market/creative teams/community incentives. "),Object(a.b)("p",null,"For example, I send an NFT for Ayaboli. I pledge this NFT to the DODO NFT Vault and automatically get an ERC20 token. I can set the token name to FRAG and the total supply to 10,000, which cannot be incremented. I set 15% of the tokens to be released to the designated Ayakari Copyright Company's wallet address in a 1 year linear unlock, and 85% to go directly into the DODO liquidity pool for circulation at $1 = 1 FRAG. the price of FRAG goes up and down as transactions occur."),Object(a.b)("p",null,"Of course I could also issue one NFT for each character in the EVA anime and pledge all this set of NFTs into the DODO NFT Vault."),Object(a.b)("h2",{id:"low-cost-creation-of-liquidity-pools"},"Low Cost Creation of Liquidity Pools"),Object(a.b)("p",null,"The DODO NFT Vault automatically creates a DODO Trading Pool and pledges in all FRAG tokens that enter the market. The initial price is defined by the owner of the DODO NFT Vault to start selling FRAG. as traders buy, the FRAG price will automatically increase. The market value of FRAG is the valuation of NFT."),Object(a.b)("h2",{id:"buyout-of-dodo-nft-vault-optional"},"Buyout of DODO NFT Vault (optional)"),Object(a.b)("p",null,"Since the pieces of DODO NFT Vault are already circulating in the market, regular users can enjoy the benefits of the NFT price increase by purchasing only the FRAG. ",Object(a.b)("strong",{parentName:"p"},"If a collector wants to buy out")," the DODO NFT Vault",Object(a.b)("strong",{parentName:"p"},", he needs to pay the current NFT valuation")," immediately. This money will go into the DODO NFT Vault contract, while all NFTs contained in the DODO NFT Vault will be transferred to the collector."),Object(a.b)("p",null,"At the same time, the parameters of the DODO Trading Pool are adjusted so that the FRAG is bought and sold at the FRAG price at the time of the collector's transaction. From this point on, the FRAG price will not change and the FRAG holder can exit at any time."),Object(a.b)("p",null,"It is important to note that buying up the DODO NFT Vault is not a mandatory process and the creator of the DODO NFT Vault can set a protection period to waive the buyout option, or even choose not to buyout the DODO NFT Vault."),Object(a.b)("p",null,"Click ",Object(a.b)("a",{parentName:"p",href:"http://dodonft.io"},"dodonft.io")," to see how DODO NFT works."))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,O=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?r.a.createElement(O,l(l({ref:t},u),{},{components:n})):r.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);