"use strict";!function(){function t(n,i,e){var a=!1;function r(t){t.onClose&&n.invoke(t.onClose),e.remove(t)}function o(t){return function(){a=!1,t&&t()}}_.assign(this,{detail:function(t){if(t.onDetail)return n.invoke(t.onDetail);var e=i.open({templateUrl:":::PLUGIN_PATH:::/ui/notifications/alertDetail.html",size:"lg",controller:["$scope","alert",function(t,e){t.alert=e,t.close=o(t.$dismiss),t.rawData=function(){e.detailedData&&(t.contents=$("<div/>").text(JSON.stringify(e.detailedData,null,"\t")).html(),t.mode="raw")},t.message=function(){t.contents=e.text,t.mode="msg"},t.isDanger=function(){return"danger"===t.alert.type},a=!0,t.isDanger()?t.message():t.rawData()}],resolve:{alert:function(){return t}}});return r(t),e.result.finally(o())},showDetail:function(t){return(t.detailedData||t.onDetail)&&!a},getClass:function(t){var e=[];"danger"!==t.type&&e.push("interact");return e.push("alert-".concat(t.type)),e.join(" ")},close:r,alerts:e.list()})}t.$inject=["$injector","$uibModal","c8yAlert"],angular.module("c8y.ui").component("c8yUiAlerts",{templateUrl:":::PLUGIN_PATH:::/ui/notifications/alerts.html",controllerAs:"vm",controller:t,bindings:{navHiddenOnStartup:"<"}})}();