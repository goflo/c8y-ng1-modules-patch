"use strict";!function(){function t(a,e){var n="identity",o={headers:e.contentHeaders("externalId")};return{createIdentity:function(t,e,n){var r=u(t),c=_.assign(_.cloneDeep(o),n);return a.post(r,e,c)},deleteIdentity:function(t){var e=r(t);return a.delete(e)},listExternalIds:function(t){var e=u(t);return a.get(e).then(function(t){return t.data.externalIds})},getExternalId:function(t,e){var n=r(t);return a.get(n,e)}};function u(t){return"".concat(e.url(n),"/globalIds/").concat(t.id||t,"/externalIds")}function r(t){return"".concat(e.url(n),"/externalIds/").concat(encodeURIComponent(t.type),"/").concat(encodeURIComponent(t.externalId))}}t.$inject=["$http","c8yBase"],angular.module("c8y.core").factory("c8yIdentity",t)}();