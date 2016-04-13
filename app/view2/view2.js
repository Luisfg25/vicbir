'use strict';

angular.module('myApp.view2', [])

.controller('View2Ctrl', [function($scope) {
	$scope.notice=[
	{
		"title":"titulo1",
		"imagen":"",
		"descripcion":"desc1",
	},{
		"title":"tutylo2",
		"imagen":"",
		"descripcion":"desc2",
	},{
		"title":"titulo3",
		"imagen":"",
		"descripcion":"desc3",
	}
	]
}]);