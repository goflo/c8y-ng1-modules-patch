"use strict";angular.module("c8y.deviceDetail",[]).config(["c8yTitleProvider","c8yBreadcrumbsProvider",function(e,a){var r="/device/:deviceId";function c(e){return{title:e}}e.addTitle(r,{data:["$routeParams","c8yBase","c8yDevices",function(e,a,r){var t=e.deviceId;return t?r.detailCached(t).then(a.getResData).then(r.properName).then(c):{}}]}),a.addBreadcrumbs(r,{data:["$routeParams","c8yDevices",function(e,a){var r=e.deviceId;return a.getBreadcrumbsData(r)}]})}]);