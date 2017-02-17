'use strict';

angular.module('app').controller(
		'FormationDeleteCtrl',
		[ '$scope', '$http', '$location', 'ServiceFormation',
				function($scope, $http, $location, ServiceAjouters) {
					
					$scope.deleteFormation = function(codeFormation) {
						console.log("hiiiiiii");
						var clientUrl = '/formations/delete';
						var request = $http({
							method : "DELETE",
							url : clientUrl
							// data : $scope.data
						});
						request.success(
								function(response) {
							console.log(response);
						});
					}
				}])