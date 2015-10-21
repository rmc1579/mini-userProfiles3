var app = angular.module('userProfiles');

app.controller('MainController',['$scope', 'mainService', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(dataFromService) {
      //$scope.users = dataFromService.data.data;
        $scope.users = dataFromService;
    });
  };

  $scope.getUsers();

}]);
