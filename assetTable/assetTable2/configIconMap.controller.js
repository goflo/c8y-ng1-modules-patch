"use strict";angular.module("c8y.assets").controller("configIconMapCtrl",["$scope","$uibModalInstance","iconList","config","c8yComparisons",function(o,n,s,c,a){var i={value:"",comparison:"",icon:"",color:"#000000"};o.comparisons=a.Comparisons.values(),o.icons=s,o.addMap=function(o){o.push(_.cloneDeep(i))},o.onDelete=function(o,n){o.splice(n,1)},o.close=n.close,o.dismiss=n.dismiss,c.map||(c.map=[_.clone(i)]),c.map=_.map(c.map,function(o){return o.comparison=a.convertDeprecatedComparisonType(o.comparison),o}),o.iconMap=c}]);