
$(function(){
  menu();
  chartTab();
  newAlbum();
  notView();

  function menu(){
    var menuName,
        h_top;
    $('.m_menu ul li').click(function(){
      $('.m_menu ul li').removeClass('active');
      $(this).addClass('active');
      menuName = $(this).find('a').attr('href')
      $(this).addClass('active');
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
          $('.m_menu ul li').removeClass('active');
          $('.m_menu ul li').eq(i).addClass('active');
        }
      });
    });
  }

  function chartTab(){
    $('.chart_tab ul li').click(function(){
      var i = $(this).index();
      $('.chart_tab ul li').removeClass('chart_v');
      $(this).addClass('chart_v');

      $('.chart_list > div').hide();
      $('.chart_list > div').eq(i).show();

      $('.chart_btn > div').hide();
      $('.chart_btn > div').eq(i).show();

      $('#chart h2 .big').text($('.chart_tab ul li').eq(i).text());

      topChart.slideTo(0);
      domChart.slideTo(0);
      overChart.slideTo(0);
      return false;
    });
      // chart
  var topChart = new Swiper(".top_chart", {
    slidesPerView: 1,
    spaceBetween: 0,
    loopFillGroupWithBlank: false,
    observer:true, // 초기화
    observeParents:true, // 초기화

    navigation: {
      nextEl: '.top_next' ,
      prevEl: '.top_prev',
  },

  });
  var domChart = new Swiper(".dom_chart", {
    slidesPerView: 1,
    spaceBetween: 0,
    loopFillGroupWithBlank: false,
    observer:true, // 초기화
    observeParents:true, // 초기화
    navigation: {
      nextEl: '.dom_next' ,
      prevEl: '.dom_prev',
  },

  });
  var overChart = new Swiper(".over_chart", {
    slidesPerView: 1,
    spaceBetween: 0,
    loopFillGroupWithBlank: false,
    observer:true, // 초기화
    observeParents:true, // 초기화
    navigation: {
      nextEl: '.over_next' ,
      prevEl: '.over_prev',
  },

  });

    
  }
  function newAlbum(){
   
    $('.tab_btn li').click(function(){
      $('.tab_btn li').removeClass('on');
    
      $(this).addClass('on');

      return false;
    });
    $('.list_all').click(function(){
       $('.new_list li').hide();
      $('.new_list').find('.all').show();
    });
    $('.list_dom').click(function(){
       $('.new_list li').hide();
      $('.new_list').find('.dom').show();
    });
    $('.list_over').click(function(){
       $('.new_list li').hide();
      $('.new_list').find('.over').show();
    });
    
    
  }

  function notView(){
    var cnt=0,
        len = $('.notice ul li').length;
    function notSlide(){
      var n = cnt + 1;
  
      if(n==len){n=0;}

      $('.notice ul li').eq(cnt).css({top:0}).stop().animate({
        top:'-100%',
      });
      $('.notice ul li').eq(n).css({top:'100%'}).stop().animate({
        top:'0',
      }); //나타나기
      cnt=n;
    };
    var timer = setInterval(notSlide, 5000);
    $('.notice ul li').mouseenter(function(){
      clearInterval(timer);
    }).mouseleave(function(){
      timer = setInterval(notSlide, 5000);
    });
  }

  music()
  function music(){
    var mAudio = document.getElementById('mAudio');
    var audioBar = document.getElementsByClassName('music_a');

    mAudio.currentTime = 0;
    $('.play_stop .play').click(function(){
      if($('.play_stop .play').hasClass('stop')){
        $(this).removeClass('stop');
        $(this).text('play_arrow');
        
       
      }else{
        $(this).addClass('stop');
        $(this).text('pause');
      }

      if(mAudio.paused){
        mAudio.play();
      }else{
        mAudio.pause();
      }
    });

  }



  // 모바일 메뉴
  mbMenu();
  function mbMenu(){
    $('.mb_menu li').click(function(){
      $('.mb_menu li').removeClass('mb_active');
      $(this).addClass('mb_active');
    });
  }


});
