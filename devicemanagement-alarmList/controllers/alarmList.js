"use strict";function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(){function e(n,t,r,i,s,e,o,a,c){var u,l,f=this,d={pageSize:10},v=new WeakMap,h=new WeakMap,m=function(){function t(e){_classCallCheck(this,t),this.name=e,this.active=!1,this.filters={},this.count=null,this.countLoading=!1}return _createClass(t,[{key:"toggleActive",value:function(){this.active=!this.active}},{key:"reloadCount",value:function(){var t=this;this.active&&(this.countLoading=!0,i.getDisplayCount(_.omit(this.filters,"pageSize")).then(function(e){t.count=e}).finally(function(){t.countLoading=!1}))}},{key:"active",get:function(){return v.get(this)},set:function(e){v.set(this,e),this.reloadCount()}},{key:"filters",get:function(){return h.get(this)},set:function(e){h.set(this,e),this.reloadCount()}}]),t}(),y="/alarmsWithChildren";function g(){f.severities.forEach(function(e){e.filters=_objectSpread({},d,{severity:e.name})})}function b(e,t){s.addListener(n.$id,u,e,t)}function p(){S()}function C(e,t){var n=_.find(f.severities,{name:t.severity});if(_.isString(n.count))n.reloadCount();else{var r=0;"CREATE"===e&&("ACTIVE"!==t.status&&"ACKNOWLEDGED"!==t.status||(r=n.filters.resolved?0:1),"CLEARED"===t.status&&(r=n.filters.resolved?1:0)),"UPDATE"===e&&"CLEARED"===t.status&&(r=n.filters.resolved?1:-1),n.count+=r}}function E(){s.switchRealtime(n.$id,u)}function A(){d.resolved=!f.unresolved,g()}function w(){var e=_.filter(f.severities,"active"),t=_.map(e,function(e){var t=_objectSpread({resolved:!1},_.pick(e.filters,["source","severity"]));_.isUndefined(t.source)||_.assign(t,{withSourceAssets:!0,withSourceDevices:!0});var n={status:i.status.CLEARED};return i.updateBulk(t,n)});return r.all(t).then(function(e){return{resolvedImmediately:_.every(e,function(e){return 200===e.status})}})}function S(){n.$broadcast("alarmListRefresh"),f.severities.forEach(function(e){return e.reloadCount()})}_.assign(f,{icon:i.icon,realtime:!0,onVmUnresolvedChange:A,clientSideUnresolved:function(){return t.deviceId?f.unresolved:void 0},resolveAll:function(){return e({title:c("Confirm clearing alarms?"),body:c("Do you really want to clear all alarms of selected severities?"),status:"danger"}).then(w).then(function(e){var t=e.resolvedImmediately;t?a.success(c("Alarms cleared.")):a.success(c("Alarms are being cleared in background."))}).then(S)},refresh:S,isRefreshing:function(){return _.some(f.severities,"refreshing")}}),function(){var e=_.reverse(_.cloneDeep(i.severityList));f.severities=_.map(e,function(e){return new m(e)}),f.unresolved=!0,A(),t.deviceId&&(d.source=t.deviceId);g(),f.severities.forEach(function(e){e.active=!0}),o.changeTitle({title:c("Alarms")}),function(){var e="".concat(y,"/*");d.source&&(e="".concat(y,"/").concat(d.source));if(u){if(e===u)return;s.removeSubscriber(n.$id,u),l()}u=e,b("".concat(n.$id,"-subscribed"),p),b("CREATE",C),b("UPDATE",C),l=n.$on("$destroy",function(){s.removeSubscriber(n.$id,u)}),f.realtime&&E()}()}(),n.$watch("vm.realtime",function(){f.realtime&&S();f.realtime!==s.getStatus(n.$id,u)&&E()})}e.$inject=["$scope","$routeParams","$q","c8yAlarms","c8yRealtime","c8yModal","c8yTitle","c8yAlert","gettext"],angular.module("c8y.parts.alarmList").controller("alarmListCtrl",e)}();