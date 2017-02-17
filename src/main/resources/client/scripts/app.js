(function() {
	'use strict';
	var app = angular.module(
			'app',
			[ 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart',
					'mgo-angular-wizard', 'textAngular', 'ui.tree',
					'ngTagsInput']).config(
			[ '$routeProvider', function($routeProvider, $urlRouterProvider) {
				$routeProvider
					.when('/touteslesFormations', {
						templateUrl: 'views/indexFormation.html',
						controller: 'FormationMainCtrl',
						controllerAs: 'FormationMain'
					})
					.when('/formation/:codeFormation',{
						templateUrl: 'views/InfoFormation.html',
						controller: 'FormationInfoCtrl',
						controllerAs: 'FormationInfo'
					})
					.when('/ajouterFormation',{
						templateUrl: 'views/AjouterFormation.html',
						controller: 'FormationAjouterCtrl',
						controllerAs: 'FormationAjouter'
					})
					.when('/update/:codeFormation',{
						templateUrl: 'views/updateFormation.html',
						controller: 'FormationUpdateCtrl',
						controllerAs: 'FormationUpdate'
					});
					// .when('/delete/:codeFormation',{
					// 	templateUrl: 'views/infoFormation.html',
					// 	controller: 'FormationDeleteCtrl',
					// 	controllerAs: 'FormationDelete'
					// });
			}]
	);
}).call(this);




