export default angular.module('FormWizard', [])
.controller('formController', function($scope) {

    $scope.title = 'Hello World';
    $scope.processForm = function() {
        alert('Done');
    };
});