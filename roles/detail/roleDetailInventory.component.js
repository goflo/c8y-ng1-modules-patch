"use strict";!function(){function n(t,e,o,i,n){var r=this;function a(n){return r.saving=!0,n.finally(function(){r.saving=!1}),n}function l(n){return"SUPPORT"===n.name&&!r.isTopTenant}_.assign(r,{$onInit:function(){!function(){var n=r.id,e=r.duplicateId;("new"===n?i.newInventoryRole(e):o.detail(n).then(t.getResData)).then(function(n){r.role=n})}()},$onChanges:function(n){n.isTopTenant&&(r.permissionScopes=function(){var n=e.SCOPES.values();return _.reject(n,l)}())},STRINGS:i.STRINGS,helpLink:n.getUserGuideLink(i.STRINGS.LINKS.ROLES_INVENTORY),onSaveName:function(n){return a(i.saveInventoryRoleName(r.role,n))},cancel:i.list,save:function(){return a(i.saveInventoryRole(r.role))}})}n.$inject=["c8yBase","c8yPermissions","c8yRoles","c8yRolesUi","c8yDocs"],angular.module("c8y.roles").component("c8yRoleDetailInventory",{templateUrl:":::PLUGIN_PATH:::/detail/roleDetailInventory.html",bindings:{id:"<",duplicateId:"<",isTopTenant:"<"},controllerAs:"vm",controller:n})}();