"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){function t(n,e,i,a,t,o,r,c,l){var p=this,s="applicationForm",u="subscribedApplications",f={required:c.getString("This field is required."),maxlength:c.getString("Up to 120 characters allowed."),url:c.getString("Valid URL required.")};function d(t){p.application=a.convertType(t),_.isUndefined(p.application.manifest)||("PER_TENANT"===p.application.manifest.isolation&&(p.singleTenant=!0),"SUBSCRIPTION"===p.application.manifest.billingMode&&(p.subscription=!0))}function y(t){l.success(r("Application saved.")),p.isNew?n.path("/applications/".concat(t.id)):e.reload()}function h(t){p.tenant=t.tenant}function b(){return p.basePath===u}_.assign(p,{$onInit:function(){(function(){var t=i.applicationId;t?a.detail(t).then(function(t){return t.data}).then(d).then(a.typeLabel):(p.isNew=!0,d({}))})(),t.current().then(h)},icon:a.icon,typeLabel:a.typeLabel,invalid:angular.bind(o,o.invalid,p,"applicationForm"),validationHints:function(e){var i=[];p[s][e]&&p[s][e].$error&&_.forEach(p[s][e].$error,function(t,n){t&&(_.isUndefined(f[n])||("object"===_typeof(f[n])?f[n][e]&&i.push(f[n][e]):i.push(f[n])))});return i.join(" ")},save:function(t){var n=_.cloneDeep(t);n.manifest||(n.manifest={});var e=n.type;"HOSTED"===e&&(n.resourcesUrl="/");n=a.revertType(n);var i=a.save(n).then(o.getResData);"HOSTED"===e&&p.file&&(i=i.then(function(t){return n=t,a.uploadArchive(n,p.file)}).then(o.getResData).then(function(t){return a.save(_.assign(n,{activeVersionId:t.id})).then(o.getResData)}));return i.then(y)},cancel:function(){n.path("applications")},onFileSelect:function(t){t.length&&(p.file=t[0])},host:n.host(),breadcrumbsLabel:function(){return b()?r("Subscribed applications"):r("Own applications")},isPlatformApplicationBasePath:b})}t.$inject=["$location","$route","$routeParams","c8yApplication","c8yUser","c8yBase","gettext","gettextCatalog","c8yAlert"],angular.module("c8y.parts.applications").component("c8yApplicationDetail",{bindings:{basePath:"@"},templateUrl:":::PLUGIN_PATH:::/application-detail/application-detail.html",controller:t,controllerAs:"vm"})}();