angular.module('auctionbase', ['abServices']).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'app/partials/home.html'}).
		when('/category', {templateUrl: 'app/partials/category.html'}).
		when('/readme', {templateUrl: 'app/partials/readme.html'}).
		otherwise({redirectTo: '/'});
	}]);