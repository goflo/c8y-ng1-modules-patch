"use strict";!function(){function e(e){var t={};return t.convertToSeconds=function(e,t){return e*t.multiplier},t.getTimeUnits=function(){return[{label:e("seconds"),value:"seconds",multiplier:1},{label:e("minutes"),value:"minutes",multiplier:60},{label:e("hours"),value:"hours",multiplier:3600}]},t.convertToUnits=function(e,t,n){return _.ceil(e*n/t.multiplier)},t}e.$inject=["gettext"],angular.module("c8y.trackerConfiguration").factory("UnitConversionHelperSvc",e)}();