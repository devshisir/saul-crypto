$(document).ready(function() {
    // data slider
    $('.owl-carousel').owlCarousel({
        items:5,
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
        responsive : {
            0:{
                items: 1,
            },
            576:{
                items: 2,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3, 
            },
            1200:{
                items: 4,
            },
            1400:{
                items: 5,
            }
        }
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


    // pricing select get value
    $('.free').addClass('active')
    $('.selectPriceOptions').on('change',function(e){
        var val = $(this).find(":selected").val();
        var free = $('.free');
        var startup = $('.startup');
        var streamer = $('.streamer');
        var professional = $('.professional');
        var enterprisePrice = $('.enterprisePrice');
        if(val == 1){
            free.addClass('active')
            startup.removeClass('active')
            streamer.removeClass('active')
            professional.removeClass('active')
            enterprisePrice.removeClass('active')
        }
        if(val == 2){
            startup.addClass('active')
            free.removeClass('active')
            streamer.removeClass('active')
            professional.removeClass('active')
            enterprisePrice.removeClass('active')
        }
        if(val == 3){
            streamer.addClass('active')
            startup.removeClass('active')
            free.removeClass('active')
            professional.removeClass('active')
            enterprisePrice.removeClass('active')
        }
        if(val == 4){
            professional.addClass('active')
            streamer.removeClass('active')
            startup.removeClass('active')
            free.removeClass('active')
            enterprisePrice.removeClass('active')
        }
        if(val == 5){
            enterprisePrice.addClass('active')
            professional.removeClass('active')
            streamer.removeClass('active')
            startup.removeClass('active')
            free.removeClass('active')
        }
    })

    // mobile price table toggle
    $('.freePrice').addClass('active');
    $('.selectPriceTableMobile').on('change',function(e){
        var val2 = $(this).find(":selected").val();
        var freePrice = $('.freePrice');
        var startupPrice = $('.startupPrice');
        var steamerprice = $('.steamerprice');
        var professionalprice = $('.professionalprice');
        if(val2 == 1){
            freePrice.addClass('active');
            startupPrice.removeClass('active');
            steamerprice.removeClass('active');
            professionalprice.removeClass('active');
        }
        if(val2 == 2){
            freePrice.removeClass('active');
            startupPrice.addClass('active');
            steamerprice.removeClass('active');
            professionalprice.removeClass('active');
        }
        if(val2 == 3){
            freePrice.removeClass('active');
            startupPrice.removeClass('active');
            steamerprice.addClass('active');
            professionalprice.removeClass('active');
        }
        if(val2 == 4){
            freePrice.removeClass('active');
            startupPrice.removeClass('active');
            steamerprice.removeClass('active');
            professionalprice.addClass('active');
        }
    })

    
    
});