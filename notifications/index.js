"use strict";!function(){function e(t,e,n,r,s){var a;function i(e){return e?n.list({severity:n.severity.MAJOR,status:n.status.ACTIVE}).then(function(e){return _.find(e,function(e){return e.c8y_ExceptionDetails})}):t.resolve(!1)}a=s.getString('Errors occurred while running event processing rules. <br> Please check the <a href="/apps/devicemanagement/#/alarms">alarms created</a> for more details.'),e.hasAllRoles(["ROLE_ALARM_READ"]).then(i).then(function(e){e&&r.add({text:a,type:"warning",allowHtml:!0})})}e.$inject=["$q","c8yPermissions","c8yAlarms","c8yAlert","gettextCatalog"],angular.module("c8y.notifications",[]).run(e)}();