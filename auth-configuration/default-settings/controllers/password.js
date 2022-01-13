"use strict";function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){function e(u,r,i,e,o,a,c,t,l){var s,n="password",p="limit.validity",y="strength.validity",f="enforce.strength",v=t.loginOptions.BASIC.value.toUpperCase(),g=t.loginOptions.OAUTH2_INTERNAL.value.toUpperCase(),d=t.loginOptions.OAUTH2.value.toUpperCase(),h="SSO_REDIRECT",O={userManagementSource:"INTERNAL",grantType:"PASSWORD",providerName:"Cumulocity",visibleOnLoginPage:!0,type:v},m=!1;function T(){return t.list({silentError:!0}).then(i.getResData).then(b).catch(b)}function b(e){var t=e.loginOptions;s=void 0===t?[]:t;var n,i=N(),r=s.find(function(e){var t=e.type,n=e.grantType;return t===d&&"AUTHORIZATION_CODE"===n}),o=A();n=!r||i||o?i?i.type:o?o.type:O.type:h,u.loginModeType=n,u.previousLoginModeType=n,u.noOAuth=!r,S()}function L(){var e=[];if(D()){var t=u.loginModeType,n=!!A(),i=!!N();t===g?(n||e.push(function(){return C(v)}),i||e.push(function(){return C(g)})):t===v?(n||e.push(function(){return C(v)}),i&&e.push(E)):t===h&&(n&&e.push(M),i&&e.push(E)),e.push(S)}return e.reduce(function(e,t){return e.then(t)},r.resolve())}function S(){u.savedloginModeType=u.loginModeType}function A(){return s.find(function(e){return e.type===v})}function N(){return s.find(function(e){return e.type===g})}function C(e){return t.save(_objectSpread({},O,{type:e}))}function E(){var e=N();return e?t.remove(e):r.when()}function M(){var e=A();return e?t.remove(e):r.when()}function R(e){var t=e.key.replace(/\./g,"_"),n=JSON.parse(e.value);u[t]=e,u[t].value=n}function j(e){return o.detail({category:n,key:e}).then(i.getResData).catch(function(){return null})}function w(e){return o.getSystemOption({category:n,key:e}).then(i.getResData).catch(function(){return null})}function P(e){u.limit_validity.value=parseInt(e,10)}function U(e){R(_.assign({},e,{key:"system.".concat(e.key)}))}function D(){return u.loginModeType!==u.previousLoginModeType}e.changeTitle({title:c("Authentication")}),r.all({systemLimitKeyOption:w("limit.validity"),tenantLimitKeyOption:j(p)}).then(function(e){var t=e.systemLimitKeyOption,n=e.tenantLimitKeyOption;if(null!==n&&R(n),null!==t){var i;U(t);try{i=JSON.parse(t.value)}catch(e){}_.isUndefined(i)||0===i||(m=!0,u.validityLimitEnforced=m,u.limit_validity={value:i})}}),w(f).then(U),j(y).then(R),T(),u.save=function(t){var e=function(){S();var e=[m?r.when():o.updateOption(u.limit_validity),o.updateOption(u.strength_validity)];return r.all(e).then(L).then(function(){return D()?r.resolve():function(e){m||j(p).then(R);j(y).then(R),w(f).then(U),a.success(c("Login settings saved.")),e.$setPristine(),T()}(t)})},n=D()?l.requireLogout(e):e();return n.catch(function(e){"canceled"!==e&&a.danger(i.getResErrorMessage(e))})},u.validateDays=function(e){var t=e;_.isNaN(_.toNumber(t))||parseInt(t,10)<0?P(t=t.slice(0,-1)):P(t);t.length||P(0)},u.validityLimitEnforced=m,u.isLoginModeChanged=D}e.$inject=["$scope","$q","c8yBase","c8yTitle","c8ySettings","c8yAlert","gettext","c8yLoginOptions","c8yUserUtil"],angular.module("c8y.authenticationConfiguration").controller("passwordCtrl",e)}();