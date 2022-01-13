"use strict";!function(){function e(){return{restrict:"EA",scope:{user:"=",allSelected:"=?",allowedApplications:"=",disabledEdit:"=?"},templateUrl:":::PLUGIN_PATH:::/applicationAccess/applicationAccess.html",controller:i}}function i(c,e,i){function t(e){return _.uniqBy(e,"id")}function n(e){c.applications=e,c.marketApps=_.filter(e,{availability:"MARKET"}),c.privateApps=_.filter(e,{availability:"PRIVATE"})}function l(e){return c.allSelected||_.some(c.allowedApplications,a(e))||o(e)}function a(i){return function(e){return _.toNumber(i.id)===_.toNumber(e.id)}}function o(e){var i,t=e.id,n=c.user;if(n&&!c.allSelected){var l=_(_.get(n,"groups.references")).map("group").map("applications").flatten().uniqBy("id").map("id").value();i=_.includes(l,t)}return i}function r(e){var i=_.get(c,"user._owner.applications");return i&&!o(e)&&!_.some(i,{id:e.id})}c.isAccessAllowed=l,c.toggleAccess=function(e){l(e)?function(e){c.allowedApplications=_.reject(c.allowedApplications,a(e))}(e):function(e){c.allowedApplications=c.allowedApplications||[],c.allowedApplications.push({id:e.id,type:e.type})}(e)},c.alreadyInGlobalRole=o,c.isDisabled=function(e){return c.allSelected||c.disabledEdit||o(e)||r(e)},c.notAvailableInOwner=r,c.noOwnerAvailable=function(){return _.get(c,"user")&&!_.get(c,"user._owner")},e.current().then(i.listByUser).then(t).then(n)}i.$inject=["$scope","c8yUser","c8yApplication"],angular.module("c8y.users").directive("c8yApplicationAccess",e).directive("applicationAccessEditor",e)}();