"use strict";function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(e){_defineProperty(n,e,t[e])})}return n}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}!function(){function e(e,n){var t=this;function r(e){return _.fromPairs(_.map(e,function(e){return[e.key,e.value]}))}e.$watch("vm.configuration",function(){t.onChange({ssoConfigurationPartial:_defineProperty({},t.requestType,_objectSpread({},_.pick(t.configuration,["body","url","method","operation"]),{headers:r(t.configuration.headers),requestParams:r(t.configuration.requestParams)}))})},!0),_.assign(t,{$onInit:function(){t.required=!1!==t.required},$onChanges:function(e){if(e.inputConfiguration){var n=_.cloneDeep(e.inputConfiguration.currentValue)||{};n.headers=_.map(n.headers,function(e,n){return{key:n,value:e}}),n.requestParams=_.map(n.requestParams,function(e,n){return{key:n,value:e}}),(_.isEmpty(t.configuration)||0!==_.difference(n,t.configuration).length)&&(t.configuration=n)}},addCustomValue:function(e){e.push({key:"",value:""})},removeCustomValue:function(e,n){_.pull(e,n),t.requestForm.$setDirty()},operationTypes:n.operationTypes})}e.$inject=["$scope","c8yLoginOptions"],angular.module("c8y.authenticationConfiguration").component("c8ySsoRequestConfiguration",{bindings:{requestName:"<",requestType:"<",inputConfiguration:"<configuration",onChange:"&",required:"<?"},templateUrl:":::PLUGIN_PATH:::/sso-configuration/request-configuration.html",controller:e,controllerAs:"vm"})}();