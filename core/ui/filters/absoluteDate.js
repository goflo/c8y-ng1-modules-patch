"use strict";!function(){var i,a;function n(t,n,e){var r=i.getCurrentLanguage();r=a.getMomentLocalesLanguageString(r);var u,o=t;return t&&((u=moment(t)).locale(r),e&&(u=u.utcOffset(e))),u&&u.isValid()&&n&&(o=u.format(n)),o}angular.module("c8y.ui").run(["gettextCatalog","c8yLocales",function(t,n){i=t,a=n}]).filter("absoluteDate",function(){return function(t){return n(t,"LLL")}}).filter("absoluteDateOnly",function(){return function(t){return n(t,"LL")}}).filter("absoluteDateShort",function(){return function(t){return n(t,"L, LTS")}}).filter("absoluteDateWithDay",function(){return function(t){return n(t,"ddd, LL")}}).filter("absoluteTime",function(){return function(t){return n(t,"LT")}}).filter("absoluteDateTimeShort",function(){return function(t){return n(t,"L, LT")}}).filter("absoluteDateTimeShortWithTimezone",function(){return function(t){return n(t,"L, LT Z")}}).filter("absoluteDateTimeFormat",function(){return n})}();