"use strict";function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){e.$inject=["c8yDeviceTypeProtocolBaseProvider","gettext"];var n="c8yCanbusDevice";function e(e,i){t.$inject=["c8yDeviceDatabase","c8yDeviceControl","gettextCatalog","c8yDevices","c8yBase","c8yUser"];var c={label:i("CAN Bus"),fieldbusType:"canbus",serviceName:n};return e.getDeviceTypeProtocolProvider(c,t);function t(e,u,t,s,l,a){var n=_objectSpread({},c,{discreteOutputs:!1,discreteInputs:!1,holdingRegisters:{number:{label:i("Message ID"),useHex:!0,min:0,max:536870911},startBit:{max:63},noBits:{max:64},multiplier:{min:1,step:1},divisor:!0,decimalPlaces:!0,unit:!0,offset:{min:Number.MIN_SAFE_INTEGER||-(Math.pow(2,53)-1),max:Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,step:1},options:{signed:!0,enumType:!0},functionalities:{showStatus:!0,updateStatus:!0,sendMeasurement:!0,raiseAlarm:!0,sendEvent:!0}},inputRegisters:!1,options:{serverTime:!0},deviceFragments:["c8y_CanDevice"],deviceConfiguration:{fragment:"c8y_CanConfiguration",icon:"share-alt"}});return{registerFeaturesManifest:function(){e.registerFeaturesManifest(r().then(function(e){return e&&n}))},isAvailable:r,create:function(a,i){var c,o;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(d(a,i));case 2:return c=e.sent,e.t0=l,e.next=6,regeneratorRuntime.awrap(s.createConfirm(c));case 6:return e.t1=e.sent,o=e.t0.getResData.call(e.t0,e.t1),e.next=10,regeneratorRuntime.awrap(s.addChildDevice(a,o));case 10:return o.owner=a.owner,e.next=13,regeneratorRuntime.awrap(s.save(o));case 13:return e.abrupt("return",u.create((t=a,n=i.deviceType,r=o,{deviceId:t.id,description:'Added new child device to "'.concat(t.name,'" (ID: ').concat(t.id,")."),c8y_CanDevice:{id:r.id,name:r.name,type:"/inventory/managedObjects/".concat(n.id)}})));case 14:case"end":return e.stop()}var t,n,r},null,null,null,Promise)}};function r(){return e.isFeatureFieldbus4Available()}function d(t,n){var r;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(a.current());case 2:return r=e.sent,e.abrupt("return",{name:"".concat(t.name," - ").concat(n.deviceType.name),type:n.deviceType.name,c8y_CanDevice:{type:"/inventory/managedObjects/".concat(n.deviceType.id)},owner:r.id});case 4:case"end":return e.stop()}},null,null,null,Promise)}}}angular.module("c8y.canbus").provider(n,e)}();