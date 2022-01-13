"use strict";!function(){function e(e,t,r,a,n,o,c,i,m,l){var d=this;d.deviceId=t.deviceId;var s={gps:!0,gsm:!0},k=[{txt:o("Last hour"),time:"hour"},{txt:o("Last day"),time:"day"},{txt:o("Last week"),time:"week"},{txt:o("Last month"),time:"month"},{txt:o("Custom"),time:"custom"}];function p(){return d.map&&d.map.tracker&&d.map.tracker.loadMore&&d.map.tracker.loadMore[d.deviceId]}d.markers={},d.noMarkers=!0,d.checkDateTo=function(){var e=moment(d.dateFrom);d.dateTo&&0<=e.diff(moment(d.dateTo),"days")&&(d.dateTo=e.clone().add("day",1).toDate())},d.toggle=function(e,t){if(d.markers["p".concat(e)])d.map.leafletMap.removeLayer(d.markers["p".concat(e)]),delete d.markers["p".concat(e)];else{var a=n.getLocationFragment(t);a&&(d.markers["p".concat(e)]=L.marker(L.latLng(a.lat,a.lng)).bindPopup(r("date")(t.time,"medium")).addTo(d.map.leafletMap))}d.noMarkers=!Object.keys(d.markers).length},d.hideAll=function(){_.forEach(d.markers,function(e){d.map.leafletMap.removeLayer(e)}),d.markers={},d.noMarkers=!0},d.events=function(){var e=d.map&&d.map.tracker.events[d.deviceId];return _.filter(e,{type:"c8y_LocationUpdate"})},d.hasLoadMore=function(){return p()},d.loadMore=function(){var e=p();return e&&e()},d.markerTemplate=c.tracking.markerTemplate||null,d.realtime=c.tracking.realtime||!1,d.legend=c.tracking.legend||!1,d.eventText=c.tracking.eventText||!1,d.timeIntervals=k,d.onTrackingOptionChange=function(){d.hideAll(),s={gps:"all"===d.trackingOption||"gps"===d.trackingOption,gsm:"all"===d.trackingOption||"gsm"===d.trackingOption},d.map.tracker.activate(d.deviceId,s)},d.showTrackingOptions=!1,m.detail(d.deviceId).then(a.getResData).then(l.gsmTrackingAvailable).then(function(e){d.showTrackingOptions=e}),d.trackingOption="all",e.$on("search",function(){d.hideAll();var e=d.dateFrom,t=d.dateTo;d.map.tracker.changeInterval({dateFrom:e&&moment(e).format(a.dateFullFormat),dateTo:t&&moment(t).format(a.dateFullFormat)}).then(function(){d.map.tracker.activate(d.deviceId,s)})})}e.$inject=["$scope","$routeParams","$filter","c8yBase","c8yGeo","gettext","c8yConfig","c8yApplication","c8yDevices","c8yCombain"],angular.module("c8y.parts.tracking").controller("trackingCtrl",e)}();