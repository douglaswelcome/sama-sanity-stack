(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{8875:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),s=n(4651),l=n(7426);var c={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),p=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):s||i}}),[o,e.href,e.as]),d=p.href,f=p.as,h=e.children,m=e.replace,g=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var k=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,x=l.useIntersection({rootMargin:"200px"}),b=r(x,2),w=b[0],E=b[1],O=i.default.useCallback((function(e){w(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,w]);i.default.useEffect((function(){var e=E&&n&&a.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=c[d+"%"+f+(t?"%"+t:"")];e&&!r&&u(o,d,f,{locale:t})}),[f,d,E,y,n,o]);var S={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:s}))}(e,o,d,f,m,g,v,y)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof y?y:o&&o.locale,D=o&&o.isLocaleDomain&&a.getDomainLocale(f,L,o&&o.locales,o&&o.domainLocales);S.href=D||a.addBasePath(a.addLocale(f,L,o&&o.defaultLocale))}return i.default.cloneElement(t,S)};t.default=p},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=o.useRef(),c=o.useState(!1),u=r(c,2),p=u[0],d=u[1],f=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||p||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,p]);return o.useEffect((function(){if(!a&&!p){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),[f,p]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4934:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(7294),o=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};var i=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],a={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},c=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e};function u(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),c([],l(e.attributes)).forEach((function(e){switch(e.name){case"class":break;case"style":n[e.name]=e.value.split(/ ?; ?/).reduce((function(e,t){var n=o(t.split(/ ?: ?/),2),r=n[0],i=n[1];return r&&i&&(e[r.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(i))?i:Number(i)),e}),{});break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":n[a[e.name]||e.name]=!0;break;default:n[a[e.name]||e.name]=e.value}}))}return n}function p(e,t){var n;if(void 0===t&&(t={}),!e||!(e instanceof Node))return null;var o,a=t.actions,d=void 0===a?[]:a,f=t.index,h=void 0===f?0:f,m=t.level,g=void 0===m?0:m,v=t.randomKey,y=e,k=g+"-"+h,x=[];if(v&&0===g&&(k=function(e){void 0===e&&(e=6);for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",r=e;r>0;--r)n+=t[Math.round(Math.random()*(t.length-1))];return n}()+"-"+k),Array.isArray(d)&&d.forEach((function(t){t.condition(y,k,g)&&("function"===typeof t.pre&&((y=t.pre(y,k,g))instanceof Node||(y=e)),"function"===typeof t.post&&x.push(t.post(y,k,g)))})),x.length)return x;switch(y.nodeType){case 1:return r.createElement((o=y.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(o)?o:o.toLowerCase()),u(y,k),function(e,t,n){var r=c([],l(e)).map((function(e,r){return p(e,s(s({},n),{index:r,level:t+1}))})).filter(Boolean);return r.length?r:null}(y.childNodes,g,t));case 3:var b=(null===(n=y.nodeValue)||void 0===n?void 0:n.toString())||"";if(/^\s+$/.test(b)&&!/[\u202F\u00A0]/.test(b))return null;if(!y.parentNode)return b;var w=y.parentNode.nodeName.toLowerCase();return-1!==i.indexOf(w)?(/\S/.test(b)&&console.warn("A textNode is not allowed inside '"+w+"'. Your text \""+b+'" will be ignored'),null):b;case 8:default:return null}}function d(e,t){return void 0===t&&(t={}),"string"===typeof e?function(e,t){if(void 0===t&&(t={}),!e||"string"!==typeof e)return null;var n=t.nodeOnly,r=void 0!==n&&n,o=t.selector,i=void 0===o?"body > *":o,a=t.type,s=void 0===a?"text/html":a;try{var l=(new DOMParser).parseFromString(e,s).querySelector(i);if(!(l instanceof Node))throw new Error("Error parsing input");return r?l:p(l,t)}catch(c){}return null}(e,t):e instanceof Node?p(e,t):null}var f=n(8875),h={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};function m(){return f.canUseDOM}function g(){return function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",!!e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}()&&"undefined"!==typeof window&&null!==window}var v=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},k=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},x=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},b=Object.create(null),w=function(e){function t(t){var n=e.call(this,t)||this;return n.isActive=!1,n.handleCacheQueue=function(e){"string"!==typeof e?n.handleError(e):n.handleLoad(e)},n.handleLoad=function(e){n.isActive&&n.setState({content:e,status:h.LOADED},n.getElement)},n.handleError=function(e){var t=n.props.onError,r="Browser does not support SVG"===e.message?h.UNSUPPORTED:h.FAILED;n.isActive&&n.setState({status:r},(function(){"function"===typeof t&&t(e)}))},n.request=function(){var e=n.props,t=e.cacheRequests,r=e.fetchOptions,o=e.src;try{return t&&(b[o]={content:"",status:h.LOADING,queue:[]}),fetch(o,r).then((function(e){var t=e.headers.get("content-type"),n=k((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some((function(e){return n.indexOf(e)>=0})))throw new Error("Content type isn't valid: "+n);return e.text()})).then((function(e){var r=n.props.src;if(o===r&&(n.handleLoad(e),t)){var i=b[o];i&&(i.content=e,i.status=h.LOADED,i.queue=i.queue.filter((function(t){return t(e),!1})))}})).catch((function(e){if(n.handleError(e),t){var r=b[o];r&&(r.queue.forEach((function(t){t(e)})),delete b[o])}}))}catch(i){return n.handleError(new Error(i.message))}},n.state={content:"",element:null,hasCache:!!t.cacheRequests&&!!b[t.src],status:h.PENDING},n.hash=t.uniqueHash||function(e){for(var t,n="abcdefghijklmnopqrstuvwxyz",r=""+n+n.toUpperCase()+"1234567890",o="",i=0;i<e;i++)o+=(t=r)[Math.floor(Math.random()*t.length)];return o}(8),n}return v(t,e),t.prototype.componentDidMount=function(){if(this.isActive=!0,m()){var e=this.state.status,t=this.props.src;try{if(e===h.PENDING){if(!g())throw new Error("Browser does not support SVG");if(!t)throw new Error("Missing src");this.load()}}catch(n){this.handleError(n)}}},t.prototype.componentDidUpdate=function(e,t){if(m()){var n=this.state,r=n.hasCache,o=n.status,i=this.props,a=i.onLoad,s=i.src;if(t.status!==h.READY&&o===h.READY&&a&&a(s,r),e.src!==s){if(!s)return void this.handleError(new Error("Missing src"));this.load()}}},t.prototype.componentWillUnmount=function(){this.isActive=!1},t.prototype.processSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},t.prototype.updateSVGAttributes=function(e){var t=this,n=this.props,r=n.baseURL,o=void 0===r?"":r,i=n.uniquifyIDs,a=["id","href","xlink:href","xlink:role","xlink:arcrole"],s=["href","xlink:href"];return i?(x([],k(e.children)).map((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes).map((function(e){var n=e,r=e.value.match(/url\((.*?)\)/);return r&&r[1]&&(n.value=e.value.replace(r[0],"url("+o+r[1]+"__"+t.hash+")")),n}));a.forEach((function(e){var r,o,i=n.find((function(t){return t.name===e}));!i||(r=e,o=i.value,s.indexOf(r)>=0&&o&&o.indexOf("#")<0)||(i.value=i.value+"__"+t.hash)}))}return e.children.length?t.updateSVGAttributes(e):e})),e):e},t.prototype.getNode=function(){var e=this.props,t=e.description,n=e.title;try{var r=d(this.processSVG(),{nodeOnly:!0});if(!r||!(r instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var o=this.updateSVGAttributes(r);if(t){var i=o.querySelector("desc");i&&i.parentNode&&i.parentNode.removeChild(i);var a=document.createElement("desc");a.innerHTML=t,o.prepend(a)}if(n){var s=o.querySelector("title");s&&s.parentNode&&s.parentNode.removeChild(s);var l=document.createElement("title");l.innerHTML=n,o.prepend(l)}return o}catch(c){return this.handleError(c)}},t.prototype.getElement=function(){try{var e=d(this.getNode());if(!e||!r.isValidElement(e))throw new Error("Could not convert the src to a React element");this.setState({element:e,status:h.READY})}catch(t){this.handleError(new Error(t.message))}},t.prototype.load=function(){var e=this;this.isActive&&this.setState({content:"",element:null,status:h.LOADING},(function(){var t=e.props,n=t.cacheRequests,r=t.src,o=n&&b[r];if(o)o.status===h.LOADING?o.queue.push(e.handleCacheQueue):o.status===h.LOADED&&e.handleLoad(o.content);else{var i,a=r.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);a?i=a[1]?atob(a[2]):decodeURIComponent(a[2]):r.indexOf("<svg")>=0&&(i=r),i?e.handleLoad(i):e.request()}}))},t.prototype.render=function(){var e=this.state,t=e.element,n=e.status,o=this.props,i=o.children,a=void 0===i?null:i,s=o.innerRef,l=o.loader,c=void 0===l?null:l,u=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r={};for(var o in e)({}).hasOwnProperty.call(e,o)&&(t.includes(o)||(r[o]=e[o]));return r}(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return m()?t?r.cloneElement(t,y({ref:s},u)):[h.UNSUPPORTED,h.FAILED].indexOf(n)>-1?a:c:c},t.defaultProps={cacheRequests:!0,uniquifyIDs:!1},t}(r.PureComponent)}}]);