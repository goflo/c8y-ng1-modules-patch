"use strict";angular.module("c8y.ui").directive("c8yFilteredSortedList",function(){return{restrict:"E",templateUrl:":::PLUGIN_PATH:::/ui/filteringSorting/filteredSortedList.html",controller:"c8yFilteredSortedListCtrl",controllerAs:"ctrl",scope:{columns:"&",columnsConfig:"&",onColumnsConfigChanged:"&",disableColumnsConfig:"&",items:"&",onItemClick:"&",noItemsMessage:"&",showLoadMore:"&",onLoadMore:"&",emptyListLabel:"@?",loading:"&"}}});