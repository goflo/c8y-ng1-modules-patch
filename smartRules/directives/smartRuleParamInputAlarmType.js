"use strict";!function(){function e(a){function l(e){return[a.getString(e.label)," ",a.getString('(e.g. "c8y_UnavailabilityAlarm". The alarm type can be found in the alarm details.)'),e.required?" *":""].join("")}return{require:"^smartRuleParamInput",scope:{rule:"=",param:"=",multiple:"="},restrict:"E",templateUrl:":::PLUGIN_PATH:::/views/paramInputAlarmType.html",link:function(a,e,r,t){var n;a.placeholder=t.placeholder,a.tooltip=l,a.add=function(){a.alarmTypes.push({name:""})},a.remove=function(e){_.remove(a.alarmTypes,e)},a.$watch("alarmTypes",function(e){a.rule.config[a.param.property]=_.map(e,"name").join(",")},!0),n=a.rule.config[a.param.property]||"",a.alarmTypes=_.map(n.split(","),function(e){return{name:e}})}}}e.$inject=["gettextCatalog"],angular.module("c8y.smartRules").directive("smartRuleParamInputAlarmType",e)}();