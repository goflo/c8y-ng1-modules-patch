"use strict";!function(){function t(e,r){return e.listByUser().then(function(t){return e.getCurrent().then(function(e){return _.some(t,{contextPath:"openseamap"})||"tracking"===e.contextPath?L.tileLayer("//tiles.openseamap.org/seamark/{z}/{x}/{y}.png"):r.reject()})})}function e(e){this._baseLayers={},this._overlays={},this.addBaseLayer=function(e,t){this._baseLayers[e]=t},this.addOverlay=function(e,t){this._overlays[e]=t},this._getBaseLayers=function(n,s,a){return _.reduce(this._baseLayers,function(e,t,r){return e[r]=s.when(n.instantiate(t,a)),e},{})},this._getOverlays=function(n,s,a){return _.reduce(this._overlays,function(e,t,r){return e[r]=s.when(n.instantiate(t,a)),e},{})},this._getUserOverlayPreferences=function(e){return e.get("overlayPreferences").then(function(e){return e||{}})},this._setUserOverlayPreference=function(e,t,r){return this._getUserOverlayPreferences(e).then(function(e){return e[t.name]=r,e}).then(_.partial(e.set,"overlayPreferences"))},this.getBaseLayers=this._getBaseLayers.bind(this,e,{}),this.getOverlays=this._getOverlays.bind(this,e,{}),this.addOverlay("openseamap",t);var s=this;this.$get=["$injector","$q","c8yUserPreferences",function(t,r,n){return{getBaseLayers:function(e){return s._getBaseLayers(t,r,{mapApi:e})},getOverlays:function(e){return s._getOverlays(t,r,{mapApi:e})},getUserOverlayPreferences:function(){return s._getUserOverlayPreferences(n)},setUserOverlayPreference:function(e,t){return s._setUserOverlayPreference(n,e,t)}}}]}t.$inject=["c8yApplication","$q"],e.$inject=["$injector"],angular.module("c8y.ui").provider("c8yMapConfig",e)}();