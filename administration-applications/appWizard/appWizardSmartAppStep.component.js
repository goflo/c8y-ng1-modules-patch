"use strict";!function(){function t(t,a,r,e){var i=this,n={required:e.getString("This field is required."),maxlength:e.getString("Up to 120 characters allowed."),url:e.getString("Valid URL required.")},s={type:"HOSTED",resourcesUrl:"https://bitbucket.org/m2m/cumulocity-ui/raw/default/build",resourcesUsername:"afwifawfoijafa",resourcesPassword:"kjijfgknnoippk"};_.assign(i,{host:t.host(),invalid:a.invalidFormOrField,validationHints:_.partialRight(a.validationHints,n),create:function(){var t=_.defaults(i.wizardCtrl.data.smartApp,s);return t.key=[t.path,"appkey",String(Math.random()).substr(2)].join("-"),t.manifest={imports:["core/c8yBranding"]},t.manifest.uiCreated=!0,r.save(t).then(a.getResData).then(function(t){i.wizardCtrl.data.createdApp=t,i.wizardCtrl.goTo("success")})}})}t.$inject=["$location","c8yBase","c8yApplication","gettextCatalog"],angular.module("c8y.parts.applications").component("appWizardSmartAppStep",{require:{wizardCtrl:"^c8yWizardStep"},templateUrl:":::PLUGIN_PATH:::/appWizard/appWizardSmartAppStep.html",controller:t,controllerAs:"vm"})}();