"use strict";!function(){function t(t,e,r){e.addNavigation({priority:1,name:r("Exports"),parent:{name:r("Configuration"),icon:"c8y-tools"},icon:"graph-report",path:"export",routerLinkExact:!1,ignoreAlphabeticalOrder:!0}),t.when("/export",{icon:"graph-report",templateUrl:":::PLUGIN_PATH:::/views/list.html"}),t.when("/export/:exportId/:clone?",{templateUrl:":::PLUGIN_PATH:::/views/detail.html",name:r("Properties"),icon:"graph-report"})}t.$inject=["c8yViewsProvider","c8yNavigatorProvider","gettext"],angular.module("c8y.cockpit.export",[]).config(t)}();