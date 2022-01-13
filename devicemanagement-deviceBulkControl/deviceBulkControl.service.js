"use strict";!function(){function t(n,r,o,e,a,l){function u(t){return e({templateUrl:":::PLUGIN_PATH:::/views/details.html",controller:"bulkOperationDetailsCtrl",resolve:{operation:function(){return _.cloneDeep(t)}}})}function i(t,e){return o.save(e).then(_.partial(c,t))}function c(t){return a.success(t)}return{getProgressBar:function(t){if(t&&t.progress&&0!==t.progress.all){var e=t.progress;return[{type:"info",value:e.pending/e.all*100,tooltip:l("Pending"),status:"pending"},{type:"warning",value:e.executing/e.all*100,tooltip:l("Executing"),status:"executing"},{type:"success",value:e.successful/e.all*100,tooltip:l("Successful"),status:"successful"},{type:"danger",value:e.failed/e.all*100,tooltip:l("Failed"),status:"failed"}]}return null},createBulkOperationFromExistingOp:function(t){return u({startDate:moment().add(10,"minutes").seconds(0).format(n.dateFullFormat),operationPrototype:_.cloneDeep(t),creationRamp:15}).then(_.partial(i,l("New bulk operation scheduled.")))},editBulkOperationWithUI:function(t){return u(t).then(_.partial(i,l("Bulk operation updated.")))},getBulkOperationHref:function(t){return o.detail(t).then(n.getResData).then(function(t){return"#/group/".concat(t.groupId,"/bulk_operations?open=").concat(t.id)})},doesTargetGroupExist:function(t){var e=t.groupId;return r.detail(e,{},{silentError:!0}).then(_.constant(!0)).catch(_.constant(!1))},retryFailedWithUI:function(t){var e=_.cloneDeep(t);return e.startDate=moment().add(10,"minutes").seconds(0).format(n.dateFullFormat),u(e).then(o.retryFailed).then(_.partial(c,l("Scheduled bulk operation to complete operation on devices which previously failed.")))}}}t.$inject=["c8yBase","c8yInventory","c8yDeviceBulkControl","c8yModal","c8yAlert","gettext"],angular.module("c8y.deviceBulkControl").factory("deviceBulkControlSvc",t)}();