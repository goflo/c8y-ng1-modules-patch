"use strict";!function(){function t(t,n,a,i,o){var e=a.find(".tabContainer"),l=a.find("ul"),s=a.find(".tabs-slider-left"),r=a.find(".tabs-slider-right"),c=_.debounce(d,300,{leading:!1,trailing:!0}),h=this;function f(){var t="page-tabs",n="page-tabs-vertical",i="page-tabs-horizontal",o=[t,i,n];h.tabs.length?(a.addClass("".concat(t," ").concat(h.horizontal?i:n)),a.removeClass(h.horizontal?n:i)):a.removeClass(o.join(" "))}function d(){var t=!1,n=!1;if(h.horizontal){var i=l[0].scrollWidth,o=e.width(),a=e.scrollLeft();t=!!a,n=o+a<i}t?s.show():s.hide(),n?r.show():r.hide()}_.assign(h,{tabs:o.routeTabs,$onChanges:f,navigateTo:function(t){t&&i.path(t)},showTabs:function(){return _.some(h.tabs,"show")}}),o.$on(o.EVENT_UPDATE,function(){(function(){var t=l.find(".active");if(h.horizontal&&t.length){var n=l[0].scrollWidth,i=e.width(),o=t.position().left;if(i<o){var a=_.min([o,n-i]);e.scrollLeft(a)}}})(),d(),function(){var t=_.find(h.tabs,"active");h.selectedTabPath=_.get(t,"path")}()}),s.on("click",function(){var t=e.width(),n=e.scrollLeft(),i=_.max([0,n-t]);e.animate({scrollLeft:i},300)}),r.on("click",function(){var t=l[0].scrollWidth,n=e.width(),i=e.scrollLeft(),o=_.min([t-n,i+n]);e.animate({scrollLeft:o},300)}),e.on("scroll",c),$(n).on("resize",c),t.$watch(function(){return o.routeTabs.length},f)}t.$inject=["$scope","$window","$element","$location","c8yTabs"],angular.module("c8y.ui").component("c8yUiTabs",{templateUrl:":::PLUGIN_PATH:::/ui/navigation/tabs.html",controllerAs:"vm",controller:t,bindings:{horizontal:"<"}})}();