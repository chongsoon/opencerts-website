module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([0],{367:function(e,t,r){e.exports=r(368)},368:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(4);var a=r.n(n);var i=r(126);var o=r.n(i);var s=r(128);var c=r(157);var l=r(158);var u=r(159);var f=r(755);var p=r.n(f);var d=function e(){return a.a.createElement("div",{className:"mb-3"},a.a.createElement("h2",null,"How it works"))};var v=[{title:"How it works",content:a.a.createElement("div",null,a.a.createElement("p",null,"The .json certificate provided to you has a unique signature anchored onto the Ethereum blockchain. This site helps you to validate the authenticity and provenance of the document by checking whether:"),a.a.createElement("ol",null,a.a.createElement("li",null,"The contents of the certificate matches the signature attached to it"),a.a.createElement("li",null,"The issuer indicated in the certificate is a recognised issuer"),a.a.createElement("li",null,"The signature attached to the certificate has been issued by the issuer"),a.a.createElement("li",null,"The issuer has revoked the certificate"),a.a.createElement("li",null,"The expiry date on the certificate has passed"))),control:"view"},{title:"Verification Processes",content:a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("b",null,"The certificate may have been tampered with"),a.a.createElement("br",null),"The contents of this .json file has been altered and does not match it's signature. Please obtain a new copy from your educational institute."),a.a.createElement("p",null,a.a.createElement("b",null,"This certificate was issued by an unascertained institution"),a.a.createElement("br",null),"The issuer indicated in the certificate is not on our list of educational credentials issuer. If you would like us to add this issuer to our list, please contact us at addme@opencerts.io"),a.a.createElement("p",null,a.a.createElement("b",null,"The certificate was not issued by the indicated issuer"),a.a.createElement("br",null),"There is no proof on the Ethereum Blockchain that this certificate was issued, if this is a mistake please contact your educational institute to rectify this."),a.a.createElement("p",null,a.a.createElement("b",null,"This certificate has been revoked by the issuer"),a.a.createElement("br",null),"The issuer has explicitly revoked this certificate, if this is a mistake please contact your educational institute to rectify this."),a.a.createElement("p",null,a.a.createElement("b",null,"This certificate has an expiry date and has lapsed"),a.a.createElement("br",null),"This certificate has an expiry date and has lapsed. Please contact your educational institute to be reissued with a new certificate.")),id:"verify-tab",control:"verify"}];var h=function e(){var t=v.map(function(e,t){return a.a.createElement("li",{className:"nav-item",key:t},a.a.createElement("a",{className:"nav-link "+(0===t?"active":""),id:e.id,"data-toggle":"tab",href:"#"+e.control,role:"tab","aria-controls":e.control,"aria-selected":0===t?"true":"false"},e.title))});return a.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},t)};var m=function e(){var t=v.map(function(e,t){return a.a.createElement("div",{key:t,className:"tab-pane fade "+(0===t?"show active":""),id:e.control,role:"tabpanel","aria-labelledby":e.id},e.content)});return a.a.createElement("div",{className:"tab-content py-3",id:"myTabContent",style:{minHeight:300}},t)};var g=function e(){return a.a.createElement("div",{className:"row p-4 bg-light",id:"how-it-works"},a.a.createElement("div",{className:p.a.main},a.a.createElement(d,null),h(),m()))};var y=g;var b=r(8);var E=r.n(b);var w=r(156);var D=r.n(w);var S=r(88);var k=r(79);var C=r(69);var x=r(756);var O=r.n(x);var j="undefined"===typeof document||!document||!document.createElement||"multiple"in document.createElement("input");function N(e){var t=[];if(e.dataTransfer){var r=e.dataTransfer;r.files&&r.files.length?t=r.files:r.items&&r.items.length&&(t=r.items)}else e.target&&e.target.files&&(t=e.target.files);return Array.prototype.slice.call(t)}function T(e,t){return"application/x-moz-file"===e.type||O()(e,t)}function _(e,t,r){return e.size<=t&&e.size>=r}function P(e,t){return e.every(function(e){return T(e,t)})}function A(e){e.preventDefault()}function R(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function I(e){return-1!==e.indexOf("Edge/")}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return R(e)||I(e)}var L={rejected:{borderStyle:"solid",borderColor:"#c66",backgroundColor:"#eee"},disabled:{opacity:.5},active:{borderStyle:"solid",borderColor:"#6c6",backgroundColor:"#eee"},default:{width:200,height:200,borderWidth:2,borderColor:"#666",borderStyle:"dashed",borderRadius:5}};var M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function H(e,t){var r={};for(var n in e){if(t.indexOf(n)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,n))continue;r[n]=e[n]}return r}function W(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function B(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var G=function(e){B(t,e);function t(e,r){U(this,t);var n=q(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));n.renderChildren=function(e,t,r,a){if("function"===typeof e)return e(M({},n.state,{isDragActive:t,isDragAccept:r,isDragReject:a}));return e};n.composeHandlers=n.composeHandlers.bind(n);n.onClick=n.onClick.bind(n);n.onDocumentDrop=n.onDocumentDrop.bind(n);n.onDragEnter=n.onDragEnter.bind(n);n.onDragLeave=n.onDragLeave.bind(n);n.onDragOver=n.onDragOver.bind(n);n.onDragStart=n.onDragStart.bind(n);n.onDrop=n.onDrop.bind(n);n.onFileDialogCancel=n.onFileDialogCancel.bind(n);n.onInputElementClick=n.onInputElementClick.bind(n);n.setRef=n.setRef.bind(n);n.setRefs=n.setRefs.bind(n);n.isFileDialogActive=false;n.state={draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};return n}z(t,[{key:"componentDidMount",value:function e(){var t=this.props.preventDropOnDocument;this.dragTargets=[];if(t){document.addEventListener("dragover",A,false);document.addEventListener("drop",this.onDocumentDrop,false)}this.fileInputEl.addEventListener("click",this.onInputElementClick,false);window.addEventListener("focus",this.onFileDialogCancel,false)}},{key:"componentWillUnmount",value:function e(){var t=this.props.preventDropOnDocument;if(t){document.removeEventListener("dragover",A);document.removeEventListener("drop",this.onDocumentDrop)}null!=this.fileInputEl&&this.fileInputEl.removeEventListener("click",this.onInputElementClick,false);window.removeEventListener("focus",this.onFileDialogCancel,false)}},{key:"composeHandlers",value:function e(t){if(this.props.disabled)return null;return t}},{key:"onDocumentDrop",value:function e(t){if(this.node&&this.node.contains(t.target))return;t.preventDefault();this.dragTargets=[]}},{key:"onDragStart",value:function e(t){this.props.onDragStart&&this.props.onDragStart.call(this,t)}},{key:"onDragEnter",value:function e(t){var r=this;t.preventDefault();-1===this.dragTargets.indexOf(t.target)&&this.dragTargets.push(t.target);Promise.resolve(this.props.getDataTransferItems(t)).then(function(e){r.setState({isDragActive:true,draggedFiles:e})});this.props.onDragEnter&&this.props.onDragEnter.call(this,t)}},{key:"onDragOver",value:function e(t){t.preventDefault();t.stopPropagation();try{t.dataTransfer.dropEffect=this.isFileDialogActive?"none":"copy"}catch(e){}this.props.onDragOver&&this.props.onDragOver.call(this,t);return false}},{key:"onDragLeave",value:function e(t){var r=this;t.preventDefault();this.dragTargets=this.dragTargets.filter(function(e){return e!==t.target&&r.node.contains(e)});if(this.dragTargets.length>0)return;this.setState({isDragActive:false,draggedFiles:[]});this.props.onDragLeave&&this.props.onDragLeave.call(this,t)}},{key:"onDrop",value:function e(t){var r=this;var n=this.props,e=n.onDrop,a=n.onDropAccepted,i=n.onDropRejected,o=n.multiple,s=n.disablePreview,c=n.accept,l=n.getDataTransferItems;t.preventDefault();this.dragTargets=[];this.isFileDialogActive=false;this.draggedFiles=null;this.setState({isDragActive:false,draggedFiles:[]});Promise.resolve(l(t)).then(function(n){var l=[];var u=[];n.forEach(function(e){if(!s)try{e.preview=window.URL.createObjectURL(e)}catch(e){false}T(e,c)&&_(e,r.props.maxSize,r.props.minSize)?l.push(e):u.push(e)});o||u.push.apply(u,W(l.splice(1)));e&&e.call(r,l,u,t);u.length>0&&i&&i.call(r,u,t);l.length>0&&a&&a.call(r,l,t)})}},{key:"onClick",value:function e(t){var r=this.props,e=r.onClick,n=r.disableClick;if(!n){t.stopPropagation();e&&e.call(this,t);F()?setTimeout(this.open.bind(this),0):this.open()}}},{key:"onInputElementClick",value:function e(t){t.stopPropagation();this.props.inputProps&&this.props.inputProps.onClick&&this.props.inputProps.onClick()}},{key:"onFileDialogCancel",value:function e(){var t=this;var e=this.props.onFileDialogCancel;this.isFileDialogActive&&setTimeout(function(){if(null!=t.fileInputEl){var r=t.fileInputEl.files;r.length||(t.isFileDialogActive=false)}"function"===typeof e&&e()},300)}},{key:"setRef",value:function e(t){this.node=t}},{key:"setRefs",value:function e(t){this.fileInputEl=t}},{key:"open",value:function e(){this.isFileDialogActive=true;this.fileInputEl.value=null;this.fileInputEl.click()}},{key:"render",value:function e(){var t=this.props,r=t.accept,n=t.acceptClassName,i=t.activeClassName,o=t.children,s=t.disabled,c=t.disabledClassName,l=t.inputProps,u=t.multiple,f=t.name,p=t.rejectClassName,d=H(t,["accept","acceptClassName","activeClassName","children","disabled","disabledClassName","inputProps","multiple","name","rejectClassName"]);var v=d.acceptStyle,h=d.activeStyle,m=d.className,g=void 0===m?"":m,y=d.disabledStyle,b=d.rejectStyle,E=d.style,w=H(d,["acceptStyle","activeStyle","className","disabledStyle","rejectStyle","style"]);var D=this.state,S=D.isDragActive,k=D.draggedFiles;var C=k.length;var x=u||C<=1;var O=C>0&&P(k,this.props.accept);var N=C>0&&(!O||!x);var T=!g&&!E&&!h&&!v&&!b&&!y;S&&i&&(g+=" "+i);O&&n&&(g+=" "+n);N&&p&&(g+=" "+p);s&&c&&(g+=" "+c);if(T){E=L.default;h=L.active;v=L.active;b=L.rejected;y=L.disabled}var _=M({position:"relative"},E);h&&S&&(_=M({},_,h));v&&O&&(_=M({},_,v));b&&N&&(_=M({},_,b));y&&s&&(_=M({},_,y));var A={accept:r,disabled:s,type:"file",style:M({position:"absolute",top:0,right:0,bottom:0,left:0,opacity:1e-5,pointerEvents:"none"},l.style),multiple:j&&u,ref:this.setRefs,onChange:this.onDrop,autoComplete:"off"};f&&f.length&&(A.name=f);var R=w.acceptedFiles,I=w.preventDropOnDocument,F=w.disablePreview,z=w.disableClick,W=w.onDropAccepted,U=w.onDropRejected,q=w.onFileDialogCancel,B=w.maxSize,G=w.minSize,K=w.getDataTransferItems,V=H(w,["acceptedFiles","preventDropOnDocument","disablePreview","disableClick","onDropAccepted","onDropRejected","onFileDialogCancel","maxSize","minSize","getDataTransferItems"]);return a.a.createElement("div",M({className:g,style:_},V,{onClick:this.composeHandlers(this.onClick),onDragStart:this.composeHandlers(this.onDragStart),onDragEnter:this.composeHandlers(this.onDragEnter),onDragOver:this.composeHandlers(this.onDragOver),onDragLeave:this.composeHandlers(this.onDragLeave),onDrop:this.composeHandlers(this.onDrop),ref:this.setRef,"aria-disabled":s}),this.renderChildren(o,S,O,N),a.a.createElement("input",M({},l,A)))}}]);return t}(a.a.Component);var K=G;G.propTypes={accept:E.a.oneOfType([E.a.string,E.a.arrayOf(E.a.string)]),children:E.a.oneOfType([E.a.node,E.a.func]),disableClick:E.a.bool,disabled:E.a.bool,disablePreview:E.a.bool,preventDropOnDocument:E.a.bool,inputProps:E.a.object,multiple:E.a.bool,name:E.a.string,maxSize:E.a.number,minSize:E.a.number,className:E.a.string,activeClassName:E.a.string,acceptClassName:E.a.string,rejectClassName:E.a.string,disabledClassName:E.a.string,style:E.a.object,activeStyle:E.a.object,acceptStyle:E.a.object,rejectStyle:E.a.object,disabledStyle:E.a.object,getDataTransferItems:E.a.func,onClick:E.a.func,onDrop:E.a.func,onDropAccepted:E.a.func,onDropRejected:E.a.func,onDragStart:E.a.func,onDragEnter:E.a.func,onDragOver:E.a.func,onDragLeave:E.a.func,onFileDialogCancel:E.a.func};G.defaultProps={preventDropOnDocument:true,disabled:false,disablePreview:false,disableClick:false,inputProps:{},multiple:true,maxSize:Infinity,minSize:0,getDataTransferItems:N};var V=r(288);var X=r.n(V);var J=function e(t){var r=t.hover,n=t.accept;return a.a.createElement("div",{className:X.a["viewer-container"]+" "+(r?n?X.a.accept:X.a.invalid:X.a.default),style:{borderRadius:10}},a.a.createElement("div",{className:X.a["image-container"]},a.a.createElement("i",null,a.a.createElement("img",{src:"/static/images/dropzone/dropzone_illustration.svg"}))),a.a.createElement("div",{className:"text-brand-dark",style:{fontSize:"1.2rem",fontWeight:500,fontFamily:"Montserrat"}},"Have a OpenCert file?"),a.a.createElement("div",{className:"text-muted"},"Drop the .json file here to view"),a.a.createElement("div",{className:"text-muted row"},a.a.createElement("div",{className:"col-2"}),a.a.createElement("div",{className:"col-3"},a.a.createElement("hr",null)),a.a.createElement("div",{className:"col-2"},"or"),a.a.createElement("div",{className:"col-3"},a.a.createElement("hr",null))),a.a.createElement("div",{className:"text-muted row"},a.a.createElement("div",{className:"col-4"}),a.a.createElement("div",{className:"col-4"},a.a.createElement("button",{type:"button",className:"pointer "+X.a.btn},"Select File"))))};var Y=J;var $=function e(t){var r=t.verificationStatus;var n=r&&r[r.length-1];var i=void 0;n&&n.message&&(i=n.warning||n.error?n.error?a.a.createElement("i",{className:"fas fa-times-circle text-red mr-3"}):a.a.createElement("i",{className:"fas fa-exclamation-triangle text-orange mr-3"}):a.a.createElement("i",{className:"fas fa-check text-green mr-3"}));return a.a.createElement("div",{className:"text-center bg-light h-100 d-flex flex-column justify-content-center p-4 text-blue",style:{borderRadius:10}},a.a.createElement("i",{className:"fas fa-spinner fa-pulse fa-3x"}),a.a.createElement("div",{className:"m-3",style:{fontSize:"1.5rem"}},"Verifying Certificate..."),n&&n.message?a.a.createElement("div",{className:"text-muted"},i,n.message):null)};var Q=$;var Z=r(757);var ee=r.n(Z);var te=function e(t){var r=t.issuerIdentityStatus,n=t.hashStatus,i=t.issuedStatus,o=t.notRevokedStatus;var s=n.verified&&i.verified&&o.verified;return a.a.createElement("div",{className:X.a["viewer-container"]+" "+(s?X.a.warning:X.a.invalid),style:{backgroundColor:s?"#fbf6e9":"#fbeae9",borderRadius:10}},a.a.createElement("span",{className:X.a["message-container"]},s?a.a.createElement("img",{src:"/static/images/dropzone/warning.svg"}):a.a.createElement("img",{src:"/static/images/dropzone/invalid.svg"}),a.a.createElement("span",{className:(s?"warning":"invalid")+" m-3",style:{fontSize:"1.5rem"}},s?"Certificate from unregistered body":"This certificate is not valid")),a.a.createElement("div",{className:X.a.verifications},n.verified?null:a.a.createElement("p",{className:X.a.messages},"The certificate has been tampered with"),i.verified?null:a.a.createElement("p",{className:X.a.messages},"The certificate has not been issued"),o.verified?null:a.a.createElement("p",{className:X.a.messages},"The certificate has been revoked"),r.verified?null:a.a.createElement("p",{className:X.a.messages},"The issuer's identity cannot be verified")),a.a.createElement("button",{className:X.a["unverified-btn"]},a.a.createElement("span",null,a.a.createElement(ee.a,{href:"/faq"},"What should I do?"))),a.a.createElement("div",{className:X.a["secondary-links"]},a.a.createElement("span",null,a.a.createElement(ee.a,{href:" "},"Try another")),s?a.a.createElement("span",{onClick:function e(t){t.preventDefault();t.stopPropagation();t.nativeEvent.stopImmediatePropagation()}},a.a.createElement(ee.a,{href:"/viewer"}," View certificate anyway")):""))};var re=te;var ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var ae=function e(t){var r=t.handleRenderOverwrite,n=t.isDragAccept,i=t.isDragReject,o=t.verifying,s=t.issuerIdentityStatus,c=t.hashStatus,l=t.issuedStatus,u=t.notRevokedStatus,f=t.document,p=t.verificationStatus;if(i)return a.a.createElement(Y,{hover:true,accept:false});if(n)return a.a.createElement(Y,{hover:true,accept:true});if(o)return a.a.createElement(Q,{verificationStatus:p});if(f&&(!c.verified||!l.verified||!u.verified||!s.verified))return a.a.createElement(re,{handleRenderOverwrite:r,hashStatus:c,issuedStatus:l,notRevokedStatus:u,issuerIdentityStatus:s});return a.a.createElement(Y,{hover:false})};var ie=function e(t){return function(e){return ae(ne({},e,t))}};var oe=function e(t,r){var n=new FileReader;n.onload=function(){try{var e=JSON.parse(n.result);r(e)}catch(e){console.log(e)}};t&&t.length&&t.length>0&&t.map(function(e){return n.readAsBinaryString(e)})};var se=function e(t){var r=t.handleCertificateChange,n=t.handleRenderOverwrite,i=t.verifying,o=t.issuerIdentityStatus,s=t.hashStatus,c=t.issuedStatus,l=t.notRevokedStatus,u=t.document,f=t.verificationStatus;return a.a.createElement(K,{accept:"application/json",onDrop:function e(t){return oe(t,r)},className:"h-100",acceptClassName:"",rejectClassName:""},ie({handleCertificateChange:r,handleRenderOverwrite:n,verifying:i,issuerIdentityStatus:o,hashStatus:s,issuedStatus:c,notRevokedStatus:l,document:u,verificationStatus:f}))};var ce=se;var le=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function pe(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var de=function(e){pe(t,e);function t(e){ue(this,t);var r=fe(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.handleCertificateChange=r.handleCertificateChange.bind(r);return r}le(t,[{key:"componentDidMount",value:function e(){this.props.updateNetworkId();D.a.prefetch("/viewer")}},{key:"handleCertificateChange",value:function e(t){this.props.updateCertificate(t)}},{key:"render",value:function e(){return a.a.createElement(ce,{document:this.props.document,handleCertificateChange:this.handleCertificateChange,verifying:this.props.verifying,issuerIdentityStatus:this.props.issuerIdentityStatus,hashStatus:this.props.hashStatus,issuedStatus:this.props.issuedStatus,notRevokedStatus:this.props.notRevokedStatus,verificationStatus:this.props.verificationStatus})}}]);return t}(n["Component"]);var ve=function e(t){return{document:Object(k["b"])(t),verifying:Object(k["i"])(t),issuerIdentityStatus:Object(k["e"])(t),hashStatus:Object(k["c"])(t),issuedStatus:Object(k["d"])(t),notRevokedStatus:Object(k["f"])(t),verificationStatus:Object(k["g"])(t)}};var he=function e(t){return{updateNetworkId:function e(){return t(Object(C["f"])())},updateCertificate:function e(r){return t(Object(k["k"])(r))}}};var me=Object(S["connect"])(ve,he)(de);var ge=me;var ye=function e(t){var r=t.handleCertificateChange;return a.a.createElement("div",{className:"row p-4 bg-brand-dark text-white"},a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"col-md-4"},a.a.createElement("div",{className:"mb-3 py-4"},a.a.createElement("p",null,"This OpenCerts site allows you to view and verify the authenticity of certificates."),a.a.createElement("p",null,"If you have received a certificate, dropping it into the box on the right will allow you to check its contents and verify its authenticity."))),a.a.createElement("div",{className:"col-md-8"},a.a.createElement(ge,{handleCertificateChange:r}))))};var be=ye;var Ee=r(762);var we=r.n(Ee);var De=function e(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Partners"))};var Se=function e(){var t=["/static/images/logo-govtech.png","/static/images/NP_logo.svg","/static/images/TP_logo.svg","/static/images/NYP_logo.svg","/static/images/RP_logo.svg","/static/images/SP_logo.svg","/static/images/CSC_logo.png","/static/images/ITE_logo.png","/static/images/NTU_logo.png","/static/images/SIM_logo.png"];var r=t.map(function(e,t){return a.a.createElement("img",{src:e,key:t,className:we.a.partnerlogos})});return a.a.createElement("div",{className:"d-flex flex-wrap"},r)};var ke=function e(){return a.a.createElement("div",{className:"row my-3 p-4"},a.a.createElement("div",{className:we.a.main},a.a.createElement(De,null),a.a.createElement(Se,null)))};var Ce=ke;var xe=function e(){return a.a.createElement("div",{className:"container-fluid"},a.a.createElement(be,null),a.a.createElement(y,null),a.a.createElement(Ce,null))};var Oe=xe;var je=function e(){return a.a.createElement("div",null,a.a.createElement(c["a"],null),a.a.createElement(l["a"],{active:"home"}),a.a.createElement(Oe,null),a.a.createElement(u["a"],null))};var Ne=t["default"]=o()(s["a"])(je)},756:function(e,t){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r)},function(e,t,r){e.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(32)("wks"),a=r(9),i=r(0).Symbol,o="function"==typeof i;(e.exports=function(e){return n[e]||(n[e]=o&&i[e]||(o?i:a)("Symbol."+e))}).store=n},function(e,t,r){var n=r(0),a=r(2),i=r(8),o=r(22),s=r(10),c=function(e,t,r){var l,u,f,p,d=e&c.F,v=e&c.G,h=e&c.S,m=e&c.P,g=e&c.B,y=v?n:h?n[t]||(n[t]={}):(n[t]||{}).prototype,b=v?a:a[t]||(a[t]={}),E=b.prototype||(b.prototype={});v&&(r=t);for(l in r)u=!d&&y&&void 0!==y[l],f=(u?y:r)[l],p=g&&u?s(f,n):m&&"function"==typeof f?s(Function.call,f):f,y&&o(y,l,f,e&c.U),b[l]!=f&&i(b,l,p),m&&E[l]!=f&&(E[l]=f)};n.core=a,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,r){var n=r(16),a=r(21);e.exports=r(3)?function(e,t,r){return n.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){var n=r(24);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(28),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",a=e.type||"",i=a.replace(/\/.*$/,"");return r.some(function(e){var t=e.trim();return"."===t.charAt(0)?n.toLowerCase().endsWith(t.toLowerCase()):t.endsWith("/*")?i===t.replace(/\/.*$/,""):a===t})}return!0},r(14),r(34)},function(e,t,r){r(15),e.exports=r(2).Array.some},function(e,t,r){"use strict";var n=r(7),a=r(25)(3);n(n.P+n.F*!r(33)([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},function(e,t,r){var n=r(17),a=r(18),i=r(20),o=Object.defineProperty;t.f=r(3)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),a)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(1);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){e.exports=!r(3)&&!r(4)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(1),a=r(0).document,i=n(a)&&n(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},function(e,t,r){var n=r(1);e.exports=function(e,t){if(!n(e))return e;var r,a;if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;if("function"==typeof(r=e.valueOf)&&!n(a=r.call(e)))return a;if(!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(0),a=r(8),i=r(23),o=r(9)("src"),s=Function.toString,c=(""+s).split("toString");r(2).inspectSource=function(e){return s.call(e)},(e.exports=function(e,t,r,s){var l="function"==typeof r;l&&(i(r,"name")||a(r,"name",t)),e[t]!==r&&(l&&(i(r,o)||a(r,o,e[t]?""+e[t]:c.join(String(t)))),e===n?e[t]=r:s?e[t]?e[t]=r:a(e,t,r):(delete e[t],a(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||s.call(this)})},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){var n=r(10),a=r(26),i=r(27),o=r(12),s=r(29);e.exports=function(e,t){var r=1==e,c=2==e,l=3==e,u=4==e,f=6==e,p=5==e||f,d=t||s;return function(t,s,v){for(var h,m,g=i(t),y=a(g),b=n(s,v,3),E=o(y.length),w=0,D=r?d(t,E):c?d(t,0):void 0;E>w;w++)if((p||w in y)&&(h=y[w],m=b(h,w,g),e))if(r)D[w]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return w;case 2:D.push(h)}else if(u)return!1;return f?-1:l||u?u:D}}},function(e,t,r){var n=r(5);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(11);e.exports=function(e){return Object(n(e))}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(30);e.exports=function(e,t){return new(n(e))(t)}},function(e,t,r){var n=r(1),a=r(31),i=r(6)("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)||(t=void 0),n(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},function(e,t,r){var n=r(5);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){var n=r(0),a=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return a[e]||(a[e]={})}},function(e,t,r){"use strict";var n=r(4);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},function(e,t,r){r(35),e.exports=r(2).String.endsWith},function(e,t,r){"use strict";var n=r(7),a=r(12),i=r(36),o="".endsWith;n(n.P+n.F*r(38)("endsWith"),"String",{endsWith:function(e){var t=i(this,e,"endsWith"),r=arguments.length>1?arguments[1]:void 0,n=a(t.length),s=void 0===r?n:Math.min(a(r),n),c=String(e);return o?o.call(t,c,s):t.slice(s-c.length,s)===c}})},function(e,t,r){var n=r(37),a=r(11);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},function(e,t,r){var n=r(1),a=r(5),i=r(6)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},function(e,t,r){var n=r(6)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}}])},757:function(e,t,r){e.exports=r(758)},758:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(86);var a=O(n);var i=r(268);var o=O(i);var s=r(30);var c=O(s);var l=r(10);var u=O(l);var f=r(11);var p=O(f);var d=r(31);var v=O(d);var h=r(32);var m=O(h);var g=r(41);var y=r(4);var b=O(y);var E=r(8);var w=O(E);var D=r(759);var S=O(D);var k=r(67);var C=O(k);var x=r(40);function O(e){return e&&e.__esModule?e:{default:e}}var j=function(e){(0,m.default)(t,e);function t(e){var r;(0,u.default)(this,t);for(var n=arguments.length,a=Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];var o=(0,v.default)(this,(r=t.__proto__||(0,c.default)(t)).call.apply(r,[this,e].concat(a)));o.linkClicked=o.linkClicked.bind(o);o.formatUrls(e);return o}(0,p.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,i=this.as;if(!N(a))return;var o=window.location.pathname;a=(0,g.resolve)(o,a);i=i?(0,g.resolve)(o,i):a;t.preventDefault();var s=this.props.scroll;null==s&&(s=i.indexOf("#")<0);var c=this.props.replace;var l=c?"replace":"push";C.default[l](a,i,{shallow:n}).then(function(e){if(!e)return;if(s){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,g.resolve)(t,this.href);C.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,o.default)(this.props.href)!==(0,o.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,g.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,g.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=b.default.createElement("a",null,t));var a=y.Children.only(t);var i={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=n||r);i.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,k._rewriteUrlForNextExport)(i.href));return b.default.cloneElement(a,i)}}]);return t}(y.Component);j.propTypes=(0,S.default)({href:w.default.oneOfType([w.default.string,w.default.object]).isRequired,as:w.default.oneOfType([w.default.string,w.default.object]),prefetch:w.default.bool,replace:w.default.bool,shallow:w.default.bool,passHref:w.default.bool,scroll:w.default.bool,children:w.default.oneOfType([w.default.element,function(e,t){var r=e[t];"string"===typeof r&&T("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired});t.default=j;function N(e){var t=(0,g.parse)(e,false,true);var r=(0,g.parse)((0,x.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var T=(0,x.execOnce)(x.warn)},759:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=m;var n=r(188);var a=l(n);var i=r(760);var o=l(i);var s=r(761);var c=l(s);function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var d={};function v(e){return(0,a["default"])(e,u({},p,d))}function h(e){return e&&e[p]===d}function m(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,o["default"])(e,p)&&!h(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,u({},p,v(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,o["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},760:function(e,t,r){"use strict";var n=r(192);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},761:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]}},[367]);return{page:e.default}});