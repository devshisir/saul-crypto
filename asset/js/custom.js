$(document).ready(function() {
    // data slider
    

    // header menu fix
    $(window).scroll(function(){
        var sticky = $('#headerTop'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    // mobile menu fix
    $(window).scroll(function(){
        var sticky2 = $('#mobileMenu'),
            scroll2 = $(window).scrollTop();
      
        if (scroll2 >= 50) sticky2.addClass('fixed');
        else sticky2.removeClass('fixed');
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