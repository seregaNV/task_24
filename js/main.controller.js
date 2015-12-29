(function() {
    function MainController($scope, eF){
        $scope.name = '';
        $scope.show = false;
        $scope.data = eF.arr;
        $scope.click = function() {
            $scope.data.push($scope.name);
            console.log(eF.arr);
        };
    }
    angular.module('app').controller('MainController', ["$scope", 'exampleFactory', MainController]);
})();