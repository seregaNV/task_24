(function() {
    function MainController($scope, eF){
        $scope.show = false;
        $scope.data = eF.arr;
        $scope.click = function() {
            var len = $scope.data.length,
                check = true;
            for (var i = 0; i < len; i++) {
                if ($scope.name === $scope.data[i]) {
                    check = false;
                }
            }
            if (check && $scope.name) {
                $scope.data.push($scope.name);
                console.log('"' + $scope.name + '" is added.');
            } else {
                console.log('Item is already exists!');
            }
            console.log('arr: ', $scope.data);
        };
        $scope.remove = function(item) {
            console.log('"' + item + '" is removed.');
            var len = $scope.data.length;
            for (var i = 0; i < len; i++) {
                if (item === $scope.data[i]) {
                    $scope.data.splice(i, 1);
                }
            }
            console.log('arr: ', $scope.data);
        };
    }

    angular.module('app').controller('MainController', ["$scope", 'exampleFactory', MainController]);
})();