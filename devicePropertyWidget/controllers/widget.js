"use strict";!function(){function e(i,c,e){function n(e){i.device=e,o()}function t(){e.detail(function(){var e=c.deviceId;i.child.config&&i.child.config.device&&i.child.config.device.id&&(e=i.child.config.device.id);return e}(),i).then(n)}function o(){var c=_.cloneDeep(i.child.config.options)||[];_.forEach(c,function(e){if(e.fields)e.object=e.fields.reduce(function(e,c){return e[c]=i.$eval("device.".concat(c)),e},{});else try{e.object=i.$eval("device.".concat(e.keyPath))}catch(e){}c=function(e,c){return _.isUndefined(c.object)&&_.remove(e,function(e){return e===c}),e}(c,e)}),i.options=c,i.singleOption=1===c.length}i.$watch("child.config.device.id",t),i.$watch("child.config.options",o),i.$watch("device",o,!0),t()}e.$inject=["$scope","$routeParams","c8yMoRealTimeDetails"],angular.module("c8y.parts.devicePropertyWidget").controller("devicePropertyWidgetCtrl",e)}();