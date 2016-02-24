angular.module('places').factory("FriendsService",function($http, $q){

	return {
		getFriends:function(){

			var defer = $q;
			
			return $http({
			  method: 'GET',
			  url: 'results.json'
			}).then(function successCallback(response) {
			  return response.data.client;
			});
		}
	}

});