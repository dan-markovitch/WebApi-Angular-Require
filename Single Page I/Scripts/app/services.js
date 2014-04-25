define(['angular', 'angularResource', 'static-strings'], function (angular, angularResource, strings)
{
	'use strict';

	var myApp = angular.module(strings.Services, ['ngResource']);

	myApp.factory('Phone', ['$resource', function ($resource)
	{
		//return $resource('Data/phones/:phoneId.json', {}, {
		//	query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
		//});

		return $resource('/api/phone/Get/', {}, {
			query: { method: 'GET', params: { id: 'phones' }, isArray: true }
		});
	}]);

	return myApp;
	//angular.module('myApp.services', ['ngResource'])
	//	.factory('Phone', ['$resource',
	//		function ($resource) {
	//			return $resource('Data/phones/:phoneId.json', {}, {
	//				query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
	//			});
	//		}
	//	]);
});
