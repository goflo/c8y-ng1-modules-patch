"use strict";!function(){function r(c,a,n){var i="userPreferences";function e(r,e){var n=u(r,e);return o(e,n).then(_.partial(t,n))}function u(r,e){return r+e.userName.replace(/\./g,"__")}function o(r,e){if(l(r))return a.list({fragmentType:e}).then(function(r){return r.length?r[0]:{type:"c8y_UserPreference"}});var n=y(),t={};return t[e]=n[e],c.when(t)}function t(r,e){return e[r]}function f(r,e,n){var t=u(r,n);return o(n,t).then(_.partial(s,t,e,n))}function s(r,e,n,t){if(l(n))return t[r]=e,a.save(t);var u=y();return u[r]=e,function(r){window.localStorage.setItem(i,JSON.stringify(r))}(u),c.resolve()}function l(r){return n.hasRole(r,"ROLE_INVENTORY_READ")&&n.hasRole(r,"ROLE_INVENTORY_ADMIN")}function y(){var e=window.localStorage.getItem(i);try{e=JSON.parse(e)}catch(r){e={}}return e||{}}return{get:function(r){return n.current().then(_.partial(e,r))},set:function(r,e){return n.current().then(_.partial(f,r,e))}}}r.$inject=["$q","c8yInventory","c8yUser"],angular.module("c8y.core").factory("c8yUserPreferences",r)}();