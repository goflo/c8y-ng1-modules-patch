"use strict";!function(){function t(e){var n=this;function c(t){n.wizardCtrl.close({path:t})}function r(){n.pending=!1}_.assign(n,{model:{},create:function(t){return n.pending=!0,e.create(t).then(e.detailPath).then(c,r)}})}t.$inject=["c8yImpact"],angular.module("c8y.impact").component("c8yImpactCreateStep",{require:{wizardCtrl:"^c8yWizardStep"},templateUrl:":::PLUGIN_PATH:::/impact-create-step.html",controller:t,controllerAs:"vm"})}();