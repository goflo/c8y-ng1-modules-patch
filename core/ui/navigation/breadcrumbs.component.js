"use strict";!function(){function n(u,c,r,t,o){var n=_.debounce(function(){var n=o.get(c.path())||{},e=n.data?r.invoke(n.data):{};u.breadcrumbs=[],i(null,function(n){var e=t.when(n).then(a);return e._path=c.path(),e}(e))},10);function a(n){return _.union(n,o.getLiveBreadcrumbs())}function i(n,a){a.then(function(n){var e=n;if(c.path()===a._path){var r=o.getPreferredBreadcrumb();if(r&&e.length){var t=e[0][e[0].length-2];_.find([t],r)||(e=_.sortBy(e,function(n){return!_.find([n[n.length-2]],r)}))}u.breadcrumbs=e}})}u.$on("$routeChangeSuccess",n),o.$on("breadcrumbs",i),o.$on("preferredBreadcrumbChanged",n),o.$on("update",n)}n.$inject=["$scope","$location","$injector","$q","c8yBreadcrumbs"],angular.module("c8y.ui").component("c8yUiBreadcrumbs",{templateUrl:":::PLUGIN_PATH:::/ui/navigation/breadcrumbs.html",controller:n})}();