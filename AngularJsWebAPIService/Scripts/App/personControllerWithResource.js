
genweb2App.factory('peopleService', ['$resource', function ($resource) {
    return $resource("/api/PersonApi/:id", { id: "@id" },
    {
        "get": { method: "GET" },
        "save": { method: "POST" },
        "update": { method: "PUT" },
        "query": { method: "GET", isArray: true },
        "remove": { method: "DELETE" }
    });
}]);

genweb2App.controller('PersonsController', ['$scope', '$location', 'peopleService', function ($scope, $location, peopleService) {

    $scope.people = peopleService.query();

    $scope.addPerson = function () {
        peopleService.save($scope.newPerson);
        $scope.people = peopleService.query();
        $location.path('#/Persons');
    };

    $scope.deletePerson = function (person) {
        peopleService.remove({ Id: person.personId }, person);
        $scope.people = $scope.people.filter(function (p) {
            return p.personId !== person.personId;
        });
    };

}]);

genweb2App.controller('EditController', ['$scope', '$location', 'peopleService', '$routeParams', function ($scope, $location, peopleService, $routeParams) {
    var person = peopleService.get({ id: $routeParams.personId });
    $scope.newPerson = person;

    $scope.addPerson = function () {
        peopleService.update({ id: person.personId }, person);
        $location.path('#/Persons');
    };
    
}]);