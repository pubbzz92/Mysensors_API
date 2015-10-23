/**
 * Created by Pubudu on 2015-05-26.
 */
angular.module("msMenu").directive("msMenuGroup",function(){

    return{
        require:"^msMenu",
        transclude:true,
        scope:{
            label:"@",
            icon :"@"
        },
        templateUrl : "ext-modules/msMenu/msMenuGroupTemplate.html",
        link : function(scope,el,attr,ctrl){

            scope.isOpen=false;
            scope.closeMenu=function(){
                scope.isOpen=false;
            };
            scope.clicked=function(){
                scope.isOpen=!scope.isOpen;
            }

        }

    };
});
