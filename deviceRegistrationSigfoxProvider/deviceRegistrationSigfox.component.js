"use strict";!function(){function e(e,t,i,n,r){var c=this,a=r("No active contracts with free slots available."),o=r("No Sigfox device type configured. Please create one using Device database.");function s(e){c.errMsg.push({message:e})}function d(){n.doResize()}_.assign(c,{$onInit:function(){e.all([i.getContracts().then(function(e){c.contracts=_.uniqBy(e,"id"),_.isEmpty(c.contracts)&&s(a)}),i.getDeviceTypes().then(function(e){c.deviceTypes=_.uniqBy(e,"id"),_.isEmpty(c.deviceTypes)&&s(o)})]).catch(function(e){return c.errMsg.push(e.data)}).finally(function(){c.providerSettingsLoaded=!0})},save:function(){n.disableInteractionWhenRequestInProgress(c,!0),n.setFormData(c.wizardCtrl.data,{device:c.device}),i.createNewDeviceRequest(function(e){var t=_.cloneDeep(e);return _.unset(t,"contract"),_.set(t,"contractId",e.contract.id),_.set(t,"deviceType",_.pick(e.deviceType,["id","name"])),_.set(t,"prototype",!e.sendCertificate),t}(c.device)).then(function(e){n.setSuccessData(c.wizardCtrl.data,e),c.wizardCtrl.goTo("finish")}).catch(function(e){n.setErrorData(c.wizardCtrl.data,e),c.wizardCtrl.goTo("finish")}).finally(function(){n.disableInteractionWhenRequestInProgress(c,!1),t(d,500)})},doResize:d,errMsg:[],hexPattern:"(0x){0,1}[0-9A-F]+(h){0,1}",productCertificateKeyPattern:"P_[0-9A-F]{4}_[0-9A-F]{4}_[0-9A-F]{2}"})}e.$inject=["$q","$timeout","deviceRegistrationSigfoxProviderService","deviceRegistrationWizardUtils","gettext"],angular.module("c8y.deviceRegistrationSigfox").component("deviceRegistrationSigfox",{require:{wizardCtrl:"^c8yWizardStep"},bindings:{backStep:"@?"},templateUrl:":::PLUGIN_PATH:::/deviceRegistrationSigfox.html",controller:e,controllerAs:"vm"})}();