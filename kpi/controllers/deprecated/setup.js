"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){function e(n,t,o,e,r){var i={};function u(){r.getSupportedMeasurements().then(a).then(c).then(p)}function a(e){return i={},_.forEach(e,function(e){i[e]={type:e,series:null}}),n.measurements=i}function c(){var n=[];return _.forEach(i,function(e){n.push(r.getSupportedSeries(e.type).then(angular.bind({},f,e)))}),e.all(n)}function f(e,n){if("object"===_typeof(n)){var t=_.keys(n);i[e.type].series=t.map(function(e){return{name:e,unit:n[e].unit}})}return e}function p(){return r.list().then(s)}function s(e){_.forEach(e,function(n){if(i[n.fragment]){var e=_.find(i[n.fragment].series,function(e){return e.name===n.series});e&&(e.kpi=n,_.isUndefined(e.kpi.enabled)&&(e.kpi.enabled=!0))}})}function l(e,n){o.url("device/".concat(t.deviceId,"/kpi/").concat(e.type,"/").concat(n.name))}n.refresh=u,n.paging={refresh:!0},n.updateKpiEnabled=function(e,n,t){t.fragment&&t.series?r.updateKpi(t):l(e,n)},n.navigateToDetails=l,n.getHumanizedName=r.getHumanizedName,u()}e.$inject=["$scope","$routeParams","$location","$q","kpiSvc"],angular.module("c8y.parts.kpi").controller("kpiSetupCtrl",e)}();