"use strict";angular.module("c8y.ui").directive("c8yCodeEditor",function(){return{restrict:"A",require:"ngModel",link:function(r,t,n,i){var e=n.c8yCodeEditor;e&&"json"===e.toLowerCase()&&(i.$parsers.push(function(r){try{var t=JSON.parse(r);return i.$setValidity("json",!0),t}catch(r){return i.$setValidity("json",!1),null}}),i.$formatters.push(function(r){if(null===r)return i.$setValidity("json",!1),"";try{var t=JSON.stringify(r,null,"  ");return i.$setValidity("json",!0),t}catch(r){return i.$setValidity("json",!1),""}}),t.bind("blur",function(){if(i.$valid){var r=JSON.stringify(i.$modelValue,null,"  ");i.$viewValue=r,i.$render()}})),t.css({fontFamily:"monospace"})}}});