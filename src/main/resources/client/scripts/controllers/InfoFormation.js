


'use strict';

angular.module('app')
	.service('ServiceFormation2',[ '$http','$routeParams', function ($http,$routeParams) {
	var codeFormation = $routeParams.codeFormation;
	this.getOneFormation = function(callback){
		var url = "/formations/"+codeFormation;
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};
}]);

angular.module('app')
  .controller('FormationInfoCtrl', ['$scope', '$http', 'ServiceFormation2',function ($scope,$http,ServiceFormation2) {

  	$scope.formation = null;
  	ServiceFormation2.getOneFormation(function (data) {
		$scope.formation = data;

		switch($scope.formation.diplome) {
			case 'L':
				$scope.formation.diplome = "Licence";
				break;
			case 'M':
				$scope.formation.diplome = "Master";
				break;
			case 'D':
				$scope.formation.diplome = "Doctorat";
				break;
		}
		switch($scope.formation.doubleDiplome) {
			case 'O':
				$scope.formation.doubleDiplome = "Oui";
				break;
			case 'N':
				$scope.formation.doubleDiplome = "Non";
				break;
		}
	});

	$scope.deleteFormation = function(codeFormation) {
						console.log("hiiiiiii");
						var clientUrl = '/formations/delete/'+codeFormation;
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

}]);