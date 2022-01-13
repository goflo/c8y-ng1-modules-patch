"use strict";angular.module("c8y.cockpit.assetcount",[]).config(["c8yComponentsProvider","gettext",function(t,e){t.add({name:"Asset count",description:e("Displays the number of devices which are online or have critical alarms"),templateUrl:":::PLUGIN_PATH:::/views/component.html",previewImage:":::PLUGIN_PATH:::/img/asset-count-widget-pr.png",options:{noDeviceTarget:!0,noNewWidgets:!0},replaceWith:{component:"Html widget",config:["oldConfig",function(){return{html:'<table class="table table-condensed available-assets">                   <tbody>                     <tr>                       <td>{{"Groups" | translate}}</td>                       <td class="text-right">{{deviceGroupsCount}}</td>                     </tr>                     <tr>                       <td>{{"Devices" | translate}}</td>                       <td class="text-right">{{devicesCount}}</td>                     </tr>                     <tr>                       <td>{{"Online" | translate}}</td>                       <td class="text-right">{{onlineCount}}</td>                     </tr>                     <tr>                       <td>{{"With critical alarms" | translate}}</td>                       <td class="text-right">{{criticalDevicesCount}}</td>                     </tr>                   </tbody>                 </table>'}}]}})}]);