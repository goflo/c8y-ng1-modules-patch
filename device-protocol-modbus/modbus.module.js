"use strict";!function(){function e(e){e.initUi()}function c(e){e.registerFeaturesManifest()}c.$inject=["c8yModbusDevice"],e.$inject=["c8yModbusDeviceProvider"],angular.module("c8y.modbus",["c8y.deviceProtocols","c8y.deviceDatabase4"]).config(e).run(c)}();