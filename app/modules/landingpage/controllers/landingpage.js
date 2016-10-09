'use strict';
angular.module('angular-seed.landingpage.controller', [])
    .controller('LandingPageCtrl', ["$scope", "$rootScope", function($scope, $root) {
        $scope.vm = {};
        var self = this;
        setTimeout(function() {
            angular.element('.button-collapse').sideNav();
        }, 0);
        $('.parallax').parallax();
        $scope.openProjectDialog = function(x) {
            angular.element('#project' + x).openModal();
        }
    }]);
