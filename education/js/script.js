$(function(){
    slideView(); //slide
    mainTab();


    // slide
    function slideView(){
        var slide = $('.slide li'),
            cnt = 0,
            len = slide.length;
        setInterval(function(){
            var n = cnt + 1;
            if(n==len){n=0;}

            slide.eq(cnt).stop().fadeOut(600);
            slide.eq(n).stop().fadeIn(600);

            cnt = n;
        }, 3000);
    }

    function mainTab(){
        $('.tab_menu > .tit > ul li').click(function(){
            var n = $(this).index();

            $('.tab_menu > .tit > ul li').removeClass('active');
            $('.tab_menu > .con > div').hide();
            $(this).addClass('active');
            $('.tab_menu > .con > div').eq(n).show();
        });
    }
})