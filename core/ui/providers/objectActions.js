"use strict";angular.module("c8y.ui").provider("c8yObjectActions",function(){var c,o,i={},r={};function e(n,t,e){var r=i[n];if(r)throw new Error('Object action "'.concat(n,'" already registered'));i[n]={config:e,action:t}}function a(n,t){if(t){var e=r[t];if(!e)throw new Error('Object action "'.concat(t,'" is not registered.'));u(n,t,e)}else!function(o){c&&_.forEach(i,function(t,e){var n=t.config||{},r=n.attachIf&&function(){return c.invoke(n.attachIf,void 0,{target:o})};if(r){var i=r(o);if(!i)return;i.then?i.then(function(n){n&&u(o,e,t)}):u(o,e,t)}else u(o,e,t)})}(n)}function f(){var n=_.map(i,function(n,t){var e=_.cloneDeep(n);return e.name=t,e});return o.when(n)}function u(n,t,e){if(c){var r=e.action,i=c.invoke(r,void 0,{object:n});Object.defineProperty(n,t,{enumerable:!1,value:function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return o.when(i.apply(this,t))}})}}return{register:e,$get:["$injector","$q",function(n,t){return c=n,o=t,{register:e,attach:a,list:f}}]}});