"use strict";!function(){function t(a,e,r,i,c,t,o,n,s){var u="sendDashboardsViaEmail";return{isAvailable:function(){return n.isAvailable({name:"feature-dashboard-mailer"}).then(l(h)).then(l(d))},send:function(t,n,a){(t?o.detail(n.id).then(c.getResData).then(_.partialRight(_.pick,["name","icon"])):s.getIconNameObj(a)).then(function(t){var n=e.get("smartRulesSvc"),a={config:{dashboard:t,url:r.absUrl(),subject:i.getString("Print screen of {{name}}",t)}};n.createInstanceWithUIByName(u,a)})}};function l(n){return function(t){return!!t&&n()}}function h(){return t.shouldShowSmartRules()}function d(){var t=a.when(!1),n=function(){var t="smartRuleTemplatesSvc";return e.has(t)&&e.get(t)}();return n&&(t=n.mustBeAvailable(u).then(_.constant(!0),_.constant(!1))),t}}t.$inject=["$q","$injector","$location","gettextCatalog","c8yBase","c8yUiUtil","c8yInventory","c8yApplication","dashboardSvc"],angular.module("c8y.parts.dashboard2").factory("c8yDashboardViaEmail",t)}();