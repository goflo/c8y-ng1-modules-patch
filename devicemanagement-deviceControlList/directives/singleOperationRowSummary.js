"use strict";angular.module("c8y.parts.deviceControlList").directive("deviceControlSingleOperationRowSummary",function(){return{restrict:"A",replace:!0,scope:{operation:"=",displayOptions:"="},templateUrl:":::PLUGIN_PATH:::/views/singleOperationRowSummary.html",controller:"deviceControlSingleOperationRowSummaryCtrl"}});