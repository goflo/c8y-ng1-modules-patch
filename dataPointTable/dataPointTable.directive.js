"use strict";angular.module("c8y.cockpit.dataPointTable").directive("c8yDataPointTable",function(){return{restrict:"E",scope:{datapoints:"=?",dateFrom:"=?",dateTo:"=?",aggregation:"=?",selected:"=?",rowsSelectable:"=?",onData:"=?",scrollLocked:"=?"},controller:"c8yDataPointTableController",templateUrl:":::PLUGIN_PATH:::/views/dataPointTable.html",compile:function(e){return 0!==e.parents(".card.card-dashboard").children(".card-header-actions").length?function(e,t){e.element=t,e.panel=t.parents("div.card-inner-scroll"),e.table=t.find("table"),e.tbody=d3.select(t.find("tbody").get(0))}:void 0}}});