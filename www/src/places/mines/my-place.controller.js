"use strict";

angular.module('places')
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state) {

		//properties
		$scope.list = [];
		for (var i=0; i < 1000; i++) {
			$scope.list.push (
				{
					name:'Springfield',
					description:'Cool place to see with great robots inside',
					image:'http://lorempicsum.com/futurama/100/100'
				}
			)
		}

	});