"use strict";!function(){function e(e){var o=this;function n(e){return{roles:e.data.inventoryAssignments,process:o.process}}_.assign(o,{selectUser:function(e){o.selecting||(o.selectedUser=e)},process:"merge",copy:function(){return o.copying=!0,e.listInventoryRoles(o.selectedUser).then(n).then(function(e){o.copying=!1,o.modalInstance.close(e)})}})}e.$inject=["c8yUser"],angular.module("c8y.userRoles").component("c8yCopyRolesModal",{templateUrl:":::PLUGIN_PATH:::/copyRolesModal/copyRolesModal.html",bindings:{modal:"<",userTo:"<",modalInstance:"<",resolve:"<"},controller:e,controllerAs:"vm"})}();