"use strict";!function(){function e(a,s,e){function t(e){a.deviceType=e.type,a.dashboard.deviceTypeValue=a.deviceType}a.forms={},a.defaultDashboardWidgetMargin=s.getDefaultDashboardWidgetMargin(),a.dashboardThemeClasses=s.getDashboardThemeClasses(),a.widgetHeaderClasses=s.getWidgetHeaderClasses(),a.getApplicableDashboardClasses=s.getApplicableDashboardClasses,a.getApplicableDashboardStyles=s.getApplicableDashboardStyles,a.getApplicableWidgetClasses=s.getApplicableWidgetClasses,a.getApplicableWidgetStyles=s.getApplicableWidgetStyles,a.getPreviewClasses=function(e){return _.merge(s.getApplicableDashboardClasses(e),s.getApplicableWidgetClasses(null,e))},function(){"device"===s.getContext().context&&s.getContextObject().then(t);e.waitForPropertyResolve(a,"forms.newDashboard").then(function(e){_.has(a.dashboard,"id")||e.$setDirty()})}()}e.$inject=["$scope","dashboardSvc","c8yUiUtil"],angular.module("c8y.parts.dashboard2").controller("newDashboardCtrl",e)}();