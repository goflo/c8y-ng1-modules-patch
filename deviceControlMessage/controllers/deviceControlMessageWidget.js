"use strict";angular.module("c8y.deviceControl.message").controller("deviceControlMessageWidget",["$scope","$routeParams","c8yBase","c8yInventory","c8yDevices","c8yDeviceControl","c8yAlert","gettext","gettextCatalog",function(c,i,t,e,n,s,o,d,a){function g(){var e=i.deviceId;return c.child.config&&c.child.config.device&&c.child.config.device.id&&(e=c.child.config.device.id),e}c.message=function(e){var c=a.getString('Send message "{{msg}}"',{msg:e});s.create({deviceId:g(),description:c,c8y_Message:{text:e}}).then(function(){o.success(d("Message will be sent."))})},c.device=void 0,c.$watch("device",function(){c.visible=c.device&&n.supportsOperation(c.device,"c8y_Message")}),e.detail(g()).then(function(e){c.device=t.getResData(e)})}]);