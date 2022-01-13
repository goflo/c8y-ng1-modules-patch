"use strict";!function(){function e(s,u,t,o){var m,e={},c="cep/modules",r=function(){return o.requestConfig("cepStatement","cepStatement")};function n(e){var t=_.cloneDeep(e);return delete t.id,delete t.module,t}var a=[{name:"select temperate readings over 100 degree",value:'select * from MeasurementCreated e\nwhere getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100'},{name:"create alarm when temperature over 100 degree",value:'insert into CreateAlarm \n  select\n    e.measurement.time as time,\n    e.measurement.source.value as source,\n    "com_cumulocity_TemperatureAlert" as type,\n    "Temperature too high" as text,\n    "ACTIVE" as status,\n    "CRITICAL" as severity\n  from MeasurementCreated e\n  where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100'},{name:"create alarm when temperature below 0 degree",value:'insert into CreateAlarm \n  select\n    e.measurement.time as time,\n    e.measurement.source.value as source,\n    "com_cumulocity_TemperatureAlert" as type,\n    "Temperature too low" as text,\n    "ACTIVE" as status,\n    "CRITICAL" as severity\n  from MeasurementCreated e\n  where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100'},{name:"create close replay operation when temperature readings over 100 degree",value:'insert into CreateOperation\n  select\n    "PENDING" as status,\n    «heating ID» as deviceId\n    {\n      "c8y_Relay.relayState", "CLOSED"\n    } as fragments\n  from MeasurementCreated e\n  where getNumber(e, "c8y_TemperatureMeasurement.T.value") > 100'},{name:"select location change event once for 60 seconds",value:'select * from EventCreated e\nwhere getObject(e, "c8y_LocationMeasurement") is not null\noutput first every 60 seconds'},{name:"send email notification with current temperature",value:'expression string js:prepareEmailText(temp, state) [\n    function format(text, params){\n            for(param in params) {\n                text = text.replace("{" + param + "}", params[param])\n            }\n        return text\n    }\n    format("Hello,\\n current temperature is {0} (state = {1}). Regards.", [temp, state])\n]\ninsert into SendEmail\nselect\n  "sender@sender" as sender,\n  "receiver@receiver" as receiver,\n  "Temperature critical!" as subject,\n  prepareEmailText(\n    getNumber(e, "c8y_TemperatureMeasurement.T.value"),\n    getString(e, "c8y_TemperatureMeasurement.T.state")\n   ) as text\nfrom MeasurementCreated e'},{name:"change the severities of alarms based on activity time",value:'/* Create "context" - definition of a group of events to be processed separately.\n * Context "Alarms" consists of AlarmCreated and AlarmUpdated: \n * with the same source and type = "power off". */\ncreate context Alarms partition by \nalarm.source from AlarmCreated(alarm.type = "power off"),\nalarm.source from AlarmUpdated(alarm.type = "power off");\n\n/* Update severity for all active AlarmCreated \n * after which there is no change to other status in 15 minutes. */\ncontext Alarms \ninsert into UpdateAlarm \nselect \n   a.alarm.id as id,\n   "MAJOR" as severity\nfrom pattern [\n   every a = AlarmCreated(alarm.status = CumulocityAlarmStatuses.ACTIVE) \n   -> (timer:interval(15 minutes) \n      and not AlarmUpdated(alarm.status != CumulocityAlarmStatuses.ACTIVE))\n];'}];function i(e){return o.url("".concat(c,"/").concat(m.id,"/statements").concat(e?"/".concat(function(e){return _.isObjectLike(e)?e.id:e}(e)):""))}function l(a){return function(e){var r,n,t=u.defer();return t.promise.then(function(){a(e).success(r).error(n)}),m?t.resolve():s.get(o.url(c)).then(o.getResData).then(function(e){_.forEach(e.modules,function(e){return!function(e){return"default"===e.name}(e)||(m=e,t.resolve(),!1)}),s.post(o.url(c),{name:"default"},o.requestConfig("cepModule","cepModule")).then(o.getResData).then(function(e){m=e,t.resolve()})}),{then:function(e,t){r=e,n=t},success:function(e){return r=e,this},error:function(e){return n=e,this}}}}return e.list=l(function(e){return s.get(o.url("".concat(c,"/").concat(m.id,"/statements")),e)}),e.detail=l(function(e){return s.get(i(e))}),e.remove=l(function(e){return s.delete(i(e.id))}),e.save=l(function(e){var t=e.id;return t?s.put(i(t),n(e),r()):s.post(i(),n(e),r())}),e.examples=function(){return{success:function(e){t(function(){e(a)})}}},e}e.$inject=["$http","$q","$timeout","c8yBase"],angular.module("c8y.core").factory("c8yStatement",e)}();