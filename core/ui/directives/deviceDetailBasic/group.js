"use strict";!function(){function e(h,f,v,g,y,m,G,D){return{restrict:"EA",templateUrl:":::PLUGIN_PATH:::/ui/views/deviceDetailBasic/group.html",link:function(n){var t,e="c8y_DeviceGroup",i="c8y_IsDeviceGroup",r=[];function c(e){n.currentGroups=e,f.clearBreadcrumbsCache(t),D.$emit("update")}function u(e){return e.data}function o(){return f.directParentAssets(t,e,i).then(c)}function a(e){return e.id!==t}function l(e){r.length=0,e.forEach(function(e){r.push(e)})}function s(){var e=n.$new();y({templateUrl:":::PLUGIN_PATH:::/ui/views/deviceDetailBasic/groupSelectModal.html",controller:"c8yGroupSelectModalCtrl",scope:e}).then(function(t){n.group.selected=_.find(r,function(e){return e.id===t.id})})}function d(e){return f.detailCached(t).then(u).then(_.partial(v.addChildAsset,e)).then(o).then(function(){g.success(m("Device added to group"))})}function p(e){return f.detailCached(t).then(u).then(_.partial(G.unassignDevice,e)).then(o).then(function(){g.success(m("Device removed from group."))})}n.$watch("device",function(){n.device.id&&(t=n.device.id,n.availableGroups=r,n.searchGroupInHierarchy=s,n.addToGroup=d,n.removeFromGroup=p,n.group={},o(),h.all([v.list({type:e}),v.list({fragmentType:i})]).then(_.flattenDeep).then(_.partialRight(_.uniqBy,function(e){return e.id})).then(_.partialRight(_.filter,a)).then(l))})}}}function t(n,e,t,i,r){var c=[];function u(e){return t.detail(e).then(function(e){return e.data}).then(function(t){return i.getGroupItems(t).then(function(e){n.items=e,c.push(t)})})}n.title=r("Select group"),n.drillDown=u,n.upToGroup=function(e){for(;c[c.length-1]!==e;)c.pop();c.pop(),u(e.id)},n.select=e.close,n.dismiss=e.dismiss,n.isGroup=i.isGroup,i.getTopLevelGroups().then(function(e){n.items=e}),n.breadcrumbs=c,n.currentManagedObjectId=n.device.id}t.$inject=["$scope","$uibModalInstance","c8yInventory","c8yGroups","gettext"],e.$inject=["$q","c8yDevices","c8yInventory","c8yAlert","c8yModal","gettext","groupsHierarchySvc","c8yBreadcrumbs"],angular.module("c8y.ui").directive("c8yDeviceDetailBasicGroup",e).controller("c8yGroupSelectModalCtrl",t)}();