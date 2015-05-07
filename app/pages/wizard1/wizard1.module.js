var wizardOne = angular.module('WizardOne', []);
wizardOne.controller('wizardOneCtrl', function($scope, $http) {

  $scope.master = {
    name: "Ronny",
    pass: "1q2w3e",
    passconf: "1q2w3e",
    email: "ronihcohen@gmail.com",
  };

  $scope.longStage = 0;
  
  $scope.update = function(user,nextStage) {
    $scope.master = angular.copy(user);
    $scope.direction = 1;
    $scope.selection = nextStage;
    if (nextStage=="stage3"){
      $scope.longStage = 1;
    }
  };
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();

  $scope.isUnchanged = function(user) {
    return angular.equals(user, $scope.master);
  };

  $scope.backTo = function(stage) {
    $scope.direction = 0;
    $scope.selection = stage;
  };
});

export {wizardOne};