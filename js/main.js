$(document).ready(function($){
    "use strict";
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.001,
    });

    // Typed.js animation
    if (typeof Typed !== 'undefined') {
        new Typed('.text', {
            strings: ["<strong>mi samsung</strong> <strong class='primary'>lorem.</strong>", "<strong>to let</strong> <strong class='primary'>ipsum!!!.</strong>"],
            typeSpeed: 50,
            loop: true,
        });
    } else {
        console.error("Typed.js plugin not found.");
    }

    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

    // Counter Up Functionality using Intersection Observer
    const counters = document.querySelectorAll('.counter');

    const options = {
        root: null, // relative to the viewport
        threshold: 0.1 // percentage of element visibility
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const increment = target / 2000; // Adjust the speed

                const updateCounter = () => {
                    if(count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCounter, 1); // Adjust the speed
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});