"use strict";!function(){function e(e,i,t,c,n,r,s){e.newDevice={},e.title=r("Create device"),e.validation=t.validation,e.register=function(e){var t=s.getString("Device {{id}} registered.",e);return c.create(e).then(_.partial(_.unary(n.success),t)).then(i.close)},e.dismiss=i.dismiss}e.$inject=["$scope","$uibModalInstance","c8yConfig","c8yDeviceRegistration","c8yAlert","gettext","gettextCatalog"],angular.module("c8y.welcome.quickLinks").controller("deviceRegistrationCtrl",e)}();