"use strict";!function(){function e(o){e.$inject=["$scope","$element"];var i=[250,500,1e3];function a(e){if(e.paging&&(e.paging.next||e.paging.blind))return o("More data may be available.")}return{restrict:"EA",replace:!0,templateUrl:":::PLUGIN_PATH:::/ui/views/loadmore.html",link:function(t,e,o){t.hidePageSize=!0,t.getLoadMoreTooltip=_.partial(a,t);var n=!_.isUndefined(o.changePageSize);!t.hidePageSize&&n&&(t._pageSizes=_.cloneDeep(i),t.$on("paging.statistics.pageSize",function(e){var o=parseInt(e,10),n=_.cloneDeep(i);o&&(t._pageSizes=_.without(n,o))}))},controller:e};function e(n,t){var i;function a(){var e=jQuery(t),o=_.head(e);if(!i){var n=o.querySelector(".classForObserver");(i=new IntersectionObserver(r,{root:null,rootMargin:"0px 0px 0px 0px",threshold:1})).observe(n)}}function r(e){n.paging&&n.paging.next&&e.forEach(function(e){e.isIntersecting&&n.loadNext()})}n.$watch("paging",function(e){if(e&&e.next){var o=e.next;o===_.noop?n.shouldShowLoadMore=!0:e.noPreFetch?(n.shouldShowLoadMore=!0,a()):o().then(function(e){n.shouldShowLoadMore=!_.isEmpty(e),n.shouldShowLoadMore&&a()})}else n.shouldShowLoadMore=!1})}}e.$inject=["gettext"],angular.module("c8y.ui").directive("c8yLoadMore",e)}();