/**
 * Created by giuse_000 on 19/11/2014.
 */
/**
 * Created by giuse_000 on 19/11/2014.
 */
angular.module("cwitter").factory('tweetService', ['$http', function($http){

    return{
        tweet : function(data){
            console.log(data);
            return $http.post("http://localhost:8080/Cwitter/user/tweet",data);

        }

    }




}])