window.addEventListener('DOMContentLoaded', function(){


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME    = 'current';
  var VERSION = '0.5.0';

  var ClassName = {
    LINK_TARGET   : 'js-current-nav',
    ACTIVE        : 'is-active'
  };

  
  /**
   * ------------------------------------------------------------------------
   * Event
   * ------------------------------------------------------------------------
   */




  /**
   * ------------------------------------------------------------------------
   * Function
   * ------------------------------------------------------------------------
   */




  if(location.pathname !== "/") {
    $('.js-current-nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass(ClassName.ACTIVE);
  } else{
    $('.js-current-nav a:eq(0)').addClass(ClassName.ACTIVE);

  }
  
});

