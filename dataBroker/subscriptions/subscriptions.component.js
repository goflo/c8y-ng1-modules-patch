"use strict";!function(){function i(t,s,e){var o=this,r=t.$id,i="/bootstrap",n="/managedobjects/*";function c(){s.listPending().then(function(i){o.pendingSubscriptions=i}),s.list().then(function(i){return o.subscriptions=i}).then(p)}function d(i){o.isShownAddNewSubscription=!i}function a(i,t){if(t.status===s.NEW_DEVICE_REQUEST_STATUS.PENDING_ACCEPTANCE.value){var n=_.find(o.pendingSubscriptions,{id:t.id});_.assign(n,{status:s.NEW_DEVICE_REQUEST_STATUS[t.status]})}}function u(i,t){!!_.find(o.pendingSubscriptions,{id:_.last(t.owner.split("_"))})&&c()}function p(i){_.forEach(i,function(i){var t="/managedobjects/".concat(i.id);!!_.find(o.devicesSubscribedForRealtimeUpdates,{id:i.id})||(e.addListener(r,t,e.realtimeActions().UPDATE,S),e.start(r,t),o.devicesSubscribedForRealtimeUpdates.push({id:i.id,realtimeUpdatePath:t}))}),t.$on("$destroy",function(){_.forEach(o.devicesSubscribedForRealtimeUpdates,function(i){e.stop(r,i.realtimeUpdatePath)})})}function S(i,t){if(!!_.find(o.subscriptions,{id:t.id})){if(!t.c8y_BrokerSource){var n=_.find(o.devicesSubscribedForRealtimeUpdates,{id:t.id});e.stop(r,n.realtimeUpdatePath),_.pull(o.devicesSubscribedForRealtimeUpdates,n)}c()}}function b(){return o.subscriptions.length<1&&o.pendingSubscriptions.length<1&&!o.isShownAddNewSubscription}_.assign(o,{$onInit:function(){_.assign(o,{toggleAddNewSubscriptionForm:d,NEW_DEVICE_REQUEST_STATUS:s.NEW_DEVICE_REQUEST_STATUS,isSubscriptionsListEmpty:b}),c(),e.addListener(r,i,e.realtimeActions().UPDATE,a),e.start(r,i),t.$on("$destroy",function(){e.stop(r,i)}),e.addListener(r,n,e.realtimeActions().CREATE,u),e.start(r,n),t.$on("$destroy",function(){e.stop(r,n)})},subscriptions:[],pendingSubscriptions:[],devicesSubscribedForRealtimeUpdates:[],isShownAddNewSubscription:!1,reload:c})}i.$inject=["$scope","dataBrokerSubscriptionsSvc","c8yRealtime"],angular.module("c8y.dataBroker").component("c8yDataBrokerSubscriptions",{templateUrl:":::PLUGIN_PATH:::/subscriptions/subscriptions.html",controller:i,controllerAs:"vm"})}();