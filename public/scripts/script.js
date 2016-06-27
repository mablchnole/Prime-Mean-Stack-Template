var myApp = angular.module('myApp', []);

myApp.controller('mondayController', ['$scope', '$http', function($scope, $http){
  $scope.whatAreWeTryingToDo = function(){
    console.log('in whatAreWeTryingToDo ' + $scope.notATextArea);
  };
}]);
