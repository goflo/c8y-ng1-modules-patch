"use strict";!function(){e.$inject=["info","$window","$rootScope","c8yUser"],n.$inject=["$rootScope","$window","$q","info","c8yUser"],t.$inject=["info"];var c="_tcy8";function n(t,n,e,o,i){var r;r=n.localStorage.getItem(c)||n.sessionStorage.getItem(c),o.token=r,!o.token||o.preventGetUser?e.reject("No token"):i.current().then(function(n){t.c8y=t.c8y||{},t.c8y.user=n,t.$emit("c8y.api.login")})}function o(n){return{getBaseUrl:function(){return n.baseUrl},getAppKey:function(){return n.appKey},getTenant:function(){return n.tenant}}}function t(t){var n={setBaseUrl:function(n){t.baseUrl=n},setAppKey:function(n){t.appKey=n},setTenant:function(n){t.tenant=n},$get:e};return _.assign(n,o(t)),n}function e(n,t,i,r){var c=o(n);function u(n){i.c8y=i.c8y||{},i.c8y.user=n}var e={login:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c.getTenant(),t=1<arguments.length?arguments[1]:void 0,e=2<arguments.length?arguments[2]:void 0,o=3<arguments.length?arguments[3]:void 0;return r.login(n,t,e,o).then(u).then(function(){i.$emit("c8y.api.login")})},logout:function(){u(null),r.logout(),i.$emit("c8y.api.logout")}};return _.assign(e,c),e}angular.module("c8y.sdk").provider("c8yCumulocity",t).run(n)}();