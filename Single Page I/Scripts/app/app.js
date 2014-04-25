define(['angular', 'filters', 'services', 'controllers', 'static-strings'], function (angular, filters, services, controllers, strings)
{
	'use strict';

	// Declare app level module which depends on: controllers, filters, and services

	var myApp = angular.module(strings.AppName, ['ngRoute', controllers.name, filters.name, services.name]);

	return myApp;
});

