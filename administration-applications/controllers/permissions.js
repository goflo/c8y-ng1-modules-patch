"use strict";!function(){function n(i,t,n){var o=this,r=n.applicationId;function e(n){o.application=t.convertType(n),o.requiredRoles=a(o.application.requiredRoles),o.roles=a(o.application.roles)}function a(n){return i.convertServerPermissionsToUI(_.map(n,function(n){return{id:n}}))}_.assign(o,{$onInit:function(){t.detail(r).then(function(n){return n.data}).then(e)}})}n.$inject=["c8yPermissions","c8yApplication","$routeParams"],angular.module("c8y.parts.applications").controller("permissionsCtrl",n)}();