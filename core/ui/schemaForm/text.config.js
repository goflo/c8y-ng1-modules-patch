"use strict";!function(){function t(e,o){function u(t){return _.isString(t)?t:JSON.stringify(t)}e.defaults.string.unshift(function(t,r,n){var i;return"string"!==r.type||r.enum||r.format||((i=e.stdFormObj(t,r,n)).key=n.path,i.type="text",i.$formatters=[u],n.lookup[o.stringify(n.path)]=i),i})}t.$inject=["schemaFormProvider","sfPathProvider"],angular.module("c8y.ui").config(t)}();