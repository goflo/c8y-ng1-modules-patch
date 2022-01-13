"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_unsupportedIterableToArray(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,i=new Array(r);e<r;e++)i[e]=t[e];return i}function _iterableToArrayLimit(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],i=!0,a=!1,n=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(e.push(o.value),!r||e.length!==r);i=!0);}catch(t){a=!0,n=t}finally{try{i||null==s.return||s.return()}finally{if(a)throw n}}return e}}function _arrayWithHoles(t){if(Array.isArray(t))return t}!function(){function t(y){function t(t){var r=this;(r.chart=t).addItem(r),r.series=[]}return t.prototype={indexPosition:function(){return this.chart.getAxisY().indexOf(this)},indexPositionInSide:function(){var t=this,r=t.orientation();return t.chart.getAxisYByOrientation(r).indexOf(t)},orientation:function(){return this.firstSeries().dataPoint.yAxisType||this.autoOrientation()},autoOrientation:function(){var e=this,t="left",r=e.chart.getAxisY(),i=r.indexOf(e),a=_.findIndex(r,function(t){var r=t.firstSeries().dataPoint.yAxisType;return t!==e&&(!r||"left"===r)});return-1<a&&a<i&&(t="right"),t},addSerie:function(t){this.series.push(t)},firstSeries:function(){return this.series[0]||{dataPoint:{}}},axis:function(){var e=this;e.strictValues=[];var i=d3.format(".2s");return d3.svg.axis().scale(e.scale()).orient(e.orientation()).ticks(6).tickFormat(function(t){var r={originalValue:t,formattedValue:4<String(t).length?i(t):t};return e.strictValues.push(r),r.formattedValue})},scale:function(){var t,r=_slicedToArray(this.series,1)[0];return r&&(t=r.scale()),t},remove:function(){this.chart.removeItem(this),this.el&&this.el.remove()},render:function(){var t=this,r=t.axis(),e=t.el,i=t.chart.box(),a=t.chart.margins,n=t.chart.sizes.yAxisWidth,o=a.t,s="left"===t.orientation(),l=(t.indexPositionInSide()+1)*n,c=s?a.l+l:i.width-a.r-l;if(!e){var u=t.chart.svg;t._id="axis".concat(String(Math.random()).substr(2)),t.el=u.append("g").attr({class:"yaxis axis",id:t._id}),e=t.el,t.circles=e.append("g").attr({class:"circles"}),t.label=e.append("text").style({fill:"#999","font-size":"10px"})}var d=s?-35:35,f=i.height/2,h=s?-90:90;t.label.attr({x:d,y:f,"text-anchor":"middle",transform:y.rotate(h,d,f)}),t.label.text(t.labelText()),e.attr("transform",y.translate(c,o)),e.call(r),0<i.height&&t.renderAdditionalElements()},renderAdditionalElements:function(){var t=this,r=_.uniqBy(t.strictValues,"formattedValue").length!==t.strictValues.length;t.renderCircles(r),r&&(t.reformatTickText(),t.renderStrictValues())},renderCircles:function(a){var n=this,t=n.chart,o=n.circles,s=n.el,r=n.series,l="right"===n.orientation()?35:-35,e=t.box(),i=t.margins,c=e.height-i.t-i.b-15;o.selectAll("circle").remove(),o.selectAll(".seriesColorLine").remove(),_.forEach(r,function(t,r){var e=t.dataPoint,i=o.append("circle").attr({cx:l,cy:c-7*r,r:5,fill:e.color});o.append("line").attr({x1:l,x2:0,y1:c-7*r,y2:c-7*r,style:"stroke:".concat(e.color,";stroke-width:2"),class:"seriesColorLine"}),a&&i.on("mouseover",function(){s.selectAll(".tick").attr({visibility:"hidden"}),n.chart.svg.append("use").attr({href:"#strictValues".concat(n._id),transform:s.attr("transform")})}).on("mouseout",function(){s.selectAll(".tick").attr({visibility:"visible"}),n.chart.svg.selectAll("use").remove()})})},reformatTickText:function(){var i=this,t=_slicedToArray(i.el.selectAll(".tick").select("text"),1)[0];_.forEach(t.slice(1,-1),function(t,r){var e=String(i.strictValues.slice(1,-1)[r].originalValue);4<e.length&&(t.innerHTML="…".concat(e.substr(-2)))})},renderStrictValues:function(){var i=this,t=i.el,r=_slicedToArray(t.selectAll(".tick"),1)[0],a=_.chain(r).map(function(t){return t.transform.baseVal.consolidate().matrix.f}).sortBy().reverse().value(),e=i.strictValues,n=6.25*Math.max.apply(Math,_toConsumableArray(e.map(function(t){return String(t.originalValue).length})))+20,o="right"===i.orientation()?-n:0;t.selectAll("g[strictValuesFor=".concat(i._id,"]")).remove();var s=t.append("g").attr({visibility:"hidden",strictValuesFor:i._id}).append("g").attr({id:"strictValues".concat(i._id)});_.forEach(e,function(t,r){var e=s.append("g").attr({class:"strictValue",strictValueFor:i._id});e.append("rect").attr({x:o,y:a[r]-10,width:n,height:20}),e.append("text").attr({x:10+o,y:a[r]+3,fill:"white"}).text(t.originalValue)})},labelText:function(){var t="",r=this.series;if(1===r.length){var e=_slicedToArray(r,1)[0].dataPoint;t=e.label+(e.unit?" [".concat(e.unit,"]"):"")}else t=_.uniqBy(_.filter(_.map(r,function(t){return t.dataPoint.unit}),_.identity)).join(" / ");return t}},t}t.$inject=["c8yChartCommon"],angular.module("c8y.core.measurements2").factory("c8yAxisY",t)}();