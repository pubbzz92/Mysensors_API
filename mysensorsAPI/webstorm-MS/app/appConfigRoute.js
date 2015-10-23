"use strict";

angular.module('app').config(['$routeProvider', function ($routeProvider) {

    var routes = [
        {
            url: '/dashboard',
            config: {
                template: '<ms-dashboard></ms-dashboard>'
            }
        },
        {
            url: '/sensors',
            config: {
                template: '<ms-sensors></ms-sensors>'
            }
        },
        {
            url: '/rpi',
            config: {
                template: '<ms-rpi></ms-rpi>'
            }
        }
    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/dashboard' });

}]);
