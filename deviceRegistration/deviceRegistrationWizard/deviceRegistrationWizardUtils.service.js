"use strict";!function(){function t(t,e,s){return{doResize:function(){e(function(){s.emitWindowResize()},500)},doPageReload:function(){t.location.reload()},setSuccessData:function(t,e){_.set(t,"userData.submitStatus.successResponse",e),_.unset(t,"userData.submitStatus.error")},setErrorData:function(t,e){_.set(t,"userData.submitStatus.error",e),_.unset(t,"userData.submitStatus.successResponse")},setFormData:function(t,e){_.set(t,"userData.form.device",e)},disableInteractionWhenRequestInProgress:function(t,e){t.inProgress=!!e,_.isUndefined(t.wizardCtrl)||t.wizardCtrl.setAllowUserInteraction(!e)}}}t.$inject=["$window","$timeout","c8yUiUtil"],angular.module("c8y.deviceRegistration").factory("deviceRegistrationWizardUtils",t)}();