"use strict";!function(){function o(o){var i=this;_.assign(i,{$onInit:function(){i.icons=o.icons,i.simulator=_.cloneDeep(i.resolve.simulator)}})}o.$inject=["c8ySimulatorsUi"],angular.module("c8y.simulators").component("c8ySimulatorCloneDialog",{templateUrl:":::PLUGIN_PATH:::/list/simulatorCloneDialog.html",bindings:{resolve:"<",close:"&",dismiss:"&"},controller:o,controllerAs:"vm"})}();