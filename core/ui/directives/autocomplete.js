"use strict";angular.module("c8y.ui").directive("c8yAutocomplete",function(){return{restrict:"A",link:function(t,o,e){var n=e.c8yAutocomplete;o.attr("autocomplete",n),"off"===n&&(o.attr("readonly","readonly"),o.on("focusin",function t(){o.removeAttr("readonly"),o.off("focusin",t)}))}}});