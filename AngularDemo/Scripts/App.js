var app = angular.module('demoApp', ['ngRoute']);

app.value('nameValue', 'My dads name is value provider!');

app.factory('nameFactory', function() {
    return 'My dads name is factory provider!';
});

app.factory('todoFactories', function () {
    var workFactory = {};

    workFactory.getTodos = function() {
        return ["Say Hello", "Do Work", "Go to Microsoft", "End the day"];
    };

    return workFactory;
});

function Person() {
    this.name = 'My das name is service provider!';
}

app.service('nameService', [Person]);

app.config(function($routeProvider) {
    $routeProvider.when('/Demo1', {
        controller: 'DemoController',
        templateUrl : 'Partials/Demo1.html'
    }).when('/Demo2', {
        controller: 'DemoController',
        templateUrl : 'Partials/Demo2.html'
    }).when('/Demo3', {
        controller: 'DemoController',
        templateUrl: 'Partials/Demo3.html'
    }).when('/Demo4', {
        controller: 'AnotherDemoController',
        templateUrl: 'Partials/Demo4.html'
    }).when('/Value', {
        controller: 'ValueController',
        templateUrl: 'Partials/Value.html'
    }).when('/Factory', {
        controller: 'FactoryController',
        templateUrl: 'Partials/Factory.html'
    }).when('/Service', {
        controller: 'ServiceController',
        templateUrl: 'Partials/Service.html'
    }).otherwise({ redirectTo: 'Demo1' });
});

app.controller('DemoController',['$scope','todoFactories', function ($scope, todoFactories) {
    $scope.toDos = [];
    $scope.toDos = todoFactories.getTodos();
}]);

app.controller('ValueController', ['nameValue', function (nameValue) {
    this.nameValue = nameValue;
}]);
app.controller('FactoryController', ['nameFactory', function (nameFactory, $scope) {
    this.nameFactory = nameFactory;
}]);
app.controller('ServiceController', ['nameService', function(nameService) {
    this.nameService = nameService.name;
}]);
app.controller('AnotherDemoController', function($scope) {
    $scope.person = { name: 'Another Controller' };
});