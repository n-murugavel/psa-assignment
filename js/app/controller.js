(function () {
    angular
        .module('abControllers', [])
        .controller('abController', ['$scope', '$log', '$http', abController]);
    function abController($scope, $log, $http) {
        var vm = this;
        $log.log('abController initialized!');
    }
}());