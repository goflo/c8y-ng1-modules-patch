"use strict";angular.module("c8y.parts.imageWidget",[]).config(["c8yComponentsProvider","gettext",function(e,t){e.add({name:"Image",description:t("Display a single image selected from the user's computer."),templateUrl:":::PLUGIN_PATH:::/views/component.html",configTemplateUrl:":::PLUGIN_PATH:::/views/componentConfig.html",previewImage:":::PLUGIN_PATH:::/img/image-widget-pr.png",options:{noDeviceTarget:!0}})}]);