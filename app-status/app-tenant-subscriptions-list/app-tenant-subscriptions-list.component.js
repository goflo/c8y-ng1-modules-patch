"use strict";!function(){function n(t){var s=this,i=null;function o(n){var t=n.tenantName;return _.get(s,"mo.c8y_Subscriptions.".concat(t,".instances"))||void 0}_.assign(s,{$onChanges:function(){s.subscriptionsList=t.getSubscriptionsList(s.mo)},getStatusIcon:function(n){return _.find(t.status.values(),{value:n}).icon},openItem:function(n){i=i!==n?n:null},showDetails:function(n){var t=o(n);return _.some(t,function(n){return 0<n.restarts})},isOpen:function(n){return i===n},getSubscriptionInstances:o})}n.$inject=["c8yApplication"],angular.module("c8y.appStatus").component("c8yAppTenantSubscriptionsList",{bindings:{mo:"<"},templateUrl:":::PLUGIN_PATH:::/app-tenant-subscriptions-list/app-tenant-subscriptions-list.html",controller:n,controllerAs:"vm"})}();