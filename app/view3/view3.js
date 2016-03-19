'use strict';

angular.module('myApp.view3', [])

.controller('View3Ctrl', ['$scope','$http',function($scope,$http) {

	$scope.onFileSelect = function($files){
		$scope.message = "";
		for(var i=0;i<$files.lenght;i++){
			var file = $files[i];
			console.log(file);
			$scope.upload = $upload.upload({
				url: 'php/upload.php',
				method: 'POST',
				file: file
			}).success(function(data,status,header,config){
				$scope.message = data;
			}).error(function(data,status){
				$scope.message = data;
			});
		}
	};


}]);