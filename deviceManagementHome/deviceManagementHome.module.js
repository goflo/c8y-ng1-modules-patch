"use strict";!function(){e.$inject=["$routeProvider","c8yNavigatorProvider","c8yConfig","gettext"];var o="c8y.deviceManagement.home";function e(e,t,a,i){var r=[{name:"Asset Alarms",title:i("Active, critical alarms"),translateTitle:!0,_x:0,_y:2,_height:4,_width:6},{name:"Map",title:i("Map"),translateTitle:!0,_x:6,_y:2,_height:8,_width:6}];function n(){return a[o]||{}}t.addNavigation({priority:1e4,name:i("Home"),icon:"home",path:""}),e.when("/",{template:'<c8y-ui-title-set><h1 translate>Home</h1></c8y-ui-title-set><c8y-dashboard-gridstack name="{{vm.dashboardName}}" default-children="vm.children" is-frozen="true"></c8y-dashboard-gridstack>',controller:function(){this.dashboardName=n().dashboardName||"home-device-management",this.children=n().dashboardChildren||r},controllerAs:"vm",resolve:{wait:function(){if(n().wait)return n().wait}}})}angular.module(o,[]).config(e)}();