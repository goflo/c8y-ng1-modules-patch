"use strict";angular.module("c8y.parts.aclManagement").controller("permissionEditorCtrl",["$scope","$q","c8yDevices","c8yUser","c8yBase","c8yTenant","gettext",function(s,t,n,e,r,o,a){var c={},u=this,i=r.createEnum([a("READ"),a("ADMIN"),"*"]),p=a("Object's fragment type (e.g. c8y_IsDevice) to which you grant permission. Note that to have access to an object, user has to have access to all its fragments. Use an asterisk (*) to grant permission to any object's fragment type.");function h(e){return t.when(function(e){return g(c.MANAGED_OBJECT)?n.getFragments(e):g(c.OPERATION)?n.getSupportedOperations(e):!g(c.MEASUREMENT)||_.isUndefined(e.id)?[]:n.getSupportedMeasurements(e)}(e||{})).then(function(e){return _.union(["*"],e)})}function g(e){var t=s.scope;return!!t&&t.name===e.name}function E(e){var t=[];t.push(a("ALARM")),t.push(a("AUDIT")),t.push(a("EVENT")),t.push(a("MANAGED_OBJECT")),t.push(a("MEASUREMENT")),t.push(a("OPERATION")),e&&t.push(a("SUPPORT")),t.push("*"),c=r.createEnum(t),s.scopeTypes=c.values()}o.isCurrentUserTopTenant().then(E),(s.properties=s).accessTypes=i.values(),s.typeTooltip=p,window.c8y_testing?s.getSuggestedTypes=h:s.$watchGroup(["device","scope"],function(){h(s.device).then(function(e){u.suggestedTypes=e})})}]);