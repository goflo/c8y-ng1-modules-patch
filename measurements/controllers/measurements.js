"use strict";!function(){function e(s,e,i,t,o,n,r,a){var c=e.deviceId;function m(e){s.supportedMeasurements=e,function(){function e(e,t){o.addAction({text:e,action:function(){var e=_.map(s.filters,function(e){return{dateFrom:moment(e.dateFrom).format(n.dateFullFormat),dateTo:moment(e.dateTo).format(n.dateFullFormat)}});a.downloadReportForDevice(t,c,function(){var e=s.supportedMeasurements||[],t=s.pagination||{},o=t.pageSize,n=t.options||{},r=t.page-1,a=(n[r]||{}).startFrom;_.isUndefined(o)||_.isUndefined(a)||(e=i("limitTo")(e,o,a));return e}(),e)}})}e("Download as CSV",r.format.csv),e("Download as Excel",r.format.xlsx)}()}this.realtime=!0,s.deviceId=c,s.filters=[],t.getSupportedMeasurements(c).then(m)}e.$inject=["$scope","$routeParams","$filter","c8yDevices","c8yActions","c8yBase","c8yMeasurements","MeasurementsReportSvc"],angular.module("c8y.core.measurements2").controller("measurementsCtrl",e)}();