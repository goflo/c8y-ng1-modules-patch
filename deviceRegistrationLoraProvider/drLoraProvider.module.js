"use strict";!function(){function i(i){i.add({name:"lora",featureAppName:"actility",label:"Actility LoRa",flow:{single:["lora","finish"],multiple:["providers-list","lora","finish"]},registrationCfg:{showIfPermissions:{anyRole:["ROLE_INVENTORY_ADMIN","ROLE_INVENTORY_CREATE"]}}})}i.$inject=["c8yDeviceProvidersProvider"],angular.module("c8y.deviceRegistrationLora",["c8y.deviceRegistration"]).config(i)}();