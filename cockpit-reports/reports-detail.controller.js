"use strict";angular.module("c8y.cockpit.reports").controller("ReportDetailCtrl",["$scope","$uibModalInstance","iconList","report","gettext",function(t,e,o,r,c){t.title=r.id?c("Edit report"):c("Create report"),t.report=r,t.cancel=e.dismiss,t.save=function(){e.close(r)},t.icons=o}]);