"use strict";!function(){function e(c){return{scope:{rule:"=",param:"=",ruleTemplate:"="},restrict:"E",templateUrl:":::PLUGIN_PATH:::/views/paramInput.html",controller:"smartRuleParamInputCtrl",compile:function(e){var i,u=e.contents().remove();return function(r,t){var e,n,a;i||(i=c(u)),i(r,function(e){t.append(e)}),(e=r.param).showIf?r.$watch(e.showIf,function(e){r.visible=e}):r.visible=!0,(n=r.param).requireIf&&r.$watch(n.requireIf,function(e){n.required=e}),(a=r.param).setIf&&r.$watch(a.setIf,function(e){e||(r.rule.config[a.property]=void 0)})}}}}e.$inject=["$compile"],angular.module("c8y.smartRules").directive("smartRuleParamInput",e)}();