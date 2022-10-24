$(document).ready(function() {
    // data slider
    $('.owl-carousel').owlCarousel({
        items:6,
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        mouseDrag:false,
        touchDrag:false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
    });

    // pricing input toggle
    $('.swithBox input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $('.pricingItem').addClass('active');
        }
        else if($(this).prop("checked") == false){
            $('.pricingItem').removeClass('active');
        }
    });

    
    
});