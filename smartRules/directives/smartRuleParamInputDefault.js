"use strict";angular.module("c8y.smartRules").directive("smartRuleParamInputDefault",function(){return{require:"^smartRuleParamInput",scope:{rule:"=",param:"="},restrict:"E",templateUrl:":::PLUGIN_PATH:::/views/paramInputDefault.html",link:function(e,r,t,a){e.placeholder=a.placeholder}}});