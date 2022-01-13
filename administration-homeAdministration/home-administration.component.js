"use strict";!function(){function e(e,t,a,r){var i=[{label:a("Users"),icon:"c8y-user c8y-icon-duocolor",link:"#/users",relatedNavigatorNode:{name:"Users",parentName:"Accounts"}},{label:a("Roles"),icon:"c8y-users c8y-icon-duocolor",link:"#/roles",relatedNavigatorNode:{name:"Roles",parentName:"Accounts"}},{label:a("Applications"),icon:"c8y-atom c8y-icon-duocolor",link:"#/applications",relatedNavigatorNode:{name:"Own applications",parentName:"Applications"}},{label:a("Event processing"),icon:"c8y-event-processing c8y-icon-duocolor",link:"#/eventprocessing",relatedNavigatorNode:{name:"Event processing",parentName:"Business rules"}},{label:a("Application settings"),icon:"c8y-tools c8y-icon-duocolor",link:"#/applicationsettings",relatedNavigatorNode:{name:"Application",parentName:"Settings"}},{label:a("Usage statistics"),icon:"c8y-usage-statistics c8y-icon-duocolor",link:"#/tenantStatistics",relatedNavigatorNode:{name:"Usage statistics",parentName:"Tenants"}}];_.assign(this,{$onInit:function(){_.forEach(i,function(e){return function e(n){var o=t.findNode((i=n.relatedNavigatorNode,function(e){var n=!i.name||_.get(e,"name")===i.name,o=!i.parentName||_.get(e,"_parent.name")===i.parentName,a=o||_.find(e.parents,function(e){return e.name===i.parentName});return n&&a}));var i;if(o){var a=o.hidden;_.isUndefined(a)?r(function(){return e(n)},250):n.show=!a}}(e)})},quickLinks:i,quickLinkIsVisible:function(e){return _.find(i,{label:e}).show},sentenceToDisplay:function(){var e=_.find(i,{label:"Users"}).show,n=_.find(i,{label:"Roles"}).show,o=null;e&&n?o=a('Add or remove <a href="#/users">users</a> and <a href="#/roles">roles</a> and configure their permissions.'):e&&!n?o=a('Add or remove <a href="#/users">users</a> and configure their permissions.'):!e&&n&&(o=a('Add or remove <a href="#/roles">roles</a> and configure their permissions.'));return o}})}e.$inject=["c8yUiUtil","c8yNavigator","gettext","$timeout"],angular.module("c8y.homeAdministration").component("homeAdministration",{templateUrl:":::PLUGIN_PATH:::/home-administration.template.html",controllerAs:"vm",controller:e})}();