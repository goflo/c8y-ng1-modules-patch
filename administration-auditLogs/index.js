"use strict";!function(){function t(t,i,a){t.addNavigation({parent:a("Accounts"),name:a("Audit logs"),path:"audit-logs",icon:"archive",priority:4800}),i.when("/audit-logs",{templateUrl:":::PLUGIN_PATH:::/views/list.html"})}t.$inject=["c8yNavigatorProvider","c8yViewsProvider","gettext"],angular.module("c8y.auditLogs",[]).config(t)}();