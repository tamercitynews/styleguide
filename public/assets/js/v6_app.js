$(document).ready(function(){

  $('.js-back').click(function(){
		
		$('html, body').stop().animate({
			'scrollTop': $('body').offset().top + (-100)
		}, 1000, 'swing', function () {});
	});

  $(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $('.c-entry').height(),
        c = $(window).height();
    scrollPercent = (s / (d-c)) * 100;
    var position = scrollPercent.toFixed(2);
		
		$('.js-toolbar').height(position + '%');
		
		if(position==0){
      $('.c-toolbar').removeClass('isshow');
		}
		if(position>0 && position<100){
      $('.c-toolbar').addClass('isshow');
			$('.c-toolbar__reference').removeClass('complete');
		}
		if(position>=100){
      $('.c-toolbar__reference').addClass('complete');
      $('.c-toolbar').removeClass('isshow');
		}
  });

  var page = $('body');

  // check if device supports touchevents
  if ( 'ontouchstart' in window )
    page.addClass('touchevents');

	//mobile nav - open/close navigation
	$('.js-toggle-menu').on('click', function(event){
		event.preventDefault();
		$('.js-menu').toggleClass('is-open');
    $('.c-toggle-menu__icon--close').toggleClass('appear');
    $('.c-toggle-menu__icon--open').toggleClass('disappear');
    page.toggleClass('is-noscroll');
	});

  $('.js-toggle-visibility').on('click', function(e){
    e.preventDefault();
    $('[data-attr="toggle-visibility"]').toggleClass('is-visible is-hidden');
  });

  $('.js-scroll-comments').on('click', function(e){
    e.preventDefault();
    $('[data-attr="toggle-visibility"]').toggleClass('is-visible is-hidden');
    $('html, body').animate({
        scrollTop: $("#comments").offset().top
    }, 1000);
  });

  $('.js-widget-open').on('click', function(e){
    e.preventDefault();
   var attributo = $(this).attr('data-attr');
   $('.c-widget[data-attr='+attributo+']').addClass('is-open').children('.c-widget__content').addClass('is-sliding-in');
   page.addClass('is-noscroll');
  });

  $('.js-widget-close, .js-widget-overlay').on('click', function(){
    $('.c-widget').removeClass('is-open').children('.c-widget__content').removeClass('is-sliding-in');
    page.removeClass('is-noscroll');
  });
});
