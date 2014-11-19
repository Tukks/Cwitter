/**
 * Created by giuse_000 on 19/11/2014.
 */
angular.module("cwitter").factory('followerService', ['$http', function($http){

    return{
        follower : function(data){
            console.log(data);
            return $http.post("http://localhost:8080/Cwitter/user/follower",data);

        }

    }




}])