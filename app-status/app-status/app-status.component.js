"use strict";!function(){function t(t,i,n,e,s){var a=this,c="subscribedApplications",r="/managedobjects/*";function o(){u(!0),e.getApplicationMO(t.applicationId).then(p).then(function(){return u(!1)})}function u(t){a.refreshingItems.appDetails=t}function p(t){a.mo=t,a.moId=t.id,function(t){a.status=_.get(t,"c8y_Status")}(a.mo)}function m(t,n){(function(t,n){return t===n})(n.id,a.moId)&&p(n)}_.assign(a,{$onInit:function(){o(),s.addListener(i.$id,r,s.realtimeActions().UPDATE,m),s.start(i.$id,r)},moId:"",tenantSubscriptions:{},subscriptionsVisible:function(){return!_.isEmpty(_.get(a.mo,"c8y_Subscriptions"))},statusVisible:function(){return!_.isEmpty(_.get(a.mo,"c8y_Status"))},status:"",realtime:!0,refresh:function(){o(),i.$broadcast("alarmListRefresh"),i.$broadcast("eventListRefresh")},refreshingItems:{},isRefreshing:function(){return _.includes(a.refreshingItems,!0)},breadcrumbsLabel:function(){return a.basePath===c?n("Subscribed applications"):n("Own applications")}}),i.$watch("vm.realtime",function(t,n){t!==n&&(function(t){s.getStatus(i.$id,r)!==t&&s.switchRealtime(i.$id,r)}(t),!1===n&&o())})}t.$inject=["$routeParams","$scope","gettext","c8yApplication","c8yRealtime"],angular.module("c8y.appStatus").component("c8yAppStatus",{bindings:{basePath:"@"},templateUrl:":::PLUGIN_PATH:::/app-status/app-status.html",controller:t,controllerAs:"vm"})}();