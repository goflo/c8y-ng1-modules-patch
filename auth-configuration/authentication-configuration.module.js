"use strict";!function(){function i(i,n,t){i.addNavigation({parent:t("Settings"),name:t("Authentication"),path:"auth-configuration",routerLinkExact:!1,icon:"c8y-shield",priority:2e3,showIfPermissions:{anyRole:["ROLE_TENANT_ADMIN","ROLE_TENANT_MANAGEMENT_ADMIN"]}}),n.when("/auth-configuration",{name:t("Basic settings"),icon:"unlock-alt",templateUrl:":::PLUGIN_PATH:::/default-settings/views/index.html"}),n.when("/auth-configuration",{name:t("Single sign-on"),icon:"sign-in",template:"<c8y-sso-configuration></c8y-sso-configuration>"})}i.$inject=["c8yNavigatorProvider","c8yViewsProvider","gettext"],angular.module("c8y.authenticationConfiguration",[]).config(i)}();