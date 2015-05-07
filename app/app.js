import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import * as ngAnimate from 'angular-animate';

import * as wizardOne from './pages/wizard1/wizard1.module';

angular.module('myApp', ['ui.router', 'ngAnimate', wizardOne.wizardOne.name])
.config(function($stateProvider, $urlRouterProvider) {
    
	let pagesPath = './app/pages/';
	$urlRouterProvider.otherwise('/');

	$stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/template/home.html',
            controller: 'myCtrl'
        })
        .state('wizard1', {
        	url: '/wizard1',
        	templateUrl: `${pagesPath}wizard1/template/wizard1.templ.html`,
            controller: `wizardOneCtrl`
        });		
})
.controller('myCtrl', function($scope, $location) {

    $scope.showWizard = function() {
    	// $location.path('');
    	alert(`I don't do anything yet!`);
    };
});