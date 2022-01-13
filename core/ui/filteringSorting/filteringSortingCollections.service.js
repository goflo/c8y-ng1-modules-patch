"use strict";!function(){function e(o,r,i){return{getColumn:function(n){var e=_.merge({header:n.name,cell:{template:"{{item.".concat(n.name,"}}"),class:"table-cell-truncate",innerClass:"truncated-cell-content"}},n);n.filteringByBoolean&&(e.filtering={schema:{type:"object",properties:{checked:{type:"boolean"},unchecked:{type:"boolean"}}},form:[{type:"template",template:["<label><span translate>",r("Show checkboxes that are"),"</span>:</label>"].join("")},{key:"checked",title:i.getString("Checked")},{key:"unchecked",title:i.getString("Unchecked")}],getFilter:function(r){var e;return(r.checked||r.unchecked)&&(e=function(e){var t=_.get(e,n.filteringByBoolean.itemProperty);return r.checked&&t||r.unchecked&&!t}),e}});n.filteringByPattern&&(e.filtering={schema:{type:"object",properties:{patterns:{type:"array",items:{type:"string"}}}},form:[{key:"patterns",title:i.getString("Filter by pattern"),add:i.getString("Or"),items:[{key:"patterns[]",notitle:!0,placeholder:i.getString("e.g. value, you can use an asterisk (*) as wildcard character")}]}],getFilter:_.partial(a,"patterns",n.filteringByPattern.itemProperty)});n.filteringByMinMax&&(e.filtering={schema:{type:"object",properties:{min:{type:"number"},max:{type:"number"}}},form:[{key:"min",title:i.getString("Filter by minimum value")},{key:"max",title:i.getString("Filter by maximum value")}],getFilter:_.partial(l,"min","max",n.filteringByMinMax.itemProperty)});n.filteringByMinMaxDate&&(e.filtering={schema:{type:"object",properties:{minDate:{type:"string",format:"datetime"},maxDate:{type:"string",format:"datetime"}}},form:[{key:"minDate",title:i.getString("Filter by minimum date")},{key:"maxDate",title:i.getString("Filter by maximum date")}],getFilter:_.partial(l,"minDate","maxDate",n.filteringByMinMaxDate.itemProperty)});if(n.sortingByPath){var t=n.sortingByPath.itemProperty;e.sorting={path:_.isArray(t)?t.join("."):t}}return e},getPatternFilterFromModel:a,getMinMaxFilterFromModel:l,filterSort:function(e,t,r){var n=function(e,r){return _.map(e,function(e){var t=_.get(r,e.name);return o.getColumnFilter(e,t)})}(t,r),i=function(e,a){return _.transform(e,function(r,e){var t=_.get(a,e.name),n=o.getColumnSort(e,t);if(e.sorting&&(e.sorting.path||e.sorting.paths)&&0!==n.order){var i=e.sorting.paths||[{path:e.sorting.path,orderModifier:1}];_.forEach(i,function(e){var t=n.order*e.orderModifier;r.paths.push(e.path),r.orders.push(1==t?"asc":"desc")})}},{paths:[],orders:[]})}(t,r),a=_(e);return _.map(n,function(e){a=a.filter(e)}),(a=a.orderBy(i.paths,i.orders)).value()}};function a(e,r,t){var n,i=_.get(t,e,[]);return i.length&&(n=function(t){return _.some(i,function(e){return!e||function(e){var t=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(/\\\*/g,".*"),r="^".concat(t,"$");return new RegExp(r)}(e).test(_.get(t,r))})}),n}function l(e,t,r,n){var i,a=_.get(n,e),o=_.get(n,t),l=!_.isUndefined(a)&&!_.isNull(a),c=!_.isUndefined(o)&&!_.isNull(o);return(l||c)&&(i=function(e){var t=_.get(e,r);return(!l||a<=t)&&(!c||t<=o)}),i}}e.$inject=["c8yFilteringSortingColumns","gettext","gettextCatalog"],angular.module("c8y.ui").factory("c8yFilteringSortingCollections",e)}();