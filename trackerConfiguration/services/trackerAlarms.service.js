"use strict";!function(){function r(t,n){return function(r,s,o){var a=this;function e(){return{vibration:r.c8y_RFV16Config&&r.c8y_RFV16Config.vibrationAlarmArm,noise:r.c8y_RFV16Config&&r.c8y_RFV16Config.noiseAlarmArm,door:r.c8y_RFV16Config&&r.c8y_RFV16Config.doorAlarmArm,sos:r.c8y_RFV16Config&&r.c8y_RFV16Config.sosAlarmArm}}a.list=[{key:"vibration",label:n("Vibration alarm"),supported:s.supportedOperations.armAlarms.vibration},{key:"noise",label:n("Noise alarm"),supported:s.supportedOperations.armAlarms.noise},{key:"door",label:n("Door alarm"),supported:s.supportedOperations.armAlarms.door},{key:"sos",label:n("SOS alarm"),supported:s.supportedOperations.armAlarms.sos}],a.armAlarms=function(){return o.execute({deviceId:r.id,description:n("Arm alarms"),c8y_ArmAlarm:a.getC8yArmAlarm()},a.armAlarms)},a.getC8yArmAlarm=function(){return _.reduce(a.status,function(r,o,a){return s.supportedOperations.armAlarms[a]&&(r[a]=o),r},{})},a.blockAlarmsChange=function(){t.RTLU.block(a.armAlarms,!0)},a.refreshAlarms=function(){t.RTLU.clearLockup(a.armAlarms),a.status=e()},a.armAlarms.supported=_.some(s.supportedOperations.armAlarms),a.armAlarms.supported&&o.scope.$watch(e,function(r){t.RTLU.getBlock(a.armAlarms)?t.RTLU.infoChange(a.armAlarms,!0):a.status={vibration:r.vibration,noise:r.noise,door:r.door,sos:r.sos}},!0)}}r.$inject=["RealtimeLockupSvc","gettext"],angular.module("c8y.trackerConfiguration").factory("trackerAlarmsSvc",r)}();