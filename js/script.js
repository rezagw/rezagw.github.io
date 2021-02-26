// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top -50
    }, 800, 'swing');

    e.preventDefault();

});

// paralax
// efek di jumbotron
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    // about muncul
    if(wScroll > $('.about').offset().top - 200) {
        $('.pkiri').addClass('pmuncul');
        $('.pkanan').addClass('pmuncul');
    }

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 150) {
        $('.portfolio .card').each(function(i) {
            setTimeout(function() {
                $('.portfolio .card').eq(i).addClass('tampil');
            }, 500 * (i+1));
        });
       
        // $('.portfolio .img-thumbnail').addClass('tampil');
    }
});

const testi = document.querySelector(".testi");

$(".page-scroll").on("click", function (e) {
  let dir = $(this).attr("href");

  let elementDir = $(dir);

  $("html, body").animate(
    {
      scrollTop: elementDir.offset().top - 50,
    },
    800,
    "swing"
  );

  e.preventDefault();
});

jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });
});
