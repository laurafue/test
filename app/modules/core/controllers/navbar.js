'use strict';
angular.module('angular-seed.core.navbar.controller', []).controller('navbarCtrl', ['$scope', function($scope) {
    $scope.vm = {};
    var self = this;
    setTimeout(function() {
        //Trigger modal elements
        angular.element(".button-collapse").sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
    }, 0);
}]);
