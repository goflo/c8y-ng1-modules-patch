"use strict";angular.module("c8y.cockpit.dataPointExplorer").directive("c8yDataPointList",[function(){return{require:"?ng-form",restrict:"E",link:function(t,i,n){"basicList"in n&&(t.isBasicList=!0),"noChart"in n&&(t.noChart=!0),"noAsset"in n&&(t.noAsset=!0)},scope:{datapoints:"=",dontSave:"@",maxSelectCount:"&",allowAddingDataPointsFromContextMoOnly:"<"},templateUrl:":::PLUGIN_PATH:::/views/dataPointList.html",controller:"c8yDataPointListCtrl"}}]);