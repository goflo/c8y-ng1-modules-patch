"use strict";!function(){n.$inject=["$rootScope","c8yBase","c8yNavigator","c8yApplication","c8yTabs","c8yActionBar"];var t=angular.module("c8y.ui");function n(t,n,o,i,r,a){var e=this;function c(t,n){e.authState=n}function s(){e.tabsHorizontal=n.appOption("tabsHorizontal")}_.assign(e,{$onInit:function(){t.$on("authStateChange",c),e.rootNodes=o.rootNodes,i.currentAppCached().then(s),e.navHiddenOnStartup=n.appOption("hide_navigator")},navOpen:!1,hasTabs:function(){return!!r.routeTabs.length},hasActionBar:function(){return!(!a.isVisible||!a.isVisible())}})}t.component("c8yUiRoot",{templateUrl:":::PLUGIN_PATH:::/ui/containers/root.html",controllerAs:"vm",controller:n}),t.directive("c8yMainApp",function(){return{templateUrl:":::PLUGIN_PATH:::/ui/containers/root.html",controllerAs:"vm",controller:n,restrict:"EA"}})}();