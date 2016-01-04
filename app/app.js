'use strict';
// Declare app level module which depends on views, and components
angular.module('angular-seed', [
    'ui.router',
    //Controllers    
    'angular-seed.landingpage.controller'  
    
    ]).config(function ($stateProvider, $urlRouterProvider) {
    //Check for authentication
    console.log("loaded")
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
    .state('landingpage', {
        url: "/",
        templateUrl: "modules/landingpage/views/landingpage.html",
        controller: "LandingPageCtrl"
    });
}).config(["$locationProvider", function ($locationProvider) {
        //$locationProvider.html5Mode(true);
    }]).run(function ($rootScope, $state, $location,$window) {
        $rootScope.globals = {
            images: GLOBALS.images,
            API: GLOBALS.API,
            loading: false,
            limit: 15,
            CONFIG: {
                headers: {
                    'Authorization': "",
                },
            }
        };        
        $rootScope
        .$on('$stateChangeSuccess',
            function(event){
                if (!$window.ga){
                    return;
                }
                $window.ga('send', 'pageview', { page: $location.url() });
            });
    });


