"use strict";!function(){function n(i,n,t,e){i.onRealtimeAlarmFn=function(n){i.onAlarm=n},i.onRealtimeEventFn=function(n){i.onEvent=n};var a,o=200;function c(){var n=t.height();_.isUndefined(_.get(a,"height"))||(n-=a.height),i.dataPointsGraphHeight=_.max([o,n])}function r(){n(function(){i.$broadcast("dashboardResize")},500)}function d(n,t){i.alarmsEventsTimeline=i.alarmsEventsTimeline||{},i.alarmsEventsTimeline.displayedDateFrom=n,i.alarmsEventsTimeline.displayedDateTo=t}function l(n){return _(n).map(function(n){return n.__target.id}).uniq().value().join(",")}i.onUpdateDates=function(n,t){if(!1===i.child.config.updateDates)return;i.child.config.dateFrom=n,i.child.config.dateTo=t},i.onUpdateDisplayedDates=d,i.onBoxChanged=function(n){i.chartBox=n},i.onTimelinesChartSizeChanged=function(n){a=n,c(),r()},i.dataPointsGraphHeight=t.height(),function(){var n=i.child.config.interval;if(!n||n===e.custom.id)return;var t=_.find(e.intervals,function(n){return n.id===i.child.config.interval})||{};t.qty&&(i.child.config.dateFrom=moment().subtract(t.qty,t.unit).toDate(),i.child.config.dateTo=moment().toDate())}(),i.$watch("child.config.datapoints",function(n){var t=l(n);i.channel=t?"/measurements/".concat(t):""}),i.$watch("child.config.alarmsEventsConfigs",function(n){var t=l(n);i.alarmsChannel=t?"/alarms/".concat(t):"",i.eventsChannel=t?"/events/".concat(t):""}),i.$watchCollection(["child.config.dateFrom","child.config.dateTo"],function(){d(i.child.config.dateFrom,i.child.config.dateTo)}),i.$on("dashboardResize",function(n){n.targetScope!==i&&(c(),r())})}n.$inject=["$scope","$timeout","$element","INTERVAL_CONSTANTS"],angular.module("c8y.cockpit.dataPointExplorer").controller("DataPointWidgetCtrl",n)}();