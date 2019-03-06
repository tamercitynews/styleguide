$(document).ready(function(){

  // Function for header scroll ----------------------------------------------//
  var header = $('.c-header');
  var headerHeight = header.outerHeight(true);
  var lastScrollTop = 0;
  {
    var iLastScrollTop = $(window).scrollTop() || 0;
    var iScrollTimeStamp = 0;
    var hScrollTimeout   = null;
    var bOnScroll = false;
    var fOnScroll = function( )
    {
      {
        if ( bOnScroll )
          return;

        bOnScroll = true;
      }

      {
        var iTimeStamp = new Date().getTime();

        if (iScrollTimeStamp >= iTimeStamp-250)
        {
          if (!hScrollTimeout)
          {
            hScrollTimeout = setTimeout(function()
            {
              hScrollTimeout = null;
              fOnScroll();
            }, 250);
          }


          bOnScroll = false;
          return;
        }

        iScrollTimeStamp = iTimeStamp;
      }

      var iScrollTop = $(window).scrollTop() || 0;

      do
      {
        if ($('html').hasClass('is-locked'))
          break;
        if ( iScrollTop < headerHeight )
        {
          header.removeClass('c-header--translate c-header--translate-in c-header--translate-out');
          break;
        }
        if (iLastScrollTop >= iScrollTop)
        {
          header
            .removeClass('c-header--translate-out')
            .addClass('c-header--translate-in');
        }
        else
        {
          if(header.hasClass('c-header--translate-in')){
            header
              .addClass('c-header--translate-out');
          }
          header
            .removeClass('c-header--translate-in')
            .addClass('c-header--translate');
        }
      } while ( false );
      iLastScrollTop = iScrollTop;
      bOnScroll      = false;
    };

    $(window).on('scroll', fOnScroll);

  }


});
