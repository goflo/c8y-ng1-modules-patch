"use strict";!function(){function n(n,t,e,o,i){var c=this,a="subscribedApplications";function s(n){return c.mo=n,c.mo}function r(n){var t=_.get(n,"c8y_Status.instances"),e=_.map(t,function(n,t){return t});_.isEmpty(e)||(c.instances=function(n){var e=moment().format();return n.reduce(function(n,t){return n[t]={name:t,dateFrom:e},n},{})}(e))}function u(){var n=function(n){return _.sortBy(n,"name")}(c.instances);if(!_.isEmpty(n)){var t=_.head(n);c.selectedInstance=_.get(c,["instances",t.name])}}function m(){return l(!0),d(c.mo.applicationId,c.selectedInstance.name).then(function(n){return p(n)})}function l(n){c.isRequestPending=n}function d(n,t,e,a){return o.getLogs(n,t,{dateFrom:e,dateTo:a}).finally(function(){l(!1)})}function p(n,t,e){if(l(!1),_.isEmpty(n.logs)){var a=o.getWarningMessageForMissingLogs(t,e);i.info(a)}else _.assign(c.selectedInstance,n)}_.assign(c,{$onInit:function(){e.getApplicationMO(n.applicationId).then(s).then(r).then(u).then(m)},breadcrumbsLabel:function(){return c.basePath===a?t("Subscribed applications"):t("Own applications")},selectedInstance:void 0,nextBtnClick:function(){l(!0);var n=c.mo.applicationId,t=c.selectedInstance.name,e=moment(_.get(c,"selectedInstance.dateTo")).format();return d(n,t,e,void 0).then(function(n){return p(n,e)})},backBtnClick:function(){l(!0);var n=c.mo.applicationId,t=c.selectedInstance.name,e=moment(_.get(c,"selectedInstance.dateFrom")).format();return d(n,t,void 0,e).then(function(n){return p(n,void 0,e)})},loadLatestLogs:m,onInstanceChange:function(){var n=moment(_.get(c,"selectedInstance.dateFrom")).format();_.set(c,"selectedInstance.dateFrom",n),m()},loadLogsFromDate:function(n){l(!0);var t=o.formatDateChosenByUser(moment(n)),e=c.mo.applicationId,a=c.selectedInstance.name;return d(e,a,t).then(function(n){return p(n,t,n.dateTo)})},beginningBtnClick:function(){l(!0);var n=c.mo.applicationId,t=c.selectedInstance.name;return d(n,t,"1970-01-01T00:00:00+00:00").then(function(n){return p(n,n.dateFrom,n.dateTo)})},isRequestPending:void 0})}n.$inject=["$routeParams","gettext","c8yApplication","c8yApplicationLogs","c8yAlert"],angular.module("c8y.appLogs").component("c8yAppLogs",{bindings:{basePath:"@"},templateUrl:":::PLUGIN_PATH:::/app-logs/app-logs.html",controller:n,controllerAs:"vm"})}();