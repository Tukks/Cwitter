/**
 * Created by giuse_000 on 19/11/2014.
 */
angular.module("cwitter").factory('loginService', ['$http', function($http){

    return{
        connect : function(data){
            console.log(data);
            return $http.post("http://localhost:8080/Cwitter/user/createUser",data);

        }

    }




}])