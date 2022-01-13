"use strict";!function(){function e(r,i,e,t){var a=i.url("service/impact"),n={method:"POST",url:"".concat(a,"/device"),silentError:!0},s={type:"object",properties:{protocol:{type:"string",title:t.getString("Protocol"),required:!0},identifier:{type:"string",title:t.getString("Identifier"),required:!0},serialNumber:{type:"string",title:t.getString("Serial number"),required:!0},address:{type:"string",title:t.getString("Address"),required:!0}}};return{PROTOCOLS:i.createEnum([{name:"MODBUS",value:"MBUS",label:e("M-Bus"),schema:_.merge({},s,{type:"object",properties:{additionalParams:{type:"object",properties:{IP:{type:"string",title:t.getString("IP"),required:!0},PORT:{type:"string",title:t.getString("Port"),required:!0}}}}}),form:[{key:["identifier"]},{key:["serialNumber"]},{key:["address"]},{key:["additionalParams","IP"]},{key:["additionalParams","PORT"]}]},{name:"LORA",value:"LoRa",label:e("LoRa"),schema:_.merge({},s,{type:"object",properties:{additionalParams:{type:"object",properties:{AppSKey:{type:"string",title:t.getString("Application session key"),required:!0},NwkSKey:{type:"string",title:t.getString("Network session key"),required:!0},AppKey:{type:"string",title:t.getString("Application key"),required:!0},AppEUI:{type:"string",title:t.getString("Global application ID"),required:!0}}}}}),form:[{key:["identifier"]},{key:["serialNumber"]},{key:["address"]},{key:["additionalParams","AppSKey"]},{key:["additionalParams","NwkSKey"]},{key:["additionalParams","AppKey"]},{key:["additionalParams","AppEUI"]}]},{name:"LWM2M",value:"LWM2M",label:e("LWM2M"),schema:_.merge({},s,{type:"object",properties:{additionalParams:{type:"object",properties:{pskIdentity:{type:"string",title:t.getString("Public key or identity"),required:!0},psk:{type:"string",title:t.getString("Secret key"),required:!0}}}}}),form:[{key:["identifier"]},{key:["serialNumber"]},{key:["address"]},{key:["additionalParams","pskIdentity"]},{key:["additionalParams","psk"]}]},{name:"VIDEO_ANALYTICS",value:"VA",label:e("Video analytics"),schema:_.merge({},s,{type:"object",properties:{additionalParams:{type:"object",properties:{streamURL:{type:"string",title:t.getString("Stream URL"),required:!0},latitude:{type:"string",title:t.getString("Latitude"),required:!0},longitude:{type:"string",title:t.getString("Longitude"),required:!0}}}}}),form:[{key:["identifier"]},{key:["serialNumber"]},{key:["address"]},{key:["additionalParams","streamURL"]},{key:["additionalParams","latitude"]},{key:["additionalParams","longitude"]}]},{name:"XIRGO_OBD",value:"XIRGO",label:e("Xirgo OBD"),schema:_.merge({},s,{type:"object",properties:{additionalParams:{type:"object",properties:{carrierName:{type:"string",title:t.getString("Network provider name"),required:!0}}}}}),form:[{key:["identifier"]},{key:["serialNumber"]},{key:["address"]},{key:["additionalParams","carrierName"]}]},{name:"NB_IOT_SGI",value:"NBIOT-SGI",label:e("NB IoT-SGI"),schema:_.merge({},s,{type:"object",properties:{additionalParams:{type:"object",properties:{IP:{type:"string",title:t.getString("IP"),required:!0},PORT:{type:"string",title:t.getString("Port"),required:!0},IMSI:{type:"string",title:t.getString("IMSI"),required:!0},SGIID:{type:"string",title:t.getString("Unique SGI interface identifier"),required:!0}}}}}),form:[{key:["identifier"]},{key:["serialNumber"]},{key:["address"]},{key:["additionalParams","carrierName"]}]}]),register:function(e){var t=_.assign({},n,{data:e});return r(t).then(i.getResData)}}}e.$inject=["$http","c8yBase","gettext","gettextCatalog"],angular.module("c8y.deviceRegistrationImpact").factory("deviceRegistrationImpactProviderService",e)}();