"use strict";!function(){function n(n,o,t,r){var e={anyRole:["ROLE_DATA_BROKER_READ","ROLE_DATA_BROKER_ADMIN"]};function c(n){return n.isAvailable({key:"c8y-feature-broker"})}n.addNavigation({name:r("Data connectors"),parent:{name:r("Data broker"),icon:"c8y-data-broker"},icon:"c8y-connector-out",priority:1e3,path:t.CONNECTOR_BASE_URL,showIfPermissions:e,showIf:["$q","c8yTenant","c8yApplication",function(n,o,t){return n.all({topTenant:function(n){return n.isCurrentUserTopTenant()}(o),featureAvailable:c(t)}).then(function(n){var o=n.topTenant,t=n.featureAvailable;return!o&&t})}]}),o.when(t.CONNECTOR_BASE_URL,{template:"<c8y-data-broker-connectors-list />",name:r("Connectors"),icon:"c8y-connector-out",priority:2e3}),o.when("".concat(t.CONNECTOR_BASE_URL,"/:connectorId"),{template:'<c8y-data-broker-connector-alarms id="vm.connectorId"/>',controller:["$routeParams",function(n){this.connectorId=n.connectorId}],controllerAs:"vm",name:r("Alarms"),icon:"warning",priority:1e3,showIf:["$routeParams",function(n){return"new"!==n.connectorId}]}),o.when("".concat(t.CONNECTOR_BASE_URL,"/:connectorId"),{template:'<c8y-data-broker-connector-editor id="vm.connectorId" />',controller:["$routeParams",function(n){this.connectorId=n.connectorId}],controllerAs:"vm",name:r("Settings"),priority:2e3,icon:"cog"}),o.when("".concat(t.CONNECTOR_BASE_URL,"/:connectorId/duplicate"),{template:'<c8y-data-broker-connector-editor duplicate-id="vm.connectorId" />',controller:["$routeParams",function(n){this.connectorId=n.connectorId}],controllerAs:"vm"}),n.addNavigation({name:r("Data subscriptions"),parent:r("Data broker"),icon:"c8y-connector-in",priority:1e3,path:t.SUBSCRIPTION_BASE_URL,showIfPermissions:e,showIf:["c8yApplication",function(n){return c(n)}]}),o.when(t.SUBSCRIPTION_BASE_URL,{template:"<c8y-data-broker-subscriptions></c8y-data-broker-subscriptions>"})}n.$inject=["c8yNavigatorProvider","c8yViewsProvider","dataBrokerConstants","gettext"],angular.module("c8y.dataBroker").config(n)}();