"use strict";angular.module("c8y.deviceControl.relay").controller("deviceControlRelayWidgetCtrl",["$scope","$routeParams",function(i,c){this.getDeviceId=function(){var e=c.deviceId;return i.child.config&&i.child.config.device&&i.child.config.device.id&&(e=i.child.config.device.id),e}}]);