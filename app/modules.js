angular.module('abServices', ['ngResource', 'ngCookies'])
.factory(
'Categories',
function ($resource) {
	return $resource(
		'api/categories.php', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
})
.factory(
'Time',
function ($resource) {
	return $resource(
		'api/time.php', {}, {
		query: {
			method: 'GET',
			isArray: false
		}
	});
})
.factory(
'Items',
function ($resource) {
	return $resource(
		'api/items.php', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
})
.factory(
'Bids',
function ($resource) {
	return $resource(
		'api/bids.php', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
})
.factory(
'Users',
function ($resource) {
	return $resource(
		'api/users.php', {}, {
		login: {
			method: 'POST',
			params: {login: 1}
		}
	});
})
.factory(
'Statistics',
function ($resource) {
	return $resource(
		'api/statistics.php', {}, {});
});