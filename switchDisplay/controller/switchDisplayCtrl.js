"use strict";!function(){function i(n,t,c,e,i){function o(){var i=t.deviceId;return n.child.config&&n.child.config.device&&n.child.config.device.id?n.child.config.device.id:i}function r(i,t){if(i){for(var n=t.split("."),c=i[n[0]],e=1;e<n.length&&c;e++)c=c[n[e]];return"".concat(c)}}function a(t){_.forEach(n.switches,function(i){i.value=r(t,i.property)})}var s;n.$watch("child.config.switches",function(i){n.switches=i,function(){var i=o();return e.detail(i).then(function(i){return c.getResData(i)})}().then(a)}),n.getValue=r,s=["/managedobjects/",o()].join(""),i.addListener(n.$id,s,i.realtimeActions().UPDATE,function(i,t){a(t)}),i.start(n.$id,s),n.$on("$destroy",function(){i.stop(n.$id,s)})}i.$inject=["$scope","$routeParams","c8yBase","c8yInventory","c8yRealtime"],angular.module("c8y.switchDisplay").controller("switchDisplayCtrl",i)}();