// Menu Hamburger

$("header .menu-hamburger").on("click", function () {
    $(this).toggleClass('aberto');
    $('header .right').toggleClass('aberto');
    $('html').toggleClass('trava-scroll');
  });


  $("header ul li a").on("click", function () {
    $('header ul, header .menu-hamburger').removeClass('aberto');

  });
