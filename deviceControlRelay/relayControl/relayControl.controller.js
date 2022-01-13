"use strict";!function(){function e(n,s,e,a,t,i,r){var o,c=this;function l(){return o&&o.c8y_Relay&&"CLOSED"===o.c8y_Relay.relayState}function u(t){var e={deviceId:o.id,description:t.description,c8y_Relay:{relayState:t.flag}};return a.createWithNotifications(e).then(function(e){e.created.then(function(){return function(e){f(e)}(t.messages.created)}),e.completed.then(function(e){return function(e,t){e.status===a.status.SUCCESSFUL?function(e,t){f(t),n.onSuccess&&n.onSuccess({operationResult:e})}(e,t.success):e.status===a.status.FAILED&&function(e,t){e.failureReason?d(r.getString(t.failureWithReason,e)):d(t.failure);n.onFailure&&n.onFailure({operationResult:e})}(e,t)}(e,{success:t.messages.success,failure:t.messages.failure})})})}function f(e){y(t.success,e)}function d(e){y(t.danger,e)}function y(e,t){n.suppressAlerts&&n.suppressAlerts()||e(t)}n.$watch("device()",function(e){var t=e&&(e.id||e);t&&s.detailRealtime(t,n).then(function(e){o=e})}),this.isSupported=function(){return e.supportsOperation(o,"c8y_Relay")},this.isClosed=l,this.toggle=function(){return function(){var e=l();return _.isUndefined(e)&&(e=!c.buttonChecked()),e}()?u({flag:"OPEN",description:i("Open relay"),messages:{created:i("The relay will be opened."),success:i("The relay has been opened."),failure:i("Failed to open the relay."),failureWithReason:i('Failed to open the relay due to: "{{failureReason | translate}}".')}}):u({flag:"CLOSED",description:i("Close relay"),messages:{created:i("The relay will be closed."),success:i("The relay has been closed."),failure:i("Failed to close the relay."),failureWithReason:i('Failed to close the relay due to: "{{failureReason | translate}}".')}})}}e.$inject=["$scope","c8yInventory","c8yDevices","c8yDeviceControl","c8yAlert","gettext","gettextCatalog"],angular.module("c8y.deviceControl.relay").controller("c8yRelayControlCtrl",e)}();