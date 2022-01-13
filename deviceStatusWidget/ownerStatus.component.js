"use strict";!function(){function e(n,t,e,r,o,i,c,s,d){var a,u=this,v=s("Enable/disable owner"),l=s("You don't have permission to admin this device.");function f(){o.hasId(u.device)&&(u.ownerInfoFetched=!1,r.canAdminMOs([u.device]).then(function(e){return u.canAdminDevice=e,u.canAdminDevice?n.resolve():(i.danger(l),n.reject())}).then(g).finally(function(){u.ownerInfoFetched=!0}))}function g(){return h(!1),t.getOwnerObject(_.get(u,"device.id"),{silentError:!0}).then(function(e){u.owner=e}).catch(function(e){e.serviceUser&&h(e.serviceUser),e.accessDenied&&(u.errorTooltipMessage=s("You don't have permission to enable/disable this owner user.")),e.notFound&&!e.serviceUser&&i.danger(d.getString('Device owner not found for device "{{name}}".',u.device)),e.accessDenied||e.notFound||e.serviceUser||i.danger(o.getResErrorMessage(e))})}function w(){u.isEditMode?u.isEditMode=!1:(u.isEditMode=!0,a=_.get(u,"device.owner"))}function h(e){_.set(u,"serviceUserDevice",e)}function m(){w(),e.detail(_.get(u,"device.owner"),{silentError:!0}).then(function(){return t.save(_.pick(u.device,["id","owner"]))}).then(function(){i.success(s("Device owner updated."))}).then(function(){f()}).catch(function(){var e=u.device.owner;y(a),i.danger(d.getString('Could not find user "{{errorUser}}". Device owner reverted to "{{owner}}".',{errorUser:e,owner:u.device.owner}))})}function b(){w(),y(a)}function y(e){_.set(u,"device.owner",e)}_.assign(u,{$onChanges:function(e){e.device.currentValue&&f()},toggleOwner:function(){var e=_.get(u,"device.id");if(e&&u.canAdminDevice)return t.setOwnerEnabled(e,u.owner.enabled).then(function(e){u.owner=e}).catch(function(){u.owner.enabled=!u.owner.enabled});return n.reject()},toggleEdit:w,getTooltip:function(){return u.errorTooltipMessage?"":v},keyPressHandler:function(e){return c.handle(e,m,b)},save:m,cancel:b,shouldShowToggle:function(){return!u.isEditMode&&u.ownerInfoFetched&&!u.serviceUserDevice}})}e.$inject=["$q","c8yInventory","c8yUser","c8yPermissions","c8yBase","c8yAlert","keyboardKeyHandler","gettext","gettextCatalog"],angular.module("c8y.deviceStatus").component("ownerStatus",{controller:e,controllerAs:"vm",templateUrl:":::PLUGIN_PATH:::/ownerStatus.html",bindings:{device:"<"}})}();