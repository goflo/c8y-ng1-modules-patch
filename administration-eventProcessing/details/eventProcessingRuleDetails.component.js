"use strict";!function(){function e(n,t,e,o,i,s,l,c,a,r,u){var d,g,m,f=this,h=e.moduleId,p={left:{"grid__col--fullspan":!1,hidden:!1},right:{"grid__col--fullspan":!1,hidden:!1}},v={mode:"sql",useWrapMode:!0,showGutter:!0,onLoad:function(e){(g=e).$blockScrolling=1/0}};function E(){h?i.detail(h).then(D):D({name:u.getString("newmodule`KEEP_ORIGINAL`"),status:"DEPLOYED",isNew:!0})}function D(e){(f.module=e).isNew||(f.loadedName=f.module.name),f.moduleDeployed="DEPLOYED"===f.module.status,d=_.cloneDeep(e),m||(m=n.$on("$locationChangeStart",$))}function w(e){var n=f.module.body;n=n?"".concat(n,"\n\n"):"",f.module.body=n+e.value}function P(){f.moduleForm.aceEditor.$setDirty()}function y(e){var n=_.get(e,"data",e),t=_.get(n,"message",""),o=_.get(t.match(/\[((\s|\S)+)\]/),1);if(o){var i=g.find(o,{wrap:!0,preventScroll:!0}),s=t.match(/at line (\d+) column (\d+)/),l=_.toNumber(_.get(s,1,1))-1,a=_.toNumber(_.get(s,2,0)),r={row:_.get(i,"start.row",0)+l,column:_.get(i,"start.column",0)+a};g&&(g.gotoLine(r.row+1,r.column,!0),function(e,n,t,o){var i=g.session.getAnnotations();i.push({row:e,column:n,text:t,type:o||"error"}),g.session.setAnnotations(i)}(r.row,r.column,u.getString(t),"error"))}else c.danger(u.getString(t),n)}function S(e){h?E():t.path("eventprocessing/".concat(e.id))}function $(e,n){var t;return d.id&&!_.isEqual(d,f.module)&&(e.preventDefault(),t=s({title:r("Discard changes"),body:r("You are about to leave this page and discard the changes made. Do you want to proceed?"),status:"warning",labels:{ok:r("Discard")}}).then(function(){d=_.cloneDeep(f.module),o.location.href=n})),t}_.assign(f,{panelClasses:p,aceEditorStyles:{height:"100%",width:"100%","min-height":"50vh"},aceEditorOptions:v,isSmartRuleModule:i.isSmartRuleModule,$onInit:function(){a.redirectToRootIfPluginDisabled().then(E),a.getPermissions().then(function(e){return _.assign(f,{permissions:e})})},onModuleDeployedChanged:function(e){f.module.status=e?"DEPLOYED":"NOT_DEPLOYED"},expand:function(e){_.forEach(p,function(e){e["grid__col--fullspan"]=!1,e.hidden=!0}),p[e]["grid__col--fullspan"]=!0,p[e].hidden=!1},collapse:function(){_.forEach(p,function(e){e["grid__col--fullspan"]=!1,e.hidden=!1})},isExpanded:function(e){return!0===p[e]["grid__col--fullspan"]},browseExamples:function(){return l.open({component:"c8yEventProcessingRulesExamples",size:"lg"}).result.then(w).then(P)},save:function(e,n){g.session.clearAnnotations(),i.save(e,{silentError:!0}).then(S).then(function(){c.success(u.getString('Module "{{name}}" saved.',e)),n.$setPristine(),f.loadedName=f.module.name}).catch(y)},cancel:function(){t.path("eventprocessing")}})}e.$inject=["$scope","$location","$routeParams","$window","c8yCepModule","c8yModal","$uibModal","c8yAlert","eventProcessingSvc","gettext","gettextCatalog"],angular.module("c8y.eventProcessing").component("c8yEventProcessingRuleDetails",{templateUrl:":::PLUGIN_PATH:::/details/eventProcessingRuleDetails.html",controller:e,controllerAs:"vm"})}();