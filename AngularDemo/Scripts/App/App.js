var app = angular.module('demoApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/Demo1', {
        controller: 'DemoController',
        templateUrl: 'Partials/Demo1.html'
    }).when('/Demo2', {
        controller: 'DemoController',
        templateUrl: 'Partials/Demo2.html'
    }).when('/Demo3', {
        controller: 'DemoController',
        templateUrl: 'Partials/Demo3.html'
    }).otherwise({ redirectTo: '/Demo1' });
});

app.controller('DemoController', function ($scope) {
});