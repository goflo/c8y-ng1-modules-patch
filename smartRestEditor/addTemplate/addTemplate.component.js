"use strict";!function(){function e(e,n){var t=this;function a(e){var t={name:e.name};return n.create(t,e.externalId)}t.add=function(){return e({templateUrl:":::PLUGIN_PATH:::/addTemplate/addTemplate.modal.html",controller:l,controllerAs:"$ctrl",size:"sm"}).then(a).then(function(e){t.onAdded({template:e})})}}function l(e,t){var n=this;n.externalIdType=t.externalIdType,n.ok=function(){e.close(n.newSmartRestTemplate)},n.cancel=e.dismiss}l.$inject=["$uibModalInstance","c8ySmartRestTemplates"],e.$inject=["c8yModal","c8ySmartRestTemplates"],angular.module("c8y.smartRestEditor").component("c8ySmartRestAddTemplate",{bindings:{onAdded:"&"},templateUrl:":::PLUGIN_PATH:::/addTemplate/addTemplate.button.html",controller:e,controllerAs:"$ctrl"})}();