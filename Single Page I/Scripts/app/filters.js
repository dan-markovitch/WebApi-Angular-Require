define(['angular', 'services', 'static-strings'], function (angular, services, strings)
{
	'use strict';

	/* Filters */

	var myApp = angular.module(strings.Filters, [services.name]);

	myApp.filter('checkmark', function ()
	{
		return function (input)
		{
			return input ? '\u2713' : '\u2718';
		};
	});

	return myApp;

	//angular.module('myApp.filters', ['myApp.services'])
	//	.filter('checkmark',
	//		function () {
	//			return function (input) {
	//				return input ? '\u2713' : '\u2718';
	//			};
	//		}
	//	);
});
