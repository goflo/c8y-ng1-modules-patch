"use strict";!function(){function n(n,r,i,t,a,c,u,p,e,d,s,g){var l=10,o=2e3,v=1950;return{loadAll:function(){(function(){var n={name:"Groups",icon:"c8y-group",iconOpen:"c8y-group-open",sortAlphabetically:!0,path:"group",hasChildren:!0};n.priority=G(),t.addNavigation(n)})(),a.getTopLevelGroups(N()).then(A),n.$on("c8yInventory:update",m)},addGroupNavigation:C,updateGroupNavigation:D,removeGroupNavigation:function(n){var e=t.findNode(I(n));t.removeNavigation(e)},updateGroupChildren:x,updateAllGroupsOfAChild:function(n){var e=g.extractParents(n);_.forEach(e,function(n){x(n)})},getIconSpecsForType:function(n){return a.getIconSpecsForType(n)},getNav:S};function f(e){if(!e.loading){var n=e.group_id,o=r.when([]);e.loading=!0,e.is_group&&(o=a.getGroupAssetsAndDevices(n)),e.is_dynamicGroup&&(o=p.getGroupItems(n,{pageSize:l})),o.then(function(n){return h(e,n,!0)})}}function h(o,n,e){e&&o.removeAllChildren(),o.loading=!1;var r=_.map(n,function(n){var e=S(n,o.is_device);return e.parent=o.hash,e.sortAlphabetically=!0,e}),i=t.addNavigation(r);_.forEach(i,function(n){n.is_device?n.on("active",function(){u.setPreferredBreadcrumb({id:n._parent.group_id})}):n.on("expand",f).on("collapse",y)}),o.showMore=n.paging&&n.paging.next&&function(){return n.paging.next().then(_.partial(h,o))}}function y(n){n.removeAllChildren()}function m(n,e){var o=e.mo;(function(n){return g.detail(n,{withParents:!0}).then(function(n){var e=n.data;return e})})(o).then(D);var r=_.get(i,"deviceId")||_.get(i,"groupId");_.isUndefined(r)||o.id!==r||s.changeTitle({title:o.name})}function G(){return N()?o:v}function N(){return"devicemanagement"===e.getCurrentContextPath()}function A(n){n.forEach(C)}function C(n){var e=S(n);e.parent="Groups",t.addNavigation(e).on("expand",f).on("collapse",y)}function D(n){var e=t.findNode(I(n));e&&e.update(S(n))}function x(n){var e=t.findNode(I(n));e&&(e.collapse(),e.expand())}function I(e){return function(n){return n.group_id===e.id}}function S(n){var e=a.getGroupInfo(n),o=c.isDeviceOrChildDevice(n),r={group_id:n.id,closed:!0,hasChildren:!0,is_device:o,is_group:e.isGroup,is_dynamicGroup:e.isDynamicGroup,hasBrokerSource:e.hasBrokerSource,device:o?n:void 0,name:o?c.properName(n):n.name,priority:G(),path:"".concat(e.isGroup||e.isDynamicGroup?"group":"device","/").concat(n.id),sortAlphabetically:!e.isDynamicGroup,showMoreLabel:e.isDynamicGroup?d("Search more"):void 0};return _.assign(r,e.iconSpecs),r}}n.$inject=["$rootScope","$q","$routeParams","c8yNavigator","c8yGroups","c8yDevices","c8yBreadcrumbs","c8yDynamicGroups","c8yApplication","gettext","c8yTitle","c8yInventory"],angular.module("c8y.ui").factory("groupTypesHierarchyNavigator",n)}();