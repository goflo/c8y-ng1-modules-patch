"use strict";angular.module("c8y.assets").controller("addOperationCtrl",["$scope","$uibModalInstance","$q","c8yOperationTemplate","c8yDeviceShell","deviceTypes","operation","gettextCatalog",function(t,e,n,o,a,i,c,s){var m,p=[];function r(e){p.length=0,_.forEach(e,function(e){p.push({name:s.getString(e.name),text:e.command,category:s.getString(e.category),deviceType:e.deviceType})})}function l(e){t.operation.json=e}t.commandTemplates=p,t.chooseOperation=function(e){o.setTemplate(e.name,e.text).then(l)},t.close=function(){e.close(t.operation)},t.dismiss=e.dismiss,t.operation=c,t.operation.json=c.json||{description:s.getString("Command description"),c8y_Command:{text:"<command>"}},m=[],_.map(i,function(e){m.push(a.getCommandTemplatesForDeviceType(e))}),n.all(m).then(_.flattenDeep).then(r)}]);