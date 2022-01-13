"use strict";angular.module("c8y.ui").directive("c8yRdbDump",function(){return e.$inject=["$scope","c8yAlert","c8yBase","c8yDeviceControl","c8yDevices","gettext","gettextCatalog"],{restrict:"E",templateUrl:":::PLUGIN_PATH:::/ui/views/rdbDump.html",controller:e,scope:{deviceId:"="}};function e(t,n,e,i,r,c,s){var o="c8y_UploadRDB";function a(){return r.detail(t.deviceId).then(e.getResData).then(function(e){t.device=e,t.cfg=e&&e.c8y_RDBDump})}function u(e){return e.deviceId=t.deviceId,i.createWithNotifications(e).then(function(e){return e.created.then(function(){n.success(c("RDB snapshot will be retrieved."))}),e})}t.supportsOperation=function(){return r.supportsOperation(t.device,o)},t.retrieveRDB=function(){var e={description:c("Retrieve RDB snapshot"),c8y_UploadRDB:{}};u(e).then(function(e){e.created.then(function(){t.retrievingRDB=!0}),e.completed.then(function(e){e.status===i.status.SUCCESSFUL?(n.success(c("RDB snapshot saved to files repository.")),a()):e.status===i.status.FAILED&&(e.failureReason?n.danger(s.getString('Failed to retrieve RDB snapshot: "{{failureReason | translate}}".',e)):n.danger(c("Failed to retrieve RDB snapshot."))),t.retrievingRDB=!1})})},t.$watch("deviceId",function(){a()}),a()}});