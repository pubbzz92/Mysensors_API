/**
 * Created by Pubudu on 2015-05-26.
 */
"use strict";
angular.module("msMenu").directive("msMenu",function(){

    return{
        scope : {

        },
        transclude :true,

        templateUrl: "ext-modules/msMenu/msMenuTemplate.html",
        controller:"msMenuController",
        link :function(scope,el,attr){

        }


    };
});
