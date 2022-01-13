"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}angular.module("c8y.core").factory("c8yCounter",["$q","c8yBase","c8yRealtime",function(w,A,b){function i(r){var t=_.cloneDeep(r),n=this;if(this.properties=null,this.filterFn=null,this.dependencies=null,_.isArray(t)){if(!function(r){var t=r.length,e=_.last(r);return _.isArray(e)?(n.dependencies=e,n.filterFn=r[t-2],n.properties=r.slice(0,t-2),_.isFunction(n.filterFn)&&_.every(n.properties,String)):!!_.isFunction(e)&&(n.dependencies=_.initial(r),n.filterFn=e,n.properties=n.dependencies,_.every(n.properties,String))}(t))throw new Error("property map is not valid")}else{if(!_.isString(t))throw new Error("parameter is invalid");!function(e){n.properties=[e],n.filterFn=function(r,t){return _.isEqual(r,t[e])},n.dependencies=[e]}(t)}}function E(r,t){var e=this;this.pickList=null;var n=r;this.queryParams=n,this.propertyMapList=t&&_.map(t,function(r){return new i(r)})||[],n=_.pickBy(n,function(r){return void 0!==r}),_.forEach(_.keys(n),function(t){var r=_.some(e.propertyMapList,function(r){return _.some(r.properties,function(r){return r===t})});r||e.propertyMapList.push(new i(t))}),function(){var r=_.reduce(e.propertyMapList,function(t,r){return _.forEach(r.dependencies,function(r){t[r]=!0}),t},{});r.id=!0,e.pickList=_.keys(r)}()}return i.prototype.matches=function(r,t){var e=_.cloneDeep(r);_.forEach(this.properties,function(r){e[r]=e[r]||void 0});var n=_.values(_.pick(e,this.properties));return n.push(t),this.filterFn.apply(this,_toConsumableArray(n))},E.prototype.matches=function(t){var e=this;return _.every(this.propertyMapList,function(r){return r.matches(e.queryParams,t)})},{Counter:function(t,e){if(!_.isFunction(t))throw new Error("list function must be provided");var n,i,o,a,s=this,u=!1,c=!1,f={pageSize:1},r=!1,p=!1,l={CREATE:function(r){c?v(r)&&n.unshift(m(r)):i+=1},UPDATE:function(r){if(c){var t=_.findIndex(n,{id:r.id});-1===t&&v(r)?n.unshift(m(r)):-1===t||v(r)||n.splice(t,1)}},DELETE:function(r){if(c){var t=_.findIndex(n,{id:r.id});-1!==t&&n.splice(t,1)}else i-=1}};function y(){if(!e)return w.resolve();var r=b.realtimeActions();return _.forEach(r,function(r){b.addListener(s.__realtimeId,e,r,d)}),w.when(b.start(s.__realtimeId,e))}function d(r,t){if(!u){var e=s.count;l[r.name||r](t),h();var n=s.count;o&&n!==e&&o(n,e)}}function h(){s.count=n&&n.length||i||0}function m(r){return _.pick(r,a.pickList)}function v(r){return a.matches(r)}A.createLocalId(this,"__realtimeId"),this.start=function(){if(r)throw new Error("Cannot restart a counter instance, please create a new instance");return r=!0,this.refresh().then(y)},this.stop=function(){if(!r)throw new Error("Cannot stop counter instance without starting it first");if(p)throw new Error("Cannot stop an already stopped counter instance");p=!0,e&&b.removeSubscriber(s.__realtimeId,e)},this.onNotification=function(r){o=r},this.refresh=function(){u=!0;var r=c?a.queryParams:f;return w.when(t(r)).then(function(r){c?n=_(r).filter(v).map(m).value():i=r.statistics.totalPages,h(),u=!1})},this.filter=function(r,t){if(r||t){if(c)throw new Error("filter can be set only once");c=!0,a=new E(r,t)}}},defaultPropertyMaps:{date:["dateFrom","dateTo",function(r,t,e){var n=e&&(e.date||e.time);return!(!n||r&&moment(r).isAfter(n)||t&&moment(t).isBefore(n))},["date","time"]],source:["source",function(r,t){return(t&&t.source&&t.source.id)===r},["source"]]}}}]);