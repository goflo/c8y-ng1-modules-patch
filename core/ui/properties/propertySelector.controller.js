"use strict";!function(){function e(i,o,e,n,r,t){function c(e){var n=e,r=_.map(i.properties,function(e){return _.cloneDeep(e)});if(!i.allowDuplicates){var t=_.map(r,"id");n=_.filter(e,function(e){return e.computed||!_.includes(t,e.id)})}!function(e){_.forEach(e,function(n){var e=_.find(i.renderTypes,function(e){return!_.isUndefined(e.isDefaultFor)&&e.isDefaultFor(n)});n.renderType=_.get(e,"name")})}(e),i.properties=_.union(r,n),l()}function d(){return function(e){i.renderTypes=e,i.render=e[0]}(o.list())}function u(n){var e=n.renderType,r=n.keyPath&&n.keyPath[0],t=n.renderConfig||{};return"operationButton"===e&&(t||(t={}),"createOperation"===r&&(t.deviceTypes=i.deviceTypes||["default_AT"])),t.actionType=r,o.config(n.renderType,t).then(function(e){n.renderConfig=e})}function a(e){return _.filter(e,function(e){return _.includes(i.defaultProperties,e.id)})}function p(e){i.properties=e}function f(e){i.actions=e}function l(){i.propertiesHiddenForm.$setDirty()}i.edit=function(e){e.editMode=!e.editMode},i.addProperty=function(){return t.openSelector({includeTree:i.includeTree,includeTreeChildren:i.includeTreeChildren,managedObject:i.managedObject||{},withChildren:i.withChildren}).then(c)},i.addAction=function(e){var n={isAction:!0,label:e.config.label,keyPath:[e.name],renderType:"operationButton",__active:!0};u(n).then(function(){c([n])}),l()},i.removeProperty=function(e){_.remove(i.properties,e),l()},i.configComputeProperty=function(n){return r.edit(n).then(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};n.config&&!_.isEqual(n.config.dp,e.dp)&&l(),n.config=e})},i.displayKeyPath=function(e){var n=e[e.length-1],r=/_\d{9,}$/;return r.test(n)&&(e[e.length-1]=n.replace(r,"")),e.join(".")},i.onPropertiesOrderChanged=function(){l()},i.showRenderType&&i.showRenderType()&&(i.rendererHasConfig=o.hasConfig,i.configRenderer=u),i.showRenderType&&i.showRenderType()&&d(),i.defaultProperties&&(i.properties||n.list().then(a).then(_.partialRight(n.changeActiveProperty,!0)).then(p)),i.actions||e.list().then(f),_.isUndefined(i.allowDuplicates)&&(i.allowDuplicates=!0),i.data={}}e.$inject=["$scope","c8yRenderers","c8yObjectActions","c8yPropertiesLibrary","c8yComputedProperties","SchemaPropertiesSvc"],angular.module("c8y.ui").controller("c8yPropertySelectorCtrl",e)}();