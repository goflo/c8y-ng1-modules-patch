"use strict";!function(){function e(n,t,e,i,c,o,r,a,s,u,l,d){var f,g,p,h="exportForm",v={required:s("This field is required."),maxlength:s("Up to 120 characters allowed.")},m=!0,x=!0,y=!1,S=!1;function w(e){n.config=i.create(e),n.filters=i.getFilters(n.config,f&&!g),n.apis=i.getApis(n.config),function(e){i.getSmartRuleDefaults(e).then(function(e){n.smartRuleDefaults=e})}(e),f?g?(delete n.config.id,n.isNew=!0,x=!1,C(u.getString("Duplicate of {{name}}",n.config))):C(n.config.name):(n.isNew=!0,x=!1,C(s("New export"))),n.$watch("apis",function(e,t){_.isEqual(e,t)||n[h].$setDirty()},!0),n.$watch("config.c8y_ScheduleConfiguration",function(e,t){_.isEqual(e,t)||(n[h].$setDirty(),n.needsReschedule=!0)},!0)}function R(){return n.config.apiList=[],n.config.queryParameters={},_.forEach(n.filters,function(e){e.onSave(n.config)}),_.forEach(n.apis,function(e){e.onSave(n.config)}),i.save(n.config).then(function(e){return n.needsReschedule&&d.reschedule(e.id).then(function(){n.needsReschedule=!1}),e})}function C(e){o.changeTitle({title:e})}function $(){return!_.some(n.apis,"enabled")}function E(){!function(){var e="".concat(u.getString("Migrating export schedules…")," ").concat('<div class="c8y-rectangle-spinner spinner-inline"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div>',' <p class="text-normal">').concat(u.getString("Migrating export schedules to the new user interface. Do not close the browser window until the process has been completed."),"</p>");p={text:e,allowHtml:!0,type:"info"},r.add(p),y=!0}(),l.convertToSchedules(f).then(function(){b(!0)}).catch(function(){b(!1)})}function b(e){if(y=!1,e){x=!(m=!(S=!1));var t="".concat(u.getString("Migration complete."),' <p class="text-normal">').concat(u.getString("Smart rule type export schedules were automatically migrated to the new user interface."),"</p>");a(function(){r.update(p,{text:t,type:"success"})},3e3)}else a(function(){r.update(p,{text:s("Export schedules migration failed. Reload to try again."),type:"danger"})},3e3)}_.assign(n,{invalid:c.invalid.bind(c,n,h),validationHints:function(e){return c.validationHints(n[h][e],v)},saveStay:function(){return R().then(function(e){t.path("/export/".concat(e.id))}).then(function(){r.success(s("Configuration saved."))})},saveClose:function(){return R().then(function(){t.path("/export")})},cancel:function(){t.path("/export")},onSelectionChanged:function(e){e.enabled=!0},smartRulesFilter:{ruleTemplateName:"sendExportViaEmail"},reloadSmartRulesList:function(){n.$broadcast("smartRulesListReload")},shouldShowSchedules:function(){return m},migrate:E,onRules:function(e){e&&Array.isArray(e)&&e.length?(S=!(m=!1),E()):x=!1},shouldShowSmartRules:function(){return x},isMigratingWarning:function(){return S&&!y},isMigratingInProgress:function(){return y},disableEditAndCreate:!0,updateSchedules:function(e){n.config.c8y_ScheduleConfiguration=e}}),f=e.exportId,g=!!e.clone,f="new"===f?void 0:f,n.exportTypes=i.getFileTypes(),n.config=i.create(),n.isNoApiChecked=$,n.needsReschedule=!1,f?i.detail(f).then(w):w()}e.$inject=["$scope","$location","$routeParams","exportConfig","c8yBase","c8yTitle","c8yAlert","$timeout","gettext","gettextCatalog","exportService","c8yReportsService"],angular.module("c8y.cockpit.export").controller("exportConfigDetailCtrl",e)}();