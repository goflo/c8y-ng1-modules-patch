"use strict";angular.module("c8y.ui").filter("humanize",function(){return function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").replace(/_/g," ").split("");return e[0]=(e[0]||"").toUpperCase(),e.join("")}});