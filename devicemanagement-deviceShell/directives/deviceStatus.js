"use strict";angular.module("c8y.deviceShell").directive("deviceStatus",function(){return{restrict:"E",templateUrl:":::PLUGIN_PATH:::/views/deviceStatus.html",controller:"deviceStatusCtrl",scope:{device:"=",refresh:"="}}});