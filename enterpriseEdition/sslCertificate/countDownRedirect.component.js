"use strict";!function(){function n(t,e){var o,r=this;_.assign(r,{$onChanges:function(n){_.get(n,"redirectUrl.currentValue")&&(r.countDown=5,o=e(function(){return r.countDown--},1e3,r.countDown).then(function(){t.location.href=r.redirectUrl}))},$onDestroy:function(){e.cancel(o)}})}n.$inject=["$window","$interval"],angular.module("c8y.enterpriseEdition").component("c8yCountDownRedirect",{templateUrl:":::PLUGIN_PATH:::/sslCertificate/countDownRedirect.html",bindings:{redirectUrl:"<"},controller:n,controllerAs:"vm"})}();