"use strict";

angular.module("msFramework").directive("msFramework", function () {
    return {
        transclude: true,
        scope: {
            title : "@",
            subtitle : "@",
            icon : "@"

        },
        controller: "msFrameworkController",
        templateUrl: "ext-modules/msFramework/msFrameworkTemplate.html"
        
    };
});


