"use strict";!function(){function e(a){return{restrict:"EA",require:"ngModel",templateUrl:":::PLUGIN_PATH:::/ui/views/dateTimePicker.html",replace:!0,scope:{required:"=?ngRequired",disabled:"=?ngDisabled",inputsSize:"@?",placeholder:"@",minDate:"=?",maxDate:"=?",showWeeks:"=?",showSeconds:"=?",showSpinners:"=?",withMilliseconds:"=?",appendToBody:"<?",isOpen:"=?"},link:function(o,e,t,s){function n(i,a){return function(e){var t=o[i],n=!0;return t&&(n=moment(t)[a](e)),n}}s.$parsers.push(function(e){var t;o.required||(t=null);if(e.date&&e.time){var n=moment(e.date),i=moment(e.time);n.set({hour:i.hour(),minute:i.minute(),second:i.second(),millisecond:i.millisecond()}),t=o.withMilliseconds?n.format(a.dateFullFormatWithMs):n.format(a.dateFullFormat)}return t}),s.$formatters.push(function(e){return{date:e&&new Date(e),time:e&&new Date(e)}}),s.$validators.minDate=n("minDate","isBefore"),s.$validators.maxDate=n("maxDate","isAfter"),s.$render=function(){_.assign(o,{value:s.$viewValue})},o.ngModelCtrl=s,o.$watch("isOpen",function(){o.isOpen&&o.appendToBody&&$("[uib-datepicker-popup-wrap]").on("click",function(e){return e.stopPropagation()})}),o.$watch("value",function(e,t){if(i=e,a=t,!i.time&&i.date&&!a.date){var n=new Date;n.setHours(0,0,0,0),e.time=n,o.value.time=e.time}var i,a;s.$setViewValue(_.cloneDeep(e))},!0),o.onTimeManualChange=function(e){var t=s.$viewValue;(t.time=e)&&(o.showSeconds||e.setSeconds(0),e.setMilliseconds(0));s.$setViewValue(_.cloneDeep(t))}},controller:t}}function t(e,t){var n={},i={};e.datePickerOptions=n,e.timePickerOptions=i,e.getInputSizeClass=function(){return"input-".concat(e.inputsSize||"default")},e.$watchGroup(["minDate","maxDate","showWeeks"],function(){_.assign(n,_.defaults({minDate:e.minDate&&new Date(e.minDate),maxDate:e.maxDate&&new Date(e.maxDate),showWeeks:e.showWeeks},{showWeeks:!0})),e.ngModelCtrl&&e.ngModelCtrl.$validate()}),e.$watchGroup(["showSpinners","showSeconds"],function(){_.assign(i,_.defaults({showSpinners:e.showSpinners,showSeconds:e.showSeconds},{showSpinners:!1,showSeconds:!1})),i.show=!1,t(function(){i.show=!0})})}t.$inject=["$scope","$timeout"],e.$inject=["c8yBase"],angular.module("c8y.ui").directive("c8yDateTimePicker",e)}();