"use strict";function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function _iterableToArrayLimit(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,i=!1,n=void 0;try{for(var a,l=r[Symbol.iterator]();!(o=(a=l.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(r){i=!0,n=r}finally{try{o||null==l.return||l.return()}finally{if(i)throw n}}return t}}function _arrayWithHoles(r){if(Array.isArray(r))return r}!function(){function r(i,r,e,n){r.defineAddOn("bootstrapDecorator","fileUpload",":::PLUGIN_PATH:::/ui/schemaForm/customFieldTypes/fileUpload.html",e.stdBuilders),i.defaults.string.unshift(function(r,e,t){var o;return"string"===e.type&&"file"===e.format&&((o=i.stdFormObj(r,e,t)).allowedFileType=_.get(e,"x-schema-form.allowedFileType",[]),o.key=t.path,o.type="fileUpload",o.getFilePickerFilesFromModelValue=function(r){return[{file:r}]},o.getModelValueFromFilePickerFiles=function(r){return _slicedToArray(r,1)[0].file},o.onFileSelected=function(r,e){var t=_slicedToArray(e,1)[0].file;t&&function(e){var r=new FileReader;r.onload=function(r){_.set(e,"fileSrc",r.target.result)},r.readAsDataURL(e)}(t),r.$setDirty()},o.onFileRemoved=function(r){r.$setDirty()},t.lookup[n.stringify(t.path)]=o),o})}r.$inject=["schemaFormProvider","schemaFormDecoratorsProvider","sfBuilderProvider","sfPathProvider"],angular.module("schemaForm").config(r)}();