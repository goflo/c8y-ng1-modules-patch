"use strict";!function(){function t(t,e,i){function s(e,t){return t.isCellIDMicroserviceAvailable().then(function(t){return t&&e.mustHaveAnyRole(["ROLE_TENANT_STATISTICS_READ"])})}s.$inject=["c8yPermissions","cellIdUsageStatisticsService"],t.addNavigation({parent:i("Tenants"),name:i("Cell ID usage statistics"),path:"cellid-statistics",icon:"sellsy",showIf:s}),e.when("/cellid-statistics",{template:"<c8y-cell-id-usage-statistics></c8y-cell-id-usage-statistics>",showIf:s})}t.$inject=["c8yNavigatorProvider","c8yViewsProvider","gettext"],angular.module("c8y.cellIdUsageStatistics").config(t)}();