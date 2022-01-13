"use strict";!function(){function e(e,n,t){var o=this,a=[],i=2,r={dateFrom:void 0,dateTo:void 0,timelines:[]},m=_.throttle(function(e,n,t){_.assign(o.timeline,{dateFrom:_.clone(e),dateTo:_.clone(n),timelines:t})},300);function l(){e.$broadcast("c8yTimelinesChart::render")}function s(e,n){if(function(e,n){return _.isUndefined(e)&&!_.isUndefined(n)}(e,n))return!0;if(function(e,n){return _.isUndefined(e)&&_.isUndefined(n)}(e,n))return!1;var t=moment(n).diff(e,"seconds")<i;return!o.realtime&&!t}function d(){var e={dateFrom:moment(o.dateFrom).format(n.dateFullFormat),dateTo:moment(o.dateTo).format(n.dateFullFormat),withTotalPages:!0,pageSize:1e3};return t.fetchTimelinesForAlarmsEvents(a,e).then(function(e){m(o.dateFrom,o.dateTo,e)})}function c(e){_.forEach(a,function(n){t.alarmMatchesConfig(e,n)&&t.transformAlarmToTimelineEvent(e).then(function(e){return f(e,n)})})}function u(e){_.forEach(a,function(n){t.eventMatchesConfig(e,n)&&t.transformEventToTimelineEvent(e).then(function(e){return f(e,n)})})}function f(e,n){var t=_.findIndex(o.timeline.timelines,{alarmsEventsConfig:n}),a=o.timeline.timelines[t].events,i=_.findIndex(a,{id:e.id});-1===i?a.push(e):a[i]=e}_.assign(o,{$onInit:function(){o.onRealtimeAlarmFn({onRealtimeAlarm:c}),o.onRealtimeEventFn({onRealtimeEvent:u})},$onChanges:function(e){var n=!1;e.alarmsEventsConfigs&&(a=_.cloneDeep(o.alarmsEventsConfigs));e.dateFrom&&(n=s(o.timeline.dateFrom,e.dateFrom.currentValue),o.timeline.dateFrom=_.clone(e.dateFrom.currentValue));e.dateTo&&(n=s(o.timeline.dateTo,e.dateTo.currentValue),o.timeline.dateTo=_.clone(e.dateTo.currentValue));e.chartBox&&(o.timeline.chartBox=_.clone(e.chartBox.currentValue));e.realtime&&!1===_.get(e,"realtime.previousValue")&&(n=!0);n?d():l()},$doCheck:function(){var e=!1;_.isEqual(a,o.alarmsEventsConfigs)||(a=_.cloneDeep(o.alarmsEventsConfigs),e=!0);moment(o.timeline.dateFrom).isSame(o.dateFrom)||(e=s(o.timeline.dateFrom,o.dateFrom),o.timeline.dateFrom=_.clone(o.dateFrom));moment(o.timeline.dateTo).isSame(o.dateTo)||(e=s(o.timeline.dateTo,o.dateTo),o.timeline.dateTo=_.clone(o.dateTo));_.isEqual(o.dateFrom,o.dateTo)&&(e=!1);e?d():l()},timeline:r})}e.$inject=["$scope","c8yBase","c8yAlarmsEventsTimelinesChartService"],angular.module("c8y.alarmsEventsExplorer").component("c8yAlarmsEventsTimelinesChart",{bindings:{alarmsEventsConfigs:"<",dateFrom:"<",dateTo:"<",realtime:"<",chartBox:"<",onRealtimeAlarmFn:"&?",onRealtimeEventFn:"&?",onUpdateDates:"&",onSizeChanged:"&"},templateUrl:":::PLUGIN_PATH:::/alarmsEventsTimelinesChart/alarmsEventsTimelinesChart.html",controller:e,controllerAs:"vm"})}();