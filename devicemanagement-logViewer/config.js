"use strict";angular.module("c8y.logViewer").config(["logViewerProvider","gettext",function(e,i){e.when("/device/:deviceId",{name:i("Logs"),templateUrl:":::PLUGIN_PATH:::/views/index.html",icon:"file-text-o"})}]);