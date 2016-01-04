'use strict';
angular.module('angular-seed.core.navbar.directive', []).directive('navigationBar', function () {
    return {
        templateUrl: 'modules/core/views/navbar.html',
        restrict: 'E'
    };
});