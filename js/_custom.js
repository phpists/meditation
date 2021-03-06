$(function(){

				$(".youtube-link").grtyoutube({ theme:"light" });

			$(".tabs-section__menu-items li").click(function() {
				$(".tabs-section__menu-items li").removeClass("active").eq($(this).index()).addClass("active");
				$(".tabs-section__items--item").hide().eq($(this).index()).fadeIn();
			}).eq(0).addClass("active");

	$('.header__top').addClass('original').clone().insertAfter('.header__top').addClass('cloned').css('position','fixed').css('top','-100%').css('margin-top','0').css('z-index','500').css('transition', '1s ease-in-out').removeClass('original').css('top','0');

	scrollIntervalID = setInterval(stickIt, 10);
	
	
	function stickIt() {
	
		var orgElementPos = $('.original').offset();
		orgElementTop = orgElementPos.top;               
		var nextElement = $('.header__scroll').offset();
		nextElementTop = nextElement.top;               
	
		if ($(window).scrollTop() >= (orgElementTop)) {
			// scrolled past the original position; now only show the cloned, sticky element.
	
			// Cloned element should always have same left position and width as original element.     
			orgElement = $('.original');
			
			coordsOrgElement = orgElement.offset();
			leftOrgElement = coordsOrgElement.left;  
			widthOrgElement = orgElement.css('width');
			$('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).css('display','block');
			$('.original').css('top','-100%');
		} else if ($(window).scrollTop() <= (nextElementTop))  {
			// not scrolled past the menu; only show the original menu.
			$('.cloned').css('top','-100%');
			$('.original').css('top','0');
		} else {}
	}

	$(".header__top").after('<nav class="mobile-menu">');
	$(".header__top--menu nav ul")
		.clone()
		.attr("id", "menu")
		.appendTo(".mobile-menu");

	// :: PreventDefault a Click
	$("a[href='#']").on("click", function($) {
		$.preventDefault();
	});

	$(document).ready(function() {
		//toggle menu
		$(".hamburger-container").click(function() {
			$(".mobile-menu").slideToggle();
			$("body").toggleClass("mobile-opacity");
		});
	
		//to fix issue that toggle adds style(hides) to nav
		$(window).resize(function() {
			if (window.innerWidth > 1024) {
				$("#menu").removeAttr("style");
			}
		});
	
		//icon animation
		var topBar = $(".hamburger li:nth-child(1)"),
			middleBar = $(".hamburger li:nth-child(2)"),
			bottomBar = $(".hamburger li:nth-child(3)");
	
		$(".hamburger-container").on("click", function() {
			if (middleBar.hasClass("rot-45deg")) {
				topBar.removeClass("rot45deg");
				middleBar.removeClass("rot-45deg");
				bottomBar.removeClass("hidden");
			} else {
				bottomBar.addClass("hidden");
				topBar.addClass("rot45deg");
				middleBar.addClass("rot-45deg");
			}
		});

		var video = {

			init: function() {
				video.play();
			},
		
			play: function() {
				jQuery('body').on('click', '#play-video-btn', function(e) {
					video.setSrc(this);
				});
			},
		
			setSrc: function(el) {
				if (el) {
					var video_id = jQuery(el).data('id');
					var url = '//www.youtube.com/embed/' + video_id + '?enablejsapi=1&version=3&showinfo=0&playerapiid=ytplayer&autoplay=1';
					jQuery('img#embed-video-preview').hide();
					jQuery('#play-video-btn').hide();
					jQuery('iframe#embed-video-frame').attr('src', url).fadeIn();
				}
			}
		}
		
		
			video.init();

			$(".youtube-link").grtyoutube({ theme:"light" });
		

		$('.multiple-items').slick({
			// infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			arrows: true,
			// autoplay: true,
			speed: 500,
			responsive: [{

				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					infinite: true
				}
	
			}, {
	
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					dots: true
				}
	
			}, {
	
				breakpoint: 300,
				settings: "unslick" // destroys slick
	
			}]
		});
	});
});