"use strict";!function(){function e(u){return{restrict:"A",require:"ngModel",scope:{requestTemplate:"=c8ySmartRestValidateCustomFieldKeyInRequestTemplate"},link:function(a,e,t,n){n.$validators.customFieldKey=function(e,t){var n=e||t||"",r=function(e){var t=e.mandatoryValues;return _.map(t,function(e){var t=e.path;return t.replace(/^\$\./,"")})}(a.requestTemplate);return function(t,e){return!_.some(e,function(e){return t.match(function(e){var t=u.escapeForRegex;return new RegExp("^(".concat(t("$."),"){0,1}").concat(t(e),"$"),"i")}(e))})}(n,r)}}}}e.$inject=["c8yUiUtil"],angular.module("c8y.smartRestEditor").directive("c8ySmartRestValidateCustomFieldKeyInRequestTemplate",e)}();