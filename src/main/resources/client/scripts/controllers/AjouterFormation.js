'use strict';

angular.module('app').controller(
		'FormationAjouterCtrl',
		[ '$scope', '$http', '$location', 'ServiceFormation',
				function($scope, $http, $location, ServiceAjouters) {
					$scope.data = {
						codeFormation : "",
						nomFormation : "",
						diplome : "",
						doubleDiplome : "",
						n0Annee : "",
						debutAccreditation : "",
						finAccreditation : ""
					}
					$scope.ajouterNouvelleFormation = function() {
						$scope.data["Content-Type"] = "application/json";
						var clientUrl = '/formations/ajouter';
						var request = $http({
							method : "POST",
							url : clientUrl,
							data : $scope.data
						});
						request.success(
								function(response) {
							console.log(response);
						});
					}
				}])