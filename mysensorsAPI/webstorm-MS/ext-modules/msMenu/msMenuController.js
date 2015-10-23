/**
 * Created by Pubudu on 2015-05-26.
 */
angular.module("msMenu").controller("msMenuController",
    ['$scope','$rootScope',

    function($scope,$rootScope){

        $scope.showMenu = true;
        this.getActiveElement = function () {
            return $scope.activeElement;
        };

        this.setActiveElement= function(el){
            $scope.activeElement=el;
        };
        this.setRoute=function(route){
            $rootScope.$broadcast("ms-menu-item-selected-event",
                {route:route});

        };
        $scope.$on('ms-menu-show', function(evt, data) {
            $scope.showMenu = data.show;


        });

}]);
