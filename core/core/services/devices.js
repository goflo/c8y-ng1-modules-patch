"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(){function e(c,r,e,o,t,u,s,i){var n="c8y_IsDevice",a=["c8y_Dashboard","c8y_Report","c8y_Kpi","c8y_ExportConfiguration","c8y_IsBinary","c8y_NoDevice","c8y_IsDeviceGroup","c8y_Group","com_cumulocity_model_smartrest_SmartRestTemplate","com_cumulocity_model_devicesimulator_SensorTemplate","_attachments","c8y_IsDeviceType","c8y_objectmapping_ObjectMapping"],l=["c8y_ConfigurationDump","c8y_Firmware","c8y_SmartRule","c8y_Software","impact_object_mapping","c8y_UserPreference","c8y_TenantPolicy","c8y_PrivateSmartRule","c8y_SmartRest2Template","c8y_JsonSchema","c8y_DeviceShellTemplate","c8y_DemoStatus","c8y_DataBroker","c8y_Application_","brandingVariables","c8y_DeviceSimulator","c8y_CertificateMetadata","lwm2m_post_registration","c8y_microservice_manifest_"],y=["c8y_Network.c8y_LAN.ip","c8y_ModbusDevice.ipAddress"],d={},f={CONNECTED:{icon:"exchange",cls:"statusOk"},AVAILABLE:{icon:"check-circle",cls:"statusOk"},MAINTENANCE:{icon:"wrench",cls:"statusAlert"},UNAVAILABLE:{icon:"exclamation-circle",cls:"statusNok"},UNKNOWN:{icon:"circle",cls:"statusUnknown"},NOT_MONITORED:{icon:"circle",cls:"statusUnknown"}},p={true:{icon:"check-circle",color:"green",tooltipText:"Valid"},false:{icon:"exclamation-circle",color:"red",tooltipText:"Invalid"},null:{icon:"circle",color:"#f3f3f3",tooltipText:"Unknown"}};function v(e){return _.assign({skipChildrenNames:!0,fragmentType:n},e||{})}var m=o.createListFilter(h);function h(e){return!!e[n]}var g=o.createListFilter(A);function A(e){return h(e)||!function(e){return function(e){var t=_.get(e,"type","");return _.some(l,function(e){return t.includes(e)})}(e)||function(t){return _.find(a,function(e){return!_.isUndefined(t[e])})}(e)}(e)}function b(e){var t=_.cloneDeep(e);return t[n]=!0,s.create(t)}function D(e){return"com_nsn_startups_vendme_VendingMachine"===e.type}function I(e){var t=e&&e.c8y_RequiredAvailability,n=e&&e.c8y_Availability;return n&&n.status||(t?"UNKNOWN":"NOT_MONITORED")}function T(e){if(e.c8y_Availability&&e.c8y_Availability.lastMessage&&e.c8y_RequiredAvailability&&e.c8y_RequiredAvailability.responseInterval){return 0<moment().valueOf()-moment(e.c8y_Availability.lastMessage).valueOf()-6e4*e.c8y_RequiredAvailability.responseInterval}return null}function C(e){return function(e){var t=e&&(e.id||e);w.cache&&delete w.cache[t]}(e),s.update(e)}function S(e,t){var n=_.assign(t||{},{withParents:!0}),r=s.detail(e,n);return w.cache&&w.cache.set(e&&(e.id||e),r),r}var w=_.memoize(S,function(e){var t=e&&(e.id||e);return S(t),t});function O(e){return!_.isUndefined(e[n])}function N(e){return 0<e.deviceParents.references.length}function R(e){return e&&e.c8y_RequiredAvailability&&e.c8y_RequiredAvailability.responseInterval&&0!==parseInt(e.c8y_RequiredAvailability.responseInterval,10)}return _.assign(_.cloneDeep(s),{list:function(e){var t=v(e),n=s.list(t);return t.text&&(n=n.then(m)),n},searchIncludingChildDevices:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=_.omit(v(e),["fragmentType","query"]);return(e.query?s.listQuery(e.query,t):s.list(t)).then(g)},save:function(e){return e.id?C(e):b(e)},update:C,detail:S,listChildren:function(e){var t=e&&(e.id||e);return c.all([s.childDevices(t),s.childAssets(t)]).then(_.flattenDeep)},detailCached:w,create:b,removeWithUser:function(e){return S(e).then(function(e){var t=e.data,n=t.owner;return t.c8y_IsDevice&&n&&n.match(/^device_/),t}).then(function(){return s.remove(e)})},supportsOperation:function(e,t){var n=e&&e.c8y_SupportedOperations;return!!(_.isArray(n)&&-1<n.indexOf(t))},getSupportedOperations:function(e){var t=[];return _.isArray(e.c8y_SupportedOperations)&&(t=e.c8y_SupportedOperations),t},getChildren:function(e){var t=e.childAssets?e.childAssets.references:[],n=e.childDevices?e.childDevices.references:[],r=_.map(_.uniqBy(_.union(t,n),"id"),function(e){return S(e.managedObject.id)});return c.all(r).then(function(e){return _.map(e,function(e){return e.data})})},isVendme:D,statusIcon:function(e){return f[I(e)].icon},statusClass:function(e){return f[I(e)].cls},parseAvailability:I,getCount:function(e){var t=v(e);return s.getCount(t)},getChildDevicesCount:function(e){return s.children(e,"childDevices",{skipDetail:!0,params:{pageSize:1,withTotalPages:!0,withChildren:!1}}).then(function(e){return e.data.statistics.totalPages})},isDevice:O,isChildDevice:N,isDeviceOrChildDevice:function(e){return O(e)||N(e)},model:function(e){var t=D(e)?"com_nsn_startups_vendme_fragments_VendingMachineTypeInfo":"c8y_Hardware",n=e&&e[t];return n&&n.model},serial:function(e){var t=D(e)?"com_nsn_startups_vendme_fragments_VendingMachineTypeInfo":"c8y_Hardware",n=D(e)?"serial":"serialNumber",r=e&&e[t];return r&&r[n]},availabilityTooltip:function(e){var t=e.c8y_Availability,n=t&&t.lastMessage&&r("absoluteDate")(t.lastMessage);return n?i.getString("Last message: {{date}}",{date:n}):i.getString("Connection not monitored")},properName:function(e){return"".concat(_.find(_.at(e,["name","id"]))||i.getString("<no name>"))},getIPAddress:function(e){return _.find(_.at(e,y))},canSwitchResponseInterval:R,switchResponseInterval:function(e){var t={id:e.id,c8y_RequiredAvailability:{}};return R(e)&&(t.c8y_RequiredAvailability.responseInterval=-e.c8y_RequiredAvailability.responseInterval),s.update(t)},isLastValidMessage:T,lastValidMessageColor:function(e){return p[T(e)].color},lastValidMessageTooltip:function(e){return p[T(e)].tooltipText},lastValidMessageIcon:function(e){return p[T(e)].icon},getBreadcrumbsData:function(e){function a(r,i,e){return e?(i.unshift(function(e){return{label:e.name||"Device ".concat(e.id),path:function(e){return"#/".concat(u.isGroup(e)?"group":"device","/").concat(e.id)}(e),icon:function(e){var t=_.compact([O(e)?"hdd-o":"",u.isGroup(e)?u.getIconSpecs(e).iconOpen:"","c8y-group-open"]);return _.first(t)}(e),isDevice:O(e),isGroup:u.isGroup(e),id:e.id}}(e)),c.all([s.directParentDevices(e),s.directParentAssets(e)]).then(function(e){var t=[].concat(_toConsumableArray(e[0]),_toConsumableArray(e[1])).filter(function(e){var n=e.id;return!i.some(function(e){var t=e.id;return n===t})});if(0===t.length)return r.push(i),c.when(r);var n=[];return _.forEach(t,function(e){n.push(s.detail(e.id,{withParents:!0}).then(o.getResData).then(function(e){return c.when(a(r,_.cloneDeep(i),e))}))}),c.all(n).then(function(){return r})})):c.when(r)}var t=null;if(o.hasId(e)){var n=o.getId(e);d[n]&&(t=c.when(d[n]));var r=w(n).then(o.getResData).then(function(e){return a([],[],e).then(function(e){var t=e;return t=function(e){return _.sortBy(e,function(e){return-1*e.length})}(t=function(e){return _.filter(e,function(e){return _.some(_.without(e,e[e.length-1]),function(e){return e.isDevice||e.isGroup})})}(t)),d[n]=t})});t=t||r}return t||c.when([])},isProbablyDevice:A,clearBreadcrumbsCache:function(e){var t=o.getId(e);d[t]=null}})}e.$inject=["$q","$filter","$cacheFactory","c8yBase","c8yUser","c8yGroups","c8yInventory","gettextCatalog"],angular.module("c8y.core").factory("c8yDevices",e)}();