jQuery(document).ready(function($){
    "user strick"
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.001,
        
      });

     // Typed.js animation
     if (typeof Typed !== 'undefined') {
        new Typed('.text', {
            strings: ["<strong>i love</strong> <strong class='primary'>coding.</strong>", "<strong>and to</strong> <strong class='primary'>share!!!.</strong>"],
            typeSpeed: 50,
            loop: true,
            
        });
    } else {
        console.error("Typed.js plugin not found.");
    }


    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
        enabled:true
        }      
    });

    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:750,
        loop:true,
        autoplayHoverPause:true,
        responsive:{
          0:{
          items: 1
          },
          480:{
          items: 2
          },
          768:{
          items: 3
          }
        }

    });
});

