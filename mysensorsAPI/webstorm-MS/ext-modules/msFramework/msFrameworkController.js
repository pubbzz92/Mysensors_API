"use strict";

angular.module("msFramework").controller("msFrameworkController",
    ['$scope','$location','$window','$timeout','$rootScope',
        function ($scope,$location,$window,$timeout,$rootScope) {


            $scope.isMenuVisible=true;
            $scope.isMenuButtonVisible=false;
            $scope.showModal = false;

            $scope.$on("ms-menu-item-selected-event",function(evt,data){

                $scope.routeString=data.route;
                $location.path(data.route);
                checkWidth();
                broadcastMenuState();
                if($scope.isMenuButtonVisible){
                    showMsView();
                }

            });

        //handling window resize
            $($window).on('resize.msFramework', function () {
                $scope.$apply(function () {

                    checkWidth();
                    broadcastMenuState();

                });
            });

            $scope.$on("$destroy", function () {
                $($window).off("resize.msFramework"); // remove the handler added earlier
            });

            var checkWidth = function(){

                var width = Math.max($($window).width(),$window.innerWidth);
                $scope.isMenuVisible = (width >= 768);
               $scope.isMenuButtonVisible= !$scope.isMenuVisible;
            };


    //toggle button and message broadcast to msMenuController saying 'ms-menu-show'
            $scope.togClick = function() {


                    $scope.isMenuVisible = !$scope.isMenuVisible;
                    broadcastMenuState();
                    showMsView();
                    //$scope.$apply();

            };

            var broadcastMenuState = function () {
                $rootScope.$broadcast('ms-menu-show',
                    {
                        show: $scope.isMenuVisible

                    });
            };

            var showMsView=function(){
                angular.element(".toggle").toggleClass("on");
                if($scope.isMenuVisible){
                    angular.element('.ms-view').hide();
                }else{
                    angular.element('.ms-view').show();
                }
            };


            $scope.doClick = function(){

                $scope.showModal = !$scope.showModal;
                //alert($scope.showModal);

            };

            $scope.close = function(){

                $scope.showModal = false;

            };

            $scope.add = function() {
                $scope.close();
                //TODO: this can be used to add a new device to the database
                //so that it will be displayed through ng-repeat
        
                var image;
                var st;
                var Nmg;
                var Smg;
                if (angular.element('#sel1').val() == 'Smartphone') {
                    image = 'map';
                    st = 'Active';
                    Nmg = 'fa-mobile';
                    Smg = 'fa-toggle-on';
                
                } else if (angular.element('#sel1').val() == 'Raspberry-pi') {
                    image = 'rpi';
                    st = 'Active';
                    Nmg = 'fa-bug';
                    Smg = 'fa-toggle-on';
                
                }
                //this can be used to add a new device to the database
                //so that it will be displayed through ng-repeat
                $scope.dataItem = {
                    name: angular.element('#sel1').val(),
                    serial: angular.element('#tel').val(),
                    img: image,
                    status:st,
                    Nimg: Nmg,
                    Simg: Smg

                };
                
                    angular.element('#sel1').val('');
                    angular.element('#tel').val('');
                
                //alert(name);

                $rootScope.$broadcast('ms-add-device',
                    {
                        msg: $scope.dataItem

                    });
                //$('.dashboardItems').append('<h1 style="color: red">new device</h1>');

            };



            $timeout(function(){
                checkWidth();
                broadcastMenuState();
            }, 0);



        }
    ]);

