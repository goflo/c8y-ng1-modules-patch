"use strict";!function(){function t(i,t){var e=this;function o(t){e.options[t]=_(e[t]).invert().mapValues(_.stubTrue).value()}function n(){i.config.options=e.options}function s(t){e.alarmTypes.push({name:t||""})}_.assign(e,{status:t.status,severity:t.severity,icon:t.icon,options:{orderMode:"ACTIVE_FIRST"},alarmTypes:[],updateOptions:n,addAlarmType:s,removeAlarmType:function(t){_.pullAt(e.alarmTypes,t)}}),function(){var t=i.config.options;t?_.assign(e.options,t):(o("status"),o("severity"));!function(){var t=i.config.options,o=t?t.types:[];_.isEmpty(o)?s():_.forEach(o,s)}()}(),i.$watch("config.device",function(t){t&&(e.options.device=t.id,n())}),i.$watch("vm.options.severity",function(t){var o=0<_.filter(t).length,n=i.forms;e.severityValid=o,n&&n.componentForm.$setValidity("severity",o)},!0),i.$watch("vm.alarmTypes",function(){e.options.types=_(e.alarmTypes).map("name").compact().uniq().value(),n()},!0)}t.$inject=["$scope","c8yAlarms"],angular.module("c8y.alarms").controller("AlarmsConfigController",t)}();