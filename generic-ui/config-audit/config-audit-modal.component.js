"use strict";!function(){function e(t,e,n,c,i,o,a){var r=this;function s(e){r.deviceName=e.name,r.managedObject=e}function d(){r.title=e.getString("Audit configuration - device {{deviceName}}",r),r.subTitle=t("Audit current device by comparing to the selected reference device, sync checked properties to the reference device values")}_.assign(r,{$onInit:function(){c.detailCached(n.deviceId).then(a.getResData).then(s).then(d)},synchronize:function(){var c={};r.syncing=!0;var e={type:"c8y_ConfigAuditSync",description:t("Audit configuration synchronization"),referenceDevice:r.referenceDevice.id,deviceId:r.managedObject.id,syncData:c};_.filter(r.selected,"schema").forEach(function(e){_.set(c,e.key,!0)}),_.filter(r.selected,"schemaMatchKey").forEach(function(e){var t=e.schemaMatchKey,n=e.key;"boolean"!=typeof c[t]&&c[t]||(c[t]={}),_.set(c,[t,n],!0)}),i.create(e).then(function(){return o.success(t("Synchronization operation created."))}).then(r.close).finally(function(){r.syncing=!1})}})}e.$inject=["gettext","gettextCatalog","$routeParams","c8yDevices","c8yDeviceControl","c8yAlert","c8yBase"],angular.module("c8y.configAudit").component("c8yConfigAuditModal",{templateUrl:":::PLUGIN_PATH:::/config-audit/config-audit-modal.html",controllerAs:"vm",controller:e,bindings:{resolve:"<",close:"&",dismiss:"&"}})}();