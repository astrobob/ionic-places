angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://temet-facturation.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {
			auth.$authWithPassword({
              email: email,
              password: password
            }).then(function(authData) {
              return authData;
            }).catch(function(error) {
              console.error("Authentication failed:", error);
			});	
		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		}
	}

});