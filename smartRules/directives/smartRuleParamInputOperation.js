"use strict";!function(){function e(e){var a=[{description:e("Restart device"),c8y_Restart:{}},{description:e("Change relay status to OPEN."),c8y_Relay:{relayState:"OPEN"}},{description:e("Change relay status to CLOSED."),c8y_Relay:{relayState:"CLOSED"}}];return{require:"^smartRuleParamInput",scope:{rule:"=",param:"="},restrict:"E",templateUrl:":::PLUGIN_PATH:::/views/paramInputOperation.html",link:function(e,t,a,r){e.placeholder=r.placeholder},controller:["$scope",function(t){t.operation={json:{},example:null},t.operationExamples=a,t.chooseOperationExample=function(e){t.operation.json=angular.copy(e)},t.$watch("operation.json",function(e){t.rule.config[t.param.property]=e},!0),t.operation.json=t.rule.config[t.param.property]||{}}]}}e.$inject=["gettext"],angular.module("c8y.smartRules").directive("smartRuleParamInputOperation",e)}();