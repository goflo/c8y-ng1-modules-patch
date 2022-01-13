"use strict";!function(){function t(e,n,t,a,i,o,r,l,c,p,s){function u(t){e.refreshLoading=!1,e.kpis=_.unionBy(e.kpis,t,"id"),e.paging=t.paging}function g(t){return t._measurement=i.humanizeFragment(t.c8y_Kpi.fragment||""),!0}function d(){e.refreshLoading=!0,a.list().then(i.createListFilter(g)).then(u)}function f(t,e){var n=e.c8y_Kpi;return!_.isUndefined(n["".concat(t,"RangeMin")])||!_.isUndefined(n["".concat(t,"RangeMax")])}function y(t,e){var n=e.c8y_Kpi,a=parseInt(n.min,0),i=parseInt(n.max,0),o=parseInt(n["".concat(t,"RangeMin")],0),r=function(t){return 100*t},l=(parseInt(n["".concat(t,"RangeMax")],0)-a)/(i-a);return{left:"".concat(r((o-a)/(i-a)),"%"),right:"".concat(r(1-l),"%")}}e.info=t,e.remove=function(t){return r({title:p("Delete data point"),body:s.getString('You are about to delete data point "{{kpiLabel}}". Do you want to proceed?',{kpiLabel:t.c8y_Kpi.label}),labels:{ok:p("Delete")},status:"danger"}).then(_.partial(a.remove,t)).then(_.partial(_.remove,e.kpis,t)).then(function(){l.success(p("Data point deleted."))})},e.showYellowBar=_.partial(f,"yellow"),e.showRedBar=_.partial(f,"red"),e.yellowBarStyle=_.partial(y,"yellow"),e.redBarStyle=_.partial(y,"red"),e.detail=function(t){n.path("/datapointlibrary/".concat(t.id))},e.refresh=d,e.loadNext=function(){e.paging.loading=!0,e.paging.next().then(u).finally(function(){e.paging.loading=!1})},d(),o.changeTitle({title:p("Data point library")}),c.hasAllRoles(["ROLE_INVENTORY_ADMIN"]).then(function(t){e.canCreate=t})}t.$inject=["$scope","$location","info","c8yKpi","c8yBase","c8yTitle","c8yModal","c8yAlert","c8yPermissions","gettext","gettextCatalog"],angular.module("c8y.parts.kpiAdmin").controller("KpiListCtrl",t)}();