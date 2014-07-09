var myApp = angular.module('loginForm', []);

myApp.controller('loginController', ["$scope", "$window", "$http", function($scope, $window, $http) {
    $scope.submitFunction = function() {

          $http.defaults.headers.common.username = $scope.userName;
          $http.defaults.headers.common.password = $scope.password;

        $http({method: "POST", url: '/rest/login'}).success(function(data, status, headers, config) {
              if(headers('MyResult') == "Not Authorized") {
                $window.alert("Wrong username/password. Please try again");

              }
              else {
                  $window.location.href = "/dashboard.html";
              }

          }).
          error(function(data, status, headers, config) {
                $window.alert("Error");
          });


    }

}]);