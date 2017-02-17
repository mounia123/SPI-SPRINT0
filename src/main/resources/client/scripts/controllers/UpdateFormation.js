'use strict';

angular.module('app')
	.service('ServiceFormation3',[ '$http','$routeParams', function ($http,$routeParams) {
	var codeFormation = $routeParams.codeFormation;
	this.getOneFormation = function(callback){
		var url = "/formations/"+codeFormation;
		$http.get(url).then(function(response){
			callback(response.data);
		});
	};

	this.updateForamtion = function(formation) {
						formation["Content-Type"] = "application/json";
						var clientUrl = '/formations/update';
						var request = $http({
							method : "PUT",
							url : clientUrl,
							data : formation
						});
						request.success(
								function(response) {
							console.log(response);
						});
					}

}]);

angular.module('app')
  .controller('FormationUpdateCtrl', ['$scope','ServiceFormation3','ServiceFormation2',function ($scope, ServiceFormation3) {

  	$scope.formation = {};
  	$scope.update = function(){
  			ServiceFormation3.updateForamtion($scope.formation);
  	};
  	ServiceFormation3.getOneFormation(function (data) {
		$scope.formation = data;
	});
	
}]);