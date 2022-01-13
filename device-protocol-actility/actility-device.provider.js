"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){_defineProperty(t,e,r[e])})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(){e.$inject=["c8yDeviceTypeProtocolBaseProvider","gettext"];var r="c8yActilityDevice";function e(e,u){t.$inject=["$q","c8yDeviceDatabase","c8yTenant"];var l={label:u("LoRa"),fieldbusType:"actility",serviceName:r};return e.getDeviceTypeProtocolProvider(l,t);function t(e,t,r){var n={name:"actility"},a={name:"loriot-agent"},i=[t.MessageIdSources.FPORT,t.MessageIdSources.PAYLOAD],o=_objectSpread({},l,{type:"c8y_ActilityDeviceType",noNewProtocolInstances:!0,configuration:{messageIdConfiguration:i},discreteOutputs:!1,discreteInputs:!1,holdingRegisters:{sectionTitle:u("Values"),noRegistersDefinedMessage:u("No values defined."),newRegisterModalTitle:u("New value"),editRegisterModalTitle:u('Edit value: "{{name}}"'),addRegisterButtonLabel:u("Add value"),validation:{invalidName:u("Name must be unique among values."),invalidMeasurement:u("Selected measurement type and series are already used by another value in the same message type.")},messageTypeId:{label:u("Message type ID")},startBit:!0,noBits:!0,multiplier:!0,offset:!0,decimalPlaces:!1,options:{signed:!0,bcd:!0,littleEndian:!0},functionalities:{showStatus:!1,updateStatus:!1,sendMeasurement:!0,raiseAlarm:{alarmStatus:!0},sendEvent:{fragmentType:!0,innerType:!0},sendManagedObjectUpdate:!0},unit:{requiredForSendMeasurement:!0}},inputRegisters:!1,options:!1});return{registerFeaturesManifest:function(){t.registerFeaturesManifest(s().then(function(e){return e&&o}))},isSubscribed:s};function s(){return e.all([r.isSubscribed(n),r.isSubscribed(a)]).then(function(e){var t=_slicedToArray(e,2),r=t[0],n=t[1];return r||n})}}}angular.module("c8y.actility").provider(r,e)}();