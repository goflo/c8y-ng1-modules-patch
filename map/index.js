"use strict";angular.module("c8y.cockpit.map",[]).config(["c8yComponentsProvider","gettext",function(e,t){e.add({name:"Map",nameDisplay:t("Map"),description:t("Displays a map with position markers for selected devices."),templateUrl:":::PLUGIN_PATH:::/views/component.html",previewImage:":::PLUGIN_PATH:::/img/map-widget-pr.png",options:{groupsSelectable:!0,deviceTargetNotRequired:!0}})}]);