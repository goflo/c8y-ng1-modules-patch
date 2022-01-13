"use strict";!function(){function t(t,c,a,o,n){return function(e,t,i){var r=this;r.units=i.getTimeUnits(),r.getSingle=function(){return i.execute({deviceId:e.id,description:n("Get single location"),c8y_MeasurementRequestOperation:{requestName:"location"}},r.getSingle)},r.setReportIntervalNoMotion=function(){return i.execute({deviceId:e.id,description:n("Position reporting interval if no motion detected"),c8y_Tracking:{interval:i.convertToSeconds(r.reportIntervalNoMotion,r.setReportIntervalNoMotion.unit)}},r.setReportIntervalNoMotion).then(function(t){t.completed.then(function(t){if(t.status===c.status.SUCCESSFUL){var o=e.c8y_RequiredAvailability&&e.c8y_RequiredAvailability.responseInterval,n=i.convertToUnits(r.reportIntervalNoMotion,_.find(r.units,{value:"minutes"}),r.setReportIntervalNoMotion.unit.multiplier);o!==n&&a.save({id:e.id,c8y_RequiredAvailability:{responseInterval:n}})}})})},r.setReportIntervalOnMotion=function(){return i.execute({deviceId:e.id,description:n("Position reporting interval if motion detected"),c8y_MotionTracking:r.getMotionTracking()},r.setReportIntervalOnMotion)},r.getMotionTracking=function(){var t={};return e.c8y_MotionTracking&&!_.isUndefined(e.c8y_MotionTracking.active)&&(t.active=r.motionTracking),t.interval=i.convertToSeconds(r.reportIntervalOnMotion,r.setReportIntervalOnMotion.unit),t},r.setMotionTracking=function(){return i.execute({deviceId:e.id,description:n("Motion tracking"),c8y_MotionTracking:{active:r.motionTracking}},r.setMotionTracking)},r.blockReportIntervalOnMotionChange=function(){o.RTLU.block(r.setReportIntervalOnMotion,!0)},r.blockReportintervalNoMotionChange=function(){o.RTLU.block(r.setReportIntervalNoMotion,!0)},r.blockMotionTrackingChange=function(){o.RTLU.block(r.setMotionTracking.blocked,!0)},r.refreshReportIntervalOnMotion=function(){o.RTLU.clearLockup(r.setReportIntervalOnMotion),r.setReportIntervalOnMotion.unit=r.units[0],r.reportIntervalOnMotion=e.c8y_MotionTracking&&e.c8y_MotionTracking.interval},r.refreshReportIntervalNoMotion=function(){o.RTLU.clearLockup(r.setReportIntervalNoMotion),r.setReportIntervalNoMotion.unit=r.units[0],r.reportIntervalNoMotion=e.c8y_Tracking&&e.c8y_Tracking.interval},r.refreshMotionTracking=function(){o.RTLU.clearLockup(r.setMotionTracking),r.motionTracking=e.c8y_MotionTracking&&e.c8y_MotionTracking.active},r.getSingle.supported=t.supportedOperations.getSingleLocation,r.setReportIntervalNoMotion.supported=t.supportedOperations.reportIntervalNoMotion,r.setReportIntervalOnMotion.supported=t.supportedOperations.reportIntervalOnMotion,r.setMotionTracking.supported=t.supportedOperations.motionTracking,r.setReportIntervalOnMotion.supported&&i.scope.$watch("tracker.device.c8y_MotionTracking.interval",function(t){o.RTLU.getBlock(r.setReportIntervalOnMotion)?o.RTLU.infoChange(r.setReportIntervalOnMotion,!0):r.reportIntervalOnMotion=t}),r.setReportIntervalNoMotion.supported&&i.scope.$watch("tracker.device.c8y_Tracking.interval",function(t){o.RTLU.getBlock(r.setReportIntervalNoMotion)?o.RTLU.infoChange(r.setReportIntervalNoMotion,!0):r.reportIntervalNoMotion=t}),r.setMotionTracking.supported&&i.scope.$watch("tracker.device.c8y_MotionTracking.active",function(t){o.RTLU.getBlock(r.setMotionTracking)?o.RTLU.infoChange(r.setMotionTracking,!0):r.motionTracking=t}),r.setReportIntervalNoMotion.unit=r.units[0],r.setReportIntervalOnMotion.unit=r.setReportIntervalNoMotion.unit}}t.$inject=["c8yBase","c8yDeviceControl","c8yDevices","RealtimeLockupSvc","gettext"],angular.module("c8y.trackerConfiguration").factory("trackerLocationSvc",t)}();