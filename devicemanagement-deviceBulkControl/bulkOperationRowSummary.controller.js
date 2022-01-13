"use strict";!function(){function t(n,e,o,i,r,a,c,s){function l(){n.onEdited&&n.onEdited()}function u(t,n){return i.getStatus(t)===n}n.toggle=function(){n.displayOptions.showDetails=!n.displayOptions.showDetails},n.isInStatus=u,n.statusClass=function(t){return i.getStatusStyle(t).cls},n.statusIcon=function(t){return i.getStatusStyle(t).icon},n.statusLabel=function(t){return i.getStatusStyle(t).label},n.singleOpStatusClass=function(t){return o.getStyle(t).cls},n.singleOpStatusIcon=function(t){return o.getStyle(t).icon},n.canEdit=function(t){return u(t,i.status.SCHEDULED)},n.edit=function(t){return e.editBulkOperationWithUI(t).then(l)},n.canCancel=function(t){return i.canCancel(t)},n.cancel=function(t){return r({title:c("Confirm cancelling operation?"),body:t.operationPrototype.description?s.getString('Do you really want to cancel operation "{{description | translate}}"?',t.operationPrototype):c("Do you really want to cancel this operation?"),status:"danger"}).then(angular.bind(i,i.cancel,t)).then(_.partial(_.unary(a.success),c("Operation cancellation triggered. If it is in progress, it may take up to one minute to cancel it."))).then(l)},n.canRetryFailed=function(t){return u(t,i.status.COMPLETED_WITH_FAILURES)},n.retryFailed=e.retryFailedWithUI,n.getOperationDesc=function(t){return t.operationPrototype.description||c("no description available")},n.checkGroupLink=function(t){_.isUndefined(n.groupStillExists)&&e.doesTargetGroupExist(t).then(function(t){n.groupStillExists=t})},n.$watch("operation",function(t){n.progressBar=_.assign(n.progressBar||{},e.getProgressBar(t))})}t.$inject=["$scope","deviceBulkControlSvc","c8yDeviceControl","c8yDeviceBulkControl","c8yModal","c8yAlert","gettext","gettextCatalog"],angular.module("c8y.deviceBulkControl").controller("deviceControlBulkOperationRowSummaryCtrl",t)}();