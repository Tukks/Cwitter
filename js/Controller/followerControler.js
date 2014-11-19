/**
 * Created by giuse_000 on 19/11/2014.
 */
angular.module("cwitter").controller("followerControler",["$scope","followerService",function($scope,followerService){

    $scope.user;
    $scope.follower= function(){
        var data = {"user":$scope.user};
        followerService.follower(data);



    }







}]);