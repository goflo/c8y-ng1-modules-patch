"use strict";!function(){function t(t){return{scope:{user:"=",password:"=",minGreenLength:"=?"},link:function(e){var n=t();function r(t){e.user.passwordStrength=_.toUpper(t)}r("RED"),e.getStrength=n.getStrengthForColor,e.getColor=n.getHexColorForColor,e.$watch("password",function(t){_.isNil(t)||n.getStrengthColor(t).then(function(t){r(t)})}),e.$watch("minGreenLength",function(t){_.isNil(t)||n.setMinGreenLength(t)})},templateUrl:":::PLUGIN_PATH:::/ui/views/passwordStrength.html"}}t.$inject=["passwordStrengthCheckerFactory"],angular.module("c8y.ui").directive("c8yPasswordStrength",t)}();