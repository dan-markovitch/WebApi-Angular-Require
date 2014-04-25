define(['angular', 'services', 'static-strings'], function (angular, services, strings)
{
	'use strict';

	/* Controllers */

	var myApp = angular.module(strings.Controllers, [services.name]);

	myApp.controller('PhoneList', ['$scope', 'Phone', function ($scope, Phone)
	{
		$scope.phones = Phone.query();
		$scope.orderProp = 'age';
	}]);

	myApp.controller('PhoneDetail', ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone)
	{
		$scope.phone = Phone.get({ id: $routeParams.phoneId }, function (phone)
		{
			$scope.mainImageUrl = phone.images[0];
		});
		$scope.setImage = function (imageUrl)
		{
			$scope.mainImageUrl = imageUrl;
		}
	}]);

	return myApp;

	//return angular.module('myApp.controllers', ['myApp.services'])
	//	// Sample controller where service is being used
	//	.controller('MyCtrl1', ['$scope', 'Phone', function ($scope, Phone)
	//	{
	//		$scope.phones = Phone.query();
	//		$scope.orderProp = 'age';
	//	}])
	//	.controller('MyCtrl2', ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone)
	//	{
	//		$scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone)
	//		{
	//			$scope.mainImageUrl = phone.images[0];
	//		});
	//		$scope.setImage = function (imageUrl)
	//		{
	//			$scope.mainImageUrl = imageUrl;
	//		}
	//	}]);
});