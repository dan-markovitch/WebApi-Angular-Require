require.config(
{
    urlArgs: 'bust=' + (new Date()).getTime(),
	paths:
	{
		angular: '../../Scripts/lib/angular/angular',
		angularRoute: '../../Scripts/lib/angular/angular-route',
		uiRouter: '../../Scripts/lib/angular/angular-ui-router',
		//angularMocks: '../../Scripts/lib/angular/angular-mocks',
		angularResource: '../../Scripts/lib/angular/angular-resource',
		jquery: 'https://code.jquery.com/jquery-1.10.2.min',
		bootstrap: '../../Scripts/lib/bootstrap',
		holder: '../../Scripts/lib/holder'
		//strings: 'static-strings'
		//text: '../../bower_components/requirejs-text/text'
	},
	shim:
	{
		'angular': { 'exports': 'angular' },
		'angularRoute': ['angular'],
		'bootstrap': ['jquery'],
        'uiRouter': ['angular'],
		//'angularMocks':
		//{
		//	deps: ['angular'],
		//	'exports': 'angular.mock'
		//},
		'angularResource': ['angular'],
	},
	priority: ["angular"]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require(['angular', 'app', 'routes', 'bootstrap', 'holder'], function (angular, app)
{
	'use strict';

	// not needed. possibly use for app name injection
	//var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function ()
	{
		angular.resumeBootstrap([app.name]);
	});
});
