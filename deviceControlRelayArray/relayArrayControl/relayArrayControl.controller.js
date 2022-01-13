"use strict";!function(){function e(i,n,e,a,t,c,o){var l,r=this,s=[];function u(e){var t=_.cloneDeep(l.c8y_RelayArray),n=y(t[e])?"OPEN":"CLOSED";!function(e,t){s=_(s).push({relayIndex:e,targetRelayState:t}).uniqBy("relayIndex").value()}(e,n);var r=function(e,t,n){var r={deviceId:l.id,c8y_RelayArray:e},i=y(r.c8y_RelayArray[n]=t)?c("Close relay {{relayNo}}"):c("Open relay {{relayNo}}");return r.description=o.getString(i,{relayNo:n+1}),r}(t,n,e);(function(e){return _.isEqual(_.head(s).relayIndex,e)})(e)&&function(t){a.createWithNotifications(t).then(function(e){e.created.then(function(){!function(e){d(o.getString('"{{description | translate}}" will be executed.',e))}(t)}),e.completed.then(function(e){!function(e){s=_.drop(s),e.status===a.status.SUCCESSFUL?function(e){d(o.getString('"{{description | translate}}" completed.',e)),i.onSuccess&&i.onSuccess({operationResult:e})}(e):e.status===a.status.FAILED&&function(e){e.failureReason?f(o.getString('"{{description | translate}}" failed due to: "{{failureReason | translate}}".',e)):f(o.getString('"{{description | translate}}" failed.',e));i.onFailure&&i.onFailure({operationResult:e})}(e);if(s.length){var t=_.head(s).relayIndex;u(t)}}(e)})})}(r)}function y(e){return"CLOSED"===e}function d(e){p(t.success,e)}function f(e){p(t.danger,e)}function p(e,t){i.suppressAlerts&&i.suppressAlerts()||e(t)}function g(e){return _.find(s,{relayIndex:e})}_.assign(r,{toggle:u,isSupported:function(){return e.supportsOperation(l,"c8y_RelayArray")},isClosed:y,iconClass:function(e,t){var n;n=g(e)?"dlt-c8y-icon-circle-o-notch icon-spin":y(t)?"dlt-c8y-icon-check text-success":"dlt-c8y-icon-ban text-danger";return n},isOperationInQueue:g}),i.$watch("device()",function(e){var t=e&&(e.id||e);t&&n.detailRealtime(t,i).then(function(e){l=e,r.deviceRealtime=e})})}e.$inject=["$scope","c8yInventory","c8yDevices","c8yDeviceControl","c8yAlert","gettext","gettextCatalog"],angular.module("c8y.deviceControl.relayArray").controller("c8yRelayArrayControlCtrl",e)}();