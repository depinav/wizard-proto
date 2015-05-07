var wizardOne = angular.module('WizardOne', []);
wizardOne.controller('wizardOneCtrl', function($scope, $rootScope) {

  $scope.master = {
    name: "Ronny",
    pass: "1q2w3e",
    passconf: "1q2w3e",
    email: "ronihcohen@gmail.com",
  };

  $scope.longStage = 0;
  $scope.direction = 1;

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();

  $scope.isUnchanged = function(user) {
    return angular.equals(user, $scope.master);
  };

  $scope.forward = function(stage, user) {
  	$scope.direction = 1;
  	update(stage, user);
  }

  $scope.back = function(stage) {
    $scope.direction = 0;
    update(stage);
  };

  function update(nextStage, user) {
    $scope.master = angular.copy(user);
    $scope.selection = nextStage;
    // if (nextStage=="finish"){
    //   $scope.longStage = 1;
    // }
  };

});

export {wizardOne};