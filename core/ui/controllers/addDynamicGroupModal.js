"use strict";!function(){function n(n,e,o,r,t,a,c,i,u,s){var m={schema:{type:"object",properties:{name:{type:"string"}},required:["name"]},form:[{key:"name",title:u.getString("Group name")}]};function p(n){return!s.appOption("upgrade")&&o.get("groupTypesHierarchyNavigator").addGroupNavigation(n),n}function l(n){return t.success(u.getString('Smart group "{{name}}" created.',n)),n}_.assign(n,{dynamicGroupFormDefinition:m,dynamicGroup:r.spawnEmpty(),create:function(){return r.create({dynamicGroup:n.dynamicGroup,columns:a,columnsConfig:c,configurableColumns:i}).then(p).then(l).then(e.close)},cancel:e.dismiss})}n.$inject=["$scope","$uibModalInstance","$injector","c8yDynamicGroups","c8yAlert","columns","columnsConfig","configurableColumns","gettextCatalog","c8yBase"],angular.module("c8y.ui").controller("addDynamicGroupModalController",n)}();