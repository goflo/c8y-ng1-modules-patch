"use strict";!function(){function e(n,t,r){var i={name:"Basic",fields:["name","type","id"]},c=[],s=["assetParents","deviceParents","childAssets","childDevices","c8y_IsDevice","__children","c8y_ui","self","parent","c8y_DataPoint",/^c8y_Dashboard!\d+/];function o(e){!function(e){c.length=0,c.push([i]),function c(o,a){_.forEach(o,function(e,n){if(t=n,_.find(s,function(e){return e instanceof RegExp?e.test(t):e===t})||!_.isObjectLike(e)||_.isEmpty(o[n]))return!0;var t,i=r.humanizeFragment(n);return e.parent={key:n,val:o.parent?o:void 0},a.push([{name:i,keyPath:f(o,n)}]),c(e,a[a.length-1]),!1})}(e,c)}(e.data),(n.config.options||[]).forEach(function(e){!function n(e,t){_.map(e,function(e){_.isArray(e)?n(e,t):e.keyPath===t.keyPath&&_.assign(e,t)})}(n.options,e)})}function f(e,n){var t=n;return e&&e.parent?(t="".concat(e.parent.key,".").concat(t),f(e.parent.val,t)):t}n.options=c,n.updateFields=function(){var e=_.flattenDeep(n.options);n.config.options=_.filter(e,function(e){return e.selected}),n.forms.componentForm.fieldsControl.$setValidity("fields_selected",n.config.options.length)},n.$watch("config.device",function(e){e&&t.detail(e.id).then(o)})}e.$inject=["$scope","c8yDevices","c8yBase"],angular.module("c8y.parts.devicePropertyWidget").controller("devicePropertyWidgetConfigCtrl",e)}();