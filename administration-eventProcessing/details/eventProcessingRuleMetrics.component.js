"use strict";!function(){function e(n){var t=this;_.assign(t,{$onChanges:function(e){e.rule&&t.rule&&n.getModuleMetrics(t.rule).then(function(e){t.metrics=e})}})}e.$inject=["eventProcessingSvc"],angular.module("c8y.eventProcessing").component("c8yEventProcessingRuleMetrics",{bindings:{rule:"<"},templateUrl:":::PLUGIN_PATH:::/details/eventProcessingRuleMetrics.html",controller:e,controllerAs:"vm"})}();