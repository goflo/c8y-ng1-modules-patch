"use strict";!function(){function o(n,t,o){var a=this;function e(o,e){e&&!o?(a.shouldClose="disabled",t(function(){a.shouldClose="outsideClick"})):a.shouldClose="outsideClick"}_.assign(a,{downloadLogs:function(){var o=n.formatDateChosenByUser(a.dateFrom),e=n.formatDateChosenByUser(a.dateTo);return n.downloadAndSaveAs(a.appId,a.instanceName,o,e)}}),o.$watch("vm.datePickerToOpen",e),o.$watch("vm.datePickerFromOpen",e)}o.$inject=["c8yApplicationLogs","$timeout","$scope"],angular.module("c8y.appLogs").component("c8yDownloadLogs",{bindings:{appId:"<",instanceName:"<"},templateUrl:":::PLUGIN_PATH:::/app-logs/download-logs.html",controller:o,controllerAs:"vm"})}();