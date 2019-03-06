$(document).ready(function(){

	$('.js-back').click(function(){
		
		$('html, body').stop().animate({
			'scrollTop': $('body').offset().top + (-100)
		}, 1500, 'swing', function () {});
	});


	$(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $('.main-content').height(),
        c = $(window).height();
    scrollPercent = (s / (d-c)) * 100;
    var position = scrollPercent.toFixed(2);
		
		$('.js-toolbar').height(position + '%');
		
		if(position==0){
      $('.c-toolbar').removeClass('isshow');
		}
		if(position>0 && position<100){
      $('.c-toolbar').addClass('isshow');
			$('.c-toolbar__icon').removeClass('complete');
		}
		if(position>=100){
			$('.c-toolbar__icon').addClass('complete');
		}
  });

	$(window).on( 'resize scroll', function(){
		$('.nav-alph').affix({
			offset: {
				top: function() { return $('.nav-alph-container').offset().top; },
				bottom: function(){ return $('.site-footer').outerHeight() + $('.back-to-top-link').outerHeight();}
	 		}
		});

		if ( $('.main-content').length ) {$('.alph-list-link-desktop').css( 'left', $('.main-content').offset().left );}
	});

	$('#commentTextarea').focus(function() {
		$('#loginModal').modal();
	});

	//remove is-locked when hiding events dropdown
	$('#events-dropdown-group').on('hide.bs.dropdown', function () {
	  $('html').removeClass("is-locked");
	})

	//events dropdown top offset calculation
	$('#events-dropdown-group').affix({
    offset: {
      top: function () {
        return ($('.offset-top').offset() || {top:0}).top || 0;
      }
    }
  });

	//stop dropdown close when clicking on filters checkbox
	$('.checkbox').click(function(event) {
	  event.stopPropagation( );
	});

	//Sidemenu - open/close navigation
	$('.js-sidemenu-toggle').on('click', function( oEvent ){
		oEvent.preventDefault();

		if ( !$(this).data('name') )
			return;

		$('.c-sidemenu[data-name!=' + ($(this).data('name') || '') + ']').removeClass('showsidemenu');
		$('.c-sidemenu[data-name=' + ($(this).data('name') || '') + ']').toggleClass('showsidemenu');
	});

	$('.has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).next('.nav-children').removeClass('is-hidden');
	});

	$('.go-back').on('click', function(event){
		event.preventDefault();
		$('.nav-children').addClass('is-hidden');
	});

	//mobile nav close btn
	$('.close-btn').on('click', function(event){
		event.preventDefault();
		$(".header").removeClass("is-nav-open");
		$('html').removeClass("is-locked");
	});

	// mobile nav click outside to close menu
    $('.content-blocker').on('click', function(){
		$('.header').removeClass('is-nav-open');
		$('html').removeClass("is-locked");
	});

	// search function
	$('.start-search-trigger').on('click', function(event){
		event.stopPropagation();
		event.preventDefault();
		toggleSearch();
	});

	// hide search when clicking on overlay
    $('.search-overlay').on('click', function(){
		toggleSearch('close')
		$(this).removeClass('is-visible');
	});

	function toggleSearch(type) {
		if(type=="close") {
			//close serach
			$('.start-search').removeClass('is-visible');
			$('.start-search-trigger').removeClass('search-is-visible');
			$('.search-overlay').removeClass('search-is-visible');
			$('html').removeClass("is-locked");

		} else {
			//toggle search visibility
			$('html').toggleClass("is-locked");
			$('.header').removeClass('is-nav-open');
			$('.header').toggleClass('search-is-visible');
			$('.start-search').toggleClass('is-visible');
			$('.start-search-trigger').toggleClass('search-is-visible');
			$('.search-overlay').toggleClass('search-is-visible');
			$('.start-search').find('input[type="search"]').focus();
			($('.start-search').hasClass('is-visible')) ? $('.search-overlay').addClass('is-visible') : $('.search-overlay').removeClass('is-visible') ;
		}
	}

	// channel nav trigger
	$(".channel-nav-trigger").on("click",function(t){
		t.preventDefault(),$(".channel-mobile-menu").toggleClass("is-nav-open")
	});


	$('.multi-menu-toggle').on('click', function(){
		$(this).parent('.channel-nav-item').toggleClass('submenu-open').siblings().removeClass('submenu-open');
		$(this).toggleClass('open')
	});

	// check if device supports touchevents
	if ( 'ontouchstart' in window )
		$('body').addClass('touchevents');

	// carousel flickity
	// $(".carousel--single .carousel__list").flickity({
	//   //options
  //   cellAlign: 'center',
  //   contain: true,
  //   pageDots: false,
  //   autoPlay: 5000,
	// });
	//
	// // carousel flickity multiple
	// $(".carousel--multiple .carousel__list").flickity({
	//   //options
	// 	cellAlign: 'left',
  //   freeScroll: true,
  //   freeScrollFriction: 0.03,
  //   contain: true,
  //   pageDots: false,
  //   prevNextButtons: true
	// });
});

// switchery init
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
	var switchery = new Switchery(html, { color: '#3bafda', size: 'small' });
});
