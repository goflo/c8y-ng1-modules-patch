"use strict";angular.module("c8y.deviceDetailIdentity",[]).config(["c8yViewsProvider","c8ySearchProvider","gettext",function(e,t,i){e.when("/device/:deviceId",{templateUrl:"".concat(":::PLUGIN_PATH:::/views/","identity.html"),priority:-1e3,name:i("Identity"),icon:"barcode",showIfPermissions:{anyRole:["ROLE_IDENTITY_READ","ROLE_IDENTITY_ADMIN"]}}),e.when("/identity",{template:"<div></div>",priority:1e4,controller:["$routeParams","$window","$location","c8yIdentity","c8yAlert","gettextCatalog",function(i,e,n,t,c,d){function r(){n.url("/device?text=".concat(i.type," ").concat(i.externalId))}i.type&&i.externalId?t.getExternalId(i).then(function(e){var t=e.data.managedObject.id;t?(c.success(d.getString("Device found for identity {{type}}: {{externalId}}.",i)),n.url("/device/".concat(t))):(c.danger(d.getString("Could not find device for identity {{type}}: {{externalId}}.",i)),r())},r):r()}]})}]);