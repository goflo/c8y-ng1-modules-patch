"use strict";angular.module("c8y.ui").directive("c8yDeviceStatusDisplay",["c8yDeviceStatus",function(i){return{restrict:"E",templateUrl:":::PLUGIN_PATH:::/ui/views/deviceStatusDisplay.html",link:function(e){e.$watch("device",function(t){e.status=i.status(t)},!0)},scope:{device:"="}}}]);