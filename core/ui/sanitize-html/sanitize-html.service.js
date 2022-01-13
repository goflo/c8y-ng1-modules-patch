"use strict";function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_unsupportedIterableToArray(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,e=!1,g=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!r||n.length!==r);a=!0);}catch(t){e=!0,g=t}finally{try{a||null==i.return||i.return()}finally{if(e)throw g}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,r):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,a=new Array(r);n<r;n++)a[n]=t[n];return a}!function(){function t(n,t){var r=_.memoize(function(t){var r=t.moduleName,n=t.tagName;return function(t){return t.map(function(t){return _.kebabCase(t).replace("c-8-y","c8y")})}(function(t){var e=[];return t.forEach(function(t){var r=angular.module(t)._invokeQueue;0<r.length&&r.forEach(function(t){var r=_slicedToArray(t,3),n=r[1],a=_slicedToArray(r[2],1)[0];"directive"===n&&e.push(a)})}),_.uniq(e)}(s(r))).filter(function(t){return t.includes(n)})},function(t){return t.moduleName}),e={declaration:{regex:{openingTag:/(<\?xml)/g,closingTag:/(\?>)/g},openingTag:"<?xml",closingTag:"?>"},comment:{regex:{openingTag:/(<!--)/g,closingTag:/(-->)/g},openingTag:"\x3c!--",closingTag:"--\x3e"}},a=["use"].concat(_toConsumableArray(_.keys(e))),g=["ngBind","ngBindHtml","ngBindTemplate","ngClass","ngClassEven","ngClassOdd","ngCloak","ngController","ngForm","ngHide","ngIf","ngInclude","ngInit","ngNonBindable","ngPluralize","ngRef","ngRepeat","ngShow","ngStyle","ngSwitch","ngSwitchWhen","ngSwitchDefault","ngOptions","ngTransclude","ngModel","ngList","ngChange","pattern","ngPattern","ngRequired","minlength","ngMinlength","maxlength","ngMaxlength","ngValue","ngModelOptions"].map(_.kebabCase),o="click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(/\s/).map(function(t){return"ng-".concat(t)}),i="click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(/\s/).map(function(t){return"on".concat(t)}),l={ADD_TAGS:_.concat(r({moduleName:"app",tagName:"c8y"}),a),ADD_ATTR:[].concat(_toConsumableArray(g),_toConsumableArray(o),_toConsumableArray(i),["ng-attr-accent-height","ng-attr-accumulate","ng-attr-additive","ng-attr-alignment-baseline","ng-attr-ascent","ng-attr-attributename","ng-attr-attributetype","ng-attr-azimuth","ng-attr-basefrequency","ng-attr-baseline-shift","ng-attr-begin","ng-attr-bias","ng-attr-by","ng-attr-class","ng-attr-clip","ng-attr-clip-path","ng-attr-clip-rule","ng-attr-color","ng-attr-color-interpolation","ng-attr-color-interpolation-filters","ng-attr-color-profile","ng-attr-color-rendering","ng-attr-cx","ng-attr-cy","ng-attr-d","ng-attr-dx","ng-attr-dy","ng-attr-diffuseconstant","ng-attr-direction","ng-attr-display","ng-attr-divisor","ng-attr-dur","ng-attr-edgemode","ng-attr-elevation","ng-attr-end","ng-attr-fill","ng-attr-fill-opacity","ng-attr-fill-rule","ng-attr-filter","ng-attr-filterunits","ng-attr-flood-color","ng-attr-flood-opacity","ng-attr-font-family","ng-attr-font-size","ng-attr-font-size-adjust","ng-attr-font-stretch","ng-attr-font-style","ng-attr-font-variant","ng-attr-font-weight","ng-attr-fx","ng-attr-fy","ng-attr-g1","ng-attr-g2","ng-attr-glyph-name","ng-attr-glyphref","ng-attr-gradientunits","ng-attr-gradienttransform","ng-attr-height","ng-attr-href","ng-attr-id","ng-attr-image-rendering","ng-attr-in","ng-attr-in2","ng-attr-k","ng-attr-k1","ng-attr-k2","ng-attr-k3","ng-attr-k4","ng-attr-kerning","ng-attr-keypoints","ng-attr-keysplines","ng-attr-keytimes","ng-attr-lang","ng-attr-lengthadjust","ng-attr-letter-spacing","ng-attr-kernelmatrix","ng-attr-kernelunitlength","ng-attr-lighting-color","ng-attr-local","ng-attr-marker-end","ng-attr-marker-mid","ng-attr-marker-start","ng-attr-markerheight","ng-attr-markerunits","ng-attr-markerwidth","ng-attr-maskcontentunits","ng-attr-maskunits","ng-attr-max","ng-attr-mask","ng-attr-media","ng-attr-method","ng-attr-mode","ng-attr-min","ng-attr-name","ng-attr-numoctaves","ng-attr-offset","ng-attr-operator","ng-attr-opacity","ng-attr-order","ng-attr-orient","ng-attr-orientation","ng-attr-origin","ng-attr-overflow","ng-attr-paint-order","ng-attr-path","ng-attr-pathlength","ng-attr-patterncontentunits","ng-attr-patterntransform","ng-attr-patternunits","ng-attr-points","ng-attr-preservealpha","ng-attr-preserveaspectratio","ng-attr-primitiveunits","ng-attr-r","ng-attr-rx","ng-attr-ry","ng-attr-radius","ng-attr-refx","ng-attr-refy","ng-attr-repeatcount","ng-attr-repeatdur","ng-attr-restart","ng-attr-result","ng-attr-rotate","ng-attr-scale","ng-attr-seed","ng-attr-shape-rendering","ng-attr-specularconstant","ng-attr-specularexponent","ng-attr-spreadmethod","ng-attr-stddeviation","ng-attr-stitchtiles","ng-attr-stop-color","ng-attr-stop-opacity","ng-attr-stroke-dasharray","ng-attr-stroke-dashoffset","ng-attr-stroke-linecap","ng-attr-stroke-linejoin","ng-attr-stroke-miterlimit","ng-attr-stroke-opacity","ng-attr-stroke","ng-attr-stroke-width","ng-attr-style","ng-attr-surfacescale","ng-attr-tabindex","ng-attr-targetx","ng-attr-targety","ng-attr-transform","ng-attr-text-anchor","ng-attr-text-decoration","ng-attr-text-rendering","ng-attr-textlength","ng-attr-type","ng-attr-u1","ng-attr-u2","ng-attr-unicode","ng-attr-values","ng-attr-viewbox","ng-attr-visibility","ng-attr-version","ng-attr-vert-adv-y","ng-attr-vert-origin-x","ng-attr-vert-origin-y","ng-attr-width","ng-attr-word-spacing","ng-attr-wrap","ng-attr-writing-mode","ng-attr-xchannelselector","ng-attr-ychannelselector","ng-attr-x","ng-attr-x1","ng-attr-x2","ng-attr-xmlns","ng-attr-y","ng-attr-y1","ng-attr-y2","ng-attr-z","ng-attr-zoomandpan"],_toConsumableArray(r({moduleName:"app",tagName:"c8y"})))};return{sanitizeString:u,getSpecificHtmlTags:r,getModulesList:s,sanitizeFile:function(r){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:l;return t.readDataUri(r).then(t.decodeDataUri).then(function(t){return u(t,n)}).then(function(t){return new File([t],r.name,{type:r.type})})}};function u(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:l;return function(t){var n=t;return _.forEach(e,function(t,r){n=n.replace(new RegExp("<".concat(r,">"),"g"),t.openingTag).replace(new RegExp("</".concat(r,">"),"g"),t.closingTag)}),n}(n.sanitize(function(t){var a=t;return _.forEach(e,function(t,r){var n=t.regex;a=a.replace(n.openingTag,"<".concat(r,">")).replace(n.closingTag,"</".concat(r,">"))}),a}(t),r))}function s(r){var t=angular.module(r).requires.reduce(c,[]);return-1===_.findIndex(t,function(t){return t===r})&&t.push(r),_.uniq(t)}function c(t,r){if("string"!=typeof r)return t;var n=angular.module(r);return 0<n.requires.length?_.includes(t,r)?t:(t.push(r),n.requires.reduce(c,t)):(t.push(r),t)}}t.$inject=["DOMPurify","c8yBinary"],angular.module("c8y.ui").constant("DOMPurify",window.DOMPurify),angular.module("c8y.ui").factory("c8ySanitizeHtml",t)}();