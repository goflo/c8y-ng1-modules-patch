"use strict";!function(){function i(e){var i=this,n=i.device;function s(){i.isDisabled=!0}i.isDisabled=!1,n&&n.c8y_Mobile&&n.c8y_Mobile.msisdn&&s(),i.save=function(i){return _.assign(n,{c8y_Mobile:{msisdn:i}}),e.save(n).then(s)}}i.$inject=["c8yDevices"],angular.module("c8y.trackerConfiguration").controller("msisdnAlertCtrl",i)}();