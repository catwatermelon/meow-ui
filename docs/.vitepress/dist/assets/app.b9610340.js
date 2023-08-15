import{Q as ne,h as L,g as et,l as oe,_ as b,o as v,c as k,k as w,d as J,b as nt,w as N,a0 as se,H as ie,G as ce,n as ct,L as re,t as vt,a1 as ae,a2 as Vt,r as j,O as Dt,X as Nt,a3 as pt,a4 as mt,T as Mt,u as Ht,N as le,x as de,F as B,K as V,e as At,p as ue,m as fe,B as ht,a5 as pe,a6 as me,a7 as he,a8 as ge,a9 as _e,aa as we,ab as ve,ac as ye,ad as xe,ae as Ce,af as be,j as $e,y as ke,ag as Ae,ah as Le,ai as Re}from"./chunks/framework.1b0bd405.js";import{u as Te,i as Ee,t as Lt}from"./chunks/theme.a1987b54.js";const Rt="demoblock",Be="is-",D=(t,n,e,o,s)=>{let i=`${t}-${n}`;return e&&(i+=`-${e}`),o&&(i+=`__${o}`),s&&(i+=`--${s}`),i},Fe=Symbol("namespaceContextKey"),Pe=t=>{const n=t||ne(Fe,L(Rt));return et(()=>oe(n)||Rt)},Oe=(t,n)=>{const e=Pe(n);return{namespace:e,b:(a="")=>D(e.value,t,a,"",""),e:a=>a?D(e.value,t,"",a,""):"",m:a=>a?D(e.value,t,"","",a):"",be:(a,p)=>a&&p?D(e.value,t,a,p,""):"",em:(a,p)=>a&&p?D(e.value,t,"",a,p):"",bm:(a,p)=>a&&p?D(e.value,t,a,"",p):"",bem:(a,p,_)=>a&&p&&_?D(e.value,t,a,p,_):"",is:(a,...p)=>{const _=p.length>=1?p[0]:!0;return a&&_?`${Be}${a}`:""},cssVar:a=>{const p={};for(const _ in a)a[_]&&(p[`--${e.value}-${_}`]=a[_]);return p},cssVarName:a=>`--${e.value}-${a}`,cssVarBlock:a=>{const p={};for(const _ in a)a[_]&&(p[`--${e.value}-${t}-${_}`]=a[_]);return p},cssVarBlockName:a=>`--${e.value}-${t}-${a}`}};function Se(t){return btoa(unescape(encodeURIComponent(t)))}const Ve="App.vue",De=t=>{const n=decodeURIComponent(t),e={[Ve]:n},o=Se(JSON.stringify(e)),s=`https://play.vuejs.org/#${o}`;return{encoded:o,link:s}},Ne={name:"FluentCheckmarkCircle16Filled"},Me={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},He=w("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.12 4.164L7.25 9.042L5.854 7.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0l3.224-3.234a.5.5 0 0 0-.708-.706Z"},null,-1),Ie=[He];function Ze(t,n,e,o,s,i){return v(),k("svg",Me,Ie)}const We=b(Ne,[["render",Ze]]),Ge={name:"FluentDismissCircle16Filled"},je={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},Xe=w("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2ZM6.534 5.839a.5.5 0 0 0-.638.057l-.057.07a.5.5 0 0 0 .057.638L7.293 8L5.896 9.396l-.057.07a.5.5 0 0 0 .057.638l.07.057a.5.5 0 0 0 .638-.057L8 8.707l1.396 1.397l.07.057a.5.5 0 0 0 .638-.057l.057-.07a.5.5 0 0 0-.057-.638L8.707 8l1.397-1.396l.057-.07a.5.5 0 0 0-.057-.638l-.07-.057a.5.5 0 0 0-.638.057L8 7.293L6.604 5.896l-.07-.057Z"},null,-1),Ue=[Xe];function Ke(t,n,e,o,s,i){return v(),k("svg",je,Ue)}const Ye=b(Ge,[["render",Ke]]),ze={name:"FluentErrorCircle16Filled"},Je={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},Qe=w("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 8a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Zm0-5.5a.5.5 0 0 0-.492.41L7.5 5v3.5l.008.09a.5.5 0 0 0 .984 0L8.5 8.5V5l-.008-.09A.5.5 0 0 0 8 4.5Z"},null,-1),qe=[Qe];function tn(t,n,e,o,s,i){return v(),k("svg",Je,qe)}const en=b(ze,[["render",tn]]);let nn=0;function on(){return"message_"+nn++}const sn=J({components:{FluentCheckmarkCircle16Filled:We,FluentDismissCircle16Filled:Ye,FluentErrorCircle16Filled:en},setup(){const t={info:"FluentErrorCircle16Filled",success:"FluentCheckmarkCircle16Filled",warning:"FluentDismissCircle16Filled",error:"FluentErrorCircle16Filled"},n=L([]);function e(s){const i=on(),c={name:i,show:!0,...s};n.value.push(c);const r=s.duration;setTimeout(()=>{o(i)},r*1e3)}function o(s){for(const[i,c]of n.value.entries())if(c.name===s){n.value.splice(i,1);break}}return{components:t,messages:n,add:e,remove:o}}}),cn={class:"demoblock-message-content"};function rn(t,n,e,o,s,i){return v(),nt(se,{name:"demoblock-fade-transition",tag:"div",class:"demoblock-messages"},{default:N(()=>[(v(!0),k(ce,null,ie(t.messages,c=>(v(),k("div",{key:c.name,class:"demoblock-message-wrap"},[w("div",{class:ct(["demoblock-message",c.type?`demoblock-message--${c.type}`:""])},[(v(),nt(re(t.components[c.type]),{class:"demoblock-message-icon"})),w("div",cn,vt(c.content),1)],2)]))),128))]),_:1})}const gt=b(sn,[["render",rn],["__scopeId","data-v-6f8b0179"]]);gt.newInstance=(t={})=>{const n=document.createElement("div"),s=ae({render(){return Vt(gt,{...t,ref:"messageRef"})}}).mount(n).$refs.messageRef;return document.body.appendChild(n.firstElementChild),{add(i){s.add(i)},remove(i){s.remove(i)}}};let ft;function an(){return ft=ft||gt.newInstance(),ft}function tt(t,{duration:n=3,type:e=""}){an().add({content:t,duration:n,type:e})}const Tt={info(t,n){return tt(t,{...n,type:"info"})},warning(t,n){return tt(t,{...n,type:"warning"})},success(t,n){return tt(t,{...n,type:"success"})},error(t,n){return tt(t,{...n,type:"error"})}},ln={name:"RiFlaskLine"},dn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},un=w("path",{fill:"currentColor",d:"M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.281 9.276A1.5 1.5 0 0 1 18.655 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.281-9.276A8 8 0 0 0 9 7.243V4H8V2h8Zm-2.613 8.001h-2.776a9.986 9.986 0 0 1-.374 1.071l-.158.362L6.124 20h11.75l-3.954-8.566A9.99 9.99 0 0 1 13.387 10ZM11 7.243c0 .253-.01.506-.028.758h2.057a9.59 9.59 0 0 1-.02-.364L13 7.243V4h-2v3.243Z"},null,-1),fn=[un];function pn(t,n,e,o,s,i){return v(),k("svg",dn,fn)}const mn=b(ln,[["render",pn]]),hn={name:"RiGithubLine"},gn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},_n=w("path",{fill:"currentColor",d:"M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"},null,-1),wn=[_n];function vn(t,n,e,o,s,i){return v(),k("svg",gn,wn)}const yn=b(hn,[["render",vn]]),xn={name:"RiFileCopyLine"},Cn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},bn=w("path",{fill:"currentColor",d:"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z"},null,-1),$n=[bn];function kn(t,n,e,o,s,i){return v(),k("svg",Cn,$n)}const An=b(xn,[["render",kn]]),Ln={name:"RiCodeLine"},Rn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Tn=w("path",{fill:"currentColor",d:"m23 12l-7.071 7.07l-1.414-1.413L20.172 12l-5.657-5.657l1.414-1.414L23 11.999ZM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12Z"},null,-1),En=[Tn];function Bn(t,n,e,o,s,i){return v(),k("svg",Rn,En)}const Fn=b(Ln,[["render",Bn]]),Pn={name:"EpCaretTop"},On={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024"},Sn=w("path",{fill:"currentColor",d:"M512 320L192 704h639.936z"},null,-1),Vn=[Sn];function Dn(t,n,e,o,s,i){return v(),k("svg",On,Vn)}const Nn=b(Pn,[["render",Dn]]),_t=Math.min,Z=Math.max,ot=Math.round,F=t=>({x:t,y:t}),Mn={left:"right",right:"left",bottom:"top",top:"bottom"},Hn={start:"end",end:"start"};function Et(t,n,e){return Z(t,_t(n,e))}function rt(t,n){return typeof t=="function"?t(n):t}function M(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function It(t){return t==="x"?"y":"x"}function Zt(t){return t==="y"?"height":"width"}function lt(t){return["top","bottom"].includes(M(t))?"y":"x"}function Wt(t){return It(lt(t))}function In(t,n,e){e===void 0&&(e=!1);const o=at(t),s=Wt(t),i=Zt(s);let c=s==="x"?o===(e?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[i]>n.floating[i]&&(c=st(c)),[c,st(c)]}function Zn(t){const n=st(t);return[wt(t),n,wt(n)]}function wt(t){return t.replace(/start|end/g,n=>Hn[n])}function Wn(t,n,e){const o=["left","right"],s=["right","left"],i=["top","bottom"],c=["bottom","top"];switch(t){case"top":case"bottom":return e?n?s:o:n?o:s;case"left":case"right":return n?i:c;default:return[]}}function Gn(t,n,e,o){const s=at(t);let i=Wn(M(t),e==="start",o);return s&&(i=i.map(c=>c+"-"+s),n&&(i=i.concat(i.map(wt)))),i}function st(t){return t.replace(/left|right|bottom|top/g,n=>Mn[n])}function jn(t){return{top:0,right:0,bottom:0,left:0,...t}}function Xn(t){return typeof t!="number"?jn(t):{top:t,right:t,bottom:t,left:t}}function it(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Bt(t,n,e){let{reference:o,floating:s}=t;const i=lt(n),c=Wt(n),r=Zt(c),l=M(n),d=i==="y",m=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,g=o[r]/2-s[r]/2;let f;switch(l){case"top":f={x:m,y:o.y-s.height};break;case"bottom":f={x:m,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-s.width,y:u};break;default:f={x:o.x,y:o.y}}switch(at(n)){case"start":f[c]-=g*(e&&d?-1:1);break;case"end":f[c]+=g*(e&&d?-1:1);break}return f}const Un=async(t,n,e)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:c}=e,r=i.filter(Boolean),l=await(c.isRTL==null?void 0:c.isRTL(n));let d=await c.getElementRects({reference:t,floating:n,strategy:s}),{x:m,y:u}=Bt(d,o,l),g=o,f={},h=0;for(let a=0;a<r.length;a++){const{name:p,fn:_}=r[a],{x:y,y:C,data:E,reset:x}=await _({x:m,y:u,initialPlacement:o,placement:g,strategy:s,middlewareData:f,rects:d,platform:c,elements:{reference:t,floating:n}});if(m=y??m,u=C??u,f={...f,[p]:{...f[p],...E}},x&&h<=50){h++,typeof x=="object"&&(x.placement&&(g=x.placement),x.rects&&(d=x.rects===!0?await c.getElementRects({reference:t,floating:n,strategy:s}):x.rects),{x:m,y:u}=Bt(d,g,l)),a=-1;continue}}return{x:m,y:u,placement:g,strategy:s,middlewareData:f}};async function Gt(t,n){var e;n===void 0&&(n={});const{x:o,y:s,platform:i,rects:c,elements:r,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=rt(n,t),h=Xn(f),p=r[g?u==="floating"?"reference":"floating":u],_=it(await i.getClippingRect({element:(e=await(i.isElement==null?void 0:i.isElement(p)))==null||e?p:p.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(r.floating)),boundary:d,rootBoundary:m,strategy:l})),y=u==="floating"?{...c.floating,x:o,y:s}:c.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(r.floating)),E=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},x=it(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:C,strategy:l}):y);return{top:(_.top-x.top+h.top)/E.y,bottom:(x.bottom-_.bottom+h.bottom)/E.y,left:(_.left-x.left+h.left)/E.x,right:(x.right-_.right+h.right)/E.x}}const Kn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var e;const{placement:o,middlewareData:s,rects:i,initialPlacement:c,platform:r,elements:l}=n,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:h=!0,...a}=rt(t,n),p=M(o),_=M(c)===c,y=await(r.isRTL==null?void 0:r.isRTL(l.floating)),C=u||(_||!h?[st(c)]:Zn(c));!u&&f!=="none"&&C.push(...Gn(c,h,f,y));const E=[c,...C],x=await Gt(n,a),q=[];let U=((e=s.flip)==null?void 0:e.overflows)||[];if(d&&q.push(x[p]),m){const S=In(o,i,y);q.push(x[S[0]],x[S[1]])}if(U=[...U,{placement:o,overflows:q}],!q.every(S=>S<=0)){var Ct,bt;const S=(((Ct=s.flip)==null?void 0:Ct.index)||0)+1,kt=E[S];if(kt)return{data:{index:S,overflows:U},reset:{placement:kt}};let K=(bt=U.filter(H=>H.overflows[0]<=0).sort((H,I)=>H.overflows[1]-I.overflows[1])[0])==null?void 0:bt.placement;if(!K)switch(g){case"bestFit":{var $t;const H=($t=U.map(I=>[I.placement,I.overflows.filter(Y=>Y>0).reduce((Y,ee)=>Y+ee,0)]).sort((I,Y)=>I[1]-Y[1])[0])==null?void 0:$t[0];H&&(K=H);break}case"initialPlacement":K=c;break}if(o!==K)return{reset:{placement:K}}}return{}}}};async function Yn(t,n){const{placement:e,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),c=M(e),r=at(e),l=lt(e)==="y",d=["left","top"].includes(c)?-1:1,m=i&&l?-1:1,u=rt(n,t);let{mainAxis:g,crossAxis:f,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return r&&typeof h=="number"&&(f=r==="end"?h*-1:h),l?{x:f*m,y:g*d}:{x:g*d,y:f*m}}const zn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){const{x:e,y:o}=n,s=await Yn(n,t);return{x:e+s.x,y:o+s.y,data:s}}}},Jn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:e,y:o,placement:s}=n,{mainAxis:i=!0,crossAxis:c=!1,limiter:r={fn:p=>{let{x:_,y}=p;return{x:_,y}}},...l}=rt(t,n),d={x:e,y:o},m=await Gt(n,l),u=lt(M(s)),g=It(u);let f=d[g],h=d[u];if(i){const p=g==="y"?"top":"left",_=g==="y"?"bottom":"right",y=f+m[p],C=f-m[_];f=Et(y,f,C)}if(c){const p=u==="y"?"top":"left",_=u==="y"?"bottom":"right",y=h+m[p],C=h-m[_];h=Et(y,h,C)}const a=r.fn({...n,[g]:f,[u]:h});return{...a,data:{x:a.x-e,y:a.y-o}}}}};function P(t){return jt(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function O(t){var n;return(n=(jt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function jt(t){return t instanceof Node||t instanceof $(t).Node}function T(t){return t instanceof Element||t instanceof $(t).Element}function R(t){return t instanceof HTMLElement||t instanceof $(t).HTMLElement}function Ft(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function Q(t){const{overflow:n,overflowX:e,overflowY:o,display:s}=A(t);return/auto|scroll|overlay|hidden|clip/.test(n+o+e)&&!["inline","contents"].includes(s)}function Qn(t){return["table","td","th"].includes(P(t))}function yt(t){const n=xt(),e=A(t);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!n&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!n&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(e.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(e.contain||"").includes(o))}function qn(t){let n=X(t);for(;R(n)&&!dt(n);){if(yt(n))return n;n=X(n)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function dt(t){return["html","body","#document"].includes(P(t))}function A(t){return $(t).getComputedStyle(t)}function ut(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){if(P(t)==="html")return t;const n=t.assignedSlot||t.parentNode||Ft(t)&&t.host||O(t);return Ft(n)?n.host:n}function Xt(t){const n=X(t);return dt(n)?t.ownerDocument?t.ownerDocument.body:t.body:R(n)&&Q(n)?n:Xt(n)}function Ut(t,n){var e;n===void 0&&(n=[]);const o=Xt(t),s=o===((e=t.ownerDocument)==null?void 0:e.body),i=$(o);return s?n.concat(i,i.visualViewport||[],Q(o)?o:[]):n.concat(o,Ut(o))}function Kt(t){const n=A(t);let e=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const s=R(t),i=s?t.offsetWidth:e,c=s?t.offsetHeight:o,r=ot(e)!==i||ot(o)!==c;return r&&(e=i,o=c),{width:e,height:o,$:r}}function Yt(t){return T(t)?t:t.contextElement}function W(t){const n=Yt(t);if(!R(n))return F(1);const e=n.getBoundingClientRect(),{width:o,height:s,$:i}=Kt(n);let c=(i?ot(e.width):e.width)/o,r=(i?ot(e.height):e.height)/s;return(!c||!Number.isFinite(c))&&(c=1),(!r||!Number.isFinite(r))&&(r=1),{x:c,y:r}}const to=F(0);function zt(t){const n=$(t);return!xt()||!n.visualViewport?to:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function eo(t,n,e){return n===void 0&&(n=!1),!e||n&&e!==$(t)?!1:n}function z(t,n,e,o){n===void 0&&(n=!1),e===void 0&&(e=!1);const s=t.getBoundingClientRect(),i=Yt(t);let c=F(1);n&&(o?T(o)&&(c=W(o)):c=W(t));const r=eo(i,e,o)?zt(i):F(0);let l=(s.left+r.x)/c.x,d=(s.top+r.y)/c.y,m=s.width/c.x,u=s.height/c.y;if(i){const g=$(i),f=o&&T(o)?$(o):o;let h=g.frameElement;for(;h&&o&&f!==g;){const a=W(h),p=h.getBoundingClientRect(),_=A(h),y=p.left+(h.clientLeft+parseFloat(_.paddingLeft))*a.x,C=p.top+(h.clientTop+parseFloat(_.paddingTop))*a.y;l*=a.x,d*=a.y,m*=a.x,u*=a.y,l+=y,d+=C,h=$(h).frameElement}}return it({width:m,height:u,x:l,y:d})}function no(t){let{rect:n,offsetParent:e,strategy:o}=t;const s=R(e),i=O(e);if(e===i)return n;let c={scrollLeft:0,scrollTop:0},r=F(1);const l=F(0);if((s||!s&&o!=="fixed")&&((P(e)!=="body"||Q(i))&&(c=ut(e)),R(e))){const d=z(e);r=W(e),l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}return{width:n.width*r.x,height:n.height*r.y,x:n.x*r.x-c.scrollLeft*r.x+l.x,y:n.y*r.y-c.scrollTop*r.y+l.y}}function oo(t){return Array.from(t.getClientRects())}function Jt(t){return z(O(t)).left+ut(t).scrollLeft}function so(t){const n=O(t),e=ut(t),o=t.ownerDocument.body,s=Z(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),i=Z(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let c=-e.scrollLeft+Jt(t);const r=-e.scrollTop;return A(o).direction==="rtl"&&(c+=Z(n.clientWidth,o.clientWidth)-s),{width:s,height:i,x:c,y:r}}function io(t,n){const e=$(t),o=O(t),s=e.visualViewport;let i=o.clientWidth,c=o.clientHeight,r=0,l=0;if(s){i=s.width,c=s.height;const d=xt();(!d||d&&n==="fixed")&&(r=s.offsetLeft,l=s.offsetTop)}return{width:i,height:c,x:r,y:l}}function co(t,n){const e=z(t,!0,n==="fixed"),o=e.top+t.clientTop,s=e.left+t.clientLeft,i=R(t)?W(t):F(1),c=t.clientWidth*i.x,r=t.clientHeight*i.y,l=s*i.x,d=o*i.y;return{width:c,height:r,x:l,y:d}}function Pt(t,n,e){let o;if(n==="viewport")o=io(t,e);else if(n==="document")o=so(O(t));else if(T(n))o=co(n,e);else{const s=zt(t);o={...n,x:n.x-s.x,y:n.y-s.y}}return it(o)}function Qt(t,n){const e=X(t);return e===n||!T(e)||dt(e)?!1:A(e).position==="fixed"||Qt(e,n)}function ro(t,n){const e=n.get(t);if(e)return e;let o=Ut(t).filter(r=>T(r)&&P(r)!=="body"),s=null;const i=A(t).position==="fixed";let c=i?X(t):t;for(;T(c)&&!dt(c);){const r=A(c),l=yt(c);!l&&r.position==="fixed"&&(s=null),(i?!l&&!s:!l&&r.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Q(c)&&!l&&Qt(t,c))?o=o.filter(m=>m!==c):s=r,c=X(c)}return n.set(t,o),o}function ao(t){let{element:n,boundary:e,rootBoundary:o,strategy:s}=t;const c=[...e==="clippingAncestors"?ro(n,this._c):[].concat(e),o],r=c[0],l=c.reduce((d,m)=>{const u=Pt(n,m,s);return d.top=Z(u.top,d.top),d.right=_t(u.right,d.right),d.bottom=_t(u.bottom,d.bottom),d.left=Z(u.left,d.left),d},Pt(n,r,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function lo(t){return Kt(t)}function uo(t,n,e){const o=R(n),s=O(n),i=e==="fixed",c=z(t,!0,i,n);let r={scrollLeft:0,scrollTop:0};const l=F(0);if(o||!o&&!i)if((P(n)!=="body"||Q(s))&&(r=ut(n)),o){const d=z(n,!0,i,n);l.x=d.x+n.clientLeft,l.y=d.y+n.clientTop}else s&&(l.x=Jt(s));return{x:c.left+r.scrollLeft-l.x,y:c.top+r.scrollTop-l.y,width:c.width,height:c.height}}function Ot(t,n){return!R(t)||A(t).position==="fixed"?null:n?n(t):t.offsetParent}function qt(t,n){const e=$(t);if(!R(t))return e;let o=Ot(t,n);for(;o&&Qn(o)&&A(o).position==="static";)o=Ot(o,n);return o&&(P(o)==="html"||P(o)==="body"&&A(o).position==="static"&&!yt(o))?e:o||qn(t)||e}const fo=async function(t){let{reference:n,floating:e,strategy:o}=t;const s=this.getOffsetParent||qt,i=this.getDimensions;return{reference:uo(n,await s(e),o),floating:{x:0,y:0,...await i(e)}}};function po(t){return A(t).direction==="rtl"}const mo={convertOffsetParentRelativeRectToViewportRelativeRect:no,getDocumentElement:O,getClippingRect:ao,getOffsetParent:qt,getElementRects:fo,getClientRects:oo,getDimensions:lo,getScale:W,isElement:T,isRTL:po},ho=(t,n,e)=>{const o=new Map,s={platform:mo,...e},i={...s.platform,_c:o};return Un(t,n,{...s,platform:i})};const go={props:{placement:{type:String,default:"top"},content:{type:String,default:""}},setup(t){const n=L(null),e=L(null),o=L(!1);function s(){ho(n.value,e.value,{placement:t.placement,middleware:[zn(11),Kn(),Jn()]}).then(({x:l,y:d,placement:m,middlewareData:u})=>{var g;Object.assign((g=e.value)==null?void 0:g.style,{left:0,top:0,transform:`translate(${l}px, ${d}px)`,willChange:"transform",pointerEvents:"none"})})}function i(){o.value=!0,s()}function c(){o.value=!1}return{reference:n,floating:e,showFloating:o,componentProps:{mouseenter:i,mouseleave:c,focus:i,blur:c},showTooltip:i}}},_o={class:"demoblock-tooltip"};function wo(t,n,e,o,s,i){return v(),k("div",_o,[w("div",Dt({ref:"reference",class:"demoblock-tooltip-trigger"},Nt(o.componentProps,!0)),[j(t.$slots,"default",{},void 0,!0)],16),pt(w("div",{ref:"floating",class:"demoblock-tooltip-content"},vt(e.content),513),[[mt,o.showFloating]])])}const vo=b(go,[["render",wo],["__scopeId","data-v-9b552ac5"]]),yo=J({setup(){return{ns:Oe("collapse-transition"),on:{beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}}}});function xo(t,n,e,o,s,i){return v(),nt(Mt,Dt({name:t.ns.b()},Nt(t.on)),{default:N(()=>[j(t.$slots,"default")]),_:3},16,["name"])}const Co=b(yo,[["render",xo]]);const bo={components:{RiFlaskLine:mn,RiGithubLine:yn,RiFileCopyLine:An,RiCodeLine:Fn,EpCaretTop:Nn,Tooltip:vo,CollapseTransition:Co},props:{customClass:String,sourceCode:String},setup(t){const{copy:n}=Te(),e=Ht(),o=le();de(()=>o.path,a=>{s.value=a.split("/")});const s=L(o.path.split("/")),i=et(()=>s.value[s.value.length-1].split(".")[0]),c=et(()=>`demo-${i.value}`),r=L(null),l=L(null),d=L(null),m=()=>{const{link:a}=De(t.sourceCode);Ee&&window.open(a)},u=L(!1),g=()=>{u.value=!u.value},f=et(()=>{var a;return((a=e.theme.value.demoblock)==null?void 0:a[e.localeIndex.value])??{"view-source":"查看源代码","hide-source":"隐藏源代码","edit-in-editor":"在 Playground 中编辑","edit-on-github":"在 Github 中编辑","copy-code":"复制代码","copy-success":"复制成功","copy-error":"复制失败"}});return{blockClass:c,locale:f,source:r,control:l,demoblock:d,isExpanded:u,onControlClick:g,onCopy:async()=>{try{n(t.sourceCode),Tt.success(f.value["copy-success"])}catch{Tt.error(f.value["copy-error"])}},onPlaygroundClick:m}}},$o=t=>(ue("data-v-c143f2f6"),t=t(),fe(),t),ko={class:"demoblock-view"},Ao=$o(()=>w("div",{class:"demoblock-divider demoblock-divider--horizontal"},null,-1)),Lo={class:"demoblock-op-btns"},Ro={ref:"source",class:"demoblock-source"},To={class:"highlight"},Eo={class:"control-text"};function Bo(t,n,e,o,s,i){const c=B("RiFlaskLine"),r=B("Tooltip"),l=B("RiGithubLine"),d=B("RiFileCopyLine"),m=B("RiCodeLine"),u=B("CollapseTransition"),g=B("EpCaretTop"),f=B("ClientOnly");return v(),nt(f,null,{default:N(()=>[w("div",{ref:"demoblock",class:ct(["demoblock",o.blockClass,e.customClass?e.customClass:""])},[w("div",ko,[j(t.$slots,"default",{},void 0,!0)]),Ao,w("div",Lo,[At("",!0),At("",!0),V(r,{placement:"top",content:o.locale["copy-code"]},{default:N(()=>[V(d,{class:"demoblock-op-btn",onClick:o.onCopy},null,8,["onClick"])]),_:1},8,["content"]),V(r,{placement:"top",content:o.locale["view-source"]},{default:N(()=>[V(m,{class:"demoblock-op-btn",onClick:o.onControlClick},null,8,["onClick"])]),_:1},8,["content"])]),V(u,null,{default:N(()=>[pt(w("div",Ro,[w("div",To,[j(t.$slots,"highlight",{},void 0,!0)])],512),[[mt,o.isExpanded]])]),_:3}),V(Mt,{name:"demoblock-fade-in-linear"},{default:N(()=>[pt(w("div",{ref:"control",class:"demoblock-control",onClick:n[0]||(n[0]=(...h)=>o.onControlClick&&o.onControlClick(...h))},[V(g,{class:"control-icon"}),w("span",Eo,vt(o.locale["hide-source"]),1)],512),[[mt,o.isExpanded]])]),_:1})],2)]),_:3})}const Fo=b(bo,[["render",Bo],["__scopeId","data-v-c143f2f6"]]);const Po=J({name:"DemoBlock",props:{customClass:String}}),Oo={class:"demoblock-view"};function So(t,n,e,o,s,i){return v(),k("div",{class:ct(["demoblock",[t.customClass?t.customClass:""]])},[w("div",Oo,[j(t.$slots,"default",{},void 0,!0)])],2)}const Vo=b(Po,[["render",So],["__scopeId","data-v-ffac1b3a"]]);function Do(t){t.component("Demo",Fo),t.component("DemoBlock",Vo)}const No={color:{type:String,default:"blue"}},Mo=J({name:"SFCButton",props:No});function Ho(t,n,e,o,s,i){return v(),k("div",null,[w("button",{class:ct(["py-2","px-4","font-semibold","rounded-lg","shadow-md","text-white",`bg-${t.$props.color}-500`,{hover:`bg-${t.$props.color}-700`},"border-none","cursor-pointer","m-1"])},[j(t.$slots,"default")],2)])}const St=b(Mo,[["render",Ho]]),Io={install(t){t.component(St.name,St)}},Zo={...Lt,enhanceApp(t){Lt.enhanceApp(t),Do(t.app),t.app.use(Io)}};function te(t){if(t.extends){const n=te(t.extends);return{...n,...t,async enhanceApp(e){n.enhanceApp&&await n.enhanceApp(e),t.enhanceApp&&await t.enhanceApp(e)}}}return t}const G=te(Zo),Wo=J({name:"VitePressApp",setup(){const{site:t}=Ht();return $e(()=>{ke(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),Ae(),Le(),Re(),G.setup&&G.setup(),()=>Vt(G.Layout)}});async function Go(){const t=Xo(),n=jo();n.provide(me,t);const e=he(t.route);return n.provide(ge,e),n.component("Content",_e),n.component("ClientOnly",we),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),G.enhanceApp&&await G.enhanceApp({app:n,router:t,siteData:ve}),{app:n,router:t,data:e}}function jo(){return ye(Wo)}function Xo(){let t=ht,n;return xe(e=>{let o=Ce(e);return o?(t&&(n=o),(t||n===o)&&(o=o.replace(/\.js$/,".lean.js")),ht&&(t=!1),be(()=>import(o),[])):null},G.NotFound)}ht&&Go().then(({app:t,router:n,data:e})=>{n.go().then(()=>{pe(n.route,e.site),t.mount("#app")})});export{Go as createApp};