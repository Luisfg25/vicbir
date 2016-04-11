(function($){
	'use strict';
	var navigationManager = function(){};

	navigationManager.prototype.initialize = function() {
		// Initialize variable
		window.lastState = [document.URL];
		this.url = document.URL;
		this.page = this.page = this.url.substring(0,this.url.search('/index.sls')).replace(slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/",'');;
		this.lang = false;
		this.back = false;
		this.$domShit = $('#request-container');
		this.$footer = $('footer');
		this.deps = {
			bgColor :{
				orange: ['#f27f5a', '#ed5063'],
				purple: ['#ed61d6', '#bf51f5'],
				green: ['#c0d253', '#8dc262'],
				blue: ['#45acdc', '#3378ad'],
				white: ['#ffffff', '#ffffff']
			},
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
				],
				class : "orange",
				bgColor : [
					'#f27f5a',
					'#ed5063'
				]
			},
			clients: {
				scripts : [
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"component/Slider.js",
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/client_main.min.js"
				],
				images : [
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"clients/client_sprites.png"
				],
				class : "orange",
				bgColor : [
					'#f27f5a',
					'#ed5063'
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
				],
				class : "purple",
				bgColor : [
					'#ed61d6',
					'#bf51f5'
				]
			},
			quatrecentquatre:{
				scripts : [
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/404_main.min.js"
				],
				images : [
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.img+"404/404_sprite.png",
				],
				class : "blue",
				bgColor : [
					'#45acdc',
					'#3378ad'
				]
			},
			home:{
				scripts : [
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"libs/preloadjs-0.4.1.min.js",
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"script.js",
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"loader.js",
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"home.js",
				],
				images : [],
				class : "white",
				bgColor : null
			},
			legal:{
				scripts : [
					""
				],
				images : [],
				class : "blue",
				bgColor : [
					'#45acdc',
					'#3378ad'
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
				],
				class : "green",
				bgColor : [
					'#c0d253',
					'#8dc262'
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
				],
				class : "blue",
				bgColor : [
					'#45acdc',
					'#3378ad'
				]
			},
			staff:{
				scripts : [
					slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+slsBuild.paths.jsDyn+"page/staff_main.min.js"
				],
				images : [],
				class : "blue",
				bgColor : [
					'#45acdc',
					'#3378ad'
				]
			}
		}

		// Initializing menu

		this.menuInitialize();

		// First page load
		if($('body').hasClass('home')){
			this.getScript('home');
		}else{
			var section = this.getClass($('.top-header')[0],1);
			this.getScript(section);
			$('footer.default').css({'display':'block'})
			this.menuUpdate(null,section.charAt(0).toUpperCase() + section.slice(1));
		}

		// Route 
		var context = this;
		var pushState = history.pushState;
		window.onpopstate = function(){
			context.goBack();
		}
		// history.pushState = function(state) {
		// 	if (typeof history.onpushstate == "function") {
		// 		history.onpushstate({state: state});
		// 	}
		// 	context.onHashChange();
		// 	return pushState.apply(history, arguments);
		// }

		this.currentPage = this.page;
		this.debug = true;
	};
	navigationManager.prototype.menuInitialize = function() {
		$('header').find('a').on('mouseenter', 1,this.menuAnim).on('mouseleave', 0,this.menuAnim);
		$('header').find('a.active').off('mouseenter',this.menuAnim).off('mouseleave',this.menuAnim);

		var $wrapperlinks = $('.wrapper-links');
		$('.mobile-menu').on(window.canalClient.click, function(){
			$wrapperlinks.addClass('active');
			TweenMax.to($wrapperlinks,'0.4', {alpha:1, ease:'easeIn'});
		});
		$('.overlay-menu').on(window.canalClient.click, function(){
			TweenMax.to($wrapperlinks,'0.2', {alpha:0, ease:'easeIn',
				onComplete:function(){
					$wrapperlinks.removeClass('active');
				}
			});
		});

		$('header a').on('click', function(){
			/* so dirty */
			if(window.canalClient.mobile && $(window).width() <= 768){
				TweenMax.to($wrapperlinks,'0.2', {alpha:0, ease:'easeIn',
					onComplete:function(){
						$wrapperlinks.removeClass('active');
					}
				});
			}
		});
	};
	navigationManager.prototype.menuAnim = function(e) {

		TweenMax.to($(e.target).find('.line-hover:not(.active)') ,'0.2', {scaleX:e.data, ease:'easeIn'});
	};
	navigationManager.prototype.menuUpdate = function(el,abs) {
		$('header a').removeClass('active');
		var context = this;
		if(el!=null){
			$(el).addClass('active');
			if($(el).hasClass('Blog')){
				TweenMax.to('.lang',.3,{'alpha':0,onComplete:function(){
					TweenMax.set('.lang',{cursor:'default'})
				}});
			}else{
				TweenMax.to('.lang',.3,{'alpha':1,onComplete:function(){
					TweenMax.set('.lang',{cursor:'pointer'})
				}});
			}
		}else if(this.page != ""){
			this.page = abs;
			$('.'+abs).addClass('active');
			if($('.'+abs).hasClass('Blog')){
				TweenMax.to('.lang',.3,{'alpha':0,onComplete:function(){
					TweenMax.set('.lang',{cursor:'default'});
				}});
			}else{
				TweenMax.to('.lang',.3,{'alpha':1,onComplete:function(){
					TweenMax.set('.lang',{cursor:'pointer'})
				}});
			}
		}
		TweenMax.to($('a:not(.active) .line-hover') ,'0.2', {scaleX:0, ease:'easeIn'});
		TweenMax.set($('a.active .line-hover'), {scaleX:1, ease:'easeIn'});
		$('header').find('a').off('mouseenter',this.menuAnim).off('mouseleave',this.menuAnim);
		$('header').find('a:not(.active)').on('mouseenter',1,this.menuAnim).on('mouseleave',0,this.menuAnim);
	};
	navigationManager.prototype.goToPage = function(elClicked,page,cb){
		if(this.back){
			this.back = false;
		}else{
			window.lastState.push(this.url);
		}
		if(elClicked!=null){
			this.getUrl(elClicked);
			this.menuUpdate(elClicked);
		}else{
			this.page = page;
			if(this.page.toLowerCase().search("blog") != -1){
				this.menuUpdate(null,"Blog");
			}else{
				this.menuUpdate(null,this.page);
			}
			this.url = slsBuild.site.protocol + "://" + slsBuild.site.domainName + "/" + page;
		}
		this.loaderPageInitializer(this.page.toLowerCase());
		this.navigateInitializer();
		var context = this ;

		TweenMax.to(this.$domShit,.3,{startAt:{alpha:1},alpha:0})
		TweenMax.set('#loader',{width:0});
		var request = $.ajax({
			method:'GET',
			url: context.url,
			xhr: function () {
				var xhr = new window.XMLHttpRequest();
				//Download progress
				xhr.addEventListener("progress", function (evt) {
					if (evt.lengthComputable) {
						var percentComplete = evt.loaded / evt.total;
						TweenMax.to('#loader',.2,{startAt:{alpha:1,display:'block'},width:Math.round(percentComplete * 40) + "%",ease:'easeIn'});
					}
				}, false);
				return xhr;
			},
			success: function(data){
				if (context.lang == true && context.page != "") {
					var head = $('<div />').html(data.substring(data.search('<head>')+6,data.lastIndexOf("</head>")));
					var dom = $('<div />').html(data.substring(data.search('<div id="request-container">')+28,data.search('<div id="loader')));
					$('#request-container',document).html(dom[0]);
					context.menuUpdate(null, context.page);
					context.getScript(context.page,function(){
						if(canalClient.history){
							window.history.replaceState({}, "", slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+ context.page.charAt(0).toUpperCase() + context.page.slice(1));
							window.history.pushState({},"",slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+ context.page.charAt(0).toUpperCase() + context.page.slice(1));
						}
						if(context.page == "home"){
							context.animLoaded(false);
						}else{
							context.animLoaded(true);
						}
					});
					context.url = slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+ context.page.charAt(0).toUpperCase() + context.page.slice(1);
					context.lang = false;
				}else if (context.url.search('Blog/') != -1) {
					var head = $('<div />').html(data.substring(data.search('<head>')+6,data.lastIndexOf("</head>")));
					var allDom = $('<div />').html(data.substring(data.search('<body class="inner">')+20,data.lastIndexOf("</body>")));
					var dom = $('<div />').html(data.substring(data.search('<section id="blog-content">')+27,data.lastIndexOf("</section>")));
					$('#blog-content',document).html(dom[0]);
					$('.top-header.blog',document).html($('.top-header .wrapper',allDom)[0]);
					TweenMax.to('#loader',1.65,{startAt:{alpha:1},alpha:0,ease:'easeIn',onComplete:function(){
						TweenMax.set("#loader",{display:'none'});
					}});
					if(context.url.search('Entry/') != -1){
						$('.top-header.blog',document).addClass('article');
						$('.blog.content',document).addClass('article');
						$("#twittterShare").on('click',function(e){
							e.preventDefault();
							blogManager.twitterShare(shareOptions);
						})
						$("#facebookShare").on('click',function(e){
							e.preventDefault();
							blogManager.facebookShare(shareOptions)
						})
						$("#linkedinShare").on('click',function(e){
							e.preventDefault();
							blogManager.linkedinShare(shareOptions)
						})
						window.blogManager.stop();
					}else{
						$('.top-header.blog',document).removeClass('article');
						$('.blog.content',document).removeClass('article');
					}
					context.menuUpdate(null, 'Blog');
					if(cb){
						cb();
					}
					if(canalClient.history){
						window.history.replaceState({}, "", slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/"+context.page);
						window.history.pushState({},"",context.url);
					}
					context.animLoaded('#request-container,footer');
				}else{
					if(context.url.search('Blog') != -1 || context.url.search('blog') != -1 ){
						$("header .Soft").html("<span class='line-hover' style='transform:matrix(0, 0, 0, 1, 0, 0)'></span>Produits");
						$("header .Staff").html("<span class='line-hover' style='transform:matrix(0, 0, 0, 1, 0, 0)'></span>Équipe");
						$("header .lang").html('<span>En​</span>');
						$("header .lang").data('lang','en');
						$("header .lang").attr('href',slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/Home/SwitchLang/lang/en");
						$("footer .logo>span").html('Bienvenue dans l\'ère de la responsive locomotion');
						$("footer .Soft").html("Produits");
						$("footer .Staff").html("Équipe");
						$("footer .copyright").html("Tout droit réservé © Copyright Canal TP 2014");
					}
					var head = $('<div />').html(data.substring(data.search('<head>')+6,data.lastIndexOf("</head>")));
					var dom = $('<div />').html(data.substring(data.search('<div id="request-container">')+28,data.search('<div id="loader')));
					$('#request-container',document).html($(dom).children());
					context.getScript(context.page.toLowerCase() ,function(){
						if(canalClient.history){
							window.history.replaceState({}, "", context.url);
							window.history.pushState({},"",context.url);
						}
						if(context.page == "home"){
							context.$domShit.removeAttr('style');
							context.animLoaded(false);
							window.canalClient.flagHome = true;
						}else{
							context.animLoaded(true);
						}
					});
				}
				context.currentPage = context.page;
				context.metaUpdate(context.url,$('title',head).html(),$('meta[property="og:image"]',head).attr('content'),$('meta[property="og:description"]',head).attr('content'))
			}
		})
	}
	navigationManager.prototype.loaderPageInitializer = function(page){
		window.scrollTo(0,0);
		if($('body').hasClass('home') && page != "lang"){
			var origneBg = this.getClass($('.backgrounds').find('.active')[0],0);
			var bg ='linear-gradient(to right, '+this.deps[page].bgColor[1]+' 0%, '+this.deps[page].bgColor[0]+' 29%, '+this.deps.bgColor[origneBg][0]+' 56%, '+this.deps.bgColor[origneBg][1]+' 100%)';
			var filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+this.deps.bgColor[origneBg][0]+"', endColorstr='"+this.deps.bgColor[origneBg][1]+"', GradientType=1)";
		}else if(page.search('blog/')!=-1||page.search('blog_')!=-1||page.search('blog-')!=-1||page.search('Blog/')!=-1){
			var origneBg = this.getClass($('.top-header')[0],1);
			var bg = 'linear-gradient(to right, '+this.deps[origneBg].bgColor[1]+' 0%, '+this.deps[origneBg].bgColor[0]+' 29%, '+this.deps[origneBg].bgColor[1]+' 56%, '+this.deps[origneBg].bgColor[0]+' 100%)';
			var filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+this.deps[origneBg].bgColor[1]+"', endColorstr='"+this.deps[origneBg].bgColor[0]+"', GradientType=1)";
		}else if(page == "home"){
			var origneBg = this.getClass($('.top-header')[0],1);
			var bg = 'linear-gradient(to right, #ffffff 0%, #ffffff 29%, '+this.deps[origneBg].bgColor[1]+' 56%, '+this.deps[origneBg].bgColor[0]+' 100%)';
			var filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+this.deps[origneBg].bgColor[1]+"', endColorstr='"+this.deps[origneBg].bgColor[0]+"', GradientType=1)";
		}else if(page == "lang"){
			if($('body').hasClass('home')){
				var origneBg = this.getClass($('.backgrounds').find('.active')[0],0);
				var bg = 'linear-gradient(to right, '+'#ffffff 0%, #ffffff 29%, '+this.deps.bgColor[origneBg][1]+' 56%, '+this.deps.bgColor[origneBg][0]+' 100%)';
				var filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+this.deps.bgColor[origneBg][1]+"', endColorstr='"+this.deps.bgColor[origneBg][0]+"', GradientType=1)";
			}else{
				var origneBg = this.getClass($('.top-header')[0],1).toLowerCase();
				var bg = 'linear-gradient(to right, '+this.deps[origneBg].bgColor[1]+' 0%, '+this.deps[origneBg].bgColor[0]+' 29%, '+this.deps[origneBg].bgColor[1]+' 56%, '+this.deps[origneBg].bgColor[0]+' 100%)';
				var filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+this.deps[origneBg].bgColor[1]+"', endColorstr='"+this.deps[origneBg].bgColor[0]+"', GradientType=1)";
			}
		}else{
			var origneBg = this.getClass($('.top-header')[0],1).toLowerCase();
			var bg = 'linear-gradient(to right, '+this.deps[page].bgColor[1]+' 0%, '+this.deps[page].bgColor[0]+' 29%, '+this.deps[origneBg].bgColor[1]+' 56%, '+this.deps[origneBg].bgColor[0]+' 100%)';
			var filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+this.deps[origneBg].bgColor[1]+"', endColorstr='"+this.deps[origneBg].bgColor[0]+"', GradientType=1)";
		}
		$('body').css({"background" : bg,backgroundPosition:'100% 100%','background-size':'350% 100%'});
		$('body').css({"background" : "-webkit-"+bg,backgroundPosition:'100% 100%','background-size':'350% 100%'});
		$('body').css({"background" : "-moz-"+bg,backgroundPosition:'100% 100%','background-size':'350% 100%'});
		$('body').css({"background" : "-o-"+bg,backgroundPosition:'100% 100%','background-size':'350% 100%'});
		$('body').css({"background" : "-ms-"+bg,backgroundPosition:'100% 100%','background-size':'350% 100%'});
		$('body').css({"background" : "-ms-"+bg,backgroundPosition:'100% 100%','background-size':'350% 100%'});
		$('body').css({"filter" : filter});
	}
	navigationManager.prototype.getUrl = function(el){
		// this.page = $(el)[0].classList[0].toLowerCase();
		this.page = this.getClass(el,0);
		this.url = $(el).attr('href');
	}
	navigationManager.prototype.navigateInitializer = function(){
		if(this.page == "lang"){
			this.langChange();
		}else if(this.page == "home"){
			$('body').addClass('home')
			$('body').removeClass('active')
			$('body').removeClass('inner')
		}else if(this.page == "blog_link"){
			this.page = this.url.replace(slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/",'');
			window.tempUrl = this.url;
		}else{
			$('body').removeClass('home')
			$('body').removeClass('active')
			$('body').addClass('inner')
		}
	}
	navigationManager.prototype.langChange = function(){
		this.lang = true;
		if(this.url.search('/fr')!=-1){
			$("header .Soft").html("<span class='line-hover' style='transform:matrix(0, 0, 0, 1, 0, 0)'></span>Produits");
			$("header .Staff").html("<span class='line-hover' style='transform:matrix(0, 0, 0, 1, 0, 0)'></span>Équipe");
			$("header .lang").html('<span>En​</span>');
			$("header .lang").data('lang','en');
			$("header .lang").attr('href',slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/Home/SwitchLang/lang/en");
			$("footer .logo>span").html('Bienvenue dans l\'ère de la responsive locomotion');
			$("footer .Soft").html("Produits");
			$("footer .Staff").html("Équipe");
			$("footer .copyright").html("Tout droit réservé © Copyright Canal TP 2014");
		}else{
			$("header .Soft").html("<span class='line-hover' style='transform:matrix(0, 0, 0, 1, 0, 0)'></span>Soft");
			$("header .Staff").html("<span class='line-hover' style='transform:matrix(0, 0, 0, 1, 0, 0)'></span>Team");
			$("header .lang").html('<span>Fr​</span>');
			$("header .lang").data('lang','fr');
			$("header .lang").attr('href',slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/Home/SwitchLang/lang/fr");
			$("footer .logo>span").html('Welcome to the era of responsive locomotion');
			$("footer .Soft").html("Soft");
			$("footer .Staff").html("Team");
			$("footer .copyright").html("All rights restricted © Copyright Canal TP 2014");
		}

		if(this.url.search('/Index.sls')!=-1){
			this.page = this.url.substring(0,this.url.search('/Index.sls')).replace(slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/",'');
		}else if(this.url.search('/index.sls')!=-1){
			this.page = this.url.substring(0,this.url.search('/index.sls')).replace(slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/",'');
		}else if($('body').hasClass('home')){
			this.page = 'Home';
		}else{
			if(this.page == "lang"){
				this.page = this.url.replace(slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/",'');
			}else{
				this.page = this.url.replace(slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/",'');
			}
		}
		if(this.page != "Home"){
			this.page = this.currentPage.charAt(0).toUpperCase() + this.currentPage.slice(1);
		}
		this.url += "/async/true/controller/"+this.page;
		this.page = this.page.toLowerCase();
	}
	navigationManager.prototype.getScript = function(page,cb) {
		if(window.canalClient.flagHome){
			window.canalClient.flagHome = false;
		}
		if(window.animationInterval){
			clearInterval(window.animationInterval);
		}
		$(window).off('scroll');
		$(document).off('touchstart');
		$(document).off('touchmove');
		var callback = cb;
		var loaded = 0;
		var toLoad = this.deps[page].scripts.length + this.deps[page].images.length;
		$('script,link').each(function() {
			if ($(this).hasClass('goatYeah')) {
				$(this).remove();
			}
		});

		if(this.deps[page].scripts.length > 0){
			for(var i=0;i<this.deps[page].scripts.length;i++){
				this.importScript(this.deps[page].scripts[i]);
				loaded += 1;
				if((loaded/toLoad) == 1){ 
					TweenMax.to('#loader',1.65,{startAt:{alpha:1},alpha:0,ease:'easeIn',onCompleteParams:[callback],onComplete:function(callback){
						TweenMax.set("#loader",{display:'none'});
					}});
					if (callback) {
						callback();
					};
				}
				TweenMax.to('#loader',.2,{startAt:{alpha:1,display:'block'},width:40+Math.round(loaded/toLoad*60)+'%',ease:'easeIn'});
			}
		}
		if(this.deps[page].images.length > 0){
			for(var i=0;i<this.deps[page].images.length;i++){
				this.importImage(this.deps[page].images[i]);
				loaded += 1;
				if((loaded/toLoad) == 1){ 
					TweenMax.to('#loader',1.65,{startAt:{alpha:1},alpha:0,ease:'easeIn',onCompleteParams:[callback],onComplete:function(callback){
						TweenMax.set("#loader",{display:'none'});
					}});
					if (callback) {
						callback();
					};
				}
				TweenMax.to('#loader',.2,{startAt:{alpha:1,display:'block'},width:40+Math.round(loaded/toLoad*60)+'%',ease:'easeIn'});
			}
		}
		if(this.deps[page].images.length == 0 &&  this.deps[page].scripts.length == 0){
			TweenMax.to('#loader',1.65,{startAt:{alpha:1},alpha:0,width:'100%',ease:'easeIn',onCompleteParams:[callback],onComplete:function(callback){
				TweenMax.set("#loader",{display:'none'});
			}});
			if (callback) {
				callback();
			};
		}
	};
	navigationManager.prototype.animLoaded = function(isFooter){
		var context = this;
		if($('body').hasClass('home')){
			TweenMax.to('body',2,{backgroundPosition:'0% 0%',ease:Expo.easeOut,onComplete:function(){
				TweenMax.to(context.$domShit,.6,{alpha:1,onComplete:function(){
					context.$domShit.removeAttr('style');
				}})
			}});
		}else if(this.url.search("Soft")!=-1||this.url.search("soft")!=-1){
			TweenMax.to('body',2,{backgroundPosition:'0% 0%',ease:Expo.easeOut});
			TweenMax.set(".top-header",{alpha:0,backgroundPosition:'0% 0%'})
			TweenMax.to(context.$domShit,.7,{startAt:{alpha:0},alpha:1,delay:1})
			TweenMax.to(".top-header",.7,{startAt:{alpha:0},alpha:1,ease:Expo.easeOut,delay:1.45,onComplete:function(){
				if(context.url.search('Clients')!=-1){
					window.clientsAnimatingSprite();
				}
			}})

		}else{
			TweenMax.to('body',2,{backgroundPosition:'0% 0%',ease:Expo.easeOut,onComplete:function(){
			}});
			TweenMax.set(context.$domShit,{alpha:1,y:"+="+$(window).height()})
			TweenMax.set(".top-header",{alpha:0,backgroundPosition:'0% 0%'})
			TweenMax.to(context.$domShit,.7,{startAt:{alpha:1,y:"+="+$(window).height()},y:0,ease:Expo.easeOut,delay:1})
			TweenMax.to(".top-header",.7,{startAt:{alpha:0},alpha:1,ease:Expo.easeOut,delay:1.45,onComplete:function(){
				if(context.url.search('Clients')!=-1){
					window.clientsAnimatingSprite();
				}
			}})
		}
		if(isFooter){
			this.$footer.css({'display':'block'})
		}else{
			this.$footer.css({'display':'none'})
		}
	}
	navigationManager.prototype.importScript = function(src, cb) {
		var script = document.createElement("script");
		script.type = "text\/javascript";
		script.className = "goatYeah";
		script.onerror = this.loadError;
		if (cb) { script.onload = cb; }
		document.head.appendChild(script, document.head);
		script.src = src;
	};
	navigationManager.prototype.importImage = function(src, cb) {
		var image = new Image();
		image.onerror = this.IloadError;
		if (cb) { image.onload = cb; }
		image.src = src;
	};
	navigationManager.prototype.loadError = function(e) {

		throw new URIError("The script " + e.target.src + " is not accessible.");
	};
	navigationManager.prototype.IloadError = function(e) {

		throw new URIError("The image " + e.target.src + " is not accessible.");
	};
	navigationManager.prototype.subNavInitializer = function(){
		$('.nav-context li').on('mouseenter', function(e){
			e.preventDefault();
			if(!$('.sub-nav').hasClass("open")){
				TweenMax.to('.sub-nav',.3,{startAt:{visibility:"visible",alpha:0,z:1},alpha:1,onComplete:function(){
					$('.sub-nav').addClass("open");
				}})
			}
			if($(this)[0].className == "sub-arch"){
				TweenMax.set('.archives',{display:'block'});
				TweenMax.set('.category',{display:'none'});
			}else if($(this)[0].className == "sub-cat"){
				TweenMax.set('.category',{display:'block'});
				TweenMax.set('.archives',{display:'none'});
			}else{
			}
			$('.content.blog,.top-header.blog').on('mouseenter', function(e){
				e.preventDefault();
				TweenMax.to('.sub-nav',.25,{startAt:{alpha:1,z:0},alpha:0,onComplete:function(){
					TweenMax.set('.sub-nav',{visibility:"hidden"});
					TweenMax.set('.category',{display:'none'});
					TweenMax.set('.archives',{display:'none'});
					$('.sub-nav').removeClass("open");
					$('.content.blog').off('mouseenter');
				}})
			})
		});

		$("body").on("click", ".sub-nav-context>ul.category>a", function(e){
			e.preventDefault();

			var page =  "Blog/Index/Category/"+$(this).data('target');
			var target = $(this).data('target');

			window.navigationManager.goToPage(null,page,function(){
				window.blogManager.request({
					category : target,
					archive : null,
					search : null
				},true)
			})

			return false;
		})
		$("body").on("click", ".sub-nav-context>ul.archives>a", function(e){
			e.preventDefault();

			var page =  "Blog/Index/Archives/"+$(this).data('target');
			var target = $(this).data('target');

			window.navigationManager.goToPage(null,page,function(){
				window.blogManager.request({
					category : null,
					archive : target,
					search : null
				},true)
			})

			return false;
		})
		$("#search").on("keyup",function(e){
			if (e.keyCode == 13) {
				e.preventDefault();

				var page =  "Blog/Index/Search/"+$(this).val();
				var target = $(this).val();

				window.navigationManager.goToPage(null,page,function(){
					window.blogManager.request({
						category : null,
						archive : null,
						search : target
					},true)
				})

				return false;
			}
		});
		$(".search>img").on("click",function(e){
			e.preventDefault();

			var page =  "Blog/Index/Search/"+$(this).siblings('input').val();
			var target = $(this).siblings('input').val();
			
			window.navigationManager.goToPage(null,page,function(){
				window.blogManager.request({
					category : null,
					archive : null,
					search : target
				},true)
			})

			return false;
		});
	}
	navigationManager.prototype.goBack = function(){
		if(window.lastState.length > 0){
			this.back = true;
			this.goToPage(null,window.lastState[window.lastState.length-1].replace(slsBuild.site.protocol+"://"+slsBuild.site.domainName+"/",''));
			window.lastState.splice((window.lastState.length-1), 1);
		}else{
			this.goToPage(null,'Blog');
		}
	}
	navigationManager.prototype.metaUpdate = function(url,title,image,description){
		$('title',window.head).html(title);
		$('meta.fbmeta',window.head).remove();
		var meta = document.createElement('meta');
		meta.property="og:url";
		meta.content = url;
		meta.className = "fbmeta";
		document.getElementsByTagName('head')[0].appendChild(meta);
		meta = document.createElement('meta');
		meta.property="og:title";
		meta.content = title;
		meta.className = "fbmeta";
		document.getElementsByTagName('head')[0].appendChild(meta);
		meta = document.createElement('meta');
		meta.property="og:image";
		meta.content = image;
		meta.className = "fbmeta";
		document.getElementsByTagName('head')[0].appendChild(meta);
		meta = document.createElement('meta');
		meta.property="og:description";
		meta.content = description;
		meta.className = "fbmeta";
		document.getElementsByTagName('head')[0].appendChild(meta);
	}
	navigationManager.prototype.getClass = function(el,position){
		var tempPosition = 0;
		for(var i = 0; i < position;i++){
			tempPosition = el.className.indexOf(" ", tempPosition + 1);
		}
		if(position == 0){
			if(el.className.search(" ")!=-1){
				var tempPositionLast =  el.className.indexOf(" ", 1);
			}else{
				var tempPositionLast =  el.className.length;
			}
			return el.className.substring(0,tempPositionLast);
		}else{
			if(el.className.indexOf(" ", tempPosition + 1) == -1){
				return el.className.substring((tempPosition+1),el.className.length);
			}else{
				var tempPositionLast =  el.className.indexOf(" ", tempPosition + 1);
				return el.className.substring((tempPosition+1),(tempPositionLast));
			}
		}
	}
	return window.navigationManager = new navigationManager();
})(jQuery);