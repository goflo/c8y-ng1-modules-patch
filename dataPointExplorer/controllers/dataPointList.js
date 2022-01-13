"use strict";!function(){function t(a,i,t,n,o,e,r){var s,c;function u(){a.$watch("datapoints",function(){i.saveLocal(a.datapoints,s)},!0)}function l(t){a.datapoints||(a.datapoints=[]),a.maxSelectCount()&&_.forEach(t,function(t){t.__active=!1}),_.forEach(t,function(t){a.datapoints.push(t)}),function(t){var n=_.reject(t,"unit");i.setUnitFromLastMeasurement(n)}(t)}function d(){i.listAllKpi().then(function(t){a.kpis=t})}function m(){return _.filter(a.datapoints,{__active:!0})}function f(t){return _.isNumber(t)?t:Number(t||NaN)}_.assign(a,{validationErrorMessage:r("You need to fix validation errors before you can save."),validationErrorTooltip:r("Some entries are invalid. Check the input fields with red borders and select at least one data point."),add:function(){i.addUI(a.datapoints,{allowOnlyContextMo:a.allowAddingDataPointsFromContextMoOnly}).then(l).then(function(){a.forms.dpForm.$setDirty()})},remove:function(t){a.datapoints=_.without(a.datapoints,t),a.forms.dpForm.$setDirty()},allowSelection:function(t){if(t.__active)return!0;var n=a.maxSelectCount();return!n||m().length<n},max:function(t){return String(_.max(_.map(t,f)))},min:function(t){return String(_.min(_.map(t,f)))},isNumber:function(t){return!_.isNaN(f(t))},hasLimits:function(t){return""!==t.min&&_.isNumber(parseFloat(t.min))&&""!==t.max&&_.isNumber(parseFloat(t.max))},smartRulesSvc:o,createSmartRule:function(t){return o.addNewForInputDataPointWithUI(t)},listKpi:d,shouldShowSmartRules:!1}),a.$watch("datapoints",function(){a.forms.dpForm.$setValidity("dpSelected",0<m().length)},!0),e.hasAnyRole(["ROLE_INVENTORY_ADMIN","ROLE_INVENTORY_CREATE"]).then(function(t){a.canSaveToLibrary=t}),(c=t.getContext()).context&&(s="".concat(c.context,"_").concat(c.id)),n.shouldShowGlobalSmartRules().then(function(t){a.shouldShowSmartRules=t}),function(){if(_.get(a,"datapoints.length"))return;i.listLocal(s).then(l).then(u)}(),d()}t.$inject=["$scope","c8yDataPointSvc","c8yUiUtil","c8ySmartRulesAvailability","smartRulesSvc","c8yPermissions","gettext"],angular.module("c8y.cockpit.dataPointExplorer").controller("c8yDataPointListCtrl",t)}();