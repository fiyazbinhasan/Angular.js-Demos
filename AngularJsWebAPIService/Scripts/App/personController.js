genweb2App.controller('PersonsController', function ($scope, $http, $templateCache) {
    $scope.persons = [];
    

    $http({
        method: 'GET',
        url: 'api/PersonApi'
    }).
    success(function (data, status, headers, config) {
        $scope.persons = data;
    }).
    error(function (data, status) {
        console.log("Request Failed");
    });

    $scope.updateModel = function (method, url) {
        $scope.method = method;
        $scope.url = url;
    };

    $scope.addPerson = function () {
        //$scope.persons.push({
        //    name: $scope.newPerson.name, designation: $scope.newPerson.designation
        //});
        $http.post('api/PersonApi', JSON.stringify($scope.newPerson),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (result) {
            $scope.persons.push(result.data);
        }, function () {
            alert("Can't save the new person");
        });
    };

    $scope.editPerson = function(person) {
        var data = {
            "personId": person.personId,
            "name": "updated person",
            "designation": "updated person"
        };
        $http({
            method: 'put',
            url: '/api/PersonApi/'+ person.personId,
            data: data
        }).then(function() {
            var index = $scope.persons.indexOf(person);
            if (~index) {
                $scope.persons[index] = data;
            }
        });
    };

    $scope.removePerson = function(person) {
        $http.delete('/api/PersonApi/' + person.personId).then(function() {
            $scope.persons = $scope.persons.filter(function (o) {
                return o.personId !== person.personId;
            });
        });
    };
});