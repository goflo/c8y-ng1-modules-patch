"use strict";angular.module("c8y.deviceControl.relayArray").directive("c8yRelayArrayControl",function(){return{restrict:"E",scope:{device:"&",suppressAlerts:"&",onSuccess:"&",onError:"&"},controller:"c8yRelayArrayControlCtrl",controllerAs:"vm",templateUrl:":::PLUGIN_PATH:::/relayArrayControl/relayArrayControl.html"}});