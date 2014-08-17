'use strict';

define(['app'], function (app) {
    requirejs([
        'controllers',
        'services',
        'directives',
        'filters',
        'routes'
        ], function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });
    });
});