"use strict";angular.module("c8y.assets").service("counterColumns",["c8yBase","c8yAlarms","c8yEvents","gettext",function(t,e,a,o){var r=moment().subtract(1,"days").format(t.dateFullFormat),n=moment().subtract(3,"months").format(t.dateFullFormat);return[{name:"alarmCountToday",label:o("Alarms (today)"),dateFrom:r,counter:e.createCounter},{name:"alarmCount3Months",label:o("Alarms (3 mo.)"),dateFrom:n,counter:e.createCounter},{name:"eventCountToday",label:o("Events (today)"),dateFrom:r,counter:a.createCounter},{name:"eventCount3Months",label:o("Events (3 mo.)"),dateFrom:n,counter:a.createCounter}]}]);