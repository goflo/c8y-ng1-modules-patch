"use strict";!function(){function e(i,n,e,a,p){i.availableKpi=function(){return n.getCompatibleKpi(i.kpis,i.dp||{})},i.isKpiAvailable=function(){return i.dp._kpiId&&l(i.dp._kpiId)},i.saveToLibrary=function(t){i.isopen=!1;var e=!!t._kpiId;t._kpiId&&!l(t._kpiId)&&(e=!1,delete t._kpiId);n.saveDataPointToLibrary(t,e).then(function(e){_.isEmpty(e.data)||(t._kpiId=e.data.id),a.success(p("Saved to library.")),i.listKpi()})},i.updateDataPointWithKpi=function(e,t){i.isopen=!1,n.updateDataPointWithKpi(e,t)},i.chartTypes=e.renderTypes,i.lineTypes=e.lineTypes,i.axisTypes=e.axisTypes,i.dpDebounce=300,i.getLinkedKpiLabel=function(){if(i.dp._kpiId){var e=_.find(i.availableKpi(),{id:i.dp._kpiId});return _.get(e,"c8y_Kpi.label","")}return},i.setRangesFieldsAsTouched=_.once(function(){_.forEach(t,function(e){return _.get(i.singleDpForm,e).$setTouched()})}),i.isCollapsed=!1,i.collapse=function(){i.isCollapsed=!i.isCollapsed,i.defaultDatapoint||n.listForObject(i.dp.__target).then(o)},i.localIsEqualToTargetDp=function(){return n.equals(i.defaultDatapoint,i.dp)},i.localIsEqualToTargetDpValue=function(e){var t=_.get(i.defaultDatapoint,e),a=_.get(i.dp,e);return n.equals(t,a)},i.defaultDatapoint=void 0,i.save=function(){i.dp&&!i.dontSave&&n.save(i.dp.__target,i.dp).then(o)};var t=["min","max","yellowRangeMin","yellowRangeMax","redRangeMin","redRangeMax"];function o(e){i.defaultDatapoint=e[i.dp._id]}function l(e){return _.some(i.availableKpi(),{id:e})}}e.$inject=["$scope","c8yDataPointSvc","c8yChart","c8yAlert","gettext"],angular.module("c8y.cockpit.dataPointExplorer").controller("c8yDataPointItemCtrl",e)}();