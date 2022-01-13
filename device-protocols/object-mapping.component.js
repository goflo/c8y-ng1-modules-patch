"use strict";!function(){s.$inject=["c8yAlarms"],a.$inject=["c8yObjectMappings"];var e={templateUrl:":::PLUGIN_PATH:::/object-mapping.html",controllerAs:"vm",controller:s,bindings:{autoObserveParams:"<",hideAutoObserve:"@",mapping:"<",customActions:"<"}},t={template:'\n      <span ng-show="!vm.hasMeasurement && !vm.hasAlarm && !vm.hasEvent" class="text-muted">--</span>\n      <i c8y-icon="line-chart" uib-tooltip="{{\'Measurements\' | translate}}" ng-show="vm.hasMeasurement"></i>\n      <i c8y-icon="bell" uib-tooltip="{{\'Alarms\' | translate}}" ng-show="vm.hasAlarm"></i>\n      <i c8y-icon="c8y-events" uib-tooltip="{{\'Events\' | translate}}" ng-show="vm.hasEvent"></i>\n      <i c8y-icon="eye" uib-tooltip="{{\'Auto observe\' | translate}}" ng-show="vm.mapping.observeParameters.autoObserve"></i>\n      <i c8y-icon="wrench" uib-tooltip="{{\'Custom action\' | translate}}" ng-show="vm.hasCustomAction"></i>      \n    ',controllerAs:"vm",controller:s,bindings:{mapping:"<"}},n={bindings:{data:"<"},template:'\n      <span class="text-label-small visible-xs-inline m-r-4">{{\'Resources\' | translate}}</span>\n      <span class="badge badge-info">{{::vm.count(vm.data)}}</span>',controller:a,controllerAs:"vm"};function a(e){this.count=e.countResources}function s(e){var t="measurementCreation",n="alarmCreation",a="eventCreation",s="customAction",o="observeParameters.autoObserve",i=!0,c=this;function r(){(c.autoObserveLocked=!1,i)&&(c.hasMeasurement||c.hasEvent||c.hasAlarm||c.hasCustomAction||(c.autoObserveLocked=!0,_.unset(c.mapping,o)))}_.assign(c,{alarmSeverities:e.severityList,alarmStatus:e.statusList,$onInit:function(){_.isUndefined(c.hideAutoObserve)&&(c.hideAutoObserve=!1)},$onChanges:function(e){e.mapping&&function(){var e=c.mapping;c.hasMeasurement=!!_.get(e,t),c.hasEvent=!!_.get(e,a),c.hasAlarm=!!_.get(e,n),c.hasCustomAction=!!_.get(e,s),r()}()},updateMeasurementKey:function(e){e||_.unset(c.mapping,t);r()},updateAlarmKey:function(e){e||_.unset(c.mapping,n);r()},updateEventKey:function(e){e||_.unset(c.mapping,a);r()},updateCustomActionKey:function(e){e?_.set(c.mapping,"".concat(s,".type"),null):_.unset(c.mapping,s);r()},formName:"mappingForm"})}angular.module("c8y.deviceProtocols").component("c8yObjectMapping",e).component("c8yObjectMappingStatusIcons",t).component("c8yDeviceProtocolRowCountResources",n)}();