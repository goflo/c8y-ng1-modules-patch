"use strict";!function(){function e(e,t){var n=this;function a(e){var t=_.get(e,"c8y_Acceleration");t&&(n.rotate=function(e){var t,n,a=_.round(e.accelerationX.value),c=_.round(e.accelerationY.value),o=_.round(e.accelerationZ.value);return t=Math.atan2(c,o),n=Math.atan2(a,Math.sqrt(c*c+o*o)),t=t?t%(2*Math.PI):0,n=n?n%(2*Math.PI):0,{x:t,y:0,z:n}}(t))}_.assign(n,{$onInit:function(){!function(){var e={fragment:"c8y_Acceleration",series:"accelerationZ"};n.config.device&&(e.device=n.config.device.id,t.latest(e,!0).then(function(e){n.latestMeasurement=e}))}(),e.$watch("vm.latestMeasurement",a,!0)}})}e.$inject=["$scope","c8yMeasurements"],angular.module("c8y.rotation3d").component("rotation3d",{templateUrl:":::PLUGIN_PATH:::/views/viewer3d.html",bindings:{config:"<"},controller:e,controllerAs:"vm"})}();