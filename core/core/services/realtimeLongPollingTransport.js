"use strict";!function(){function n(t,n){var r=e,a={LongPollingTransport:function(){var n=new org.cometd.LongPollingTransport,t=org.cometd.Transport.derive(n);return t.xhrSend=function(n){return r(n)},t},enable:function(n){r=n?e:o}};return a.enable(!n.getFlag("test")),a;function e(e){var o={},n=e.headers||{};return n["Content-Type"]="application/json;charset=UTF-8",a.disabled||t.post(e.url,e.body,{headers:n,withCredentials:!0}).then(function(n){var t=n.data,r=n.status;o.status=r,e.onSuccess(t)},function(n){var t=n.data,r=n.status;o.status=r,e.onError(t)}),o}function o(n){var t=JSON.parse(n.body);return setTimeout(function(){n.onSuccess({successful:!0,id:t.id,channel:t.channel},100)}),{status:200}}}n.$inject=["$http","c8yBase"],angular.module("c8y.core").factory("c8yLongPollingTransport",n),_.assign(org.cometd.JSON,{toJSON:JSON.stringify,fromJSON:JSON.parse})}();