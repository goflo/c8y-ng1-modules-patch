"use strict";!function(){function t(n){return function(t,e,u){var i=this;i.update=function(){return u.execute({deviceId:t.id,description:n("Update tracker situation"),c8y_MeasurementRequestOperation:{requestName:"situation"}},i.update)},i.update.supported=e.supportedOperations.updateSituation}}t.$inject=["gettext"],angular.module("c8y.trackerConfiguration").factory("trackerSituationSvc",t)}();