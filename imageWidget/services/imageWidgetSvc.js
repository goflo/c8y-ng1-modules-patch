"use strict";!function(){function e(a,u,o){var c="binaryImageConfig";function e(i,t){var r=i.config.imageBinaryId;return o.detail(c,r,i.id).then(function(e){var n=e;a.when();return null===n&&0<t&&(n={id:i.id,imageCount:1}),n?(n.imageCount+=t,n.imageCount<=0?function(e,n){return o.remove("image",e,n).then(function(){u.removeBinary(e)})}(r,n):o.save(c,r,n)):u.removeBinary(r)})}return{incrementReferenceCount:_.partialRight(e,1),decrementReferenceCount:_.partialRight(e,-1)}}e.$inject=["$q","c8yBinary","uiConfig"],angular.module("c8y.parts.imageWidget").factory("imageWidgetSvc",e)}();