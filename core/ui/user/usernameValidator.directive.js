"use strict";angular.module("c8y.ui").directive("c8yUsernameValidator",function(){var i=/new/;return{require:"ngModel",link:function(e,n,r,t){t.$validators.newUsername=function(e,n){return!!t.$isEmpty(e)||3!==n.length||!i.test(n)}}}});