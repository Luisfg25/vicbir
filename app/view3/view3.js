'use strict';

angular.module('myApp.view3',['youtube-embed'])
    
.controller('View3Ctrl', ['$scope',function($scope) {

	$scope.anotherGoodOne = 'https://www.youtube.com/watch?v=iVsY18yuPJA';
	$scope.videos=[
		{
			"link":"https://www.youtube.com/watch?v=zdnRmd1GDVU",
			"thumbnail":"http://img.youtube.com/vi/zdnRmd1GDVU/2.jpg",
			"title":"Venme a Buscar(con Henry Martinez)- Victoria Birchner"
		},{
			"link":"https://www.youtube.com/watch?v=iVsY18yuPJA",
			"thumbnail":"http://img.youtube.com/vi/iVsY18yuPJA/2.jpg",
			"title":"Victoria Birchner - Memoria del viento ( con Franco Luciani - Alejandro Szwarcman)- Victoria Birchner"
		},{
			"link":"https://www.youtube.com/watch?v=4K8SHsE-AgA",
			"thumbnail":"http://img.youtube.com/vi/4K8SHsE-AgA/2.jpg",
			"title":"Río de los pájaros (con Aníbal Sampayo)- Victoria Birchner "
		},{
			"link":"https://www.youtube.com/watch?v=D08pPG-HkWI",
			"thumbnail":"http://img.youtube.com/vi/4K8SHsE-AgA/2.jpg",
			"title":"El tímido (con Raúl Carnota) - Victoria Birchner"
		},{
			"link":"https://www.youtube.com/watch?v=osT5flWQyJA",
			"thumbnail":"http://img.youtube.com/vi/osT5flWQyJA/2.jpg",
			"title":"Lavandera Chaguanca (con Alejandro Carrizo, Nestor Soria, Lucho Hoyos) - Victoria Birchner"
		},{
			"link":"https://www.youtube.com/watch?v=Nba8ZUJng3g",
			"thumbnail":"http://img.youtube.com/vi/Nba8ZUJng3g/2.jpg",
			"title":"Donata Suárez (con Juan Falú - Carlos Herrera) - Juan Falú - Victoria Birchner "
		},{
			"link":"",
			"thumbnail":"",
			"title":""
		},{
			"link":"",
			"thumbnail":"",
			"title":""
		},{
			"link":"",
			"thumbnail":"",
			"title":""
		},{
			"link":"",
			"thumbnail":"",
			"title":""
		},{
			"link":"",
			"thumbnail":"",
			"title":""
		},{
			"link":"",
			"thumbnail":"",
			"title":""
		},{
			"link":"",
			"thumbnail":"",
			"title":""
		},

	]
}]);