"use strict";!function(){function e(e,a){var t=[{label:e("comma - ,"),value:","},{label:e("semi-colon - ;"),value:";"},{label:e("tab - \\t"),value:"\t"}],r=[{label:e("point - ."),value:"."},{label:e("comma - ,"),value:","}],l=[{label:e('quotation mark - "'),value:'"'}],i=["utf-8"],o={textDelimiter:l[0].value,fieldSeparator:t[0].value,decimalSeparator:r[0].value,charset:i[0]},u={textDelimiter:"txtDelim",fieldSeparator:"fieldSep",decimalSeparator:"decimalSep",quoteStrings:"quoteStrings",addBom:"addByteOrderMarker"};return{configKey:"c8y.csvExporter.csvConfig",textDelimiter:l,fieldSeparators:t,decimalSeparators:r,charsets:i,defaultConfig:o,getCsv:function(e,t){return a.stringify(e,function(e){var t=_.defaults(e,o);return _.mapKeys(t,function(e,t){return u[t]||t})}(t))}}}e.$inject=["gettext","CSV"],angular.module("c8y.ui").factory("csvExporterSvc",e)}();