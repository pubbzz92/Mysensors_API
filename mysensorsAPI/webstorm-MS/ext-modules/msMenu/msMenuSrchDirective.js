/**
 * Created by Pubudu on 2015-05-26.
 */
angular.module("msMenu").directive("msMenuSrch",function(){

    return{
        require:"^msMenu",
        transclude: true,
        scope: {
            btnlabel: "@"
        },
        templateUrl:"ext-modules/msMenu/msMenuSrch.html",
        link : function(scope,el,attr,ctrl){

        }


    };
});
