"use strict";!function(){function t(n){var s,e,a=this,i=new n([{min:0,max:10,icon:"battery-0",class:"statusNok"},{min:10,max:30,icon:"battery-1",class:"statusAlert"},{min:30,max:60,icon:"battery-2",class:"statusOk"},{min:60,max:90,icon:"battery-3",class:"statusOk"},{min:90,max:100,icon:"battery-4",class:"statusOk"}]);function c(){var t=s&&(e||i).find(s);a.$icon=t&&t.icon||"battery-0",a.$class=t&&t.class||"statusNok"}_.assign(a,{$onInit:function(){s=a.value||0,c()},$onChanges:function(t){t.value&&(s=t.value.currentValue);if(t.ranges){var a=t.ranges.currentValue;e=_.isArray(a)?new n(a):a}c()}})}t.$inject=["RangeSet"],angular.module("c8y.ui").component("c8yBatteryLevel",{templateUrl:":::PLUGIN_PATH:::/ui/components/battery/battery.html",bindings:{value:"<",ranges:"<?"},controller:t})}();