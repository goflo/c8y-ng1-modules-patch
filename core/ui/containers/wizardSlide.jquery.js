"use strict";$.fn.extend({wizardSlide:function(){var i="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",e=$(this),n=e.parents(".c8y-wizard-content").eq(0),t=n.find(".c8y-wizard-panel"),a=n.find(".c8y-wizard-panel.active"),d=t.index(a),o=t.index(e),s=d<o?"slideOutLeft":"slideOutRight",c=d<o?"slideInRight":"slideInLeft";n.height(Math.max(e.outerHeight(),250)),a&&a.addClass("animated ".concat(s)).one(i,function(){a.removeClass("active animated ".concat(s))}),e.removeClass("slideOutRight").removeClass("slideOutLeft").addClass("animated ".concat(c)).one(i,function(){e.removeClass("animated ".concat(c)).addClass("active"),e.find("a").blur(),setTimeout(function(){$(window).trigger("resize")},100)})}}),$(window).resize(function(){$(".c8y-wizard-content").each(function(){var i=$(this),e=i.find(".c8y-wizard-panel.active");i.height(Math.max(e.outerHeight(),250))})});