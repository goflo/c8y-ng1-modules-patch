"use strict";!function(){function e(e,i,t){e.addNavigation({parent:t("Devices"),name:t("Registration"),priority:3e3,path:"deviceregistration",icon:"c8y-device-connect",showIfPermissions:{anyRole:["ROLE_DEVICE_CONTROL_ADMIN","ROLE_DEVICE_CONTROL_READ"]}}),i.when("/deviceregistration",{template:"<c8y-device-registration></c8y-device-registration>"})}e.$inject=["c8yNavigatorProvider","c8yViewsProvider","gettext"],angular.module("c8y.deviceRegistration",[]).config(e)}();