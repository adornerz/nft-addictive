(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},38:function(e,t,a){e.exports=a.p+"static/media/logo.8af92279.jpeg"},39:function(e,t,a){e.exports=a.p+"static/media/hero-image.6fd2e69b.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},42:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(24),l=a.n(n),s=a(11),c=a(6),o=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(o.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),p=a(18),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(d.a)(a,2),l=n[0],s=n[1],c=Object(i.useState)([]),o=Object(d.a)(c,2),m=o[0],u=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),b()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[l]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var h=b,f=a(14),E=a(1),g=a.n(E),N=a(9),O=function(e){var t=e.className,a=e.src,n=e.width,l=e.height,s=e.alt,c=Object(o.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},c,{ref:b,className:t,src:a,width:n,height:l,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,y=function(e){var t=e.className,i=Object(o.a)(e,["className"]),n=g()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:n}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(w,{src:a(38),alt:"Open",width:48,height:48}))))},j=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,l=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,m=Object(o.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],b=v[1],h=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useRef)();Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",w),document.addEventListener("click",j),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",j),O()}}));var E=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",b(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),b(!1)},w=function(e){p&&27===e.keyCode&&O()},j=function(e){h.current&&p&&!h.current.contains(e.target)&&e.target!==f.current&&O()},x=g()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:x}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-header-inner",c&&"has-bottom-divider")},r.a.createElement(y,null),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?O:E},r.a.createElement("span",{className:"screen-reader"}," Menu "),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:h,className:g()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(N.a,{to:"/collaborations",onClick:function(){return m.galleryRef.current.scrollIntoView()}}," Gallery "))),!l&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"/contact",className:"button button-primary button-wide-mobile button-sm",onClick:O}," Contact Us")))))))))};j.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=j,D=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}))},k=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/nft.addictive"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://instagram.com/nft.addictive"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},C=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(o.a)(e,["className","topOuterDivider","topDivider"]),l=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},n,{className:l}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(y,null),r.a.createElement(k,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(D,null),r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"https://nftaddictive.com"},"nft.addictive"),". All right reserved")))))};C.defaultProps={topOuterDivider:!1,topDivider:!1};var L=C,T=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"site-content"},t))},B=a(5),S={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},F={types:Object(B.a)({},S.types),defaults:Object(B.a)({},S.defaults)},A=(Object(B.a)({},S.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),Object(B.a)({},S.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1}),{types:Object(B.a)({},S.types,{pushLeft:v.a.bool}),defaults:Object(B.a)({},S.defaults,{pushLeft:!1})}),P=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},I=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,l=e.loading,s=e.wide,c=e.wideMobile,m=e.disabled,d=Object(o.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),n&&"button-".concat(n),l&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};I.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var R=I,z=Object(B.a)({},F.defaults),H=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),h=(b[0],b[1],g()("hero section center-content",n&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t)),f=g()("hero-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:h}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:f},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"nft.addictive club"),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"A big ",r.a.createElement("span",{className:"text-color-primary"}," NFT community ")," with over",r.a.createElement("span",{className:"text-color-secondary"}," 110,000 ")," followers on instagram and with well over 40 NFT collection participations"),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(P,null,r.a.createElement(R,{tag:"a",color:"primary",wideMobile:!0,href:"https://instagram.com/nft.addictive"},"Check Out Our Instagram"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement(w,{className:"has-shadow",src:a(39),alt:"Hero",width:896,height:504})))))};H.defaultProps=z;var M=H,_=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,l=Object(o.a)(e,["className","data","children","tag"]),s=g()("section-header",t),c=n;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},l,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(c,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};_.defaultProps={children:null,tag:"h2"};var V=_,W=Object(B.a)({},A.defaults),G=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),p=g()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(V,{data:{title:"Build up the whole picture",paragraph:"Get to know us and our work"},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(40),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"5-Star Cooperation"),r.a.createElement("p",{className:"m-0 text-sm"},"Friendly and productive, talking with us will be an easy task!")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(41),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Our work is definedy by quality, we always make sure to give our best!")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(42),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Global Coverage"),r.a.createElement("p",{className:"m-0 text-sm"},"We work with artists and NFT traders from all around the world!"))))))))};G.defaultProps=W;var q=G,K=Object(B.a)({},A.defaults),U=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(V,{data:{title:"Customer testimonials",paragraph:"We let our work talk for us."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Working with nft.addictive was a great experience and I'm looking forward to working more in the future!")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"}," Levy Rozman "),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"}," BAYC "))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 I'm impressed by nft.addictive's community they built, really awesome people.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"}," NFTxFASHION "))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Ball")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"}," Testicle ")))))))))};U.defaultProps=K;var Y=U,J=a(27),$=a.n(J),Q=(a(55),[{imgTitle:"nftxfashion.png",title:"NFTxFASHION",comment:"Very Epic Indeed"},{imgTitle:"eliteDoge.png",title:"Elite Doge YC",comment:"Indeed Very Epic"},{imgTitle:"ball.jpg",title:"Balls",comment:"Indeed Very Epic"},{imgTitle:"mouse.jpeg",title:"EpicMouses",comment:"Indeed Very Epic"},{imgTitle:"cryptopunk.png",title:"Cryptopunk",comment:"Indeed Very Epic"},{imgTitle:"bayc.jpeg",title:"Bored Ape Yacht Club",comment:"Very Epic"}]),X={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},Z={title:{fontSize:"12px",height:"2rem",margin:"0px",paddingBottom:"2rem"},comment:{fontSize:"10px"},container:{display:"flex",flexDirection:"column",padding:"3px"},image:{maxHeight:"700px"}},ee=function(){return r.a.createElement($.a,{responsive:X},Q.map((function(e,t){var a=e.imgTitle,i=e.title,n=e.comment;return r.a.createElement("div",{style:Z.container},r.a.createElement("img",{style:Z.image,src:"assets/images/".concat(a)}),r.a.createElement("h1",{style:Z.title}," ",i," "),r.a.createElement("p",{style:Z.comment}," ",n," "))})))},te={h1:{margin:"0px"},container:{display:"flex",flexDirection:"column",alignItems:"center"}},ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:te.container},r.a.createElement("h1",{style:te.h1}," Gallery "),r.a.createElement("p",null," NFTs we own/owned & more. ")),r.a.createElement(ee,null))},ie=Object(B.a)({},F.defaults,{split:!1}),re={button:{margin:"6px"}},ne=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.split,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("cta-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"For collaborating contact us on:")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(R,{tag:"a",href:"https://instagram.com/nft.addictive",style:re.button,color:"dark"}," Instagram "),r.a.createElement(R,{tag:"a",color:"dark",style:re.button}," Discord: amogus#6969 "),r.a.createElement(R,{tag:"a",color:"dark",style:re.button}," Email: nft.addictive@gmail.com ")))))};ne.defaultProps=ie;var le=ne,se=function(){var e=Object(i.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom",galleryRef:e}),r.a.createElement(M,{className:"illustration-section-01"}),r.a.createElement(q,null),r.a.createElement(Y,{topDivider:!0}),r.a.createElement(ae,{ref:e}),r.a.createElement(le,null),r.a.createElement(L,null))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/nft-addictive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ce=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),r.a.createElement(h,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(m,{exact:!0,path:"/",component:se,layout:T}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);var oe=Object(c.a)();l.a.render(r.a.createElement(s.b,{history:oe},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.fa5f6268.chunk.js.map