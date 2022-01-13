"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(){function e(e,n,t,r,i){var s=this;_.assign(s,{$onInit:function(){var e=_.reverse(_.cloneDeep(r.severityList));s.severities=_.map(e,function(e){return new o(e)}),i.getConnector(s.connectorId).then(function(e){s.connector=e}),t.list({type:"c8y_DataBroker"}).then(c).then(a)},realtime:!0,icon:r.icon,refresh:function(){e.$broadcast("alarmListRefresh")},isRefreshing:function(){return _.some(s.severities,"refreshing")}});var o=function(){function t(e){_classCallCheck(this,t),this.pActive=new WeakMap,this.pFilters=new WeakMap,this.name=e,this.active=!1,this.filters={}}return _createClass(t,[{key:"toggleActive",value:function(){this.active=!this.active}},{key:"active",get:function(){return this.pActive.get(this)},set:function(e){this.pActive.set(this,e)}},{key:"filters",get:function(){return this.pFilters.get(this)},set:function(e){this.pFilters.set(this,e)}}]),t}();function c(e){return _.map(e,function(e){return e.id})}function a(t){_.each(s.severities,function(e){e.filters={severity:e.name,sources:t,displayFilter:function(e){return _.isUndefined(e.connectorId)||e.connectorId===n.connectorId},resolved:!1},e.active=!0}),_.set(s,"options.sources",t)}}e.$inject=["$scope","$routeParams","c8yInventory","c8yAlarms","dataBrokerConnectorsSvc"],angular.module("c8y.dataBroker").component("c8yDataBrokerConnectorAlarms",{templateUrl:":::PLUGIN_PATH:::/connectorsAlarms/connectorAlarms.html",controllerAs:"vm",controller:e,bindings:{connectorId:"<id"}})}();