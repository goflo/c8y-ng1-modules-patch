"use strict";!function(){function t(t,i){t.add({name:"trafficLight",nameDisplay:i("Traffic light"),description:i("Visualizes traffic light based on the states of a device"),templateUrl:":::PLUGIN_PATH:::/widget.html",configTemplateUrl:":::PLUGIN_PATH:::/widget-config.html",previewImage:":::PLUGIN_PATH:::/img/traffic-light-widget-pr.png"})}t.$inject=["c8yComponentsProvider","gettext"],angular.module("c8y.trafficLightWidget",[]).config(t)}();