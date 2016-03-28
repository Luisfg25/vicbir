'use strict';

angular.module('myApp.view3', [])

.controller('View3Ctrl', ['$scope','$http',function($scope,$http) {

	$scope.savePhoto = function() {
	$http.post('/php/db.php?action=addphoto',{
                'phototitle'     : $scope.phototitle, 
                'phototext'     : $scope.phototext, 
                'photocontent'    : $scope.photocontent
             
            }
        )
        .success(function (data, status, headers, config) {
          console.log("La foto se ha cargado correctamente!!");
         
        })
        .error(function(data, status, headers, config){
           console.log("Error enviando datos al php");
        });
    }

}]);