"use strict";angular.module("c8y.core.measurements2").directive("c8yMeasurementsIconBar",function(){return{restrict:"E",templateUrl:":::PLUGIN_PATH:::/views/iconBar.html",scope:{realtime:"=",aggregation:"=",showAggregation:"=",showLoading:"=",showRealtime:"=",showTruncated:"="},controller:["$scope","gettext",function(e,t){var n={undefined:t("No aggregation"),MINUTELY:t("Minutely aggregation"),HOURLY:t("Hourly aggregation"),DAILY:t("Daily aggregation")},a={undefined:"line-chart",MINUTELY:"hourglass",HOURLY:"clock-o",DAILY:"calendar-o"};e.getRealtimeIconName=function(){return e.realtime?"check-circle-o":"circle-o"},e.getRealtimeIconText=function(){return e.realtime?t("Realtime active"):t("Realtime inactive")},e.getRealtimeClassName=function(){return e.realtime?"text-success":""},e.getAggregationIconName=function(){return a[e.aggregation]},e.getAggregationIconText=function(){return n[e.aggregation]}}]}});