"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){function e(u,o,e,s,t,c,a,i,n,l,r){var p={name:"feature-fieldbus4"},m=e.has("FIELDBUS_UI_VERSION")?e.get("FIELDBUS_UI_VERSION"):4,d="c8y_IsDeviceType",f="c8y_ModbusDeviceType",g="%%",y=s.createEnum(["DISCRETE_IO","REGISTER"]),v=s.createEnum([{name:"FPORT",label:"FPort"},{name:"PAYLOAD",label:"Payload"}]),b=s.dataFilePath("devicetypes"),T={common:{name:null},deviceType:{c8y_Coils:[],c8y_Registers:[]},element:{number:null},discreteIO:{},discreteOutput:{input:!1},discreteInput:{input:!0},register:{multiplier:1,divisor:1,offset:0,decimalPlaces:0,startBit:0,noBits:16,unit:"",signed:!1},canbusRegister:{noBits:64,offset:0},canopenRegister:{},holdingRegister:{input:!1},inputRegister:{input:!0}},M=[],h=[];return{ElementType:y,MessageIdSources:v,metaDefaults:{discreteIO:{enumValues:[{value:0,label:"0"},{value:1,label:"1"}]}},registerFeaturesManifest:function(e){var t=u.resolve(e);M.push(t),t.then(function(e){e&&h.push(e)})},areAnyFeaturesManifestsRegistered:function(){return R().then(function(e){return 0<e.length})},getFeaturesManifestsAsync:R,getFeaturesManifests:function(){return h},getDeviceTypeFeatures:Le,getElementTypeLabel:function(e,t){var n,r=_.get(e,"meta.type");if(r){var a=_.get(e,"input");if(r===y.DISCRETE_IO)n=l(a?"Discrete input":"Coil (discrete output)");else if(r===y.REGISTER)if(a)n=l("Input register");else{var i=Le(t);n=_.get(i,"holdingRegisters.elementTypeLabel",l("Holding register"))}}return n},getFieldbusVersion:V,getEmptyDeviceType:function(){var e=T.common,t=T.deviceType;return _.cloneDeep(_objectSpread({},e,t))},getAvailableDeviceTypes:function(t,n){var r,a,i,u;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return!0,r={},a={__and:[{__or:[{__has:d},{type:f}]},{fieldbusType:{__in:_.map(h,"fieldbusType")}}]},_.isEmpty(t)||(a.__and=[].concat(_toConsumableArray(a.__and),[t])),i=s.createListMapper(function(e){return I(e)}),e.next=7,regeneratorRuntime.awrap(c.listQuery(a,r,!0,n).then(i));case 7:return u=e.sent,e.abrupt("return",u);case 9:case"end":return e.stop()}},null,null,null,Promise)},getDeviceTypeFromDevice:function(e){var t=_.flatten(_.map(h,"deviceFragments")),n=_.head(_.compact(_.at(e,t))),r=_.get(n,"type"),a=r&&r.match(/\/inventory\/managedObjects\/(\d+)/),i=_.nth(a,1);if(i)return S(i);return u.resolve(null)},getFieldbusVersionFromDevice:function(e){var t=_.map(h,"deviceConfiguration.fragment"),n=_.head(_.compact(_.at(e,t)));return _.get(n,"maxFieldbusVersion",4)},getDeviceType:S,save:A,exportDeviceTypeAndSaveAs:function(e){var t="".concat(e.name,".json"),n=JSON.stringify(function(e){return e.c8y_ModbusDeviceTypeInfo=function(e){return _.omit(_objectSpread({},_.get(e,"c8y_ModbusDeviceTypeInfo",{}),{name:e.name,minFieldbusUI:m,fieldbusType:e.fieldbusType}),["id","category","description"])}(e),e.c8y_Coils=_.map(e.c8y_Coils,Z),e.c8y_Registers=_.map(e.c8y_Registers,Z),_.pick(e,["c8y_ModbusDeviceTypeInfo","c8y_Coils","c8y_Registers","c8y_useServerTime","c8y_MessageIdConfiguration"])}(e),null,2),r=new Blob([n],{type:"application/json"});window.saveAs(r,t)},importDeviceTypeWithUI:function(){return n({component:"c8yImportDeviceTypeModal"}).then(A)},getPredefinedDeviceTypeInfos:function(){var n,r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0,t=Je(),n=t&&_.map(t)){e.next=8;break}return r="".concat(b,"/index.json"),e.t0=s,e.next=6,regeneratorRuntime.awrap(o.get(r));case 6:e.t1=e.sent,n=e.t0.getResData.call(e.t0,e.t1);case 8:return e.abrupt("return",_.flow([ee,te])(n));case 9:case"end":return e.stop()}var t},null,null,null,Promise)},isDeviceTypeSupported:ne,isDeviceTypeSupportedAsync:function(n){return R().then(function(e){return _.map(e,"fieldbusType")}).then(function(e){var t=Ge(n);return _.includes(e,t)})},getPredefinedDeviceType:He,downloadPredefinedDeviceTypeAndSaveAs:function(t){var n,r,a,i,u,s;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,".json"),r="predefinedDeviceTypesUrl/".concat(n),e.next=4,regeneratorRuntime.awrap(o.get(r));case 4:a=e.sent,i=JSON.stringify(a.data,null,2),u=a.headers("Content-Type"),s=new Blob([i],{type:u}),window.saveAs(s,n);case 9:case"end":return e.stop()}},null,null,null,Promise)},upgradeDeviceType:I,getElementsWithMeta:function(t){var e=_.get(t,"c8y_Coils",[]),n=_.get(t,"c8y_Registers",[]);return _.union(_.map(e,function(e){return re(e)}),_.map(n,function(e){return fe(e,t)}))},addDiscreteIOsMeta:function(e){if(e)return e.c8y_Coils=_.map(e.c8y_Coils,re),e;return},addDiscreteIOMeta:re,removeDiscreteIOMeta:function(e){var t=e;t.meta&&(t=_.flow([ce,le,pe,me,de])(t),_.unset(t,"meta"));return t},addRegistersMeta:function(t){if(t)return t.c8y_Registers=_.map(t.c8y_Registers,function(e){return fe(e,t)}),t;return},addRegisterMeta:fe,removeRegisterMeta:function(e){var t=e;e.meta&&(t=_.flow([De,we,Ae,Oe,Ce,je,Ue,Ve,xe,Be])(e),_.unset(t,"meta"));return t},removeAllElements:function(e){e.c8y_Registers=[],e.c8y_Coils=[]},getElementRefId:function(e){var t=_.compact(Ne(e));return _.head(t)},findElementBestMatchingRefId:function(e,t,n){return _(e).chain().map(function(e){return{score:function(e,t,n){var r=e.meta.type.value===n,a=Ne(e),i=_.findIndex(a,_.negate(_.isUndefined)),u=_.indexOf(a,t);return r&&0<=u?i-u:void 0}(e,t,n),element:e}}).reject(function(e){return _.isUndefined(e.score)}).orderBy("score").head().get("element").value()},getDiscreteOutputsCategorized:function(e){return _(e.c8y_Coils).reject("input").groupBy(ke).value()},getDiscreteInputsCategorized:function(e){return _(e.c8y_Coils).filter("input").groupBy(ke).value()},getHoldingRegistersCategorized:function(e){return _(e.c8y_Registers).reject("input").groupBy(ke).value()},getInputRegistersCategorized:function(e){return _(e.c8y_Registers).filter("input").groupBy(ke).value()},getEmptyDiscreteOutput:function(){return _.cloneDeep(_objectSpread({},T.common,T.element,T.discreteIO,T.discreteOutput))},getEmptyDiscreteInput:function(){return _.cloneDeep(_objectSpread({},T.common,T.element,T.discreteIO,T.discreteInput))},getEmptyHoldingRegister:function(e){return"canbus"!==e.fieldbusType?"canopen"!==e.fieldbusType?_.cloneDeep(_objectSpread({},T.common,T.element,T.register,T.holdingRegister)):_.cloneDeep(_objectSpread({},T.common,T.canopenRegister)):_.cloneDeep(_objectSpread({},T.common,T.element,T.register,T.canbusRegister,T.holdingRegister))},getEmptyInputRegister:function(){return _.cloneDeep(_objectSpread({},T.common,T.element,T.register,T.inputRegister))},editDiscreteIOWithUI:function(e,t){return n({component:"c8yConfigureDiscreteIOModal",title:Fe(e),resolve:_objectSpread({title:function(){return Fe(e)}},$e(e,t.c8y_Coils,t))})},editRegisterWithUI:function(e,t){return n({component:"c8yConfigureRegisterModal",resolve:_objectSpread({title:function(){return function(e,t){var n=Le(t);if(e.input)return e.name?r.getString('Edit input register: "{{name}}"',e):l("New input register");if(e.name)return r.getString(_.get(n,"holdingRegisters.editRegisterModalTitle",l('Edit holding register: "{{name}}"')),e);return _.get(n,"holdingRegisters.newRegisterModalTitle",l("New holding register"))}(e,t)}},$e(e,t.c8y_Registers,t))})},addEmptyEnumValue:function(e){e.meta.enumValues=e.meta.enumValues||[],e.meta.enumValues.push({value:null,label:null})},removeEnumValue:function(e,t){e.meta.enumValues=_.without(e.meta.enumValues,t)},areOverlappingRegisters:function(e,t,n){var r=We(e,n),a=We(t,n),i=Math.max(r.start,a.start),u=Math.min(r.end,a.end);return i<=u},getValuesRange:Se,openFieldbusSelector:function(e){return n({component:"c8ySelectFieldbusPropertyModal",resolve:{modalParams:function(){return _.defaults(e,{})}}})},downloadPredefinedDeviceTypeHref:function(n){var r,a;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id||n,e.next=3,regeneratorRuntime.awrap(He(r));case 3:return a=e.sent,e.abrupt("return",(t=a,window.btoa(unescape(encodeURIComponent(JSON.stringify(t,null,2))))));case 5:case"end":return e.stop()}var t},null,null,null,Promise)},predefinedDeviceTypeHrefFilename:function(e){return"".concat(e.id,".json")},isFieldbusDevice:function(t){return _.some(h,function(e){return _.some(e.deviceFragments,function(e){return _.has(t,e)})})},isFeatureFieldbus4Available:function(){return t.isSubscribed(p)},addElementId:B};function R(){return u.all(M).then(_.compact)}function S(t){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,regeneratorRuntime.awrap(c.detail(t));case 3:return e.t1=e.sent,n=e.t0.getResData.call(e.t0,e.t1),e.abrupt("return",I(n));case 6:case"end":return e.stop()}},null,null,null,Promise)}function I(e){return _.flow([E,D,w,j,U])(e)}function E(e){return _.forEach(e.c8y_Coils,function(e){!e.enumValues&&e.statusMapping&&_.isArray(e.statusMapping.enumValues)&&(e.enumValues={0:e.statusMapping.enumValues[0],1:e.statusMapping.enumValues[1]},_.unset(e,"statusMapping.enumValues")),_.isUndefined(e.input)&&(e.input=T.discreteOutput.input)}),e}function D(e){var r=Le(e);return _.forEach(e.c8y_Registers,function(e){var t=e.input?"inputRegisters":"holdingRegisters",n=_.get(r,t,{});_.get(n,"startBit")&&_.defaults(e,{startBit:T.register.startBit}),_.get(n,"noBits")&&_.defaults(e,{noBits:T.register.noBits}),_.get(n,"options.signed")&&_.defaults(e,{signed:T.register.signed}),!e.unit&&e.measurementMapping&&e.measurementMapping.unit&&(e.unit=e.measurementMapping.unit,_.unset(e,"measurementMapping.unit")),_.isUndefined(e.input)&&(e.input=T.holdingRegister.input)}),e}function w(e){return e.fieldbusType=Ge(e),e}function A(r){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return t=_.flow([C,j,x,N,P,k,U,O])(r),e.abrupt("return",c.save(t).then(s.getResData).then(function(e){return r.id?e:(t=e,regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(i.createIdentity(t,{type:"c8y_SmartRestDeviceIdentifier",externalId:t.name},{silentError:!0}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),n=u.reject.bind(u,{errorMessage:e.t0.data.message}),e.abrupt("return",c.remove(t).then(n,n));case 10:case"end":return e.stop()}},null,null,[[0,6]],Promise)).then(function(){return e});var t,n}));case 2:case"end":return e.stop()}},null,null,null,Promise)}function O(e){return c.addGlobalFlag(e,!0)}function C(e){if(!e.type){var t=Le(e);e.type=_.get(t,"type",f)}return e}function j(e){return _.set(e,d,{})}function U(e){return _.set(e,"fieldbusVersion",V(e))}function V(t){var e=Le(t).versions,n=_.findLast(e,function(e){return _.some(e.checks,function(e){return e(t)})});return _.get(n,"number",4)}function x(e){return e.c8y_Coils=_.map(e.c8y_Coils,B),e.c8y_Registers=_.map(e.c8y_Registers,B),e}function B(e){return e.id||(e.id=String(Math.random()).substr(2)),e}function N(e){return e.c8y_Coils=_.orderBy(e.c8y_Coils,["input","number"]),e.c8y_Registers=_.orderBy(e.c8y_Registers,["input","number","startBit","index","subIndex"]),e}function P(e){var t=Le(e);return!!_.get(t,"configuration.messageIdConfiguration.length")&&(e.c8y_MessageTypes=function(n){return _.reduce(["c8y_Registers","c8y_Coils"],function(e,t){return _.merge(e,function(t,r){var e=_.groupBy(t[r],"messageTypeId"),n=_.mapValues(e,function(e){return _.map(e,function(e){return _.indexOf(t[r],e)})});return _.reduce(n,function(e,t,n){return e[n]={},e[n][r]=t,e},{})}(n,t))},{})}(e)),e}function k(e){var t=function(e){var t=Le(e).customizeSmartRestTemplates||_.identity,n={requestTemplates:_.flattenDeep([function(e){return{msgId:100,method:"PUT",contentType:"application/vnd.com.nsn.cumulocity.managedObject+json",placeholder:g,resourceUri:"/inventory/managedObjects/".concat(g),templateString:Q([{key:"c8y_CoilStatus",value:new K(F(e.c8y_Coils).map(function(e){return{key:e.name,value:g,raw:!0}}).value())}]),values:["UNSIGNED"].concat(_toConsumableArray(F(e.c8y_Coils).map(function(){return"UNSIGNED"}).value()))}}(e),function(e){return{msgId:101,method:"PUT",contentType:"application/vnd.com.nsn.cumulocity.managedObject+json",placeholder:g,resourceUri:"/inventory/managedObjects/".concat(g),templateString:Q([{key:"c8y_RegisterStatus",value:new K(F(e.c8y_Registers).map(function(e){return{key:e.name,value:g,raw:!0}}).value())}]),values:["UNSIGNED"].concat(_toConsumableArray(F(e.c8y_Registers).map(function(){return"NUMBER"}).value()))}}(e),[$(102,"EXECUTING"),$(103,"SUCCESSFUL"),$(104,"FAILED")],function(e){return _.flow([L,J,z])({deviceType:e,msgId:300,templates:[]}).templates}(e)]),responseTemplates:_.flattenDeep([{msgId:200,condition:"$.c8y_SetCoil",pattern:["$.id","$.c8y_SetCoil.address","$.c8y_SetCoil.input","$.c8y_SetCoil.coil","$.c8y_SetCoil.value"]},{msgId:201,condition:"$.c8y_SetRegister",pattern:["$.id","$.c8y_SetRegister.ipAddress","$.c8y_SetRegister.address","$.c8y_SetRegister.input","$.c8y_SetRegister.register","$.c8y_SetRegister.startBit","$.c8y_SetRegister.noBits","$.c8y_SetRegister.value"]},{msgId:202,condition:"$.c8y_ModbusDevice",pattern:["$.id","$.deviceId","$.c8y_ModbusDevice.id","$.c8y_ModbusDevice.address","$.c8y_ModbusDevice.type","$.c8y_ModbusDevice.protocol"]},{msgId:203,condition:"$.c8y_ModbusSource",pattern:["$.id"]}])};return t(n,e)}(e);return _.set(e,"com_cumulocity_model_smartrest_SmartRestTemplate",t)}function F(e){return _(e).filter("statusMapping.status")}function $(e,t){return{msgId:e,method:"PUT",contentType:"application/vnd.com.nsn.cumulocity.operation+json",placeholder:g,resourceUri:"/devicecontrol/operations/".concat(g),templateString:Q({status:t}),values:["UNSIGNED"]}}function L(e){var t=e.deviceType,n=e.msgId,r=e.templates,a=_.filter(t.c8y_Coils,"alarmMapping"),i=_.filter(t.c8y_Registers,"alarmMapping"),u=Le(t),s=u.getCoilSource||W,o=u.getRegisterSource||H,c=n;return _.forEach(a,function(e){r.push(G(c,t,e.alarmMapping,s(e))),e.alarmMapping.raiseAlarmTemplate=c,c+=1}),_.forEach(i,function(e){r.push(G(c,t,e.alarmMapping,o(e))),e.alarmMapping.raiseAlarmTemplate=c,c+=1}),{deviceType:t,templates:r,msgId:c}}function G(e,t,n,r){return{msgId:e,method:"POST",contentType:"application/vnd.com.nsn.cumulocity.alarm+json",accept:"application/vnd.com.nsn.cumulocity.alarm+json",placeholder:g,resourceUri:"/alarm/alarms",templateString:Q([{key:"source",value:{id:g}},{key:"type",value:n.type},{key:"status",value:a.status.ACTIVE},{key:"severity",value:n.severity},{key:"time",value:g},{key:"text",value:n.text},{key:r.key,value:r.value}]),values:["UNSIGNED",q(t)]}}function W(e){return{key:"c8y_ModbusSource",value:{coil:_.pick(e,"input","number")}}}function H(e){return{key:"c8y_ModbusSource",value:{register:_.pick(e,["input","number","startBit","noBits"])}}}function J(e){var r=e.deviceType,t=e.msgId,a=e.templates,n=_([].concat(_toConsumableArray(r.c8y_Coils),_toConsumableArray(r.c8y_Registers))).filter("measurementMapping").groupBy("measurementMapping.type").value(),i=t;return _.forEach(n,function(e,t){var n=_.map(e,function(e){return _.set(e.measurementMapping,"unit",e.unit||e.measurementMapping.unit)});a.push(function(e,t,n,i){return{msgId:e,method:"POST",contentType:"application/vnd.com.nsn.cumulocity.measurement+json",placeholder:g,resourceUri:"/measurement/measurements",templateString:Q(function(){var r=n,a=_defineProperty({source:{id:g},time:g,type:r},r,{});return _.forEach(i,function(e){var t=e.series,n=e.unit;a[r][t]={value:"%n",unit:n}}),a}()),values:["UNSIGNED",q(t)].concat(_toConsumableArray(_.map(i,function(){return"NUMBER"})))}}(i,r,t,n)),_.forEach(n,function(e){e.sendMeasurementTemplate=i,_.unset(e,"unit")}),i+=1}),{deviceType:r,templates:a,msgId:i}}function z(e){var t=e.deviceType,n=e.msgId,r=e.templates,a=[].concat(_toConsumableArray(t.c8y_Coils),_toConsumableArray(t.c8y_Registers)),i=n;return _.forEach(a,function(e){_.isUndefined(e.eventMapping)||(r.push(function(e,t,n,r){return{msgId:e,method:"POST",contentType:"application/vnd.com.nsn.cumulocity.event+json",placeholder:g,resourceUri:"/event/events",templateString:Q([{key:"source",value:{id:g}},{key:"time",value:g},{key:"type",value:r.type},{key:"text",value:r.text},{key:n.name,value:g,raw:!0}]),values:["UNSIGNED",q(t),"NUMBER"]}}(i,t,e,e.eventMapping)),e.eventMapping.eventTemplate=i,i+=1)}),{deviceType:t,templates:r,msgId:i}}function q(e){return e.c8y_useServerTime?"NOW":"DATE"}function Q(e,t){var n;return e instanceof K?n=X(e.kvObj):_.isArray(e)?n=X(e):_.isObjectLike(e)&&(n=angular.toJson(e)),n=n.replace(/"%n"/g,t||g)}function X(e){var t=_.map(e,Y);return"{".concat(t.join(","),"}")}function Y(e){var t,n=e.key,r=e.value,a=e.raw,i={};return(t=r instanceof K?(i[n]=":::INNER_OBJECT_STRING:::",JSON.stringify(i).replace('":::INNER_OBJECT_STRING:::"',X(r.kvObj))):a?(i[n]=":::RAW_VALUE:::",JSON.stringify(i).replace('":::RAW_VALUE:::"',r)):(i[n]=r,JSON.stringify(i))).substr(1,t.length-2)}function K(e){this.kvObj=e}function Z(e){return e.eventMapping&&(e.eventMapping=_.omit(e.eventMapping,["eventTemplate"])),e.alarmMapping&&(e.alarmMapping=_.omit(e.alarmMapping,["raiseAlarmTemplate"])),e.measurementMapping&&(e.measurementMapping=_.omit(e.measurementMapping,["sendMeasurementTemplate"])),_.omit(e,["id","originalName","originalNumber","originalStartBit","meta"])}function ee(e){return _.filter(e,function(e){return ne(e)})}function te(e){return _.filter(e,function(e){return e.minFieldbusUI<=m})}function ne(e){var t=_.map(h,"fieldbusType"),n=Ge(e);return _.includes(t,n)}function re(e){return e.meta=e.meta||{},_.flow([ae,ie,ue,se,oe])(e)}function ae(e){return e.meta.type=e.meta.type||y.DISCRETE_IO,e}function ie(e){return e.meta.enumType=e.meta.enumType||!!e.enumValues,e.meta.enumValues=e.meta.enumValues||e.enumValues&&_.map(e.enumValues,_e),e}function ue(e){var t=_.get(e,"statusMapping.status");return e.meta.showStatus=e.meta.showStatus||"read"===t||"write"===t,e.meta.updateStatus=e.meta.updateStatus||"write"===t,e}function se(e){var t=_.get(e,"alarmMapping.raiseAlarmTemplate");return e.meta.raiseAlarm=e.meta.raiseAlarm||!_.isUndefined(t),e}function oe(e){var t=_.get(e,"eventMapping.eventTemplate");return e.meta.sendEvent=e.meta.sendEvent||!_.isUndefined(t),e}function ce(e){return e.meta.type=void 0,e}function le(r){return r.meta.enumType?(r.enumValues={},_.forEach(r.meta.enumValues,function(e){var t=e.value,n=e.label;r.enumValues[t]=n})):r.enumValues=void 0,r}function pe(e){return e.meta.showStatus||e.meta.updateStatus?(e.statusMapping=e.statusMapping||{},e.meta.showStatus&&(e.statusMapping.status="read"),e.meta.updateStatus&&(e.statusMapping.status="write")):e.statusMapping=void 0,e}function me(e){return e.meta.raiseAlarm?(e.alarmMapping=e.alarmMapping||{},e.alarmMapping.raiseAlarmTemplate=null):e.alarmMapping=void 0,e}function de(e){return e.meta.sendEvent?(e.eventMapping=e.eventMapping||{},e.eventMapping.eventTemplate=null):e.eventMapping=void 0,e}function fe(e,t){return e.meta=e.meta||{},_.flow([ge,ye,ve,be,Te,Me,he,function(e){return function(e,t){var n=Le(t)[e.input?"inputRegisters":"holdingRegisters"],r=_.get(n,"dataType.choices",[]);return e.meta.dataType=e.meta.dataType||_.find(r.values(),{value:e.dataType}),e}(e,t)},function(e){return function(e,t){var n=Le(t)[e.input?"inputRegisters":"holdingRegisters"],r=_.get(n,"accessType.choices",[]);return e.meta.accessType=e.meta.accessType||_.find(r.values(),{value:e.accessType}),e}(e,t)},Re])(e)}function ge(e){return e.meta.type=e.meta.type||y.REGISTER,e}function ye(e){return e.meta.enumType=e.meta.enumType||!!e.enumValues,e.meta.enumValues=e.meta.enumValues||e.enumValues&&_.map(e.enumValues,_e),e}function _e(e,t){return{label:e,value:parseFloat(t)}}function ve(e){var t=_.get(e,"statusMapping.status");return e.meta.showStatus=e.meta.showStatus||"read"===t||"write"===t,e.meta.updateStatus=e.meta.updateStatus||"write"===t,e}function be(e){var t=_.get(e,"measurementMapping.sendMeasurementTemplate");return e.meta.sendMeasurement=e.meta.sendMeasurement||!_.isUndefined(t),e}function Te(e){var t=_.get(e,"alarmMapping.raiseAlarmTemplate");return e.meta.raiseAlarm=e.meta.raiseAlarm||!_.isUndefined(t),e}function Me(e){var t=_.get(e,"eventMapping.eventTemplate");return e.meta.sendEvent=e.meta.sendEvent||!_.isUndefined(t),e}function he(e){return e.meta.sendManagedObjectUpdate=e.meta.sendManagedObjectUpdate||!!e.managedObjectMapping,e}function Re(e){return e.meta.valuesRange=e.meta.valuesRange||Se(e),e}function Se(e){var t,n=_.get(e.meta,"dataType",{}),r=_.get(n,"baseValuesRange",{}),a=Ie([n.divisor,e.divisor,1]),i=Ie([n.multiplier,e.multiplier,1]),u=Ie([n.decimalPlaces,e.decimalPlaces,0]),s=Ie([n.noBits,e.noBits]),o=Ie([n.signed,e.signed,!1]),c=r.min,l=r.max;return _.isUndefined(u)||null===u||_.isUndefined(i)||_.isUndefined(a)||(t=Ee(i*Math.pow(10,-u)/a)),_.isUndefined(o)||_.isUndefined(s)||_.isUndefined(t)||(_.isUndefined(c)&&(c=Ee((o?-Math.pow(2,s-1):0)*t)),_.isUndefined(l)&&(l=Ee((o?Math.pow(2,s-1)-1:Math.pow(2,s)-1)*t))),{base:{decimalPlaces:_.isNull(u)?void 0:u,step:t,min:c,max:l},custom:{decimalPlaces:_.isNull(u)?void 0:u,step:t,min:Math.max(c,e.min||c),max:Math.min(l,e.max||l)},mask:{min:0,max:Math.pow(2,s)},possiblePrecisionLoss:function(e,t){var n=53<e,r=!_.isUndefined(t)&&10<=function(e){return Math.floor(e)!==e?(_slicedToArray(e.toString().split("."),2)[1]||"").length:0}(t);return n||r}(s,t)}}function Ie(e){return _.head(_.reject(e,_.isUndefined))}function Ee(e){var t=Math.pow(10,10);return Math.round(e*t)/t}function De(e){return e.meta.type=void 0,e}function we(r){return r.meta.enumType?(r.enumValues={},_.forEach(r.meta.enumValues,function(e){var t=e.value,n=e.label;r.enumValues[t]=n})):r.enumValues=void 0,r}function Ae(e){return e.meta.showStatus||e.meta.updateStatus?(e.statusMapping=e.statusMapping||{},e.meta.showStatus&&(e.statusMapping.status="read"),e.meta.updateStatus&&(e.statusMapping.status="write")):e.statusMapping=void 0,e}function Oe(e){return e.meta.sendMeasurement?(e.measurementMapping=e.measurementMapping||{},e.measurementMapping.sendMeasurementTemplate=null):e.measurementMapping=void 0,e}function Ce(e){return e.meta.raiseAlarm?(e.alarmMapping=e.alarmMapping||{},e.alarmMapping.raiseAlarmTemplate=null):e.alarmMapping=void 0,e}function je(e){return e.meta.sendEvent?(e.eventMapping=e.eventMapping||{},e.eventMapping.eventTemplate=null):e.eventMapping=void 0,e}function Ue(e){return e.meta.sendManagedObjectUpdate?e.managedObjectMapping=e.managedObjectMapping||{}:e.managedObjectMapping=void 0,e}function Ve(e){return e.meta.dataType?e.dataType=e.meta.dataType.value:e.dataType=void 0,e}function xe(e){return e.meta.accessType?e.accessType=e.meta.accessType.value:e.accessType=void 0,e}function Be(e){return e.meta.valuesRange=void 0,e}function Ne(e){return[function(e){return _.get(e,"id")}(e),function(e){return Pe(e,["input","number","startBit"])}(e),function(e){return Pe(e,["input","number"])}(e),function(e){return Pe(e,["number"])}(e)]}function Pe(e,t){var n=_.map(t,_.propertyOf(e));if(_.every(n,_.negate(_.isUndefined)))return n.join(",")}function ke(e){return e.category||""}function Fe(e){return e.input?e.name?r.getString('Edit discrete input: "{{name}}"',e):l("New discrete input"):e.name?r.getString('Edit coil: "{{name}}"',e):l("New coil")}function $e(e,t,n){return{element:function(){return _.cloneDeep(function(e){if(e)return _objectSpread({},e,{meta:{original:_.cloneDeep(e)}});return}(e))},existingElements:function(){return _.cloneDeep(t)},existingCategories:function(){return _.cloneDeep(function(e){return _([].concat(_toConsumableArray(_.get(e,"c8y_Coils",[])),_toConsumableArray(_.get(e,"c8y_Registers",[])))).filter("category").map("category").uniq().map(function(e){return{name:e}}).value()}(n))},deviceType:function(){return _.cloneDeep(n)},fieldbusType:function(){return Ge(n)},features:function(){return Le(n)}}}function Le(e){return _.find(h,{fieldbusType:Ge(e)})||{}}function Ge(e){return e.fieldbusType||"modbus"}function We(e,t){var n=e.number,r=e.startBit,a=e.noBits,i=n*_.get(t,"noBits.base",_.get(t,"noBits.max"))+r;return{start:i,end:i+a-1}}function He(r){var a,i;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r,void 0,n=(Je()||{})[t],a=n&&_.clone(n._item)){e.next=8;break}return i="".concat(b,"/").concat(r,".json"),e.t0=s,e.next=6,regeneratorRuntime.awrap(o.get(i));case 6:return e.t1=e.sent,e.abrupt("return",e.t0.getResData.call(e.t0,e.t1));case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}var t,n},null,null,null,Promise)}function Je(){return _.get(window,"c8y.collections.devicetypes")}}e.$inject=["$q","$http","$injector","c8yBase","c8yTenant","c8yInventory","c8yAlarms","c8yIdentity","c8yModal","gettext","gettextCatalog"],angular.module("c8y.deviceDatabase4").factory("c8yDeviceDatabase",e)}();