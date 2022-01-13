"use strict";!function(){function t(t,d,e,l,f,m,p,r,k,h,n,i,a,y,v,o,s,T){var c,u=[{action:"registerBySMS",name:y("Register new tracker")},{action:"updateBySMS",name:y("Update tracker connection settings")}],g={required:y("This field is required."),pattern:{userPhoneNumber:y("Valid phone number with country prefix required."),trackerPhoneNumber:y("Valid phone number with country prefix required."),trackerIMEI:y("Valid IMEI number required.")}},S="trackerForm",w="registrationProgress",M=[{caption:y("Tracker registration ready.")},{caption:y("Tracker model chosen.")},{caption:y("Action chosen.")},{caption:y("SMS for initial configuration sent.")},{caption:y("Configuration complete.")}],R=y('Tracker is now waiting for connection, complete the registration in the "Pending tracker registrations" after it connects to the server.'),b={},D={10:/^[0-9]{10}$/,15:/^[0-9]{15}$/},I=/[\s\S]*/g,$={};function N(t){d.newDeviceRequests||(d.newDeviceRequests=[]),function(t,e){_.forEach(t,function(t){_.includes(e,t.id)||d.newDeviceRequests.push(t)})}(t,_.map(d.newDeviceRequests,"id")),d.paging=t.paging}function C(t,e){_.forEach(d.newDeviceRequests,function(t){t.id===e.id&&(t.status=e.status,f.success(y("New device connected.")))})}function E(t,e){if(p.isDevice(e)){var r=e.c8y_Mobile&&e.c8y_Mobile.imei,n=_.find(d.newDeviceRequests,{id:r});if(n){var i=[],a=function(e){return k.list({fragmentType:"c8y_MyTrackersGroup"}).then(function(t){return t.length||t.push(k.create({name:v.getString("My trackers"),c8y_MyTrackersGroup:{}}).then(m.getResData)),t[0]}).then(function(t){return h.addChildAsset(t,e)})}(e).then(_.partial(U,n)),o=T.find(r),s=o&&o.trackerPhoneNumber;s&&_.merge(e,{c8y_Mobile:{msisdn:o.trackerPhoneNumber}});var c=_.find(d.trackerModels,{name:o&&o.trackerModelName}),u=c&&c.communicationMode;if(u&&_.merge(e,{c8y_CommunicationMode:{mode:c.communicationMode}}),s||u){var g=p.save(e);i.push(g)}i.push(a),l.all(i).then(function(){T.cleanByIMEI(r),f.success(y("New tracker added to group."))})}}}function q(t){d.trackerModels=t}function O(t){d.registration={status:t||0,tracker:{},currentTrackerName:"",action:""}}function P(t){a.changeTitle({title:y("Tracker registration"),subtitle:_.isUndefined(t)?"":v.getString("{{qty}} new devices",{qty:t})})}function A(){B(),function(){if(d.forms.trackerForm&&d.forms.trackerForm.trackerIMEI&&""!==d.forms.trackerForm.trackerIMEI.$modelValue){var t=d.forms.trackerForm.trackerIMEI;t.$setValidity("pattern",function(){return!!t.$modelValue.match(F())})}}()}function B(){d.registration.currentTracker=_.find(d.trackerModels,{name:d.registration.currentTrackerName})}function F(){return d.registration.currentTracker?D[d.registration.currentTracker.IMEILength]:I}function x(){0<d.registration.status&&(d.registrationSaveObject={},_.assign(d.registrationSaveObject,d.registration,{timestamp:moment().local()}),e.localStorage.setItem(w,JSON.stringify(d.registrationSaveObject)),delete d.registrationSaveObject)}function j(){delete d.temporaryRegistration,V()}function V(){e.localStorage.removeItem(w)}function G(){var t=d.registration.currentTracker.supportedOperations[d.registration.action].messages;return 0===t.length||1<t.length||t[0].requiresFeedback}function L(){d.newDeviceRequests=null,d.refreshLoading=!0,d.paging.refresh().then(N).finally(function(){d.refreshLoading=!1}),d.paging=null}function H(){var t={id:d.registration.tracker.trackerIMEI};return r.create(t)}function U(t){var e=_.indexOf(d.newDeviceRequests,t);d.newDeviceRequests.splice(e,1)}function J(){O(),d.registration.tracker={userPhoneNumber:"",trackerPassword:"",trackerIMEI:"",trackerPhoneNumber:""},V()}function W(t){d.registration.status=t}function z(){var n=d.registration,t=n.action,e=n.currentTracker.supportedOperations[t].defaults||{};t&&_.forOwn(e,function(t,e){var r=d.forms[S][e];r&&r.$dirty||(n.tracker[e]=t)})}function K(){W(0),f.warning(R),J(),L()}function Q(){var t;return G()?W(3):t=H().then(K),t}$[r.status.PENDING_ACCEPTANCE]=1,$[r.status.WAITING_FOR_CONNECTION]=2,$[r.status.ACCEPTED]=3,d.$on("$destroy",function(){T.commit()}),d.actionButtons=u,d.forms={},d.registration={},d.statuses=M,d.trackerModels=[],d.variables={},d.cancelTempRegistration=function(){j()},d.confirmTempRegistration=function(){_.assign(d.registration,d.temporaryRegistration),j()},d.doesActionRequireFeedback=G,d.getTrackerIMEIPattern=F,d.invalid=angular.bind(m,m.invalid,d.forms,S),d.isThereActionChoice=function(){return!!(d.registration.status<4&&d.registration.currentTracker&&d.registration.currentTracker.supportedOperations.registerBySMS&&d.registration.currentTracker.supportedOperations.updateBySMS)||(d.registration.currentTracker?(d.registration.status<2&&W(2),d.registration.action=d.registration.currentTracker.supportedOperations.registerBySMS?"registerBySMS":"updateBySMS",z()):d.registration.action="",!1)},d.listOrderExpression=[function(t){return $[t.status]},"id"],d.loadNext=function(){d.paging.loading=!0,d.paging.next().then(N).finally(function(){d.paging.loading=!1})},d.newDeviceRequestsStatus=r.status,d.onClickAccept=function(t){r.accept(t).then(function(){!function(t){var e=_.indexOf(d.newDeviceRequests,t);d.newDeviceRequests[e].status=r.status.ACCEPTED}(t),f.success(y("Device registration accepted."))})},d.onClickCancel=function(t){n({title:y("Confirm cancel?"),body:v.getString("Do you really want to cancel registration request for device with the ID {{id}}?",t),status:"cancel"}).then(function(){r.cancel(t).then(function(){U(t),f.success(y("Device registration cancelled."))})})},d.onClickResetRegistrationData=function(){return n({title:y("Confirm registration data reset?"),body:y("Do you really want to clear all tracker registration data?")}).then(J)},d.refresh=L,d.setActionStatus=function(){W(2),z()},d.sendFirstConfigurationBatch=function(){return W(2),_.forEach(["userPhoneNumber","trackerPhoneNumber"],function(t){d.registration.tracker[t]&&(d.registration.tracker[t]=d.registration.tracker[t].replace(/\+/g,"00"))}),d.registration.messages=[],d.tracker=angular.copy(d.registration.tracker),_.forEach(d.registration.currentTracker.supportedOperations[d.registration.action].messages,function(t){d.registration.messages.push(d.$eval(t.text))}),delete d.tracker,T.add(_.assign({},d.registration.tracker,{trackerModelName:d.registration.currentTrackerName})),s.startRegistration(d.registration).then(Q)},d.sendSecondConfigurationBatch=function(){return s.finishRegistration(d.registration).then(H).then(K)},d.shouldDisplayField=function(t){return(2===d.registration.status||3===d.registration.status)&&d.registration.action&&d.registration.currentTracker.supportedOperations[d.registration.action].variables[t]},d.shouldDisplayFirstSendButton=function(){return(2===d.registration.status||3===d.registration.status)&&d.registration.action},d.shouldDisplaySecondSendButton=function(){return 3===d.registration.status&&G()},d.statusIcon=r.statusIcon,d.statusClass=r.statusClass,d.updateTrackerData=function(){B(),d.registration.action=""},d.validationHints=function(t){return m.validationHints(t,g)},r.list(c).then(N),i.addListener(d.$id,"/bootstrap",i.realtimeActions().UPDATE,C),i.start(d.$id,"/bootstrap"),d.$on("$destroy",function(){i.stop(d.$id,"/bootstrap")}),i.addListener(d.$id,"/managedobjects/*",i.realtimeActions().CREATE,E),i.start(d.$id,"/managedobjects/*"),d.$on("$destroy",function(){i.stop(d.$id,"/managedobjects/*")}),o.list().then(q),O(),P(),d.$watch("registration.currentTrackerName",A),d.$watch("registration.status",x),d.$watch("registration.currentTrackerName",x),d.$watch("registration.action",x),d.$watch("registration.tracker",x,!0),d.$watch("newDeviceRequests.length",P),(b=JSON.parse(e.localStorage.getItem(w)))&&b.status&&0<b.status&&(b.timestamp=t("absoluteDate")(b.timestamp),d.temporaryRegistration={},_.assign(d.temporaryRegistration,b))}t.$inject=["$filter","$scope","$window","$q","c8yAlert","c8yBase","c8yDevices","c8yDeviceRegistration","c8yDeviceGroup","c8yInventory","c8yModal","c8yRealtime","c8yTitle","gettext","gettextCatalog","trackerModelsSvc","trackerRegistrationSvc","trackerRegistrationHistorySvc"],angular.module("c8y.tracking.trackerRegistration").controller("trackerRegistrationCtrl",t)}();