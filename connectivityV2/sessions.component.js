"use strict";!function(){function n(t,e,i){var s=this,o=i.getThisMonth(),a=i.getThisDay();function n(n){return s.supportedFunctionalities=n,s.supportedFunctionalities}function r(n){return s.sessions=n.billings,s.session}function c(n){return s.sessions=n.billings,s.sessions}_.assign(s,{$onInit:function(){i.getProviderSupportedFunctionalities().then(n)},$onChanges:function(n){_.get(n,"available.currentValue")&&(s.provider,"ericsson"===s.provider?(_.get(s,"commonData.currentDayDataUsage")||i.getThisDayDataUsage(t.deviceId,a,!1)).then(r):(_.get(s,"commonData.currentMonthDataUsage")||e.getTerminalDataUsage(t.deviceId,{},o)).then(c))},supportedFunctionalities:{}})}n.$inject=["$routeParams","c8yConnectivity","connectivityService"],angular.module("c8y.connectivityV2").component("c8yConnectivitySessions",{controller:n,controllerAs:"vm",templateUrl:":::PLUGIN_PATH:::/sessions.html",bindings:{available:"<",commonData:"<?",provider:"<"}})}();