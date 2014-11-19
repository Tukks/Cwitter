/**
 * Created by giuse_000 on 19/11/2014.
 */
/**
 * Created by giuse_000 on 19/11/2014.
 */
angular.module("cwitter").factory('tweetService', ['$http', function($http){

    return{

        sendTweet : function(cweetText){

            console.log(cweetText);
            return $http.post("http://localhost:8080/Cwitter/cweet/sendCweet");
        }

    }




}])