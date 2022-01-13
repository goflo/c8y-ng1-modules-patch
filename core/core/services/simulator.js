"use strict";angular.module("c8y.core").factory("c8ySimulator",["$http","c8yBase","gettext",function(c,u,e){var n="simulator/templates",l="simulator/configurations",t="".concat(n,"/sensors"),s={headers:u.contentHeaders("simulator","simulator")},o={headers:u.contentHeaders("template","template")};return{list:function(){var e=u.url(l);return c.get(e,{params:{pageSize:2e3}}).then(u.getResData)},changeState:function(e,t){var r=e.id||e,a=u.url("".concat(l,"/").concat(r)),n={state:t},o=_.cloneDeep(s);return c.put(a,n,o)},deleteSimulator:function(e){var t=e.id||e,r=u.url("".concat(l,"/").concat(t)),a=_.cloneDeep(s);return c.delete(r,a)},createSimulator:function(e){var t=u.url(l),r=_.cloneDeep(e),a=_.cloneDeep(s);return c.post(t,r,a)},createTemplate:function(e){var t=u.url(n),r=_.cloneDeep(e),a=_.cloneDeep(o);return c.post(t,r,a)},getSensors:function(){var e=u.url(t);return c.get(e).then(u.getResData)},STATES:{NEW:e("NEW"),RUNNING:e("RUNNING"),PAUSED:e("PAUSED")}}}]);