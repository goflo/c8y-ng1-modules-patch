"use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}!function(){function t(r,a,l,i,s,t,o,u,c,f,d){var h="c8y_DataPoint",v="_id",m=["target","color","min","max","fragment","series","yellowRangeMin","yellowRangeMax","redRangeMin","redRangeMax","unit","label"],p=_.transform(m,function(t,e){t[e]=void 0},{});return{listForObject:g,listPossible:b,listPossibleFast:function(t){return r.all({deviceDataPoints:g(t),kpiData:r.resolve([]),device:t.name?r.resolve(t):l.detail(t).then(s.getResData)}).then(n)},listLocalWithDefaults:function(t,e){var u=(e||{}).id,c=function(){return k(2).then(function(e){return function(t){return _.take(t,e)}}(5)).then(P)};return w(t).then(function(t){if(t.length)return t;return u?(e=u,n=5,r=[],i=function(){return a.length?b(a.shift()).then(o):r},o=function(t){return _.forEach(t,function(t){return r.push(t),!(r.length>=n)}),r.length>=n?r:a?i():l.detail(e).then(s.getResData).then(function(e){return a=[],_.forEach(["childAssets","childDevices"],function(t){_.forEach(e[t].references,function(t){a.push(t.managedObject.id)})}),i()})},b(e).then(o).then(P)):c();var e,n,r,a,i,o})},listLocal:w,listForFirstDevices:k,saveLocal:function(t,e){var n=_.map(t,function(t){var e=_.cloneDeep(t);return e});return window.localStorage.setItem(S(e),JSON.stringify(n)),r.when(t)},save:e,remove:_.partialRight(e,!0),getSavedFilters:function(t){var e=window.localStorage.getItem(S("_savedfilter_".concat(t||"")));e=e?JSON.parse(e):T(),_.keys(e).length||(e=T());e.dateFrom&&(e.dateFrom=moment(e.dateFrom).toDate());e.dateTo&&(e.dateTo=moment(e.dateTo).toDate());return r.when(e)},getDefaultFilters:T,setSavedFilters:function(t,e){return window.localStorage.setItem(S("_savedfilter_".concat(e||"")),JSON.stringify(t)),r.when(t)},equals:function(t,e){return angular.equals(D(t),D(e))},addUI:function(t,e){var n=_.cloneDeep(t),r={templateUrl:":::PLUGIN_PATH:::/views/dataPointAdd.html",controller:"c8yDataPointAddCtrl",size:"sm",resolve:{config:function(){return e||{}},addedDataPoints:function(){return n}}};return a.open(r).result},chooseKpiWithUI:function(t){var e=_.cloneDeep(t),n={templateUrl:":::PLUGIN_PATH:::/views/dataPointAdd.html",controller:"c8yDataPointAddCtrl",size:"sm",resolve:{config:function(){return{kpisOnly:!0,maxSelectCount:1}},addedDataPoints:_.constant(e)}};return a.open(n).result},listAllKpi:i.list,getCompatibleKpi:function(t,n){return _.filter(t,function(t){var e=t.c8y_Kpi;return e.fragment===n.fragment&&e.series===n.series})},updateDataPointWithKpi:function(t,e){var n=_.defaults(e.c8y_Kpi,p);return t._kpiId=e.id,_.assign(t,n),t},saveDataPointToLibrary:function(t,e){var n={},r={};t._kpiId&&e&&(n.id=t._kpiId);return _.assign(r,_.defaults(_.pick(t,m),p)),n.c8y_Kpi=r,i.save(n)},setUnitFromLastMeasurement:function(t){return r.all(_.map(t,L))}};function g(t){return l.detail(t).then(s.getResData).then(y)}function y(t){return t[h]||{}}function D(t){var n=/^__/;return _.omitBy(t,function(t,e){return n.test(e)})}function e(t,e,n){var r={id:s.getId(t)};return s.createLocalId(e,v),function(t,e,n){return g(t).then(function(t){return n?delete t[e[v]]:t[e[v]]=D(e),t})}(t,e,n).then(function(t){return r[h]=t,r}).then(function(t){return c.mustHaveAdminMOs([t]).then(_.constant(t))}).then(l.save,_.constant(t)).then(s.getResData).then(y)}function b(t){return r.all({deviceDataPoints:g(t),kpiData:i.listKpiForDevice(t),device:t.name?r.resolve(t):l.detail(t).then(s.getResData)}).then(n)}function n(t){var e=t.deviceDataPoints,n=t.kpiData,r=t.device,a=n.matchKpi,i=n.nonKpiSeries,o=[];return _.forEach(e,function(t){A(o,t)||o.push(function(t,e){var n=t.matchKpi,r=e,a=r._kpiId,i=a?_.find(n,{id:a}):null;i&&(r=_.assign(_.cloneDeep(i.c8y_Kpi),r));return r}(n,t))}),_.forEach(a,function(t){var e=function(t){var e=_.cloneDeep(t.c8y_Kpi);return e._kpiId=t.id,e}(t);A(o,e)||o.push(e)}),_.forEach(i,function(t){A(o,t)||o.push(function(t){var e=_.cloneDeep(t);return e.label="".concat(t.fragment," => ").concat(t.series),e.color=d.generateColor(),e}(t))}),_.forEach(o,_.partial(I,r)),o}function A(t,e){var n=e.fragment,r=e.series;return _.some(t,function(t){return t.fragment===n&&t.series===r})}function I(t,e){return e.__target={id:t.id,name:t.name},e}function S(t){return"datapoints".concat(t||"")}function w(t){var e=window.localStorage.getItem(S(t)),n=e?JSON.parse(e):[];return r.when(n)}function P(t){var e=_slicedToArray(t,1)[0];return e&&(e.__active=!0),t}function T(){var t=o.durations,e=o._defaultDuration,n=t[e];return{interval:e,dateTo:new Date,dateFrom:moment().subtract(n).toDate(),realtime:!0,aggregation:u.calculate(n)}}function k(n){return t.list({pageSize:10*n}).then(K).then(function(t){var e=[];return _.forEach(t,function(t){return 0<t.length&&e.push(t),!(e.length>=n)}),_.flattenDeep(e)})}function K(t){var e=_.map(t,b);return r.all(e)}function L(e){var n=e.fragment,r=e.series,t=_.get(e,"__target.id"),a={fragment:n,series:r,device:t};return f.latest(a).then(function(t){return e.unit=_.get(t,[n,r,"unit"],e.unit),e})}}t.$inject=["$q","$uibModal","c8yInventory","c8yKpi","c8yBase","c8yDevices","INTERVAL_CONSTANTS","c8yAggregationSvc","c8yPermissions","c8yMeasurements","c8yUiUtil"],angular.module("c8y.cockpit.dataPointExplorer").factory("c8yDataPointSvc",t)}();