"use strict";function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(e){_defineProperty(r,e,t[e])})}return r}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}!function(){function e(e,u,t,n,o,c,p){var s={c8y_BrokerSourceInactive:{icon:"c8y-group-remote-inactive",iconOpen:"c8y-group-remote-inactive"},c8y_BrokerSource:{icon:"c8y-group-remote",iconOpen:"c8y-group-remote-open"},c8y_DeviceGroup:{icon:"c8y-group",iconOpen:"c8y-group-open"},c8y_DynamicGroup:{icon:"c8y-group-smart",iconOpen:"c8y-group-smart-open"},other:{icon:"circle",iconClass:"statusUnknown"}};return{getGroupItems:i,getItemsCount:function(e){return n.children(e,"childAssets",{skipDetail:!0,params:{pageSize:1,withTotalPages:!0,withChildren:!1}}).then(function(e){var r=e.data.statistics.totalPages;return r})},getGroupAssetsAndDevices:function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=t.createListFilter(function(e){var r=e.id,t=_.map(_.get(n,"childAdditions.references"),_.property("managedObject.id"));return!_.includes(t,r)});return i(n,e).then(r)},getGroupTypeItems:function(r){return o.getLookup().then(function(e){return[e[r]]}).then(y)},getTopLevelGroups:function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e||!1;return r.onlyRoots=!0,c.mustHaveAllRoles(["ROLE_INVENTORY_READ"]).then(function(){return o.get().then(_.property("groups")).then(function(e){return t?function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};e.push({type:p.getType()});var t=y(e,r);return r.skipChildCount||(t=t.then(function(e){return p.addChildCountProperty(e,r)})),t}(e,r):y(e,r)})},a)},isGroup:g,getGroupInfo:r,getIconSpecs:function(e){return r(e).iconSpecs},getIconSpecsForType:function(e){return _.get(s,e,{})}};function i(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return n.listQuery(function(e){return{__bygroupid:t.getId(e)}}(e),_objectSpread({withParents:!0},r),!0)}function y(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t={__filter:{__and:[{__not:{__has:"c8y_IsDynamicGroup.invisible"}},{type:{__in:_.map(e,"type")}}]}};return n.listQuery(t,r,!0)}function a(){return n.list({fragmentType:"c8y_IsDeviceGroup",pageSize:1e3,onlyRoots:!0})}function g(e){return!!e.c8y_IsDeviceGroup||"c8y_DeviceGroup"===e.type}function r(e){var r,t=g(e),n=u.get("c8yDevices").isDevice(e),o=p.isDynamicGroup(e),c=u.get("c8yDeviceGroup"),i=c.hasBrokerSource(e);return t?r=i?c.isBrokerSourceActive(e)?"c8y_BrokerSource":"c8y_BrokerSourceInactive":p.isDynamicGroup(e)?"c8y_DynamicGroup":"c8y_DeviceGroup":o?r="c8y_DynamicGroup":n||(r="other"),{isGroup:t,isDynamicGroup:o,hasBrokerSource:i,iconSpecs:_.get(s,r,{})}}}e.$inject=["$q","$injector","c8yBase","c8yInventory","c8yGroupTypesConfig","c8yPermissions","c8yDynamicGroups"],angular.module("c8y.core").factory("c8yGroups",e)}();