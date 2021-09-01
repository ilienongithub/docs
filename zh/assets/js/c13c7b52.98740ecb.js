(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(112)),c={id:"nftTechSpec",title:"DODO NFT \u6280\u672f\u8bf4\u660e",sidebar_label:"DODO NFT \u6280\u672f\u8bf4\u660e"},o={unversionedId:"nftTechSpec",id:"nftTechSpec",isDocsHomePage:!1,title:"DODO NFT \u6280\u672f\u8bf4\u660e",description:"DODONFT \u76f8\u5173\u5408\u7ea6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/nftTechSpec.md",slug:"/nftTechSpec",permalink:"/docs/zh/docs/nftTechSpec",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/nftTechSpec.md",version:"current",sidebar_label:"DODO NFT \u6280\u672f\u8bf4\u660e",sidebar:"someSidebar",previous:{title:"DODO NFT\u7684\u6838\u5fc3\u529f\u80fd",permalink:"/docs/zh/docs/nftCoreFeatures"},next:{title:"DODO\uff1a\u7075\u6d3b\u7684\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\u5e73\u53f0",permalink:"/docs/zh/docs/ThisIsDODO"}},b=[{value:"DODONFT \u76f8\u5173\u5408\u7ea6",id:"dodonft-\u76f8\u5173\u5408\u7ea6",children:[]},{value:"DODONFT \u5408\u7ea6\u6982\u89c8\u56fe",id:"dodonft-\u5408\u7ea6\u6982\u89c8\u56fe",children:[]},{value:"\u4e3b\u8981\u6d41\u7a0b",id:"\u4e3b\u8981\u6d41\u7a0b",children:[{value:"\u521b\u5efaVault",id:"\u521b\u5efavault",children:[]},{value:"\u5bfc\u5165NFT",id:"\u5bfc\u5165nft",children:[]},{value:"\u788e\u7247\u5316",id:"\u788e\u7247\u5316",children:[]},{value:"\u4e70\u65ad",id:"\u4e70\u65ad",children:[]},{value:"\u8d4e\u56de",id:"\u8d4e\u56de",children:[]}]}],i={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"dodonft-\u76f8\u5173\u5408\u7ea6"},"DODONFT \u76f8\u5173\u5408\u7ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u5408\u7ea6\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u76ee\u5f55"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DODONFTProxy"),Object(l.b)("td",{parentName:"tr",align:null},"contracts/SmartRoute/proxies/")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NFTCollateralVault"),Object(l.b)("td",{parentName:"tr",align:null},"contracts/CollateralVault/")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Fragment"),Object(l.b)("td",{parentName:"tr",align:null},"contracts/GeneralizedFragment/")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DODONFTRegistry"),Object(l.b)("td",{parentName:"tr",align:null},"contracts/Factory/Registries/")))),Object(l.b)("h2",{id:"dodonft-\u5408\u7ea6\u6982\u89c8\u56fe"},"DODONFT \u5408\u7ea6\u6982\u89c8\u56fe"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dodonft_framework.png",alt:null})),Object(l.b)("h2",{id:"\u4e3b\u8981\u6d41\u7a0b"},"\u4e3b\u8981\u6d41\u7a0b"),Object(l.b)("h3",{id:"\u521b\u5efavault"},"\u521b\u5efaVault"),Object(l.b)("p",null,"\u9996\u5148\u7528\u6237\u901a\u8fc7\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"DODONFTProxy"),"\u5408\u7ea6\u4e2d\u7684",Object(l.b)("inlineCode",{parentName:"p"},"createNFTCollateralVault"),"\u51fd\u6570\uff0c\u521b\u5efa\u65b0\u7684Vault\u5408\u7ea6\uff0cVault\u5408\u7ea6\u7528\u6765\u5b58\u653eNFT\uff0c\u517c\u5bb9ERC721\uff0cERC1155\u3002\u5e76\u4e14\u53ef\u4ee5\u4e3aVault\u8bbe\u7f6e\u5168\u5c40\u7684\u540d\u79f0\u4ee5\u53cabaseURI\uff0cbaseURI\u53ef\u4ee5\u6307\u5411\u8d44\u6e90\u6587\u4ef6\uff0c\u4f5c\u4e3aVault\u7684\u4ecb\u7ecd\u4fe1\u606f"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"function createNFTCollateralVault(string memory name, string memory baseURI) external returns (address newVault);\n")),Object(l.b)("h3",{id:"\u5bfc\u5165nft"},"\u5bfc\u5165NFT"),Object(l.b)("p",null,"\u521b\u5efa\u7684Vault\u5408\u7ea6\u7528\u6765\u5b58\u653eNFT\uff0c\u7528\u6237\u53ef\u4ee5\u5b58\u5165ERC721\uff0cERC1155\uff0c\u4e14\u6ca1\u6709\u4efb\u4f55\u6570\u91cf\u9650\u5236\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2aNFT\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a\u3002\u5b58\u5165\u7684NFT\u88abVault\u5408\u7ea6\u7684owner\u6240\u62e5\u6709\uff0cowner\u6709\u6743\u5229\u4ee5Vault\u4e3a\u5355\u4f4d\uff0c\u8fdb\u884c\u6574\u4f53\u7684\u788e\u7247\u5316\u64cd\u4f5c"),Object(l.b)("p",null,"\u82e5\u7528\u6237\u5411Vault\u5b58\u5165ERC721\uff0c\u9700\u8981\u5c06ERC721\u6388\u6743\u7ed9Vault\u5408\u7ea6\uff0c\u7b2c\u4e8c\u6b65\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"NFTCollateralVault"),"\u7684",Object(l.b)("inlineCode",{parentName:"p"},"depositERC721"),"\u51fd\u6570, \u4f20\u5165\u7684\u53c2\u6570\u5305\u62ecERC721\u5408\u7ea6\u5730\u5740\uff0c\u4ee5\u53ca\u5b58\u5165\u7684tokenId\u6570\u7ec4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"function depositERC721(address nftContract, uint256[] memory tokenIds) external;\n")),Object(l.b)("p",null,"\u82e5\u7528\u6237\u5411Vault\u5b58\u5165ERC1155\uff0c\u9700\u8981\u5c06ERC1155\u6388\u6743\u7ed9Vault\u5408\u7ea6\uff0c\u7b2c\u4e8c\u6b65\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"NFTCollateralVault"),"\u7684",Object(l.b)("inlineCode",{parentName:"p"},"depositERC1155"),"\u51fd\u6570\uff0c\u4f20\u5165\u7684\u53c2\u6570\u5305\u62ecERC1155\u5408\u7ea6\u5730\u5740\uff0c\u4ee5\u53ca\u5b58\u5165\u7684tokenId\u6570\u7ec4\u548c\u5bf9\u5e94\u7684\u6570\u91cf"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"function depoistERC1155(address nftContract, uint256[] memory tokenIds, uint256[] memory amounts) external;\n")),Object(l.b)("h3",{id:"\u788e\u7247\u5316"},"\u788e\u7247\u5316"),Object(l.b)("p",null,"\u788e\u7247\u5316\u662f\u9488\u5bf9Vault\u4e2d\u5bfc\u5165\u7684NFT\u8fdb\u884c\u7edf\u4e00\u7684\u788e\u7247\u5316\u64cd\u4f5c\uff0c\u80cc\u540e\u7684\u6d41\u7a0b\u5305\u62ec\u751f\u6210ERC20\uff0c\u5e76\u521b\u5efa",Object(l.b)("a",{parentName:"p",href:"./publicPool"},"DODO Vending Machine\u516c\u5f00\u6c60"),"\uff0c\u540c\u65f6\u5411\u6c60\u5b50\u6dfb\u52a0\u6d41\u52a8\u6027\uff0c\u5411\u4e8c\u7ea7\u5e02\u573a\u63d0\u4f9b\u4e86\u6d41\u901a\uff0c\u88abDODO DEX\u805a\u5408\u540e\uff0c\u53ef\u4ee5\u5b9e\u73b0\u4efb\u610f\u5e01\u4e0e\u788e\u7247\u5316ERC20\u4ee3\u5e01\u4e92\u6362\u3002\u540c\u65f6\u788e\u7247\u5316\u4e5f\u6d89\u53ca\u5230Vault\u5408\u7ea6owner\u8f6c\u79fb\u7ed9\u788e\u7247\u5316\u5408\u7ea6\u7684\u8fc7\u7a0b\uff0c\u5373\u7ecf\u8fc7\u788e\u7247\u5316\u540e\uff0cVault\u4e2d\u7684NFT\u6ca1\u6709\u4efb\u4f55\u4eba\u53ef\u4ee5\u63d0\u53d6\uff0c\u786e\u4fdd\u788e\u7247\u5316\u7684ERC20\u4ee3\u8868\u7740Vault\u4e2d\u7684\u5168\u90e8NFT\u3002"),Object(l.b)("p",null,"\u788e\u7247\u5316\u9700\u8981\u7531Vault\u7684owner\u89e6\u53d1\uff0c\u901a\u8fc7\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"NFTCollateralVault"),"\u4e2d\u7684",Object(l.b)("inlineCode",{parentName:"p"},"createFragment"),"\u51fd\u6570\u5b9e\u73b0"),Object(l.b)("h3",{id:"\u4e70\u65ad"},"\u4e70\u65ad"),Object(l.b)("p",null,"\u7ecf\u8fc7\u788e\u7247\u5316\u7684NFT\uff0c\u5c06\u4f1a\u5728\u4e8c\u7ea7\u5e02\u573a\u6d41\u901a\uff0c\u62e5\u6709\u788e\u7247\u4ee3\u5e01\u7684\u4eba\uff0c\u4ee3\u8868\u4e86\u62e5\u6709\u80cc\u540eNFT\u7684\u4e00\u90e8\u5206\u3002\u82e5\u6295\u8d44\u4eba\u5e0c\u671b\u5b8c\u5168\u62e5\u6709NFT\uff0c\u5219\u53ef\u4ee5\u89e6\u53d1\u4e70\u65ad\u7684\u529f\u80fd\uff0c\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"DODONFTProxy"),"\u7684",Object(l.b)("inlineCode",{parentName:"p"},"buyout"),"\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"function buyout(\n    address fragment,\n    uint256 quoteMaxAmount,\n    uint8 flag, // 0 - ERC20, 1 - quoteInETH\n    uint256 deadLine\n) external;\n")),Object(l.b)("p",null,"\u6295\u8d44\u4eba\u9700\u8981\u6309\u7167\u5f53\u524d\u788e\u7247NFT\u7684\u5355\u4ef7\uff0c\u4e58\u4e0a\u603b\u91cf\uff0c\u63d0\u4f9b\u5bf9\u5e94\u603b\u4f30\u503c\u7684\u4ee3\u5e01\uff0c\u624d\u53ef\u4ee5\u8fdb\u884c\u4e70\u65ad\u3002\u4e70\u65ad\u6d89\u53ca\u5230\u64cd\u4f5c\u5305\u62ec"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6295\u8d44\u4eba\u5145\u5165\u5f53\u524d\u788e\u7247NFT\u5bf9\u5e94\u7684\u603b\u4f30\u503c\u4ee3\u5e01")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u64a4\u6389\u5f53\u524d\u788e\u7247\u4ee3\u5e01\u7684\u6d41\u52a8\u6027\u6c60\uff0c\u9500\u6bc1\u6d41\u52a8\u6027\u6c60\u4e2d\u7684\u788e\u7247\u5316\u4ee3\u5e01")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5206\u914d\u6295\u5165\u7684\u4ee3\u5e01\uff0c\u5305\u62ec\u5411\u539fNFT\u4f5c\u8005\u652f\u4ed8\u672a\u6d41\u901a\u90e8\u5206\u7684\u4ee3\u5e01\u5e02\u503c\uff0c\u5269\u4e0b\u7684\u6295\u5165\u4ee3\u5e01\u9884\u7559\u5728",Object(l.b)("inlineCode",{parentName:"p"},"Fragment"),"\u5408\u7ea6\u5185\uff0c\u4f9b\u4e8c\u7ea7\u5e02\u573a\u6301\u6709\u788e\u7247NFT\u4ee3\u5e01\u7684\u7528\u6237\u6765\u6309\u7167\u4e70\u65ad\u4ef7\u683c\u7b49\u503c\u8d4e\u56de")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8f6c\u79fbVault owner\u4e3a\u4e70\u65ad\u8005\uff0c\u4e70\u65ad\u8005\u53ef\u4ee5\u540e\u7eed\u5c06Vault\u4e2d\u7684NFT\u8f6c\u51fa\uff0c\u5f53\u7136\u53ef\u4ee5\u518d\u6b21\u788e\u7247\u5316\uff0c\u518d\u6b21\u788e\u7247\u5316\u5c06\u4f1a\u521b\u5efa\u65b0\u7684ERC20\u4ee5\u53ca\u65b0\u7684\u6d41\u52a8\u6027\u6c60"))),Object(l.b)("h3",{id:"\u8d4e\u56de"},"\u8d4e\u56de"),Object(l.b)("p",null,"\u82e5\u7ecf\u8fc7\u4e70\u65ad\u540e\uff0c\u539f\u4e8c\u7ea7\u5e02\u573a\u6d41\u901a\u7684\u788e\u7247NFT\u62e5\u6709\u8005\uff0c\u53ef\u4ee5\u6309\u7167\u4e70\u65ad\u65f6\u7684\u5355\u4ef7\uff0c\u7b49\u503c\u8fdb\u884c\u4ee3\u5e01\u8d4e\u56de\uff0c\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"Fragment"),"\u5408\u7ea6\u5185\u7684",Object(l.b)("inlineCode",{parentName:"p"},"redeem"),"\u51fd\u6570\uff0c\u5c06\u81ea\u5df1\u624b\u4e2d\u7684\u788e\u7247NFT\u9500\u6bc1\uff0c\u6362\u53d6\u7b49\u503c\u7684\u4ee3\u5e01"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"function redeem(address to, bytes calldata data) external;\n")))}u.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,m=p["".concat(c,".").concat(O)]||p[O]||d[O]||l;return n?a.a.createElement(m,o(o({ref:t},i),{},{components:n})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);