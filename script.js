var app = angular.module("myToDoList", []); 
app.controller("toDoListController", function($scope) {

    $scope.todos = [];
    
    $scope.addTodo = function () {
        $scope.errortext = "";

        if (!$scope.addMe) {
            document.querySelector(".form-control").focus();
            return;
        }
        if ($scope.todos.indexOf($scope.addMe) == -1) {
            $scope.todos.push($scope.addMe);
            $scope.addMe = "";
        } 
        else {
            $scope.errortext = "This todo has been added";
        }
    }

    $scope.deleteTodo = function (x) {
        $scope.errortext = "";    
        $scope.todos.splice(x, 1);
    }

});