"use strict";function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(e){_defineProperty(n,e,t[e])})}return n}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}!function(){e.$inject=["c8yDeviceTypeProtocolBaseProvider","c8yDeviceProtocolUiProvider","c8yViewsProvider","gettext"];var i="c8yCanopenDevice";function e(e,n,t,b){a.$inject=["c8yDeviceDatabase","c8yDeviceControl","c8yModbusDevice","gettextCatalog","c8yInventory","c8yDevices","c8yBase","c8yUser","$q"];var y={label:b("CANopen"),fieldbusType:"canopen",serviceName:i};return e.getDeviceTypeProtocolProvider(y,a);function a(e,v,m,n,t,c,o,a,p){var i=o.createEnum(_.flatten([{name:"BOOLEAN",label:b("Boolean"),value:"boolean",edsValue:1,noBits:1},{name:"SIGNED_8",label:b("Signed (8-bits)"),value:"signed8",edsValue:2,noBits:8,signed:!0},{name:"SIGNED_16",label:b("Signed (16-bits)"),value:"signed16",edsValue:3,noBits:16,signed:!0},{name:"SIGNED_24",label:b("Signed (24-bits)"),value:"signed24",edsValue:16,noBits:24,signed:!0},{name:"SIGNED_32",label:b("Signed (32-bits)"),value:"signed32",edsValue:4,noBits:32,signed:!0},{name:"SIGNED_40",label:b("Signed (40-bits)"),value:"signed40",edsValue:18,noBits:40,signed:!0},{name:"SIGNED_48",label:b("Signed (48-bits)"),value:"signed48",edsValue:19,noBits:48,signed:!0},{name:"SIGNED_56",label:b("Signed (56-bits)"),value:"signed56",edsValue:20,noBits:56,signed:!0},{name:"SIGNED_64",label:b("Signed (64-bits)"),value:"signed64",edsValue:21,noBits:64,signed:!0},{name:"UNSIGNED_8",label:b("Unsigned (8-bits)"),value:"unsigned8",edsValue:5,noBits:8,signed:!1},{name:"UNSIGNED_16",label:b("Unsigned (16-bits)"),value:"unsigned16",edsValue:6,noBits:16,signed:!1},{name:"UNSIGNED_24",label:b("Unsigned (24-bits)"),value:"unsigned24",edsValue:22,noBits:24,signed:!1},{name:"UNSIGNED_32",label:b("Unsigned (32-bits)"),value:"unsigned32",edsValue:7,noBits:32,signed:!1},{name:"UNSIGNED_40",label:b("Unsigned (40-bits)"),value:"unsigned40",edsValue:24,noBits:40,signed:!1},{name:"UNSIGNED_48",label:b("Unsigned (48-bits)"),value:"unsigned48",edsValue:25,noBits:48,signed:!1},{name:"UNSIGNED_56",label:b("Unsigned (56-bits)"),value:"unsigned56",edsValue:26,noBits:56,signed:!1},{name:"UNSIGNED_64",label:b("Unsigned (64-bits)"),value:"unsigned64",edsValue:27,noBits:64,signed:!1},{name:"REAL_32",label:b("Real (32-bits)"),value:"real32",edsValue:8,noBits:32,decimalPlaces:null,baseValuesRange:{min:-3.4*Math.pow(10,38),max:3.4*Math.pow(10,38)}},{name:"REAL_64",label:b("Real (64-bits)"),value:"real64",edsValue:17,noBits:64,decimalPlaces:null,baseValuesRange:{min:-Number.MAX_VALUE,max:Number.MAX_VALUE}}])),s=o.createEnum([{name:"READ_ONLY",label:b("Read-only"),value:"ro"},{name:"WRITE_ONLY",label:b("Write-only"),value:"wo"},{name:"READ_WRITE",label:b("Read-write"),value:"rw"},{name:"READ_WRITE_ON_PROCESS_INPUT",label:b("Read-write on process input"),value:"rwr"},{name:"READ_WRITE_ON_PROCESS_OUTPUT",label:b("Read-write on process output"),value:"rww"},{name:"CONSTANT",label:b("Constant"),value:"const"}]),r=_objectSpread({},y,{type:"c8y_CANopenDeviceType",deviceType:!0,discreteOutputs:!1,discreteInputs:!1,holdingRegisters:{sectionTitle:b("Variables"),noRegistersDefinedMessage:b("No variables defined."),elementTypeLabel:b("Variable"),newRegisterModalTitle:b("New variable"),editRegisterModalTitle:b('Edit variable: "{{name}}"'),addRegisterButtonLabel:b("Add variable"),unit:!0,validation:{invalidName:b("Name must be unique among variables."),invalidMeasurement:b("Selected measurement type and series are already used by another variable.")},index:{min:0,max:Math.pow(2,16)-1},subIndex:{min:0,max:Math.pow(2,8)-1},dataType:{choices:i},accessType:{choices:s},functionalities:{showStatus:{showIf:function(e){return _.includes([s.READ_ONLY,s.READ_WRITE,s.READ_WRITE_ON_PROCESS_INPUT,s.READ_WRITE_ON_PROCESS_OUTPUT,s.CONSTANT],_.get(e.meta,"accessType"))}},updateStatus:{showIf:function(e){return _.includes([s.READ_WRITE,s.READ_WRITE_ON_PROCESS_INPUT,s.READ_WRITE_ON_PROCESS_OUTPUT,s.WRITE_ONLY],_.get(e.meta,"accessType"))}},sendMeasurement:{showIf:d},raiseAlarm:{showIf:d,mask:!0},sendEvent:{showIf:d}}},inputRegisters:!1,options:{serverTime:!0},deviceFragments:["c8y_CANopenDevice"],deviceConfiguration:{fragment:"c8y_CANopenConfiguration",icon:"cloud-network"},getRegisterSource:function(e){return{key:"c8y_CANopenSource",value:{index:e.index,subIndex:e.subIndex}}},customizeSmartRestTemplates:function(e){return g(e.responseTemplates,{msgId:201,condition:"$.c8y_SetRegister",pattern:["$.id","$.c8y_SetRegister.nodeId","$.c8y_SetRegister.index","$.c8y_SetRegister.subIndex","$.c8y_SetRegister.dataType","$.c8y_SetRegister.value"]}),g(e.responseTemplates,{msgId:202,condition:"$.c8y_CANopenAddDevice",pattern:["$.id","$.deviceId","$.c8y_CANopenAddDevice.id","$.c8y_CANopenAddDevice.nodeId","$.c8y_CANopenAddDevice.type"]}),g(e.responseTemplates,{msgId:204,condition:"$.c8y_CANopenRemoveDevice",pattern:["$.id","$.deviceId","$.c8y_CANopenDevice.nodeId"]}),e}});function d(e){return _.includes([s.READ_ONLY,s.READ_WRITE,s.READ_WRITE_ON_PROCESS_INPUT,s.READ_WRITE_ON_PROCESS_OUTPUT],_.get(e.meta,"accessType"))}return{registerFeaturesManifest:function(){e.registerFeaturesManifest(l().then(function(e){return e&&r}))},isAvailable:l,create:function(i,s){var r,d;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(u(i,s));case 2:return r=e.sent,e.t0=o,e.next=6,regeneratorRuntime.awrap(c.createConfirm(r));case 6:return e.t1=e.sent,d=e.t0.getResData.call(e.t0,e.t1),e.next=10,regeneratorRuntime.awrap(c.addChildDevice(i,d));case 10:return d.owner=i.owner,e.next=13,regeneratorRuntime.awrap(c.save(d));case 13:return e.abrupt("return",v.create((n=i,t=s.deviceType,a=d,{deviceId:n.id,description:'Added child device "'.concat(a.name,'" (ID: ').concat(a.id,")."),c8y_CANopenAddDevice:{id:a.id,name:a.name,type:"/inventory/managedObjects/".concat(t.id),nodeId:a.c8y_CANopenDevice.nodeId}})));case 14:case"end":return e.stop()}var n,t,a},null,null,null,Promise)},updateElement:function(d,c,o){var l,u,g;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:if(m.canUpdateElement(d,c)){e.next=2;break}return e.abrupt("return",p.reject());case 2:return void 0,t=(n={device:d,register:c,valueMap:o}).device,a=n.register,i=n.valueMap,s=i.label||i.value,r=!i.label&&a.unit?" ".concat(a.unit):"",l={deviceId:t.id,description:'Change value of "'.concat(a.name,'" to ').concat(s).concat(r,"."),c8y_SetRegister:{nodeId:t.c8y_CANopenDevice.nodeId,index:a.index,subIndex:a.subIndex,dataType:a.dataType,value:i.value}},c.changePending=!0,u=m.getAlertMessagesFns(c,o),e.next=7,regeneratorRuntime.awrap(m.sendOperationAndGetResult(l,u));case 7:return(g=e.sent).status===v.status.SUCCESSFUL?(_.set(d,["c8y_RegisterStatus",c.name],o.value),c.changePending=!1):g.status===v.status.FAILED&&(c.changePending=!1),e.abrupt("return",g);case 10:case"end":return e.stop()}var n,t,a,i,s,r},null,null,null,Promise)},onRemove:function(e,n){var t=n.id,a=n.name,i=n.nodeId;return v.create({deviceId:e.id,description:'Removed child device "'.concat(a,'" (ID: ').concat(t,")."),c8y_CANopenRemoveDevice:{id:t,name:a,nodeId:i}})}};function l(){return e.isFeatureFieldbus4Available()}function u(e,n){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(a.current());case 2:return t=e.sent,e.abrupt("return",{name:n.name,type:n.deviceType.name,c8y_CANopenDevice:{type:"/inventory/managedObjects/".concat(n.deviceType.id),nodeId:n.nodeId},c8y_SupportedOperations:["c8y_Command"],owner:t.id});case 4:case"end":return e.stop()}},null,null,null,Promise)}function g(e,n){var t=_.findIndex(e,{msgId:n.msgId});-1<t?e[t]=n:e.push(n)}}}angular.module("c8y.canopen").provider(i,e)}();