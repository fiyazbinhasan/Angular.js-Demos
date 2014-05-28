var genweb2App = angular.module('genweb2App', ['ngRoute', 'ngAnimate', 'ngResource']);

genweb2App.config(function ($routeProvider) {
    $routeProvider.when('/Persons', {
        controller: 'PersonsController',
        templateUrl: 'Partials/Persons.html'
    }).when('/Designations', {
        controller: 'PersonsController',
        templateUrl: 'Partials/Designations.html'
    }).when('/Add', {
        controller: 'PersonsController',
        templateUrl: 'Partials/Add.html'
    }).when('/Edit/:personId', {
        controller: 'EditController',
        templateUrl: 'Partials/Add.html'
    }).otherwise({ redirectTo: '/Persons' });
});