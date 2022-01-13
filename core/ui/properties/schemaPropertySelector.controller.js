"use strict";!function(){function e(u,r,t,n,e,i,o,c){var p=c.type?e.another(e.paths[c.type]):e.another(t.dataFilePath("properties/managed-objects.json")),s=["additionParents","assetParents","deviceParents","childAdditions","childAssets","childDevices","c8y_IsDevice","__children","c8y_ui","self","parent","c8y_DataPoint","c8y_Kpi_Migrated",/^c8y_Dashboard!\d+/],l=[];function h(e){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],a={};return _.isObjectLike(e)&&_.forOwn(e,function(e,t){if(!(function(t){return!!_.find(l,function(e){return e instanceof RegExp?e.test(t):e===t})}(t)||_.isArray(e)||_.isObjectLike(e)&&_.isEmpty(e))){var r=_.cloneDeep(s);r.push(t);var n={label:t,title:t,keyPath:r,id:"c8yCustom!!".concat(r.join(".")),type:"string",schema:{}};if(_.isObjectLike(e)){n.type="object",n.printFormat="hidden",n.properties={};var i=h(e,r);_.isObjectLike(i)&&_.forOwn(i,function(e,t){n.properties[t]=e})}var o=_.pick(n,"properties");if(n.schema={properties:{}},n.schema.properties[n.label]={type:n.type,title:n.title},"object"===n.type)n.schema.properties[n.label].properties=o.properties;else{var c=_.cloneDeep(n.keyPath);n.schema=function(e,t){var n={title:t,type:"string"},r=e.slice().reverse();return r=_.reduce(r,function(e,t){var r={properties:{}};return _.isEqual(e,n)||_.assign(e,{type:"object",printFormat:"hidden"}),r.properties[t]=e,r},n)}(c,n.title)}p.addCustomProperty(n),u.properties.push(n),a[t]=n}}),a}function a(){l=_(u.properties).filter(function(e){return"c8yCustom"!==_.head(e.id.split("!!"))}).map(function(e){return 1<e.keyPath.length?_.filter(e.keyPath,function(e){return"c8y"===e.substr(0,3)}):e.keyPath}).flatten().uniq().value(),l=_.union(l,s)}function d(){u.properties=_.sortBy(u.properties,"orderKey")}function f(){u.properties=_(u.properties).reject(function(e){return c.showRootPropertiesOnly&&1<e.keyPath.length}).reject(function(e){return!c.showComputed&&e.computed}).reject(function(e){return c.hideExistingInMO&&_.has(u.managedObject,e.keyPath)}).value()}function y(){var e=r.resolve();return t.hasId(u.managedObject)&&(e=n.detail(u.managedObject).then(t.getResData).then(function(e){return u.withChildren?function(r){return n.getChildren(r).then(function(e){var t=_.uniqBy(e,"id").concat(r);return _.reduce(t,function(e,t){return _.isObjectLike(t)?_.merge(e,t):e})})}(e):e})),e}function m(){_.forEach(u.properties,function(e){e.orderKey=function(e){var t=!p.isComplexProperty(e)&&1===e.keyPath.length,i=[];return i.push(e.computed?"z":"a"),i.push(t?"a":"z"),_.reduce(e.keyPath,function(e,t){var r=[];e&&r.push(e),t&&r.push(t),r=r.join(".");var n=_.find(u.properties,function(e){return e.keyPath.join(".")===r});return i.push(n.label),i.push(r),r},""),i.join(",")}(e)})}function v(t){return t.computed&&t.configSchema?i.edit(t).then(function(e){return t.config=e,t},function(){return t.removed=!0,t}):r.when(t)}function g(e){var t=_.cloneDeep(e);if(e.computed&&e.configSchema){var r=String(Math.random()).substr(2),n="".concat(_.last(e.id.split("!!")),"_").concat(r);(t=_.clone(e)).config={_id:r},t.keyPath=[n]}return t}function P(e){var t=b(_.map(p.getChildren(e,null),"id"));p.changeActiveProperty(t,e.__active)}function b(t){return _.filter(u.properties,function(e){return _.includes(t,e.id)})}u.properties=[],u.managedObject=c.managedObject,u.withChildren=c.withChildren,u.selectSingle=c.selectSingle,u.close=function(){var t=function(e){return _.omit(e,["orderKey"])};if(c.selectSingle)return v(g(u.properties.selected)).then(function(e){return e.removed?o.dismiss():o.close(t(e))});var e=r.all(_.map(_.map(_.filter(u.properties,"__active"),g),v)).then(function(e){return _.reject(e,"removed")}).then(function(e){return _.map(e,t)});return o.close(e)},u.onSelectProperty=function(e){c.includeTree&&(P(e),function(e){var t=p.getParent(e),r=b(_.map(t,"id"));e.__active&&p.changeActiveProperty(r,!0)}(e)),c.includeTreeChildren&&P(e)},u.dismiss=o.dismiss,u.isComplexProperty=p.isComplexProperty,u.isAtLeastOneSubpropertyListed=function(t){return _.some(u.properties,function(e){return e.keyPath.length>t.keyPath.length&&_.isEqual(t.keyPath,_.slice(e.keyPath,0,t.keyPath.length))})},u.selectIsDisabled=function(){return c.selectSingle?!u.properties.selected:_.every(u.properties,function(e){return!e.__active})},u.search="",u.filterByLabelOrProperty=function(e){var t=u.search.toLowerCase();if(""===t)return!0;var r=e.keyPath,n=e.label?e.label.toLowerCase():"",i=_.isEmpty(r)?"":r.join(".").toLowerCase();return n.includes(t)||i.includes(t)},p.list().then(function(e){u.properties=e}).then(a).then(y).then(h).then(m).then(d).then(f)}e.$inject=["$scope","$q","c8yBase","c8yDevices","c8yPropertiesLibrary","c8yComputedProperties","$uibModalInstance","modalParams"],angular.module("c8y.ui").controller("schemaPropertySelectorCtrl",e)}();