/**
 * Created by giuse_000 on 19/11/2014.
 */
/**
 * Created by giuse_000 on 19/11/2014.
 */
angular.module("cwitter").controller("tweetControler",["$scope","tweetService",function($scope,tweetService){

    $scope.tweet;
    $scope.user;

    $scope.tweet= function(){
        var data = {"user":$scope.user, "tweet":$scope.tweet};
        tweetService.tweet(data);



    }







}]);