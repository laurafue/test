'use strict';
angular.module('angular-seed.core.navbar.controller', []).controller('navbarCtrl', ['$scope', '$location', '$anchorScroll', '$stateParams', function($scope, $location, $anchorScroll, $stateParams) {
    $scope.vm = {};
    var self = this;
    setTimeout(function() {
        angular.element('.button-collapse').sideNav({
                closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            });
    }, 0);
<<<<<<< HEAD
    return {
        restrict: 'A',
        link: function(scope, $elm, attrs) {
            scope.$on('$viewContentLoaded', function() {
                console.log('scrollAfterLoad Directive Loaded, $stateParams are: ', $stateParams);
                var idToScroll = attrs.href;
                var $target;
                if (idToScroll) {
                    $target = $(idToScroll);
                    // the -50 accounts for the top navbar which is fixed on the page and removed from pageflow
                    $("html,body").animate({ scrollTop: $target.offset().top - 50 }, "slow");
                }
            });
        }
    };
=======
>>>>>>> 330e921ece82d6f61008baf11dc9999e59200b64
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
