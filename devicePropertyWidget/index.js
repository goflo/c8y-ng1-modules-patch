"use strict";angular.module("c8y.parts.devicePropertyWidget",[]).config(["c8yComponentsProvider","gettext",function(e,t){e.add({name:"Properties",description:t("Table of device properties, e.g. name, type or notes."),templateUrl:":::PLUGIN_PATH:::/views/main.html",configTemplateUrl:":::PLUGIN_PATH:::/views/config.html",previewImage:":::PLUGIN_PATH:::/img/properties-widget-pr.png",options:{noNewWidgets:!0}})}]);