"use strict";!function(){function e(e,t){u.$inject=["$injector","c8yAlert","$uibModal"],s.$inject=["$routeParams"],o.$inject=["$routeParams"];var r="/users/:userId",n={template:'<c8y-user-inventory-roles-tab user="vm.userId"></c8y-user-inventory-roles-tab>',name:t("Inventory roles"),icon:"insurance-agent",controllerAs:"vm",controller:s,showIf:o};function o(e){return e.userId&&"new"!==e.userId}function s(e){this.userId=e.userId}function u(e,r,n){return{STRINGS:function(){try{return e.get("c8yRolesUiStrings")}catch(e){return{}}}(),copyFromUserDialog:function(e){var r={component:"c8yCopyRolesModal",resolve:{userTo:_.constant(e)}};return n.open(r).result},successUserRolesCopy:function(){var e=t("User roles copied.");return r.success(e)}}}return{$get:u,initUi:function(){e.when(r,n)}}}e.$inject=["c8yViewsProvider","gettext"],angular.module("c8y.userRoles").provider("c8yUserRolesUi",e)}();