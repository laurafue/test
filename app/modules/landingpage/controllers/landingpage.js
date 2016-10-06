'use strict';
angular.module('angular-seed.landingpage.controller', [])
    .controller('LandingPageCtrl', ["$scope", "$rootScope", function($scope, $root) {
        $scope.vm = {};
        var self = this;
        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }]);
