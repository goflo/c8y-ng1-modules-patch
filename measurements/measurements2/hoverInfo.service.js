"use strict";angular.module("c8y.core.measurements2").factory("c8yHoverInfo",function(){function e(e){var t=this;t._id=String(Math.random()).substr(2),e.addItem(t),t.chart=e,t.init()}function n(e,t){var a=moment(t);return"HOURLY"===e._aggregation?"".concat(a.format("ll")," ").concat(a.format("HH[:00]"),"-").concat(a.add(1,"hour").format("HH[:00]")):"MINUTELY"===e._aggregation?"".concat(a.format("ll")," ").concat(a.format("LT"),"-").concat(a.add(1,"minute").format("LT")):"DAILY"===e._aggregation?a.format("ll"):a.format("ll LTS")}return e.prototype={tplMain:$('<div class="c8y-chart-hover-box"></div>'),tplTime:$('<div class="clock"><i class="dlt-c8y-icon-clock-o"></i><span class="time"></span></div>'),tplRow:$('\n        <div class="series">\n          <div class="value-holder"><i class="dlt-c8y-icon-circle"></i><span class="label"></span><span class="value"></span></div>\n          <div class="time-holder"><i class="dlt-c8y-icon-clock-o"></i><span class="time"></span></div>\n        </div>\n      '),init:function(){var t=this,e=$("body");t.el=$("<div>").append(t.tplMain.clone()).find(".c8y-chart-hover-box");var a=t.el;t.el.append(t.tplTime.clone()),t.clock=a.find(".clock .time"),t.el.hide(),e.append(a),t.mouseMove=function(e){t._mx=e.pageX,t._my=e.pageY},t.chart.el.on("mousemove",t.mouseMove)},destroy:function(){this.el.remove()},render:function(e){var o=this,t=o.chart.series,i=o.el;if(!i.is(":hidden")){if(e){var a=n(o.chart,e);o.clock.text(a)}_.forEach(t,function(e){var t=e._hoverRow;if(!t){var a=o.tplRow.clone();e._hoverRow={el:a,circle:a.find(".dlt-c8y-icon-circle"),label:a.find(".label"),value:a.find(".value"),time:a.find(".time")},t=e._hoverRow,a.data("seriedata",e),i.append(a)}t.circle.css({color:e.dataPoint.color}),t.label.text(e.dataPoint.label),t.value.text(e.hoverValue()),"--"!==e.hoverTime()?t.time.text(n(o.chart,e.hoverTime())):t.time.text(e.hoverTime())}),i.find(".series").filter(function(){return!_.includes(t,$(this).data("seriedata"))}).remove()}},onMove:function(e,t){var a=this,o=a.chart;if(_.get(o,"selectedPoint.date")&&!o.mouseIn){var i=$(o.el).offset();a._mx=i.left+t+10,a._my=i.top}var n=a.el.width(),c=o.box().width<t+o.margins.l+n,r=window.scrollY+window.innerHeight,l=this.el.outerHeight(),s="auto",d=c?-($("body").width()-a._mx):a._mx+1,m=a._my+20;r<m+l&&(m=r-l);var v={left:c?s:0,right:c?0:s,transform:"translate(".concat(d,"px,").concat(m,"px)")};a.render(e),a.el.css(v)}},e});