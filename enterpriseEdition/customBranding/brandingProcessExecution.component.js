"use strict";!function(){function e(n,i,e,t,o,r){var a,c=this,s={generate:{title:e("Create applications"),flow:["beforeGenerate"],lastStep:"generateComplete",expectedDuration:120},preview:{title:e("Preview branding"),lastStep:"selectPreviewApp",init:function(){r.current().then(function(e){c.tenant=e.name}),t.preview().then(l)},flow:["waiting"],expectedDuration:15}};function u(){return t.state().then(l)}function l(e){var t=c.state;c.state=e,t&&t.RUNNING&&!e.RUNNING&&function(e){e&&(c.progress=100);i.cancel(c.fakeProgress),n(function(){return a.goTo(c.lastStep)},300)}(!0),t&&t.WAITING&&e.RUNNING&&(a.goTo("executing"),function(e){var t=10*e;c.progress=0,c.fakeProgress=i(function(){c.progress+=1},t,100)}(c.expectedDuration)),(e.RUNNING||e.WAITING)&&n(u,1e3)}_.assign(c,{$onInit:function(){var e=_.get(c,"resolve.process"),t=s[e];t&&(_.assign(c,_.pick(t,["title","lastStep","flow","expectedDuration"])),t.init&&t.init());o.list().then(function(e){return _.filter(e,function(e){return"MARKET"===e.availability&&"management"===e.owner.tenant.id&&"HOSTED"===e.type&&!0===e.manifest._webpaas})}).then(function(e){c.applications=e})},generate:function(){a.goTo("waiting"),t.update().then(l)},setWizardController:function(e){a=e},$onDestroy:function(){i.cancel(c.fakeProgress)}})}e.$inject=["$timeout","$interval","gettext","c8yBrandingConfiguration","c8yApplication","c8yTenant"],angular.module("c8y.custom-branding").component("c8yBrandingProcessExecution",{templateUrl:":::PLUGIN_PATH:::/customBranding/brandingProcessExecution.html",controllerAs:"vm",controller:e,bindings:{modalInstance:"<",resolve:"<"}})}();