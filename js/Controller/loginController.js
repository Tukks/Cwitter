angular.module("cwitter").controller("loginController",["$scope","loginService",function($scope,loginService){

    $scope.toto="coucou";
    $scope.login;
    $scope.password;
    $scope.connection= function(){
        var data = {"login":$scope.login,"password":$scope.password};
        loginService.connect(data)
            .success(function(){console.log("sucess")})
            .error(function(){console.log("error")});




    }







}]);
