"use strict";function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(e){_defineProperty(t,e,r[e])})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(){function e(r,o,n,c,e){var t,a=c.configKey,i=_.defaults({escapeFormulas:!0},c.defaultConfig);r.csvExporter={},t=n.getLocal(a),r.csvExporter.config=_.defaults(t,i),r.title=e("Export as CSV"),r.download=function(){var e=r.csvExporter.config,t=_objectSpread({},e,{header:r.headers()});c.getCsv(r.data(),t).then(function(e){var t=new Blob([e],{type:"text/csv"});o.saveAs(t,r.fileName)}).then(function(){return function(e){n.setLocal(a,e),r.$close()}(e)})},r.dismiss=function(){r.$dismiss()},r.charsets=c.charsets,r.fieldSeparators=c.fieldSeparators,r.decimalSeparators=c.decimalSeparators}e.$inject=["$scope","$window","c8yUtil","csvExporterSvc","gettext"],angular.module("c8y.ui").controller("csvExporterCtrl",e)}();