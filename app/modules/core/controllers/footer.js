'use strict';
angular.module('angular-seed.core.footer.controller', []).controller('footerCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.vm = {};
    var self = this;
    $scope.openImpressumDialog = function() {
        angular.element('#impressum').openModal();
    }
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
