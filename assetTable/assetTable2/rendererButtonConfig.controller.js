"use strict";angular.module("c8y.assets").controller("RendererButtonConfigCtrl",["$scope","$uibModalInstance","$q","c8yDeviceShell","config","gettext","gettextCatalog",function(e,t,o,i,n,c,a){var r=[],d=n.deviceTypes||[];function s(t){r.length=0,_.forEach(t,function(t){r.push({name:a.getString(t.name),text:t.command,category:a.getString(t.category),deviceType:t.deviceType})})}function u(t,e){!function(t){n.args=[t]}({description:t,c8y_Command:{text:e}})}function m(t){e.showEditor=void 0===t?!e.showEditor:t}e.showEditor=!1,e.config=n,e.commandTemplates=r,e.chooseOperation=function(t){m(!0),u(t.name,t.text)},e.close=function(){t.close(n)},e.expandTooltip=function(){return e.showEditor?c("Click to hide command editor"):c("Click to view command editor")},e.expandIcon=function(){return e.showEditor?"caret-square-o-up":"caret-square-o-down"},e.toggleEditor=m,e.dismiss=t.dismiss,e.data={},n.args&&n.args.length||u(a.getString("Command description"),"<command>"),function(){var n=[];_.map(d,function(t){var e;n.push((e=t,i.getCommandTemplatesForDeviceType(e).then(_.identity,function(){return[]})))}),o.all(n).then(_.flattenDeep).then(s)}()}]);