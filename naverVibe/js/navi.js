$(function(){

    

    var naviClon = $('.m_menu').contents().clone();
    $('.mob_m').append(naviClon);

    // 햄버거(전체메뉴) 클릭시
    $('.mob_menu').click(function(){
        $('.mb_bg, .mob_m').stop().animate({
            right:0
        }, 300);
    });
    // 닫기 및 배경
    $('.mb_close, .mb_bg').click(function(){
        $('.mb_bg, .mob_m').stop().animate({
            right:'-100%'
        }, 300);
    
    });
    var menuName,
        h_top;

    $('.mob_m ul li').click(function(){
        $('.mob_m ul li').removeClass('active');
        $(this).addClass('active');
        menuName = $(this).find('a').attr('href')
        $(this).addClass('active');
        $('.mb_bg, .mob_m').stop().animate({
            right:'-100%'
        }, 300);
        h_top = $(menuName).offset().top - 190;
  
        $('html, body').animate({
            scrollTop:h_top
        }, 400);
        return false;
      });
      $(window).scroll(function(){
        var st = $(this).scrollTop();
        $('.contents > div').each(function(){
          var i = $(this).index();
          if($(this).offset().top - 200 <= st){
            $('.mob_m ul li').removeClass('active');
            $('.mob_m ul li').eq(i).addClass('active');
          }
        });
      });

      
});