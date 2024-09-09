
$(function(){
    // pc버전 메뉴 모바일 버전으로 복사하기
    var naviClon = $('.menu').contents().clone();
    $('.mb_wrap').append(naviClon);
    $('.mb_wrap > #main').append('<div class="close_btn"><span class="material-symbols-rounded">close</span>');

    // 메뉴 오버시


    // 햄버거(전체메뉴) 클릭시
    $('#mb_btn').click(function(){
        $('.mb_wrap > .sub_bg, .mb_wrap > #main').stop().animate({top: 0}, 300);
        $('.close_btn').show();
    });
    // 닫기 및 배경
    $('.close_btn, .mb_wrap > .sub_bg').click(function(){
        $('.mb_wrap > .sub_bg, .mb_wrap > #main').stop().animate({
           top:'-100%'
        }, 300);
        
        $('.mb_wrap').find('+ .sub').hide();
        $(".close_btn").hide();
    });

    // 모바일 버전 대메뉴 클릭
    $('.mb_wrap ul > li').click(function(){
        var i = $(this).index();

        $('.mb_wrap .sub').eq(i).slideToggle('fast');
       
        $('.mb_wrap ul > li').not(this).find('.sub').slideUp('fast');


        return false;

    });
        // pc 화면에서 모바일 메뉴 우측으로 사라지게 하기
    $(window).resize(function(){
        if($(this).outerWidth()> 1024){
            $('.sub_bg, .mb_wrap > #main').css({top:'-100%'});
            $('.mb_wrap ul > li').find('+ .sub').hide();
            
        }
    });

});