"use strict";!function(){function e(e,t){var o={template:'<c8y-lwm2m-bootstrap-config device-id="id"></c8y-lwm2m-bootstrap-config>',name:e("LWM2M bootstrap parameters"),icon:"c8y-device-protocols",controller:i,showIf:c};return{initUi:function(){t.when("/device/:deviceId",o)},$get:_.noop}}function i(e,t){e.id=t.deviceId}function c(e,t,o){return t.detailCached(e.deviceId).then(function(e){var t=e.data;return o.isDeviceType(t)&&o.bootstrapPermissions()}).then(function(e){return e.read})}c.$inject=["$routeParams","c8yDevices","c8yLwm2m"],i.$inject=["$scope","$routeParams"],e.$inject=["gettext","c8yViewsProvider"],angular.module("c8y.lwm2m.bootstrap",[]).provider("c8yLwm2mBootstrapUi",e)}();