$(function(){
    mMenu();

    function mMenu(){
      $('.m_menu > ul > li ').mouseenter(function(){
        var i = $(this).index();
        $('.menu_bg').stop().slideDown('fast');
        $(this).find('.s_menu').stop().slideDown('fast');
        $('.icon_bg > ul > li').hide();
        $('.icon_bg > ul > li').eq(i).show();
  
      }).mouseleave(function(){
        $('.menu_bg').stop().slideUp('fast');
        $(this).find('.s_menu').stop().slideUp('fast');
        $('.icon_bg > ul > li').hide();
      });
      
    }
    // pc버전 메뉴 모바일 버전으로 복사하기
    var naviClon = $('.m_menu').contents().clone();
    $('.mb_navi_wrap').append(naviClon);

    // 햄버거(전체메뉴) 클릭시
    $('.h_menu').click(function(){
        $('#mb_navi_bg, #mb_navi').stop().animate({
            left:0
        }, 300);
        console.log('gk');
    });
    // 닫기 및 배경
    $('.mb_close, #mb_navi_bg').click(function(){
        $('#mb_navi_bg, #mb_navi').stop().animate({
            left:'-100%'
        }, 300);
        
        $('.mb_navi_wrap > ul > li > a').find('+ .s_menu').hide();
        $('.mb_navi_wrap > ul > li > a').removeClass('selected');
    });

    // 모바일 버전 대메뉴 클릭
    $('.mb_navi_wrap > ul > li > a').click(function(){
        $(this).toggleClass('selected');
        $(this).find('+ .s_menu').slideToggle('fast');

        $('.mb_navi_wrap > ul > li > a').not(this).removeClass('selected');
        $('.mb_navi_wrap > ul > li > a').not(this).find('+ .s_menu').slideUp('fast');

        return false;

    });
        // pc 화면에서 모바일 메뉴 우측으로 사라지게 하기
    $(window).resize(function(){
        if($(this).outerWidth()> 1200){
            $('#mb_navi_bg, #mb_navi').css({left:'-100%'});
            $('.mb_navi_wrap > ul > li > a').find('+ .s_menu').hide();
            $('.mb_navi_wrap > ul > li > a').removeClass('selected');
        }
    });
});