/**
 * Created by Pubudu on 2015-05-26.
 */
"use strict";
angular.module("msMenu").directive("msMenuItem",function(){
    return{

        require : '^msMenu',
        scope:{
            label :"@",
            icon:"@",
            route:"@"


        },
        templateUrl : "ext-modules/msMenu/msMenuItemTemplate.html",
        link : function(scope,el,attr,ctrl){
            scope.isActive = function () {
                return el === ctrl.getActiveElement();
            };

            el.on('click',function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function(){
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);

                }

                );

            });
        }


    };
});
