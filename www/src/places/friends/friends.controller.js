angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService, $state) {
		$scope.clients = new Array();
		FriendsService.getFriends().then(function(data) {
			$scope.clients = data;
		});
		
		console.log($state.id);
	})
	.filter('capitalize', function() {
	    return function(input) {
	      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	    }
	});
