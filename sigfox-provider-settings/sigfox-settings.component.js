"use strict";!function(){function t(t,n,e){var i=this;_.assign(i,{$onInit:function(){t.isTokenSet().then(function(t){i.credentialsSaved=t}).finally(function(){i.initialized=!0})},turnOnEditMode:function(){i.editMode=!0},save:function(){t.save(i.settings).then(function(){return n.success(e("Credentials saved."))})}})}t.$inject=["c8ySigfoxSettingsService","c8yAlert","gettext"],angular.module("c8y.sigfoxConnectivitySettings").component("c8ySigfoxConnectivitySettings",{templateUrl:":::PLUGIN_PATH:::/sigfox-settings.html",controllerAs:"vm",controller:t})}();