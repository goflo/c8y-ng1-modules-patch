"use strict";!function(){function e(r,e){var u=e("Select or search group");return{link:function(n){var e=!1;function o(){n.groups||e||(e=!0,r.list({withChildren:!1}).then(function(e){n.groups=e}).finally(function(){e=!1}))}n.placeholder=n.customPlaceholder||u,n.getDynamicGroups=function(e){var o=e.search;if(o&&n.groups&&!_.some(_.reject(n.groups,"newGroup"),{name:o})&&n.allowNonExistingGroup){var r=_.find(n.groups,{newGroup:!0});r?r.name=o:n.groups.push({newGroup:!0,name:o})}else _.remove(n.groups,{newGroup:!0});return n.groups},n.onOpenClose=function(e){e&&(n.lazyLoad&&o(),n.group=void 0)},n.orderBy=function(e){return(e.newGroup?"z":"a")+e.name},n.getFilterGroup=function(o){return function(e){return!o||_.includes(e.name,o)}},(n.scopeCopy=n).lazyLoad||o()},restrict:"EA",scope:{group:"=",groupAsId:"=?",customPlaceholder:"@placeholder",allowNonExistingGroup:"<?",lazyLoad:"<?",groups:"=?"},templateUrl:":::PLUGIN_PATH:::/ui/views/deviceGroupSelector.html"}}e.$inject=["c8yDeviceGroup","gettext"],angular.module("c8y.ui").directive("c8yDeviceGroupSelector",e)}();