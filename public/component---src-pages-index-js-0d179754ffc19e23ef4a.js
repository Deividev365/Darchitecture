(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},RTqv:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASmSURBVHgB3VlliFVbFP5e+Tp8j2fH2O2o2GCh2GLgDwN1sBATVFQUFOuPiv4QETEQRYwRG2z8IYgd2IWBjd05uj7XOs7xcs695163I/rBx3DWzrv2XrUH+ArwHdzgP2FV4T/CH4QvhA+EJ4Q38YXwm7CncIXwmjBL+DaEl4SrhZ2FfyIFJKvJ8sJexr+FT6DaOg7V2BWT8UfkFxYRFhdWF/4sfChcIpwhPAvHoAYmCR9DtbZT2Nc2EgXcKDW5D6rd+8LxwjxwhHThMZt8l7Cx8Hukjua++c4Ji+ET0UF4T/hKOEL4C9yA12GU8LnwurAdUkQX4WvhbWE1fB7wlG7aOl2QJOhOXkJ/ZTl8XpQW3oCeWL2og9KEF6CupThyBhWhln9LmC/KgPXQS90pTp8/hL/CLdraupsTdexhHWeHtNcUnkS2o94BjTKusNjmbR6v0xnoRS4a0EbZHaiznifcbhP2gjvQ7/JuHgnr0MYWnRLSngl15C3sOzfU8vfDLSYijjbXCp8KSwS0FbSBC2Pk00zeAO5QGGpEG2MbGIfpWLeFDMywzbSOkVexcSvhFlugIZjx/kN4q2OCpSGDPOO4HSM/LDwqbAa32C38HaYUb5M17e+xkEE37G+sY6cfTRNehVtk2t+SfuEa6HHmDhlUwNrX+WS8O3T6jOt14RZ5bL1VfuEeqGuJhw1Q665s3w1tojlwD54ws/uDfiGT1ssJBtawTe2FJsuMOnTsz5C9cZdgAn3CL+DHtQgDmVVzo0Ptm8fMRITH/j/cgkr7yEYOQNWbKJmlB2DaT+21MtlA6MZPIzhSlYFGqMHQgi0quMYev2C5LRQlnWcOyNDF8FnRZKNt/EVoouwhr8m8WH8XGtESlR3/Wv/VfuEwE0ZNbptAnS2P2XMTTFov2zzMpBg+d9r3GGh1edS32enQex2EOtZvrF/opUmDER19oEfCjaWbLE24wOSe9ib4xtDgWCqcsrauIXOPtPaPgsRP0CPciuTQDRqFqNVRPjmd/lSoBn8MGJdhm+gfMi/DM8PtX7ENLPQfCUshObDUOGOLcvLaEcYssP4VAtp4fZjoZAYNrG8DJyN5MLbPRPZLBpNhHmXsiwXj8STrE5YzTrX2ViHt7y86j70QUkMl4TLoUXEh3s1NwvnCRdCrQTmDR1C9TRfGOudUvEUybJKO+DTwLg2A1iuvbM4s2xyNM6w+Wmh949bh9EtvoHmiK9Ciecy5EvSji4pNYgJxERp9XD0JRgUNiDU+/W5avI68T/wls5CzKAvNG+hZ0hN1HgLdZFPkHBjhaEy8Yp2jDKCPo2W5rKPDwIevcVCjojeJpBhaY1ghxjb6UEYPZvCtkTqYZfHpkMksT42pWORctCWyC31qknkiwxwfADzfRnruhIt0R/S3ImY9/aAFFl0Rwyjr60jP054VzxX2hoY3hiUvr+RlZvG/wTbGnHEQ1J966RZ9H6tGvo3TAJ7a4qzVmarVghoHwcd+5pZ8jk66eONGvGdivuYOFzaC/ichCPR77aEl8HmEP+pn2caZF9APpvTI5WmSx0YNbrOJkwUzbibArDZz2Rw0iEPQ3PHbxztJGDh5XDkQZAAAAABJRU5ErkJggg=="},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("gqNJ"),n("RTqv")),i=n.n(o),c=function(){return a.a.createElement("div",{className:"bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row "},a.a.createElement("img",{src:i.a,alt:"whatsapp-icon"}),a.a.createElement("div",{className:"sm:ml-4"},a.a.createElement("h3",{className:"font-bold text-2xl"},"Contato para Orçamentos "),a.a.createElement("p",{className:"font-bold"},"(11) 9999-9999")))},s=n("zwU1"),u=n.n(s),l=function(){return a.a.createElement("div",{className:"text-black"},a.a.createElement("img",{className:"w-16 mx-40 sm:mx-20 ",src:u.a,alt:"logo-icon"}))},f=n("qhky"),p=n("XqNr"),d=n.n(p),m=n("Wbzz"),h=function(){return a.a.createElement("div",{className:"p-4 bg-green-400 sm:flex justify-between items-center"},a.a.createElement("div",null,a.a.createElement("h5",null,"PisosDA"),a.a.createElement("p",null,"Rua Machado de Assis, Bairro Elon Musk")),a.a.createElement(c,null))},y=function(){return a.a.createElement("div",{className:" bg-green-200 flex flex-col items-center sm:flex-row sm:justify-between"},a.a.createElement("div",{className:" p-10 sm:p-20"},a.a.createElement("p",{className:"text-xl font-bold text-4xl "},"Construímos com alegria e qualidade. Venha conferir nosso trabalho!"),a.a.createElement("p",{className:"text-gray-800 sm:text-2xl sm:mt-3"},"Comerciais, residenciais e para todos os ambientes")),a.a.createElement("div",null,a.a.createElement("img",{className:"sm:max-w-screen-sm sm:mx-10 sm:my-10 rounded",src:d.a,alt:"ilustrative-img"})))};t.default=function(){var e=Object(m.b)("3080673216").site;return a.a.createElement("div",null,a.a.createElement(f.a,null,a.a.createElement("title",null,e.siteMetadata.title),a.a.createElement("link",{rel:"icon",href:"https://image.flaticon.com/icons/svg/1086/1086544.svg"})),a.a.createElement("div",{className:"p-4 bg-green-400 sm:flex justify-between items-center"},a.a.createElement(l,null),a.a.createElement("div",null,a.a.createElement(c,null))),a.a.createElement(y,null),a.a.createElement("div",null,a.a.createElement("h2",{className:"p-8 text-2xl font-bold flex items-center justify-center"},"Projetos executados"),a.a.createElement("div",{className:"flex flex-wrap"},[1,2,3,4].map((function(){return a.a.createElement("div",{className:"max-w-sm mx-6"},a.a.createElement("div",{className:"m-3 rounded-md shadow-sm"},a.a.createElement("img",{src:d.a,alt:"projectsMade-1"}),a.a.createElement("div",{className:"px-6 py-4"},a.a.createElement("p",{className:"font-bold text-xl mb-2"},"Descrição dos projetos aquiiiiiiiiiiiiiiiii"))))})))),a.a.createElement(h,null))}},XqNr:function(e,t,n){e.exports=n.p+"static/img1-63aec7ca7a0177cd5c0649c2db102ca3.jpg"},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],i[u[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},gqNJ:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){var r,a,o,i,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("6qGY"),y=n.n(h),b="bodyAttributes",v="htmlAttributes",T="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),A="cssText",E="href",C="http-equiv",O="innerHTML",S="itemprop",x="name",j="property",P="rel",N="src",k="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",M="defer",I="encodeSpecialCharacters",D="onChangeClientState",H="titleTemplate",U=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),Y=[g.NOSCRIPT,g.SCRIPT,g.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=_(e,g.TITLE),n=_(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,R);return t||r||void 0},Q=function(e){return _(e,D)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===P&&"canonical"===e[n].toLowerCase()||s===P&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==O&&c!==A&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(g.BODY,r),se(g.HTML,a),ce(f,p);var d={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,o),metaTags:ue(g.META,i),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(g.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+J(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===A){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===A)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,a,r),link:pe(g.LINK,o,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,s,r),style:pe(g.STYLE,u,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:Z([E,k],e),bodyAttributes:V(b,e),defer:_(e,M),encode:_(e,I),htmlAttributes:V(v,e),linkTags:K(g.LINK,[P,E],e),metaTags:K(g.META,[x,w,C,j,S],e),noscriptTags:K(g.NOSCRIPT,[O],e),onChangeClientState:Q(e),scriptTags:K(g.SCRIPT,[N,O],e),styleTags:K(g.STYLE,[A],e),title:X(e),titleAttributes:V(T,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return q(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},o),t));case g.BODY:return z({},a,{bodyAttributes:z({},o)});case g.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(W(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.a=he}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zwU1:function(e,t,n){e.exports=n.p+"static/logo-3e0822d8dcb8ef03fac3df915903fbe8.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-0d179754ffc19e23ef4a.js.map