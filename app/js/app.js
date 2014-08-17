'use strict';

define([
	'angular',
	'angularRoute',
	], function (angular, filters) {
		return angular.module('myApp', [
			'ngRoute',
            'myApp.filters',
            'myApp.services',
            'myApp.directives',
            'myApp.controllers'
		]);
});
