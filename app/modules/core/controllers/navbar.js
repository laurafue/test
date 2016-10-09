'use strict';
angular.module('angular-seed.core.navbar.controller', []).controller('navbarCtrl', ['$scope', '$location', '$anchorScroll', '$stateParams', function($scope, $location, $anchorScroll, $stateParams) {
    $scope.vm = {};
    var self = this;
    setTimeout(function() {
        angular.element('.button-collapse').sideNav({
                closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            });
    }, 0);
    $scope.gotoAnchor = function(x) {
        var newHash = x;
        if ($location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash(x);
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
        }
    };
}]);
