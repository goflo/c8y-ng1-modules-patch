"use strict";!function(){function e(o){return{restrict:"E",link:function(r,t,e){var n=e.placeholder,i=e.required;function c(){if(_.isUndefined(n)&&!i)t.removeAttr("placeholder");else{var e=_.compact([n,"".concat(!i||0<t.closest("[placeholder-no-required-hint]").length?"":"(".concat(o.getString("required"),")"))]);t.attr("placeholder",e.join(" "))}}e.$observe("placeholder",function(e){n=e,c()}),e.$observe("required",function(e){i=e,c()}),r.$watch("$parent.form.required",function(e){r.$parent.form&&(i=e,c())})}}}e.$inject=["gettextCatalog"],angular.module("c8y.ui").directive("input",e)}();