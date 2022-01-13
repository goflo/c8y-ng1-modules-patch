"use strict";!function(){function e(t,u,o,c,n,r){var s=t.$id,l=this,p=[];function d(){_.uniq(p).forEach(function(e){return c.destroySubscription(s,e)}),p=[]}function f(e){var t=_.find(l.operations,_.pick(e,"id"));t?_.assign(t,e):(l.operations.push(e),function(e){var i=_.pick(e.c8y_JsonSchemaContext,["key","schemaId","path"]);if(i){var t=_.find(l.properties,function(e){var t=e.key,n=e.schemaId,r=e.path;return _.isEqual({key:t,schemaId:n,path:r},i)});t&&t.operationList.push(e)}}(e))}function h(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=l.path,n=l.schema,r=l.context,i=l.includeUndefined,a=u.getProperties(n,r,t,i),o=_.map(l.properties,"key"),c=_.map(a,"key"),s=_.difference(c,o).length||_.difference(o,c).length,p=!!(e&&e.path&&e.path.currentValue&&e.path.previousValue)&&e.path.previousValue!==e.path.currentValue;(s||p)&&(l.properties=u.sortProperties(a),l.showSave=u.showSave(l.properties)),l.propertyContainsBasicOperations=_.find(l.properties,function(e){return"operations"===_.get(e,"key")}),l.mutatedProperties=_.filter(l.properties,function(e){return"operations"!==_.get(e,"key")})}function i(e,r,t){var n=l.context,i=l.schema;return u.createOperation(e,r,t,n,i).then(function(e){var t=e.created,n=e.completed;return u.alertOperationCreateSuccess(t,r),u.alertOperationComplete(n),t})}function a(){t.MainForm.$setPristine();var e=r("Object updated.");n.success(e)}_.assign(l,{$onChanges:function(e){if(h(e),e.context){var t=_.get(e.context,"currentValue.id");!function(e){var t=_.get(e,"previousValue.id"),n=_.get(e,"currentValue.id");t!==n&&(l.operations=[],u.listPendingOperations(n).then(function(e){return _.forEach(e,f)}))}(e.context),function(e){if(d(),e){var t=c.realtimeActions(),n=t.UPDATE,r=t.CREATE,i="/operations/".concat(e),a="/managedobjects/".concat(e);c.addListener(s,i,n,function(e,t){return f(t)}),c.addListener(s,i,r,function(e,t){return f(t)}),c.addListener(s,a,n,function(e,t){return function(e){l.context=o.updateManagedObject(l.context,e),h()}(t)}),c.start(s,i),c.start(s,a),p=p.concat([i,a])}}(t)}},$onDestroy:function(){d()},operations:[],propertyContainsBasicOperations:{},createOperation:i,save:function(){var e=_.pick(l.context,["id",l.path]);l.saving=!0,o.update(e).then(a).finally(function(){l.saving=!1})},execute:function(e,t){var n=l.propertyContainsBasicOperations.operations[e],r=_.pick(l.propertyContainsBasicOperations,["path","schemaId","key"]);i(JSON.parse(u.replaceOperationTemplatePlaceholders(n.template,l.context,r,t)),n.name,r)},getIcon:function(e){var t="edit";switch(e){case 0:case 1:t="reply";break;case 2:t="plus-circle";break;case 3:t="trash";break;default:t="edit"}return t}})}e.$inject=["$scope","c8yGenericUi","c8yInventory","c8yRealtime","c8yAlert","gettext"],angular.module("c8y.genericUi").component("c8yGenericUiInventory",{templateUrl:":::PLUGIN_PATH:::/generic-ui-inventory.html",controllerAs:"vm",controller:e,bindings:{path:"<",schema:"<",context:"<",includeUndefined:"<",title:"<",onlyBasicOperations:"<"}})}();