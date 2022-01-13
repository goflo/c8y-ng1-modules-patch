"use strict";!function(){function n(n,t,e,o,r,c,a,i){var u,s=this;_.assign(s,{$onInit:function(){n.all(_.transform(r.APIS.values(),function(n,e){var t="".concat(e.name,"S"),o=_.get(c.ENTITIES[t],"staticSchemaPath");o&&(n[e.value]=c.another(o).list())},{})).then(function(n){u=n})},$onChanges:function(n){n.inputDuplicateId&&s.inputDuplicateId?function(n){r.getConnectorDuplicate(n).then(r.convertToViewModel).then(function(n){s.connector=n})}(s.inputDuplicateId):n.inputId&&s.inputId?function(n){"new"===n?(s.connector=r.getConnectorStub(),e.find("#connectorName").eq(0).focus()):r.getConnector(n).then(r.convertToViewModel).then(function(n){s.connector=n})}(s.inputId):n.inputConnector&&s.inputConnector&&function(n){s.connector=r.convertToViewModel(n)}(s.inputConnector)},addFilter:function(){s.connector.filters.push({isOpen:!0,selectedGroupOrDevice:null,apis:{alarm:!0,event:!0,measurement:!0,managedObject:!0,operation:!0},fragmentsToFilter:[{fragment:""}],fragmentsToCopy:[{fragment:""}],copyAllFragments:!1,typeFilter:""}),s.connectorForm.$setDirty()},removeFilter:function(n){_.remove(s.connector.filters,n),s.connectorForm.$setDirty()},addFragment:function(n,e){n[e].push({fragment:""}),s.connectorForm.$setDirty()},removeFragment:function(n,e,t){1===n[e].length?_.set(n[e][0],"fragment",""):_.remove(n[e],t);s.connectorForm.$setDirty()},getSuggestedFragments:function(n){return _(n.apis).map(function(n,e){return n?_.get(u,e,[]):[]}).flatten().reject("computed").map(function(n){return n.keyPath.join(".")}).uniq().orderBy([function(n){return n.toLowerCase()}],["asc"]).value()},saveName:function(n){var e;e=t.onSaveName?s.onSaveName({connector:s.connector,name:n}):function(n,e){return r.updateConnectorName(n,e).then(function(){o.hasId(n)&&a.success(i("Connector name updated."))})}(s.connector,n);return e},canSave:function(){return s.connectorForm.$dirty&&s.connectorForm.$valid&&_.get(s,"connector.filters")&&1<=s.connector.filters.length&&_.every(s.connector.filters,function(n){return _.some(n.apis)})},save:function(){var n,e=r.convertToBackendModel(s.connector);n=t.onSave?s.onSave({connector:e,connectorForm:s.connectorForm}):function(n){return r.saveConnector(n).then(r.navigateToDetails).then(function(){a.success(i("Connector saved.")),s.connectorForm.$setPristine()})}(e);return n},remove:function(){var n,e=r.convertToBackendModel(s.connector);n=t.onRemove?s.onRemove({connector:e}):function(n){return r.deleteConnector(n.id).then(r.navigateToList).then(function(){a.success(i("Connector deleted."))})}(e);return n},cancel:function(){var n;t.onCancel?n=s.onCancel():r.navigateToList();return n},getFilterFragmentsSummary:r.getFilterFragmentsSummary,apis:r.APIS.values()})}n.$inject=["$q","$attrs","$element","c8yBase","dataBrokerConnectorsSvc","c8yPropertiesLibrary","c8yAlert","gettext"],angular.module("c8y.dataBroker").component("c8yDataBrokerConnectorEditor",{bindings:{inputDuplicateId:"<duplicateId",inputId:"<id",inputConnector:"<connector",onSave:"&",onSaveName:"&",onRemove:"&",onCancel:"&"},templateUrl:":::PLUGIN_PATH:::/connectors/connectorEditor.html",controller:n,controllerAs:"vm"})}();