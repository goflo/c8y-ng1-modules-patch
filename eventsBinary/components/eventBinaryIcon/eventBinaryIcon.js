"use strict";!function(){function n(i,e){var c=this;function t(n){return i.doesContainBinary(n)?e.icon(n.c8y_IsBinary):""}_.assign(c,{$onInit:function(){c.icon=t(c.event)},$onChanges:function(n){c.icon=t(n.event.currentValue)}})}n.$inject=["eventsBinaryService","c8yBinary"],angular.module("c8y.eventsBinary").component("c8yEventBinaryIcon",{template:'<i c8y-icon="{{vm.icon}}" ng-if="vm.icon"></i>',bindings:{event:"<"},controller:n,controllerAs:"vm"})}();