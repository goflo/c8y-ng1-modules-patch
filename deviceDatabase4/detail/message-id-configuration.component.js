"use strict";angular.module("c8y.deviceDatabase4").component("c8yDeviceTypeMessageIdConfiguration",{templateUrl:":::PLUGIN_PATH:::/detail/message-id-configuration.html",bindings:{featureLabel:"<",featureConfiguration:"<",deviceTypeForm:"<",deviceType:"<",messageIdSources:"<"},controller:function(){var i=this;function n(){var e=_.get(i.deviceType,"c8y_MessageIdConfiguration.source");i.featureConfiguration&&i.featureConfiguration.messageIdConfiguration&&!e&&(e=_.get(i.featureConfiguration,"messageIdConfiguration[0].value"),_.set(i.deviceType,"c8y_MessageIdConfiguration.source",e))}_.assign(i,{$onChanges:function(e){e.featureLabel&&n()},initSelector:n,isMessageIdSourceDisabled:function(){return i.featureConfiguration.messageIdConfiguration.length<2}})},controllerAs:"vm"});