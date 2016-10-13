'use strict';
// Declare app level module which depends on views, and components
angular.module('angular-seed', [
    'ui.router',
    //Controllers    
    'angular-seed.landingpage.controller',
    'angular-seed.project.controller',
    'angular-seed.impressum.controller',
    'angular-seed.core.navbar.controller',
    'angular-seed.core.sidenav.controller',
    'angular-seed.core.footer.controller',
    //Directives
    'angular-seed.core.navbar.directive',
    'angular-seed.core.sidenav.directive',
    'angular-seed.core.footer.directive',
    'angular-seed.project.project1.directive',
    'angular-seed.project.project2.directive',
    'angular-seed.project.project3.directive',
    'angular-seed.project.project4.directive',
    'angular-seed.project.project5.directive',
    'angular-seed.project.project6.directive'
]).config(function($stateProvider, $urlRouterProvider) {
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
        })
        .state('project1', {
            url: "/project1",
            templateUrl: "modules/project/views/project1.html",
            controller: "projectCtrl"
        })
        .state('project2', {
            url: "/project2",
            templateUrl: "modules/project/views/project2.html",
            controller: "projectCtrl"
        })
        .state('project3', {
            url: "/project3",
            templateUrl: "modules/project/views/project3.html",
            controller: "projectCtrl"
        })
        .state('project4', {
            url: "/project4",
            templateUrl: "modules/project/views/project4.html",
            controller: "projectCtrl"
        })
        .state('project5', {
            url: "/project5",
            templateUrl: "modules/project/views/project5.html",
            controller: "projectCtrl"
        })
        .state('project6', {
            url: "/project6",
            templateUrl: "modules/project/views/project6.html",
            controller: "projectCtrl"
        })
        .state('impressum', {
            url: "/impressum",
            templateUrl: "modules/impressum/views/impressum.html",
            controller: "impressumCtrl"
        });
}).config(["$locationProvider", function($locationProvider) {
    //$locationProvider.html5Mode(true);
}]).run(function($rootScope, $state, $location, $window) {
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
            function(event) {
                if (!$window.ga) {
                    return;
                }
                $window.ga('send', 'pageview', { page: $location.url() });
            });
});
