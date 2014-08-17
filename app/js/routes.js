'use strict';

define(['app'], function (app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyController1'});
        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyController2'});
        $routeProvider.otherwise(
            {redirectTo: '/view1'});
    }]);
});
