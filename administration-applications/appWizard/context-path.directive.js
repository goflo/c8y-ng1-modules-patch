"use strict";!function(){var e=/^\S+$/;angular.module("c8y.parts.applications").directive("c8yApplicationContextPath",function(){return{require:"ngModel",link:function(t,i,n,a){var c=a;c.$parsers.unshift(function(t){var i;t.match(e)?(c.$setValidity("c8yApplicationContextPath",!0),i=t):c.$setValidity("c8yApplicationContextPath",!1);return i})}}})}();