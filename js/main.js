$(function () {
    $(document).scroll(function () {

      var $nav = $(".menu-desplegar");
      $nav.toggleClass('main-scroll', $(this).scrollTop() > $nav.height());
      
      var $header = $(".search-hide");
      $header.toggleClass('show-search-hide', $(this).scrollTop() > $header.height());

    });

  });



