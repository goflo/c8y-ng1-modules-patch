"use strict";!function(){function e(a,i,n,r,t,o,d,s){var l=this;l.datePickerOptionsFrom={},l.datePickerOptionsTo={},a.refreshLoading=!1;var c=[],f=!0;function u(e,t){(!a.events||a.refreshLoading||t)&&(a.events=[],a.refreshLoading=!1),a.ordering="".concat(f?"-":"","dateTime"),a.events=_.uniqBy(a.events.concat(e),"id"),_.forEach(a.events,function(e){e.dateTime=new Date(e.time)}),a.paging=e.paging,T(a.events.length),a.onEventLoaded({qty:a.events.length})}function e(){!function(){var e=a.realtimeChannel;O(),t.getStatus(a.$id,e)&&e!==a.realtimeChannel&&(w(),function(e){t.stop(a.$id,e)}(e),C())}(),a.refreshLoading=!0,m(),T()}function m(e){var t=function(e){var i=e||{};return _.assign(i,a.filters),_.forOwn(i,function(e,t){e||delete i[t]}),(i.source||i.deviceId)&&(i.source=i.source||i.deviceId,delete i.deviceId,i.withSourceDevices=!0,i.withSourceAssets=!0),_.isUndefined(i.pageSize)&&(i.pageSize=10),i.dateFrom&&(i.dateFrom=moment(i.dateFrom).startOf("day").format(r.dateFullFormat)),i.dateTo&&(i.dateTo=moment(i.dateTo).endOf("day").format(r.dateFullFormat)),i}(e);return n.list(t).then(u)}function g(){a.refreshLoading=!0,f?(f=!1,y().finally(function(){a.refreshLoading=!1})):a.paging.refresh().then(_.partialRight(u,!0))}function v(e){return c.indexOf(e)}function h(e){return-1<v(e)}function y(){f=!f,a.recentFirstActive=f;var e=a.paging.statistics.totalPages,t=f?void 0:{currentPage:e};return a.refreshLoading=!0,m(t)}function p(e,t,i){var n={};e&&(n.dateFrom=moment(e).format(r.dateFullFormat)),t&&(n.dateTo=moment(t).format(r.dateFullFormat)),i?n.type=i:(delete n.type,delete a.filters.type),_.merge(a.filters,n)}function F(e){a.dateTo=void 0,a.dateFrom=void 0,l.dateTo=a.dateTo,l.dateFrom=a.dateFrom,a.filters.dateTo=void 0,a.filters.dateFrom=void 0,l.eventType=void 0,p(a.dateFrom,a.dateTo,e)}function T(e){a.filters.source||(a.title=d("Events"),a.subtitle=e?s.getString("{{qty}} loaded",{qty:e}):""),a.showPageTitles&&(a.filters.deviceId||o.changeTitle({title:d("Events"),subtitle:e?s.getString("{{qty}} loaded",{qty:e}):""}))}function $(e,t){if(!_.some(a.events,{id:t.id})){t.dateTime=new Date(t.time);var i=t.dateTime;a.filters.dateFrom&&i<moment(a.filters.dateFrom).startOf("day")||a.filters.dateTo&&i>moment(a.filters.dateTo).endOf("day")||a.filters.type&&a.filters.type!==t.type||a.events.push(t)}}function L(e,t){_.remove(a.events,{id:t.id})}function S(e,t){var i=_.findIndex(a.events,{id:t.id});a.events[i]=t}function E(){a.refreshLoading=!0,m(),T()}function C(){t.start(a.$id,a.realtimeChannel)}function w(){t.addListener(a.$id,a.realtimeChannel,"".concat(a.$id,"-subscribed"),E),t.addListener(a.$id,a.realtimeChannel,"CREATE",$),t.addListener(a.$id,a.realtimeChannel,"UPDATE",S),t.addListener(a.$id,a.realtimeChannel,"DELETE",L)}function O(){var e=a.filters.deviceId||a.filters.source;a.realtimeChannel="/eventsWithChildren/".concat(e||"*")}function b(){return r.checkIfModulesExist(["c8y.eventsBinary"])}a.$watch(function(){return l.dateFrom},function(e){l.datePickerOptionsTo={minDate:e}}),a.$watch(function(){return l.dateTo},function(e){l.datePickerOptionsFrom={maxDate:e}}),l.subscriberId=a.$id,l.filters=a.filters,l.filter=p,l.clearFilter=F,a.isEventsBinaryModuleAvailable=b,a.displayEventsBinary=function(e){return b()&&e.c8y_IsBinary},a.refresh=g,a.loadNext=function(e){if(a.paging.loading=!0,e)a.refreshLoading=!0,m({pageSize:e}).finally(function(){a.refreshLoading=!1});else{var t=f?"next":"prev";a.paging[t]().then(u).finally(function(){a.paging.loading=!1})}},a.isOpen=h,a.toggle=function(e){h(e)?c.splice(v(e),1):c.push(e)},a.filters=a.filters||{},a.getStandardKeys=n.getStandardKeys,a.getNonStandardKeys=function(e){return _.without(n.getNonStandardKeys(e),"dateTime")},a.recentFirst=y,a.filter=p,a.clearFilter=F;var I,R={};a.absolute=function(e){var t=R[e.id];return t||(t=i("absoluteDate")(e.time),R[e.id]=t),t},a.$watch("realtime",function(){a.realtime!==t.getStatus(a.$id,a.realtimeChannel)&&t.switchRealtime(a.$id,a.realtimeChannel)}),a.$on("eventListRefresh",g),a.$watch("filters",e,!0),O(),w(),a.initialRealtimeState=(I=[a.initialRealtimeState,a.realtime],_.head(_.reject(I,_.isUndefined))),a.initialRealtimeState&&(a.realtime=a.initialRealtimeState,C())}e.$inject=["$scope","$filter","c8yEvents","c8yBase","c8yRealtime","c8yTitle","gettext","gettextCatalog"],angular.module("c8y.ui").controller("eventList",e)}();