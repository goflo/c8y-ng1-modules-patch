"use strict";!function(){function n(e){return{filterAndExtendWithStoredProperties:function(n,r){var t=_(n).map(function(t){var n=_.find(r,function(n){return n.id===t.id});return n?_.assign({},n,t):t}).value();return t.length?t:void 0},getAssetLink:function(n){var t=e.isGroup(n)?"group":"device",r="";return _.has(n,"id")&&(r="#/".concat(t,"/").concat(n.id)),r}}}n.$inject=["c8yGroups"],angular.module("c8y.assets").factory("assetsSvc",n)}();