"use strict";!function(){function t(e,t,i){var n=t.url("service/actility/validate");return{save:function(t){return e.post(n,t)},isTokenSet:function(){return i.detailValue({category:"actility",key:"provider.token"}).then(function(t){return!!t})}}}t.$inject=["$http","c8yBase","c8ySettings"],angular.module("c8y.actilityConnectivitySettings").factory("c8yActilitySettingService",t)}();