define(['angular', 'app', 'angularRoute'], function (angular, app)
{
	'use strict';

	var myApp = app.config(['$routeProvider', '$provide', '$locationProvider', function ($routeProvider, $provide, $locationProvider) {

	    //$provide.decorator('$sniffer', function ($delegate) {
	    //    $delegate.history = false;
	    //    return $delegate;
	    //});

	    $routeProvider
            .when('/', {
                redirectTo: '/phones'
            })

	        .when('/phones', {
	            templateUrl: '../Web/Templates/partials/_phones.html',
	            controller: 'PhoneList'
	        })

	        .when('/phones/:phoneId', {
	            templateUrl: '../Web/Templates/partials/_phone-detail.html',
	            controller: 'PhoneDetail'
	        });
	        //.otherwise({
	        //    redirectTo: '/phones'
	        //});

	    
	    // enable html5Mode for pushstate ('#'-less URLs)
	    //$locationProvider.hashPrefix('!');
	    $locationProvider.html5Mode(true);

	}]);

	//var myApp = app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	//    $routeProvider
    //        .when('/', {
    //            redirectTo: '/phones'
    //        })
    //        .when('/phones', {
    //            templateUrl: '../Web/templates/partials/_phones.html',
    //            controller: 'PhoneList'
    //        })
    //        .when('/phones/:phoneId', {
    //            templateUrl: '../Web/templates/partials/_phone-detail.html',
    //            controller: 'PhoneDetail'
    //        })
    //        // removed other routes ... *snip
    //        .otherwise({redirectTo: '/phones'}
    //    );

	//    // enable html5Mode for pushstate ('#'-less URLs)
	//    $locationProvider.html5Mode(true);
	//    //$locationProvider.hashPrefix('!');

	//}]);

	return myApp;
});