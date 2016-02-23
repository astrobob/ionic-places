angular.module('places')
	
	.config(function ($stateProvider) {

	  // Ionic uses AngularUI Router which uses the concept of states
	  // Learn more here: https://github.com/angular-ui/ui-router
	  // Set up the various states which the app can be in.
	  // Each state's controller can be found in controllers.js
	  $stateProvider

	    // setup an abstract state for the tabs directive
	    .state('tab', {
	      url: '/tab',
	      abstract: true,
	      templateUrl: 'src/menu/menu.html'
	    })

	    // Each tab has its own nav history stack:

	    .state('tab.myplace', {
	      url: '/myplace',
	      views: {
	        'tab-myplace': {
	          templateUrl: 'src/tabs/tab-myplace.html'
	        }
	      }
	    })

	    .state('tab.addplace', {
	      url: '/addplace',
	      views: {
	        'tab-addplace': {
	          templateUrl: 'src/tabs/tab-addplace.html'
	        }
	      }
	    })

	    .state('tab.aroundme', {
	      url: '/aroundme',
	      views: {
	        'tab-aroundme': {
	          templateUrl: 'src/tabs/tab-aroundme.html'
	        }
	      }
	    })

	    .state('tab.friends', {
	      url: '/friends',
	      views: {
	        'tab-friends': {
	          templateUrl: 'src/tabs/tab-friends.html'
	        }
	      }
	    })

	    .state('tab.more', {
	      url: '/more',
	      views: {
	        'tab-more': {
	          templateUrl: 'src/tabs/tab-more.html'
	        }
	      }
	    });
	});