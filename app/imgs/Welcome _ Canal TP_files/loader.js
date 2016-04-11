(function(){
	'use strict';

	var TweenMax = window.TweenMax;
	var createjs = window.createjs;

	//----> LOADER
	var preload, preload_files;
	var $line = $('.loader-wrapper').find('.line'), $nbPercent = $('.nb-percent'), percent_result;

	if(window.Modernizr.touch){
		$('body').addClass('parallax-mobile');
		var url = slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+'load_ressources_mobile.json'
	}else{
		var url = slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+'load_ressources.json'
	}

	$.ajax({
		url: url,
		dataType: 'json',
		success: function(data){
			for (var i = 0; i < data.preload_files.length; i++) {
				data.preload_files[i].src = slsBuild.site.protocol+'://'+slsBuild.site.domainName+'/'+slsBuild.paths.img+data.preload_files[i].src;
			};
			preload_files = data.preload_files;
			setTimeout(function(){
				TweenMax.to('.anim-loader', 0.4, {scale:1, alpha:1, force3D:true, ease:'easeIn',
					onComplete : function(){
						setTimeout(function(){
							start_loading();
						},250);
					}
				});
			},500);
		}
	});
	function start_loading(){
		preload = new createjs.LoadQueue();
		preload.on('complete', loadComplete, window);
		preload.on('progress', loadProgress, window);
		preload.loadManifest(preload_files);
	}
	function loadProgress(result){
		percent_result = Math.round(result.loaded * 100);
		$nbPercent.html(percent_result);
		TweenMax.to($line, 0.6, {width:percent_result+'%'});
	}
	function loadComplete(){
		//create object when finished to load shapes
		setTimeout(function(){
			window.CanaltpStart.transitionContent();
		},1000);
	}
})();