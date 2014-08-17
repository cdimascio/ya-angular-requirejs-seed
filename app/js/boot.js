'use strict';

require.config({
	paths: {
        async: "../bower_components/requirejs-plugins/src/async",
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
		text: '../bower_components/requirejs-text/text'
	},
	shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
    // Add additional dependencies
    'angular',
    'angularRoute',
    'app',
    'jquery',
    'bootstrap',
    'controllers',
    'services',
    'directives',
    'filters',
    'routes'
], function (angular) {
    angular.bootstrap(document, ['myApp']);
});

