"use strict";!function(){var e=_.identity;angular.module("c8y.cellIdUsageStatistics").constant("cellIdUsageStatisticsConstants",{TENANT_STATS_SERVICE_ENDPOINT:"service/cellid/statistics/summary",SUBTENANTS_STATS_SERVICE_ENDPOINT:"service/cellid/statistics/allTenantsSummary",SUBTENANT_STATS_COLUMNS:{tenantId:{name:"tenantId",header:e("ID"),cell:{template:"{{item.tenantId}}"},filteringByPattern:{itemProperty:"tenantId"},sortingByPath:{itemProperty:"tenantId"}},apiRequests:{name:"apiRequests",header:e("API requests"),cell:{template:"{{item.apiRequests}}"},filteringByMinMax:{itemProperty:"apiRequests"},sortingByPath:{itemProperty:"apiRequests"}},activeDevices:{name:"activeDevices",header:e("Active devices"),cell:{template:"{{item.activeDevices}}"},filteringByMinMax:{itemProperty:"activeDevices"},sortingByPath:{itemProperty:"activeDevices"}}}})}();