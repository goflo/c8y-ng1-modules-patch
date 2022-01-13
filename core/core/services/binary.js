"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}!function(){function e(n,o,e,a,i,s,u,c,l,r,m){var f="inventory/binaries",d=/(?:\.([^.]+))?$/,y={archive:{mimes:[],exts:["7z","apk","cab","gz","iso","jar","rar","tar","zip"]},audio:{mimes:[],exts:["3gp","aiff","aac","amr","m4a","m4p","mp3","oga","ogg","raw","wav","wma"]},code:{mimes:[],exts:["aspx","exe","htm","html","jad","js","json","jsp","php","xml"]},excel:{mimes:[],exts:["xls","xlsx"]},image:{mimes:[],exts:["bmp","gif","jpeg","jpg","png","tiff","svg","ico"]},pdf:{mimes:[],exts:["pdf"]},powerpoint:{mimes:[],exts:["ppt","pptx"]},text:{mimes:[],exts:["txt"]},video:{mimes:[],exts:["3gp","asf","avi","flv","mov","mp4","ogv","qt","rm","rmvb","wmv"]},word:{mimes:[],exts:["doc","docx"]},epl:{mimes:[],exts:["mon"]}},p={systemOption:{category:"files",key:"max.size"},defaultBytesLimit:52428800,actualBytesLimitPromise:void 0,actualBytesLimit:void 0};function t(){var e=p.systemOption,t=p.defaultBytesLimit;p.actualBytesLimitPromise=l.whenAuthorized().then(function(){return r.getSystemOptionValue(e,t)}).then(function(e){return p.actualBytesLimit=e,p.actualBytesLimit})}return window.c8y_testing||t(),_.assign(_.cloneDeep(c),{loadBytesSizeLimit:t,getBytesSizeLimit:function(){return p.actualBytesLimit},getBytesSizeLimitAsync:function(){return p.actualBytesLimitPromise},list:function e(t){var r=u.url(f);var n=u.pageSizeFilter(t);var a={params:n};var i=u.cleanListCallback("managedObjects",e,n,!0);return o.get(r,a).then(i)},upload:function(e,t){var r={name:e.name,type:e.type},n=_.assign(r,t);return m.upload(e,{url:u.url(f),headers:u.contentHeaders("managedObject","managedObject"),data:{object:n}})},downloadAndSaveAs:function(a,e){var t=g(a);return m.download(a,t,e).then(function(e){var t=e.getResponseHeader("Content-Type"),r=e.getResponseHeader("Content-Disposition"),n=v(a)?function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:512,n=A(e.data),a=[],i=0;i<n.length;i+=r){for(var o=n.slice(i,i+r),s=new Array(o.length),u=0;u<o.length;u++)s[u]=o.charCodeAt(u);var c=new Uint8Array(s);a.push(c)}return new Blob(a,{type:t})}(a,t):new Blob([e.response],{type:t});saveAs(n,m.getFilenameFromContentDisposition(r))})},downloadAsDataUri:function(a){var e=g(a);return m.download(a,e).then(function(e){var t=e.getResponseHeader("Content-Type"),r=m.arrayBufferToBase64(e.response),n=v(a)?x(a):"data:".concat(t,";base64,").concat(r);return n}).catch(function(){return x(a)||n.reject()})},downloadAsText:function(e){var t=g(e),r={headers:l.headers(),responseType:"text",transformResponse:function(e){return e}};return o.get(t,r)},getDownloadUrl:function(e){return e&&e.self&&e.self.replace(u.url("inventory/managedObjects"),u.url(f))},removeBinary:function(e){var t=g(e);return o.delete(t)},icon:function(e){var t=["file","o"],r=h(e);r&&t.splice(1,0,r);return t.join("-")},size:function(e){return m.size(e)},isImage:function(e){return"image"===h(e)},hasValidSize:function(e){return m.size(e)<=p.actualBytesLimit},getIdFromUrl:function(e){var t=new RegExp("\\/inventory\\/binaries\\/(\\d+)|\\/inventory\\/managedObjects\\/(\\d+)"),r=e.match(t);return r&&(r[1]||r[2])},readDataUri:function(e){var t=new FileReader,r=n.defer();t.addEventListener("load",function(){r.resolve(t.result)},!1),t.addEventListener("error",function(e){r.reject(e)}),e&&t.readAsDataURL(e);return r.promise},decodeDataUri:function(e){return A(_.last(e.split(",")))},setGlobalFlag:function(e,t){var r={id:u.getId(e)};return r.c8y_Global=t?{}:null,b(r)},getFileGenericType:h,save:b,detail:function(e,t,r){return c.detail(e,t,r)},remove:function(e){return c.remove(e)},getDataUri:x,getText:function(e){if(e&&e.data)return A(e.data);return""}});function v(e){return e&&e.data}function g(e){var t=e.id||e;return u.url("".concat(f,"/").concat(t))}function h(t){var i="";return _.forEach(y,function(e,r){var n=_slicedToArray(d.exec(t.name),2)[1];if(_.forEach(e.exts,function(e){var t=!0;return e===_.lowerCase(n)&&(i=r,t=!1),t}),!i){var a=function(e){var t=e.contentType;t||_.isUndefined(e._attachments)||(t=e._attachments[_.keys(e._attachments)[0]].content_type);return t}(t);_.forEach(e.mimes,function(e){var t=!0;return e===a&&(i=r,t=!1),t})}}),i}function b(e){return e.id?function(e){return c.update(e)}(e):function(e){var t=_.assign(e,{c8y_IsBinary:!0});return c.createConfirm(t)}(e)}function x(e){var t=_.get(e,"type")||_.get(e,"dataType"),r=_.get(e,"data"),n="";return t&&r&&(function(t){var e=[i,s];return _.some(e,function(e){return!function(e){var t;try{e(),t=!1}catch(e){t=!0}return t}(_.partial(e,t))})}(r)||(r=a(r)),n="data:".concat(t,";base64,").concat(r)),n}function A(t){var e=[i,s];return _.first(_.compact(_.map(e,function(e){return function(e){var t;try{t=e()}catch(e){t=null}return t}(_.partial(e,t))})))}}e.$inject=["$q","$http","$rootScope","utoa","atou","atob","c8yBase","c8yInventory","c8yAuth","c8ySettings","c8yBinaryCommon"],angular.module("c8y.core").factory("c8yBinary",e)}();