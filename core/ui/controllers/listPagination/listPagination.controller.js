"use strict";!function(){function t(a,t,l,i){a.$parent.pagination={pageSize:_.parseInt(a.pageSize),page:1,nextBtnDisabled:!1,prevBtnDisabled:!0,option:void 0},this.pag=a.$parent.pagination;var n=this.pag;n.nextPage=function(){n.page<n.totalPages&&(n.page+=1,n.option=n.options[n.page-1],n.prevBtnDisabled=!1,n.page>=n.totalPages&&(n.nextBtnDisabled=!0))},n.prevPage=function(){0<n.page&&(n.page-=1,n.option=n.options[n.page-1],n.nextBtnDisabled=!1,n.page<=1&&(n.prevBtnDisabled=!0))},n.optionSelect=function(){n.page=n.option.page,n.page<=1?(n.prevBtnDisabled=!0,n.nextBtnDisabled=!1):(n.page>=n.totalPages?n.nextBtnDisabled=!0:n.nextBtnDisabled=!1,n.prevBtnDisabled=!1)},a.$watch("items",function(t){if(!_.isEqual(t,n.items)){var e=t&&t.length;n.totalPages=function(t,e){if(e<t)return _.ceil(t/e)}(e,n.pageSize),n.items=i(t),a.items=n.items,n.totalPages&&(n.options=function(t,e,a,i){for(var n=[],o=0;o<e;o++){var p=t[o*a],s=o===e-1?t[i-1]:t[o*a+a-1],g={firstItem:p,lastItem:s,label:l.getString("{{firstItem}} to {{lastItem}}",{firstItem:p,lastItem:s}),startFrom:o*a,page:o+1};n.push(g)}return n}(n.items,n.totalPages,n.pageSize,e),n.option||(n.option=n.options[0]))}})}t.$inject=["$scope","gettext","gettextCatalog","orderByFilter"],angular.module("c8y.ui").controller("c8yListPaginationCtrl",t)}();