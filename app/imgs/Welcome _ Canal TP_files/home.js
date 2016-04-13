(function(){
	'use strict';

	var TweenMax = window.TweenMax;
	var backgrounds = {
		selector:$('.backgrounds').find('div')
	};
	var orange = {
		selector:$('.orange')
	};
	var orange2 = {
		selector:$('.orange-2')
	};
	var purple = {
		selector:$('.purple')
	};
	var green = {
		selector:$('.green')
	};
	var blue = {
		selector:$('.blue')
	};
	var welcome = {
		selector:$('.welcome'),
		selector_0:$('.welcome').find('.scene-area'),
		selector_1:$('.welcome').find('.content-section'),
		y:0,
		y_1:0,
		opacity:0,
		start_opacity:1,
		opacity_1:0,
		start_opacity_1:2.4
	};
	var wrapperContent = {
		selector:$('.wrapper-content'),
		y:0,
		flag_sprite_1:false,
		flag_sprite_2:false,
		flag_sprite_3:false,
		flag_sprite_4:false
	};
	var first = {
		selector:$('.first'),
		selector_0:$('.first').find('.line-title'),
		selector_1:$('.first').find('h2'),
		selector_2:$('.first').find('p'),
		selector_3:$('.first').find('.wrapper-home'),
		selector_4:$('.sprite-section-1'),
		x_0:0,
		start_x_0:-215,
		x_1:0,
		start_x_1:-230,
		x_2:0,
		start_x_2:-245,
		opacity:0,
		start_opacity:-1.1,
		opacity_0:0,
		start_opacity_0:3.3
	};
	var second = {
		selector:$('.second'),
		selector_0:$('.second').find('.line-title'),
		selector_1:$('.second').find('h2'),
		selector_2:$('.second').find('p'),
		selector_3:$('.second').find('.wrapper-home'),
		selector_4:$('.sprite-section-2'),
		x_0:0,
		start_x_0:600,
		x_1:0,
		start_x_1:615,
		x_2:0,
		start_x_2:630,
		opacity:0,
		start_opacity:-3.2,
		opacity_0:0,
		start_opacity_0:5.4
	};
	var third = {
		selector:$('.third'),
		selector_0:$('.third').find('.line-title'),
		selector_1:$('.third').find('h2'),
		selector_2:$('.third').find('p'),
		selector_3:$('.third').find('.wrapper-home'),
		selector_4:$('.sprite-section-3'),
		x_0:0,
		start_x_0:-985,
		x_1:0,
		start_x_1:-1000,
		x_2:0,
		start_x_2:-1015,
		opacity:0,
		start_opacity:-5.6,
		opacity_0:0,
		start_opacity_0:7.6
	};
	var fourth = {
		selector:$('.fourth'),
		selector_0:$('.fourth').find('.line-title'),
		selector_1:$('.fourth').find('h2'),
		selector_2:$('.fourth').find('p'),
		selector_3:$('.fourth').find('.wrapper-home'),
		selector_4:$('.sprite-section-4'),
		x_0:0,
		start_x_0:1385,
		x_1:0,
		start_x_1:1400,
		x_2:0,
		start_x_2:1415,
		opacity:0,
		start_opacity:-8,
		opacity_0:0,
		start_opacity_0:9.8
	};


		$('.backdrop, .box').animate({'opacity':'.10'}, 300, 'linear');
		$('.box').animate({'opacity':'1.0'}, 300, 'linear');
		$('.backdrop, .box').css('display', 'block');
		$('.close').click(function(){
			close_box();
		});

		$('.backdrop').click(function(){
			close_box();
		});
		function close_box()
			{
				$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
					$('.backdrop, .box').css('display', 'none');
				});
			}


	/*-------------------------------------------------- CLASSES --------------------------------------------------*/
	function StartManager(){
		this.preloader = $('.preloader');
		this.loaderWrapper = $('.preloader').find('.loader-wrapper');
		this.loaderLeft = $('.preloader').find('.left');
		this.loaderMiddleTop = $('.preloader').find('.middle .top');
		this.loaderMiddleBottom = $('.preloader').find('.middle .bottom');
		this.loaderRight = $('.preloader').find('.right');

		StartManager.prototype.transitionContent = function(){
			var that = this;

			TweenMax.to(this.loaderWrapper, 0.5, {alpha:0});
			TweenMax.to(this.loaderMiddleTop, 0.55, {yPercent:'-100%', ease:'Expo.easeInOut', force3D:true, delay:0.5,
				onComplete : function(){
					that.animTypo();
				}
			});
			TweenMax.to(this.loaderMiddleBottom, 0.55, {yPercent:'100%', ease:'Expo.easeInOut', force3D:true, delay:0.5});

			TweenMax.to(that.loaderLeft, 1, {xPercent:'-100%', ease:'Expo.easeInOut', delay:0.9, force3D:true});
			TweenMax.to(that.loaderRight, 1, {xPercent:'100%', ease:'Expo.easeInOut', delay:0.9, force3D:true,
				onComplete : function(){
					that.preloader.addClass('hide');
				}
			});
		};

		StartManager.prototype.animTypo = function(){
			var that = this;
			var $spanSelector = $('.welcome').find('.anim-font');

			TweenMax.to('.welcome h1', 1.4, {y:0, ease:'easeIn', force3D:true});

			setTimeout(function(){
				that.spriteAnimIntro();
			},800);

			TweenMax.to($spanSelector.eq(0), 1, {alpha:1, ease:'easeIn'});
			TweenMax.to($spanSelector.eq(1), 1, {alpha:1, ease:'easeIn', delay: 0.125});
			TweenMax.to($spanSelector.eq(2), 1, {alpha:1, ease:'easeIn', delay: 0.25});
			TweenMax.to($spanSelector.eq(3), 1, {alpha:1, ease:'easeIn', delay: 0.375});
			TweenMax.to($spanSelector.eq(4), 1, {alpha:1, ease:'easeIn', delay: 0.50});
			TweenMax.to($spanSelector.eq(5), 1, {alpha:1, ease:'easeIn', delay: 0.625});
			TweenMax.to($spanSelector.eq(6), 1, {alpha:1, ease:'easeIn', delay: 0.75});
			TweenMax.to($spanSelector.eq(7), 0.5, {alpha:1, ease:'easeIn', delay: 0.875});
		};

		StartManager.prototype.spriteAnimIntro = function(){
			var heightAnim = 0, i = 0;
			var $spriteImg = $('.welcome').find('.sprite-area').find('.sprite-intro');
			var $uiScroll = $('.scroll-ui');
			var $loopElements = $('.loop-elements');

			function runAnim(){
				var myInterval = setInterval(function(){
					heightAnim = -407 * i;
					i++;
					TweenMax.set($spriteImg, {y:heightAnim, force3D : true});

					if(i === 52){
						clearInterval(myInterval);
					}
				},30);
			}

			TweenMax.to($loopElements, 2, {alpha:1, delay:1.4});

			TweenMax.to('.scroll-ui', 0.6, {alpha:1, delay:0.2,
				onComplete : function(){
					runAnim();
					$uiScroll.addClass('active');

					$('body').addClass('active');
					$window.trigger('resize');
				}
			});
		};

		StartManager.prototype.spriteAnim = function(selector, pixels, frame, obj){
			var heightAnim = -pixels * obj.state, i = obj.state;

			clearInterval(obj.val);
			obj.val = setInterval(function(){
				obj.state = i;
				heightAnim = -pixels * i;
				i++;
				TweenMax.set(selector, {y:heightAnim, force3D : true});

				if(i === frame){
					clearInterval(obj.val);
				}
			},30);
		};

		StartManager.prototype.resetSpriteAnim = function(selector, pixels, obj){
			var heightAnim = -pixels * obj.state, i = obj.state;

			clearInterval(obj.val);
			obj.val = setInterval(function(){
				obj.state = i;
				heightAnim = -pixels * i;
				i--;
				TweenMax.set(selector, {y:heightAnim, force3D : true});

				if(i === 0){
					clearInterval(obj.val);
				}
			},20);
		};
	}

	function NavDotsManager(){
		this.dots = $('.dots');
		this.goToScroll = 0;

		NavDotsManager.prototype.goToSection = function(index){
			this.goToScroll = index * 3000;
			window.scroll(0,this.goToScroll);
			this.activeDot(index);
		};
		NavDotsManager.prototype.goToSectionMobile = function(index){
			this.goToScroll = index * 1500;
			scrolled = this.goToScroll;
			this.activeDot(index);
		};
		NavDotsManager.prototype.activeDot = function(index){
			this.dots.removeClass('active');
			this.dots.eq(index).addClass('active');
		};
	}

	function LoopSpriteManager(){
		this.plane = $('.plane').find('.sprite-spe');
		this.planeHeight = 89;
		this.planeFrame = 62;
		this.planeCurrent = 1;

		this.bike = $('.bike').find('.sprite-spe');
		this.bikeHeight = 88;
		this.bikeFrame = 44;
		this.bikeCurrent = 1;

		this.walker = $('.walker').find('.sprite-spe');
		this.walkerHeight = 88;
		this.walkerFrame = 22;
		this.walkerCurrent = 1;

		var calcPlane = 0, calcBike = 0, calcWalker = 0;
		LoopSpriteManager.prototype.loopPlane = function(){
			calcPlane = -this.planeHeight * this.planeCurrent;
			TweenMax.set(this.plane, {y:calcPlane, force3D : true});
			this.planeCurrent++;

			if(this.planeCurrent === this.planeFrame){
				this.planeCurrent = 1;
			}
		};
		LoopSpriteManager.prototype.loopBike = function(){
			calcBike = -this.bikeHeight * this.bikeCurrent;
			TweenMax.set(this.bike, {y:calcBike, force3D : true});
			this.bikeCurrent++;

			if(this.bikeCurrent === this.bikeFrame){
				this.bikeCurrent = 1;
			}
		};
		LoopSpriteManager.prototype.loopWalker = function(){
			calcWalker = -this.walkerHeight * this.walkerCurrent;
			TweenMax.set(this.walker, {y:calcWalker, force3D : true});
			this.walkerCurrent++;

			if(this.walkerCurrent === this.walkerFrame){
				this.walkerCurrent = 1;
			}
		};
	}

	window.CanaltpStart = new StartManager();
	var myLoopManager = new LoopSpriteManager();

	/*-------------------------------------------------- EVENTS --------------------------------------------------*/
	/*parallax on mobile or desktop*/
	var flag_first_scroll=true, scrolled=0;
	var sauvScroll = 0, calcScroll = 0, touchMove = 0;

	var moving_x = 0, moving_y = 0;
	$(window).on('mousemove',function(e){
		moving_x = (e.clientX - windowWidthHalf);
		moving_y = (e.clientY - windowHheightHalf);
	});

	var windowWidthHalf = $(window).width()/2,windowHheightHalf = $(window).height()/2;
	$(window).on('resize',function(){
		windowWidthHalf = $(window).width()/2;
		windowHheightHalf = $(window).height()*5;
	});

	if(!window.canalClient.mobile){
		$(window).on('scroll',function(){
			//BUGFIX
			if(flag_first_scroll){
				flag_first_scroll=false;
				window.scroll(0,0);
			}
			scrolled = $(this).scrollTop();
		});
	}else{
		$(document).on('touchstart', function(e){
			sauvScroll = e.originalEvent.changedTouches[0].pageY*2.5;
		});

		$(document).on('touchmove', function(e){
			e.preventDefault();
			touchMove = e.originalEvent.changedTouches[0].pageY*2.5;
			calcScroll = sauvScroll - touchMove;

			if(calcScroll > 0){
				scrolled += Math.abs(calcScroll);
			}else{
				scrolled -= Math.abs(calcScroll);
			}
			scrolled = betweenVal(0,calc_height,scrolled);

			sauvScroll = touchMove;
		});
	}

	var $usualNav = $('.usual-nav'), calc_height = 0, $window = $(window), $footer = $('footer.home');
	if(!window.canalClient.mobile){
		$(window).on('resize',function(){
			calc_height = (3000*4) + $window.height() + Math.floor((($footer.outerHeight()/$window.height())*3000));
			$usualNav.height(calc_height);
		});
	}else{
		$(window).on('resize',function(){
			calc_height = (1500*4) + Math.floor((($footer.outerHeight()/$window.height())*1500));
		});
	}


	var myNav = new NavDotsManager();
	$('.scroll-ui').on(window.canalClient.click, function(){
		flag_first_scroll = false;
		if(!window.canalClient.mobile){
			myNav.goToSection(1);
		}else{
			myNav.goToSectionMobile(1);
		}
	});
	$('.dots-area').on(window.canalClient.click, function(){
		flag_first_scroll = false;
		if(!window.canalClient.mobile){
			myNav.goToSection($(this).index());
		}else{
			myNav.goToSectionMobile($(this).index());
		}
	});
	var count=0;
	var intervalId1 = {val: false, state:0};
	var intervalId2 = {val: false, state:0};
	var intervalId3 = {val: false, state:0};
	var intervalId4 = {val: false, state:0};
	/*-------------------------------------------------- FUNCTIONS --------------------------------------------------*/
	function scroll(){
		/* loop sprite */
		if(count%2){
			myLoopManager.loopPlane();
			myLoopManager.loopBike();
			myLoopManager.loopWalker();
		}
		count++;

		/* calculation */
		welcome.opacity = roundTwo(0.1 * (scrolled/-1250 - welcome.opacity + welcome.start_opacity) + welcome.opacity);
		welcome.opacity_1 = roundTwo(0.1 * (scrolled/-800 - welcome.opacity_1 + welcome.start_opacity_1) + welcome.opacity_1);
		welcome.y = roundTwo(0.1 * (scrolled/-45 - welcome.y) + welcome.y);
		welcome.y_1 = roundTwo(0.1 * (scrolled/15 - welcome.y_1) + welcome.y_1);

		wrapperContent.y = roundTwo(0.1 * (scrolled/-30 - wrapperContent.y) + wrapperContent.y);

		first.x_0 = maxVal(0,roundTwo(0.1 * (scrolled/8 - first.x_0 + first.start_x_0) + first.x_0));
		first.x_1 = maxVal(0,roundTwo(0.1 * (scrolled/8 - first.x_1 + first.start_x_1) + first.x_1));
		first.x_2 = maxVal(0,roundTwo(0.1 * (scrolled/8 - first.x_2 + first.start_x_2) + first.x_2));
		first.opacity = maxVal(1, roundTwo(0.1 * (scrolled/1350 - first.opacity + first.start_opacity) + first.opacity));
		first.opacity_0 = minVal(0, roundTwo(0.1 * (scrolled/-1400 - first.opacity_0 + first.start_opacity_0) + first.opacity_0));

		second.x_0 = minVal(0,roundTwo(0.1 * (scrolled/-8 - second.x_0 + second.start_x_0) + second.x_0));
		second.x_1 = minVal(0,roundTwo(0.1 * (scrolled/-8 - second.x_1 + second.start_x_1) + second.x_1));
		second.x_2 = minVal(0,roundTwo(0.1 * (scrolled/-8 - second.x_2 + second.start_x_2) + second.x_2));
		second.opacity = maxVal(1, roundTwo(0.1 * (scrolled/1350 - second.opacity + second.start_opacity) + second.opacity));
		second.opacity_0 = minVal(0, roundTwo(0.1 * (scrolled/-1400 - second.opacity_0 + second.start_opacity_0) + second.opacity_0));

		third.x_0 = maxVal(0,roundTwo(0.1 * (scrolled/8 - third.x_0 + third.start_x_0) + third.x_0));
		third.x_1 = maxVal(0,roundTwo(0.1 * (scrolled/8 - third.x_1 + third.start_x_1) + third.x_1));
		third.x_2 = maxVal(0,roundTwo(0.1 * (scrolled/8 - third.x_2 + third.start_x_2) + third.x_2));
		third.opacity = maxVal(1, roundTwo(0.1 * (scrolled/1350 - third.opacity + third.start_opacity) + third.opacity));
		third.opacity_0 = minVal(0, roundTwo(0.1 * (scrolled/-1400 - third.opacity_0 + third.start_opacity_0) + third.opacity_0));

		fourth.x_0 = minVal(0,roundTwo(0.1 * (scrolled/-8 - fourth.x_0 + fourth.start_x_0) + fourth.x_0));
		fourth.x_1 = minVal(0,roundTwo(0.1 * (scrolled/-8 - fourth.x_1 + fourth.start_x_1) + fourth.x_1));
		fourth.x_2 = minVal(0,roundTwo(0.1 * (scrolled/-8 - fourth.x_2 + fourth.start_x_2) + fourth.x_2));
		fourth.opacity = maxVal(1, roundTwo(0.1 * (scrolled/1350 - fourth.opacity + fourth.start_opacity) + fourth.opacity));
		fourth.opacity_0 = minVal(0, roundTwo(0.1 * (scrolled/-1400 - fourth.opacity_0 + fourth.start_opacity_0) + fourth.opacity_0));

		/* apply styles */
		TweenMax.set(welcome.selector, {yPercent:welcome.y, force3D:true});
		TweenMax.set(welcome.selector_0, {alpha:welcome.opacity});
		TweenMax.set(welcome.selector_1, {y:welcome.y_1, alpha:welcome.opacity_1, force3D:true});

		TweenMax.set(wrapperContent.selector, {yPercent:wrapperContent.y, force3D:true});

		TweenMax.set(first.selector, {alpha:first.opacity});
		TweenMax.set(first.selector_3, {alpha:first.opacity_0});
		TweenMax.set(first.selector_0, {x:first.x_0, force3D:true});
		TweenMax.set(first.selector_1, {x:first.x_1, force3D:true});
		TweenMax.set(first.selector_2, {x:first.x_2, force3D:true});

		TweenMax.set(second.selector, {alpha:second.opacity});
		TweenMax.set(second.selector_3, {alpha:second.opacity_0});
		TweenMax.set(second.selector_0, {x:second.x_0, force3D:true});
		TweenMax.set(second.selector_1, {x:second.x_1, force3D:true});
		TweenMax.set(second.selector_2, {x:second.x_2, force3D:true});

		TweenMax.set(third.selector, {alpha:third.opacity});
		TweenMax.set(third.selector_3, {alpha:third.opacity_0});
		TweenMax.set(third.selector_0, {x:third.x_0, force3D:true});
		TweenMax.set(third.selector_1, {x:third.x_1, force3D:true});
		TweenMax.set(third.selector_2, {x:third.x_2, force3D:true});

		TweenMax.set(fourth.selector, {alpha:fourth.opacity});
		TweenMax.set(fourth.selector_3, {alpha:fourth.opacity_0});
		TweenMax.set(fourth.selector_0, {x:fourth.x_0, force3D:true});
		TweenMax.set(fourth.selector_1, {x:fourth.x_1, force3D:true});
		TweenMax.set(fourth.selector_2, {x:fourth.x_2, force3D:true});

		/* sprite Anim */
		if(wrapperContent.y < -85){
			if(!wrapperContent.flag_sprite_1){
				wrapperContent.flag_sprite_1 = true;
				window.CanaltpStart.spriteAnim(first.selector_4,338,73,intervalId1);
			}
		}else{
			if(wrapperContent.flag_sprite_1){
				window.CanaltpStart.resetSpriteAnim(first.selector_4,338,intervalId1);
				wrapperContent.flag_sprite_1 = false;
			}
		}
		if(wrapperContent.y < -185){
			if(!wrapperContent.flag_sprite_2){
				wrapperContent.flag_sprite_2 = true;
				window.CanaltpStart.spriteAnim(second.selector_4,338,58,intervalId2);
			}
		}else{
			if(wrapperContent.flag_sprite_2){
				window.CanaltpStart.resetSpriteAnim(second.selector_4,338,intervalId2);
				wrapperContent.flag_sprite_2 = false;
			}
		}
		if(wrapperContent.y < -285){
			if(!wrapperContent.flag_sprite_3){
				wrapperContent.flag_sprite_3 = true;
				window.CanaltpStart.spriteAnim(third.selector_4,294,61,intervalId3);
			}
		}else{
			if(wrapperContent.flag_sprite_3){
				window.CanaltpStart.resetSpriteAnim(third.selector_4,294,intervalId3);
				wrapperContent.flag_sprite_3 = false;
			}
		}
		if(wrapperContent.y < -385){
			if(!wrapperContent.flag_sprite_4){
				wrapperContent.flag_sprite_4 = true;
				window.CanaltpStart.spriteAnim(fourth.selector_4,294,59,intervalId4);
			}
		}else{
			if(wrapperContent.flag_sprite_4){
				window.CanaltpStart.resetSpriteAnim(fourth.selector_4,294,intervalId4);
				wrapperContent.flag_sprite_4 = false;
			}
		}

		/* background gradient & dots */
		if(wrapperContent.y <= 0 && wrapperContent.y > -60){
			if(!orange.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				orange.selector.addClass('active');
				myNav.activeDot(0);
			}
		}
		if(wrapperContent.y < -60 && wrapperContent.y > -160){
			if(!orange2.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				orange2.selector.addClass('active');
				myNav.activeDot(1);
			}
		}
		if(wrapperContent.y < -160 && wrapperContent.y > -260){
			if(!purple.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				purple.selector.addClass('active');
				myNav.activeDot(2);
			}
		}
		if(wrapperContent.y < -260 && wrapperContent.y > -360){
			if(!green.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				green.selector.addClass('active');
				myNav.activeDot(3);
			}
		}
		if(wrapperContent.y < -360){
			if(!blue.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				blue.selector.addClass('active');
				myNav.activeDot(4);
			}
		}

		/* request animation frame loop */
		window.requestHomeAnim = window.requestAnimFrame(scroll);
	}

	function scrollMobile(){

		/* calculation */
		welcome.opacity = 0.1 * (scrolled/-625 - welcome.opacity + welcome.start_opacity) + welcome.opacity;
		welcome.y = 0.1 * (scrolled/-15 - welcome.y) + welcome.y;
		welcome.y_0 = 0.1 * (scrolled/-20 - welcome.y_0) + welcome.y_0;

		wrapperContent.y = 0.1 * (scrolled/-15 - wrapperContent.y) + wrapperContent.y;
		first.opacity = maxVal(1, 0.1 * (scrolled/675 - first.opacity + first.start_opacity) + first.opacity);
		first.opacity_0 = minVal(0, 0.1 * (scrolled/-700 - first.opacity_0 + first.start_opacity_0) + first.opacity_0);

		second.opacity = maxVal(1, 0.1 * (scrolled/675 - second.opacity + second.start_opacity) + second.opacity);
		second.opacity_0 = minVal(0, 0.1 * (scrolled/-700 - second.opacity_0 + second.start_opacity_0) + second.opacity_0);

		third.opacity = maxVal(1, 0.1 * (scrolled/675 - third.opacity + third.start_opacity) + third.opacity);
		third.opacity_0 = minVal(0, 0.1 * (scrolled/-700 - third.opacity_0 + third.start_opacity_0) + third.opacity_0);

		fourth.opacity = maxVal(1, 0.1 * (scrolled/675 - fourth.opacity + fourth.start_opacity) + fourth.opacity);
		fourth.opacity_0 = minVal(0, 0.1 * (scrolled/-700 - fourth.opacity_0 + fourth.start_opacity_0) + fourth.opacity_0);

		/* apply styles */
		TweenMax.set(welcome.selector, {yPercent:welcome.y, alpha:welcome.opacity, force3D:true});
		TweenMax.set(welcome.selector_0, {yPercent:welcome.y_0, force3D:true});

		TweenMax.set(wrapperContent.selector, {yPercent:wrapperContent.y, force3D:true});

		TweenMax.set(first.selector, {alpha:first.opacity});
		TweenMax.set(first.selector_3, {alpha:first.opacity_0});


		TweenMax.set(second.selector, {alpha:second.opacity});
		TweenMax.set(second.selector_3, {alpha:second.opacity_0});


		TweenMax.set(third.selector, {alpha:third.opacity});
		TweenMax.set(third.selector_3, {alpha:third.opacity_0});

		TweenMax.set(fourth.selector, {alpha:fourth.opacity});
		TweenMax.set(fourth.selector_3, {alpha:fourth.opacity_0});

		/* background gradient & dots */
		if(wrapperContent.y <= 0 && wrapperContent.y > -60){
			if(!orange.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				orange.selector.addClass('active');
				myNav.activeDot(0);
			}
		}
		if(wrapperContent.y < -60 && wrapperContent.y > -160){
			if(!orange2.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				orange2.selector.addClass('active');
				myNav.activeDot(1);
			}
		}
		if(wrapperContent.y < -160 && wrapperContent.y > -260){
			if(!purple.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				purple.selector.addClass('active');
				myNav.activeDot(2);
			}
		}
		if(wrapperContent.y < -260 && wrapperContent.y > -360){
			if(!green.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				green.selector.addClass('active');
				myNav.activeDot(3);
			}
		}
		if(wrapperContent.y < -360){
			if(!blue.selector.hasClass('active')){
				backgrounds.selector.removeClass('active');
				blue.selector.addClass('active');
				myNav.activeDot(4);
			}
		}

		/* request animation frame loop */
		window.requestHomeAnim = window.requestAnimFrame(scrollMobile);
	}
	if(!window.canalClient.mobile){
		scroll();
	}else{
		scrollMobile();
	}

	function roundTwo(num){
		return Math.round(num * 100)/100;
	}
	function minVal(min,param){
		return param<min?min:param;
	}
	function maxVal(max,param){
		return param>max?max:param;
	}
	function betweenVal(min,max,param){
		if(param<min) {
			return min;
		} else if(param>max) {
			return max;
		} else {
			return param;
		}
	}
})();
