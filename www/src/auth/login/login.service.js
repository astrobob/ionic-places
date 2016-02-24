angular.module('places').factory("LoginService", function (FirebaseService, $q) {

	var logged = false;
	var defer = $q.defer;

	return {

		isAuth: function() {
			return logged ? defer.resolve() : defer.reject();
		},

		login: function(email,password) {
			return FirebaseService.login(email,password).then(function(success) {
				logged = true;
			});
		},

		signUp:function(email, password){
			return FirebaseService.signUp(email,password);
		}
	}

});