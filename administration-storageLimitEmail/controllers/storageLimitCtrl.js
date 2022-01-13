"use strict";angular.module("c8y.parts.storageLimitEmail").controller("storageLimitCtrl",["$scope","$http","c8yTitle","c8yStorageLimitation","c8yUserGroup","c8yBase","c8yAlert","gettext",function(i,t,e,a,r,n,o,l){i.updateStorageLimitEmailInfo=function(){var t,e=0;i.data.emailWarningEnabled&&(t=i.data.selectedUserGroup,e=i.data.threshold),a.saveStorageLimitationEmailData({"group.name":t,"threshold.level":e}).then(function(){i.data.selectedUserGroup=t,i.data.threshold=0===e?void 0:e,o.success(l("Notification email settings updated."))})},i.invalid=_.partial(n.invalid,i,"storageLimitForm"),i.validationHints=n.validationHints,i.errorList={required:l("This field is required."),max:l("The threshold cannot be bigger than 100%."),min:l("The threshold cannot be smaller than 1%.")},i.userGroups=[],r.list().then(function(t){_.forEach(t,function(t){i.userGroups.push(t.name)})}),e.changeTitle({title:l("Storage quota")}),a.getStorageLimitationEmailData().then(function(t){var e=t.data,a=!!e["threshold.level"]&&"0"!==e["threshold.level"];i.data={emailWarningEnabled:a,selectedUserGroup:e["group.name"],threshold:+e["threshold.level"]}},function(){i.data={emailWarningEnabled:!1}})}]);