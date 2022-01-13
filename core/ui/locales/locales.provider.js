"use strict";!function(){function n(n){var t=window.c8y.coreFilePath("locales/angular");n.localeLocationPattern("".concat(t,"/angular-locale_{{locale}}.js"))}function t(n,t){n.$watch(function(){return t.getCurrentLanguage()},function(n){angular.element("html").attr("lang",n)})}t.$inject=["$rootScope","gettextCatalog"],n.$inject=["tmhDynamicLocaleProvider"],angular.module("c8y.ui").config(n).run(t).provider("c8yLocales",function(){function n(i,l,o,n,g,t,s,e,f){var a="_",r={en:"en-gb","en-EN":"en-gb"},u={en:"en-GB","en-EN":"en-GB"},c="en-gb",m="en-GB",h="en",p=null,d="c8y_language";function v(){return p||(p={},function(n){_.forEach(n,T)}(s.getRuntimeOption("languages")),_.forEach(R(),y)),p}function S(){var n=v();return _.keys(n)}function T(n){p[n]=p[n]||[]}function y(t){_.forEach(t.languages,function(n){T(n),function(n,t){p[n].push(t)}(n,t)})}function M(n){var t=S();return _.includes(t,x(n))}function E(){return function(){var t=[];L()&&t.push(L());C()&&t.push(C());(t=t.concat(O())).length&&A(_.find(t,M));return e.get("language").then(function(n){return n&&(t.unshift(n),L()&&t.unshift(L())),(t=(t=t.concat(O())).concat(function(n){var e=[];return _.forEach(n,function(n){if(n.indexOf("-")){var t=n.split("-");e.push(t[0])}}),e}(t))).push(B(h)),_.find(t,M)})}().then(A)}function L(){return s.getRuntimeOption("queryStringLang")}function R(){return s.getRuntimeOption("importedPlugins")}function O(){for(var n=o.navigator,t=["languages","language","browserLanguage","systemLanguage","userLanguage"],e=[],a=0;a<t.length;a++){var r=n[t[a]];_.isArray(r)?e=e.concat(r):r&&e.push(r)}return e}function A(t){if(!t)return l.when();i.$emit("language:change");var n=_.map([b,P,F,D],function(n){return n(t)});return l.all(n)}function D(n){o.localStorage.setItem(d,n)}function C(){return o.localStorage.getItem(d)}function F(n){return t.set(w(n)).catch(angular.bind(t,t.set,function(n){return w(n.split("-")[0])}(n))).catch(angular.bind(t,t.set,c))}function w(n){return r[n]||angular.lowercase(B(n))}function P(n){var t=$(n),e=moment(),a=e.locale("en-GB").format(s.dateFullFormat),r=e.locale(t).format(s.dateFullFormat),o=a===r;o?moment.locale(t):moment.locale("en-GB")}function $(n){return u[n]||n||m}function b(n){var t=x(n),e=l.defer(),a=2,r=function(){--a||e.resolve()};if(j(s.getFlag("langDebug")),f.setCurrentLanguage(t),window.C8Y_APP){if(g.has("c8yCachedLocaleDictionaryService")){var o=g.get("c8yCachedLocaleDictionaryService"),u=o.cachedDictionary[n];if(u&&Object.keys(u).length)return f.setStrings(n,u),e.promise}var c=f.loadRemote(function(n){return _.get(s.appOption("languages"),"".concat(n,".url"))||"".concat(n,".json")}(t));return c.then(function(){i.$emit("language:loaded")}),c}return function(e){var n=_([{rootContextPath:"c8ydata/"}].concat(R())).map("rootContextPath").map(function(n){return n.split("/")[0]}).uniq().value();return l.all(_.map(n,function(n){var t=s.dataFilePath("locales/".concat(n,"/json/").concat(e,".json"));return f.loadRemote(t)}))}(t).finally(r),function(t){var n=function(n){return v()[n]}(t);return l.all(_.map(n,function(n){return f.loadRemote("/apps/".concat(n.rootContextPath,"/locales/").concat(t,".json"))}))}(t).finally(r),e.promise}function j(n){f.debug=n}function B(n){var t=x(n).split(a);return t[0].toLowerCase()+(t[1]?"-".concat(t[1].toUpperCase()):"")}function x(n){var t=-1<n.indexOf("-")?"-":a,e=n.split(t);return e[0].toLowerCase()+(e[1]?a+e[1].toUpperCase():"")}function I(n,t){var e=function(n){var t=n;_.isString(n)?t=f.getString(n):_.isObject(n)&&(t=function(n){return _.mapValues(n,function(n){return _.isString(n)?f.getString(n):n})}(n));return t}(n);return _.assign(e,{__idx:t})}var N=l.defer(),U={initDone:N.promise,getSupportedLanguages:S,switchToDefaultLanguage:E,switchToLanguage:A,setDebugMode:j,getTranslatedArray:function(n){return _.map(n,I)},getD3Locales:function(){return d3.locale({decimal:n.NUMBER_FORMATS.DECIMAL_SEP,thousands:n.NUMBER_FORMATS.GROUP_SEP,days:n.DATETIME_FORMATS.DAY,shortDays:n.DATETIME_FORMATS.SHORTDAY,months:n.DATETIME_FORMATS.MONTH,shortMonths:n.DATETIME_FORMATS.SHORTMONTH,periods:n.DATETIME_FORMATS.AMPMS,grouping:[3],currency:[n.NUMBER_FORMATS.CURRENCY_SYM,""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S"})},getMomentLocalesLanguageString:$};return s.getFlag("skipSwitchingToDefaultLanguage")?N.resolve():E().finally(function(){N.resolve()}),U}return n.$inject=["$rootScope","$q","$window","$locale","$injector","tmhDynamicLocale","c8yBase","c8yUserPreferences","gettextCatalog"],{$get:n}})}();