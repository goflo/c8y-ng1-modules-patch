"use strict";!function(){function e(t,e,n,i){var r,s=this,u=e.createEnum([{name:"NO_CONVERSION",label:i("No conversion"),value:""},{name:"IMPERIAL",label:i("Imperial"),value:"imperial"},{name:"METRIC",label:i("Metric"),value:"metric"}]);_.assign(s,{UNIT_TYPES:u.values(),$doCheck:function(){_.isEqual(s.user,r)||(s.loading=!0,t.current().then(function(e){var n=_.isEqual(e.userName,_.get(s,"user.userName"));_.set(s,"visible",function(e){return t.hasRole(e,"ROLE_INVENTORY_READ")&&t.hasRole(e,"ROLE_INVENTORY_ADMIN")}(e)&&n)}),n.get("unit",s.user).then(function(e){_.isUndefined(e)?_.set(s.user,"measurementUnit",u.NO_CONVERSION):_.set(s.user,"measurementUnit",_.find(u.values(),{value:e}))}).finally(function(){s.loading=!1}),r=s.user)},tooltip:i('Selected unit conversion will be used for displaying data. Select "No conversion" to see original units sent by devices.'),loading:!1})}e.$inject=["c8yUser","c8yBase","c8yUserPreferences","gettext"],angular.module("c8y.ui").component("c8yMeasurementUnitPreference",{controller:e,controllerAs:"vm",templateUrl:":::PLUGIN_PATH:::/ui/user/measurementUnitPreference.html",bindings:{user:"="}})}();