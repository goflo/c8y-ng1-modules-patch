"use strict";angular.module("c8y.ui").directive("onReadFile",function(){return{restrict:"A",require:["ngModel"],scope:!1,link:function(e,i,l,n){e.remove=function(){n[0].$setViewValue(null),i.val(null)},i.on("change",function(){if(this.files[0]){var e=new FileReader;e.readAsDataURL(this.files[0]),n[0].$setViewValue(this.files[0]),e.onload=function(e){var i=n[0].$viewValue;i.fileSrc=e.target.result,n[0].$setViewValue(i)}}})}}});