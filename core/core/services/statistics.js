"use strict";angular.module("c8y.core").factory("c8yStatistics",["c8yBase","$http",function(e,n){var c="tenant/statistics";return{getSummary:function(t){var a=e.url("".concat(c,"/summary")),r={params:t};return n.get(a,r)},list:function(t){var a=e.url("".concat(c,"/allTenantsSummary")),r={params:e.timeOrderFilter(e.pageSizeNoTotalFilter(t))};return n.get(a,r).then(e.getResData)}}}]);