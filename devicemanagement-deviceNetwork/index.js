"use strict";angular.module("c8y.deviceNetwork",[]).config(["c8yViewsProvider","gettext",function(e,t){e.when("/device/:deviceId",{templateUrl:"".concat(":::PLUGIN_PATH:::/views/","network.html"),name:t("Network"),priority:500,icon:"globe",showIf:["$routeParams","c8yBase","c8yDevices",function(e,t,c){var i=e.deviceId;return c.detailCached(i).then(t.getResData).then(function(e){return!_.isUndefined(e.c8y_Network)})}],controller:["$scope","$routeParams","c8yBase","c8yDevices",function(t,e,c,i){t.device={},i.detailCached(e.deviceId).then(c.getResData).then(function(e){t.device=e})}]})}]);