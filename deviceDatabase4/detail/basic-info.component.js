"use strict";angular.module("c8y.deviceDatabase4").component("c8yDeviceTypeBasicInfo",{templateUrl:":::PLUGIN_PATH:::/detail/basic-info.html",bindings:{deviceTypeForm:"<",formValue:"<",deviceType:"<",deviceTypesFeatures:"<"},controllerAs:"vm",controller:function(){var e=this;_.assign(e,{getFeatures:function(){return _.find(e.deviceTypesFeatures,{fieldbusType:e.formValue.fieldbusType})||{}}})}});