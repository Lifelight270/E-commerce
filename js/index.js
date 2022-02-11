$(document).ready(function(){
    $(".slideImg").owlCarousel({
      items:1,
      loop:true,
      nav:true,
    })
    $(".card-1").owlCarousel({
      loop:true,
      nav:true,
      margin:60,
      responsive:{
        0:{
            items:1
        },
        600:{
          items:2
        },
        900:{
            items:3
        },
        1000:{
            items:4
        }
    }
    })

   
    });