"use strict";!function(){function t(t,o,e){var r=this;function c(t){r.protocols=t,r.wizardCtrl.forceResize()}_.assign(r,{CONFIG:o.VIEW_CONFIG,customTitle:null,$onInit:function(){t.all({protocols:o.getProtocols(),manifests:e.getFeaturesManifestsAsync()}).then(function(t){var o=t.protocols,r=t.manifests;return _.reject(o,function(t){var o=_.find(r,{fieldbusType:t.id}),e=_.get(o,"noNewProtocolInstances",!1);return e})}).then(c),r.protocolCtrl.wizardCtrl=r.wizardCtrl}})}t.$inject=["$q","c8yDeviceProtocolUi","c8yDeviceDatabase"],angular.module("c8y.deviceProtocols").component("c8yDeviceProtocolSelect",{templateUrl:":::PLUGIN_PATH:::/deviceProtocolSelect.html",require:{wizardCtrl:"^c8yWizardStep",protocolCtrl:"^c8yAddDeviceProtocolWizard"},controllerAs:"vm",controller:t})}();