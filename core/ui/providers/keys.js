"use strict";angular.module("c8y.ui").provider("c8yKeys",function(){var e={};function t(t,n){e[t]=n}function n(t){return e[t]}return{$get:function(){return{set:t,get:n}},set:t}});