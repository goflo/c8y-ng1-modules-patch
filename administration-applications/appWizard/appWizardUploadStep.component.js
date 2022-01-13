"use strict";!function(){function e(i,e,c,o,u,t,n,l,s,r){var a,p=this,d={inProgress:!1,progress:0,label:null,deferred:null,cancelled:!1};function f(e){var t=i.defer();return d.deferred=t,d.cancelled&&t.reject({cancelled:!0}),i.when(e).then(t.resolve,t.reject),t.promise.catch(function(e){var t=e.cancelled;t&&(d.cancelled=t)}),a=function(){_.has(e,"abort")&&e.abort(),d.cancelled=!0,t.reject({cancelled:!0})},t.promise}function g(e,t){return _.head(_.compact(_.at(e,t)))}function h(e){var t=i.resolve();return _.get(p.wizardCtrl.data.chosenMethod,"expectedType")!==e&&(t=i.reject({type:"typeValidation",message:r.getString(p.wizardCtrl.data.chosenMethod.invalidFileTypeMessage)})),t}function v(e,t){var n=e.name.replace(/\.zip$/i,"");return"MICROSERVICE"===t&&(n=n.replace(/-\d+\.\d+\.\d+(-SNAPSHOT)?$/,"")),n}function y(e,t){return function(e){return e.replace(/[^a-zA-Z0-9-_]/g,"")}(v(e,t).toLowerCase())}function m(e){return C(e).then(function(e){return _.get(e,"type")||(_.get(e,"apiVersion")?"MICROSERVICE":"HOSTED")}).catch(function(){return"HOSTED"})}function C(e){return t.getJsonData(e,{filename:"cumulocity.json"})}function b(){d.cancelled=!0,a&&a()}_.assign(p,{processingStatus:d,createAppAndUploadArchive:function(e){var t;return d.inProgress=!0,d.progress=0,d.cancelled=!1,m(e).then(h).then(function(){return function(r){var a={manifest:{},resourcesUrl:"/"};return d.label=s("Creating application"),m(r).then(function(t){return"HOSTED"===t?C(r).catch(function(){return{}}).then(function(e){return{appType:t,appModel:e}}):{appType:t}}).then(function(e){var t=e.appType,n=e.appModel;return _.assign(a,{type:t,name:v(r,t),key:y(r,t),contextPath:y(r,t)},n)}).then(o.revertType).then(function(e){var t="MICROSERVICE"===e.type?o.save(e).then(c.getResData):o.trySave(e);return"MARKET"===e.availability&&"HOSTED"===e.type?i.all({newApp:t,tenant:l.current()}).then(function(e){var t=e.newApp,n=e.tenant;return l.addApplication({id:n.name},t),t}):t}).finally(function(){d.progress+=10})}(e)}).then(function(e){t=e}).then(function(){return f(function(e){return"MICROSERVICE"===e.type?n({title:s("Subscribe to microservice"),size:"sm",labels:{ok:s("Subscribe"),cancel:s("Don't subscribe")},body:s("You are about to subscribe to the microservice after upload. Do you want to subscribe to it?"),status:"info"}).then(function(){return!0},function(){return!1}).then(function(e){p.activateAfterUpdate=e}):i.resolve()}(t))}).then(function(){return f(function(e,t){d.label=s("Uploading file");var n=o.uploadArchive(e,t);return n.progress(function(e){d.progress=10+e.loaded/e.total*90}).then(c.getResData).then(_.partial(o.setActiveArchive,e)).then(function(){return e}),n}(t,e))}).then(function(){return f(function(e){var t=i.resolve();return"MICROSERVICE"===(p.wizardCtrl.data.createdApp=e).type?t=function(a,o){return l.current(!0).then(function(e){var t=e.applications.references,n=t.some(function(e){var t=e.application;return t.id===o.id}),r=i.resolve();return!n&&a?r=l.addApplication(e.name,o,{silentError:!0}).catch(function(e){409===e.status?u.warning(s("Could not subscribe to the microservice because another application with the same context path is already subscribed.")):u.danger(c.getResErrorMessage(e))}):n&&!a&&(r=l.removeApplication(e.name,o)),r})}(p.activateAfterUpdate,p.wizardCtrl.data.createdApp).then(function(){return p.wizardCtrl.goTo("success")}):p.wizardCtrl.goTo("success"),t}(t))}).catch(function(e){t&&o.remove(t,{force:!0}),function(e){"typeValidation"===e.type?u.warning(e.message,e.details):e.cancelled||u.danger(function(e){var t=g(e,["data.message","data.error","errorMessage"])||s("An internal error occurred, try to upload again.");return r.getString(t)}(e),function(e){return g(e,["data.details","errorDetails"])}(e))}(e)}).finally(function(){d.inProgress=!1,d.progress=100})},goTo:function(e){b(),p.wizardCtrl.goTo(e)}}),e.$parent.$on("modal.closing",b),e.$watch(function(){return p.wizardCtrl.getCurrentStep()},function(e){"upload"===_.get(e,"stepId")&&p.wizardCtrl.data.appUpload&&(p.wizardCtrl.data.appUpload.files=[{file:null}])})}e.$inject=["$q","$scope","c8yBase","c8yApplication","c8yAlert","c8yZip","c8yModal","c8yTenant","gettext","gettextCatalog"],angular.module("c8y.parts.applications").component("appWizardUploadStep",{require:{wizardCtrl:"^c8yWizardStep"},templateUrl:":::PLUGIN_PATH:::/appWizard/appWizardUploadStep.html",controller:e,controllerAs:"vm"})}();