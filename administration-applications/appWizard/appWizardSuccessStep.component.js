"use strict";!function(){function e(e,n,t){var r=this;_.assign(r,{open:function(e){r.wizardCtrl.close(),n.open(t.getHref(e),"_blank").opener=null},canOpenInBrowser:!1}),e.$watch(function(){return r.wizardCtrl.getCurrentStep()},function(e){"success"===_.get(e,"stepId")&&t.canOpenInBrowser(r.wizardCtrl.data.createdApp).then(function(e){r.canOpenInBrowser=e})})}e.$inject=["$scope","$window","c8yApplication"],angular.module("c8y.parts.applications").component("appWizardSuccessStep",{require:{wizardCtrl:"^c8yWizardStep"},templateUrl:":::PLUGIN_PATH:::/appWizard/appWizardSuccessStep.html",controller:e,controllerAs:"vm"})}();