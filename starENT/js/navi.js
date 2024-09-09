var $ = jQuery;
$(function(){
    // pc버전 메뉴 모바일 버전으로 복사하기
    var naviClon = $('#main').contents().clone();
    $('.mb_navi_wrap').append(naviClon);

    // 로그인 회원가입 복사
    var loginClon = $('.pc_login_box').contents().clone();
    $('.mb_login_box').append(loginClon);

    // 메뉴 오버시
    $('#main ul, .menu_bg').mouseenter(function(){
        $('.sub, .menu_bg').stop().slideDown('fast');
    }).mouseleave(function(){
        $('.sub, .menu_bg').stop().slideUp('fast');
    });

    // 햄버거(전체메뉴) 클릭시
    $('#mb_btn').click(function(){
        $('#mb_navi_bg, #mb_navi').stop().animate({
            right:0
        }, 300);
    });
    // 닫기 및 배경
    $('.mb_close, #mb_navi_bg').click(function(){
        $('#mb_navi_bg, #mb_navi').stop().animate({
            right:'-100%'
        }, 300);
        
        $('.mb_navi_wrap > ul > li > a').find('+ .sub').hide();
        $('.mb_navi_wrap > ul > li > a').removeClass('selected');
    });

    // 모바일 버전 대메뉴 클릭
    $('.mb_navi_wrap > ul > li > a').click(function(){
        $(this).toggleClass('selected');
        $(this).find('+ .sub').slideToggle('fast');

        $('.mb_navi_wrap > ul > li > a').not(this).removeClass('selected');
        $('.mb_navi_wrap > ul > li > a').not(this).find('+ .sub').slideUp('fast');

        return false;

    });
        // pc 화면에서 모바일 메뉴 우측으로 사라지게 하기
    $(window).resize(function(){
        if($(this).outerWidth()> 1024){
            $('#mb_navi_bg, #mb_navi').css({right:'-100%'});
            $('.mb_navi_wrap > ul > li > a').find('+ .sub').hide();
            $('.mb_navi_wrap > ul > li > a').removeClass('selected');
        }
    });

});