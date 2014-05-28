var main = angular.module('main', ['ngRoute']);

main.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/DOT', {
        templateUrl: "Partials/DOT.html",
        controller: "DOTController"
    }).when('/Promises', {
        templateUrl: "Partials/Promises.html",
        controller: "PromisesController"
    }).otherwise({ redirectTo: '/DOT' });
}]);

main.controller('DOTController', function($scope) {
});
main.controller('PromisesController', function ($scope) {
});