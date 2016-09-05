(function() {
    var underscore = angular.module('underscore', []);
	underscore.factory('_', ['$window', function($window) {
		return $window._;
	}]);
    var abApp = angular.module('abApp', ['underscore', 'ngRoute', 'abControllers']);
    abApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/app/partials/home.html',
                controller: 'abController as abCtrl'
            })
            .when('/add', {
                templateUrl: 'js/app/partials/add-address.html',
                controller: 'abController as abCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'js/app/partials/add-address.html',
                controller: 'abController as abCtrl'
            })
            .otherwise('/');
    }]);
}());