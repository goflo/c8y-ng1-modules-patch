"use strict";!function(){function e(e,n,t){var i="c8y-events";e.addNavigation({parent:{name:t("Overviews"),icon:"c8y-overviews"},name:t("Events"),priority:1300,icon:i,path:"events"}),n.when("/events",{icon:i,name:t("Events"),templateUrl:":::PLUGIN_PATH:::/views/index.html"}),n.when("/device/:deviceId",{icon:i,name:t("Events"),templateUrl:":::PLUGIN_PATH:::/views/index.html"})}e.$inject=["c8yNavigatorProvider","c8yViewsProvider","gettext"],angular.module("c8y.parts.eventList",[]).config(e)}();