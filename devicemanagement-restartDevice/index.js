"use strict";angular.module("c8y.restartDevice",[]).config(["c8yViewsProvider","c8yActionsProvider","gettext",function(e,t,c){var i=c("Restart device");t.addUrlAction({path:"/device/:deviceId/*",text:i,priority:-1e3,actionBar:!0,showIf:["$routeParams","c8yBase","c8yInventory","c8yDevices",function(e,r,t,c){return t.detail(e.deviceId).then(function(e){var t=r.getResData(e);return c.supportsOperation(t,"c8y_Restart")})}],action:["$routeParams","c8yAlert","c8yDeviceControl","gettextCatalog",function(e,t,r){return r.create({deviceId:e.deviceId,description:i,c8y_Restart:{}}).then(function(){t.success(c("Device will be restarted."))})}]})}]);