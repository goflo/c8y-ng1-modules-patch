"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){function e(e,t,n,i,a,u){var r,s,o,l,m,c=this,d="elementForm",f={IS_REQUIRED:"required",IS_VALID_NAME:"valid-name",IS_VALID_NUMBER:"valid-number"};_.assign(c,{$onInit:function(){var e=c.resolve;s=e.element,o=e.existingElements,l=e.existingCategories,r=c.resolve.features[s.input?"discreteInputs":"discreteOutputs"],c.features=r,c.element=i.addDiscreteIOMeta(s),c.categories=l,function(){var e;_defineProperty(e={},f.IS_REQUIRED,u("This field is required.")),_defineProperty(e,f.IS_VALID_NAME,u("Name must be unique among coils and discrete inputs.")),_defineProperty(e,f.IS_VALID_NUMBER,s.input?u("Number must be unique among discrete inputs."):u("Number must be unique among coils.")),m=e}()},onUpdateStatusCheckboxClicked:function(){s.meta.updateStatus&&(s.meta.showStatus=!0)},alarmSeverities:a.severityList,invalid:function(e){return function(){var t=c[d].name,n=_.get(s,"meta"),e=_.isUndefined(t.$modelValue)||_.every(o,function(e){return e.name===_.get(n,"original.name")||e.name!==t.$modelValue});t.$setValidity(f.IS_VALID_NAME,e)}(),function(){var t=c[d].number,n=_.get(s,"meta"),e=_.isUndefined(t.$modelValue)||_.every(o,function(e){return e.input!==s.input||e.number===_.get(n,"original.number")||e.number!==t.$modelValue});t.$setValidity(f.IS_VALID_NUMBER,e)}(),n.invalid(c,d,e)},validationHints:function(e){return n.validationHints(e,m)},save:function(){c.close({$value:i.removeDiscreteIOMeta(s)})}}),e.$watch("vm.element.meta.showStatus",function(){if(s){var e=_.get(s,"meta",{}),t=(s.meta=e).showStatus,n=e.enumValues;t?n||_.assign(e,{enumType:!0,enumValues:_.cloneDeep(i.metaDefaults.discreteIO.enumValues)}):_.assign(e,{enumType:!1,enumValues:void 0})}})}e.$inject=["$scope","$q","c8yBase","c8yDeviceDatabase","c8yAlarms","gettext"],angular.module("c8y.deviceDatabase4").component("c8yConfigureDiscreteIOModal",{templateUrl:":::PLUGIN_PATH:::/modals/configure-discrete-io.html",bindings:{resolve:"<",close:"&",dismiss:"&"},controllerAs:"vm",controller:e})}();