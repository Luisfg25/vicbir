(function(global){
	'use strict';
	var deps = window.deps = {
		blog : {
			scripts : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/blog_main.min.js"
			],
			dataBinded : {
						shareOptions : {
							"post_title":"",
							"post_url": ""
						},
						reqArgs : {
							"archives":"",
							"category":"",
							"search":"",
						},
						text : {
							loading1:"",
							loading2:"",
							loading3:"",
							searchTitle1:"",
							searchTitle2:"",
							searchText1:"",
							searchText2:"",
							searchLink:""
						}
			},
			images : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"blog/search.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"blog/no-results.png"
			]
		},
		clients: {
			scripts : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"component/Slider.js",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/client_main.min.js"
			],
			images : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"clients/client_sprites.png"
			]
		},
		contact:{
			scripts : [
				"https://api.tiles.mapbox.com/mapbox.js/v2.1.2/mapbox.js",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/contact_main.min.js"
			],
			style : [
				"https://api.tiles.mapbox.com/mapbox.js/v2.1.2/mapbox.css"
			],
			images : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/phone.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/mail.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/loc.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/tel.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/fax.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/transport.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/join.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"contact/join_hover.png",
			]
		},
		quatrecentquatre:{
			scripts : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/404_main.min.js"
			],
			images : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"404/404_sprite.png",
			]
		},
		home:{
			scripts : [
				/* why do we need that */
				//slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"script.js",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"loader.js",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"home.js",
			],
			images : []
		},
		legal:{
			scripts : [
				""
			]
		},
		open:{
			scripts : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"component/Slider.js",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/open_main.min.js",
			],
			images : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"open/illu-1.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"open/illu-2.png",
			]
		},
		soft:{
			scripts : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"script.js",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/soft_main.min.js"
			],
			images : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/sprite-1.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/sprite-2.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/sprite-3.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/sprite-4.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/sprite-5.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/sprite-6.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/sprite-7.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/face-1.png",
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"soft/face-2.png"
			]
		},
		staff:{
			scripts : [
				slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/staff_main.min.js"
			],
			images : []
		}
	}

	var TweenMax = window.TweenMax;

	function supports_history_api() {
 		return !!(window.history && history.pushState);
	}

	var canalClient = {
		mobile : window.Modernizr.touch,
		click : '',
		flagHome : true,
		history : supports_history_api()
	};

	if(!canalClient.mobile){
		canalClient.click = 'click';
	}else{
		canalClient.click = 'touchstart';
	}
	window.canalClient = global.canalClient = canalClient;

	$(document).on('ready',function(){
		var script = document.createElement("script");
		script.type = "text\/javascript";
		script.onerror = function(e){
			throw new URIError("The script " + e.target.src + " is not accessible.");
		};
		script.onload = function(data){
			window.navigationManager.initialize();
			$(document).on('click','header a,footer a:not(.social), a.blog_link',function(e){
				e.preventDefault();
				window.navigationManager.goToPage(this);
			})
		}
		document.head.appendChild(script, document.head);
		script.src = slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"component/navigationManager.js";

	})
	
})(window);