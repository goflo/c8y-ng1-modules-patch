"use strict";angular.module("c8y.cockpit.dataPointTable").directive("c8yRealtimeRadioButton",["c8yRealtime",function(u){function s(n,t){u.start(n,t)}function d(n,t){u.stop(n,t)}function h(n,t){return u.getStatus(n,t)}return{scope:{start:"=",channel:"@",data:"&onData",subscribed:"&onSubscribed",state:"="},replace:!0,restrict:"EA",templateUrl:":::PLUGIN_PATH:::/views/realtimeRadioButton.html",controller:["$scope",function(a){var e=a.$id;function n(n,t){n&&l(e,n),t&&t!==n&&d(e,t)}function c(n,t){a.data({data:t})}function t(){d(e,a.channel)}function o(){h(e,a.channel)?d(e,a.channel):s(e,a.channel)}function i(n){a.channel&&n&&s(e,a.channel),!1===n&&h(e,a.channel)&&d(e,a.channel)}function r(){var n=u.getStatus(e,a.channel);return a.channel&&(a.state=n),void 0!==n?u.icon(n):u.icon(!1)}function l(n,t){u.addListener(n,t,"CREATE",c),!a.state&&!a.start||h(n,t)||s(n,t)}a.$watch("channel",n),a.$on("$destroy",t),a.icon=r,a.on=o,a.$watch("start",i)}]}}]);