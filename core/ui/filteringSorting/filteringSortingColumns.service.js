"use strict";!function(){function n(n,t){var i={filtering:{},sorting:{order:0}};return{getColumns:function(n,r){return _.map(n||[],function(n){var e=_.get(r,n.name,_.cloneDeep(i)),t=_.get(e,"override");return _.assign(n,t,{config:e})})},getColumnFilter:r,getColumnSort:o,isConfigurable:function(n){return!(_.isUndefined(n.filtering)&&_.isUndefined(n.sorting))},isFiltered:function(n,e){var t=r(n,e);return _.isFunction(t)||!_.isEmpty(t)},isSorted:function(n,e){return u(n,e)||l(n,e)},isSortedAscending:u,isSortedDescending:l,configureColumnWithUI:function(e){return t({templateUrl:":::PLUGIN_PATH:::/ui/filteringSorting/filteringSortingColumnConfigModal.html",controller:"c8yFilteringSortingColumnConfigModalCtrl",resolve:{column:function(){return _.cloneDeep(e)}}}).then(function(n){return e.config=_.defaults(n,i),e})},SORTING_ORDER:n.createEnum([{name:"ASCENDING",value:1},{name:"DESCENDING",value:-1},{name:"NONE",value:0}])};function r(n,e){var t=_.get(e,"filtering",_.cloneDeep(i.filtering)),r=_.get(n,"filtering.getFilter");return r&&(t=r(t)),t}function o(n,e){return _.get(e,"sorting",_.cloneDeep(i.sorting))}function u(n,e){return 0<o(0,e).order}function l(n,e){return o(0,e).order<0}}n.$inject=["c8yBase","c8yModal"],angular.module("c8y.ui").factory("c8yFilteringSortingColumns",n)}();