"use strict";!function(){function t(n,t){var e=this;function i(){n.detail(e.id).then(c),n.getCustomActions().then(o)}function c(t){e.object=t,e.title=n.getName(t)}function o(t){e.customActions=t}function u(){return t.getMappings(e.object)}_.assign(e,{$onChanges:function(t){t.id&&i()},updateMapping:function(t){return n.updateMapping(e.object.id,t).then(i)},getMappings:u,getResources:function(){return t.getResources(e.object)},getMainObject:function(){return t.getMainObject(e.object)},getMappingForResource:function(t){return _.get(u(),t)}})}t.$inject=["c8yLwm2m","c8yObjectMappings"],angular.module("c8y.lwm2m").component("c8yLwm2mDetail",{templateUrl:":::PLUGIN_PATH:::/lwm2mDetail.html",controller:t,controllerAs:"vm",bindings:{id:"<"}})}();