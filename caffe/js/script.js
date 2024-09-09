$(function(){
    subView(); //sub menu
    slideView(); //slide
    bestView(); //best menu
    eventView(); //event

    

    // sub menu
    function subView(){
        var mMenu = $('.menu li'),
            sMenu = mMenu.find('.sub'),
            sbg = $('.menu > .sub_bg');

        mMenu.mouseenter(function(){
            sMenu.stop().slideDown('fast');
            sbg.stop().slideDown('fast');
        }).mouseleave(function(){
            sMenu.stop().slideUp('fast');
            sbg.stop().slideUp('fast');
        });

    }

    // slide
    function slideView(){
      var $tg = $('.slide_box'),
          slide = $tg.find('.slide ul li'),
          len = slide.length,
          cnt = 0,
          dir = 'next';
        
        $tg.append('<div class="bl"><ul class="bl_list"></ul></div> ');
        for(var i =0; i<len; i++){
            $('.bl_list').append('<li><a href="#"> 슬라이드'+(i+1)+'</a></li>');
        }
        var slBtn = $tg.find('.bl_list li');
        slBtn.eq(cnt).addClass('active');

        slBtn.click(function(){
            var tg = $(this),
                i = tg.index();
            
            slBtn.removeClass('active');
            tg.addClass('active');

            move(i);
            return false;
        });

        function move(i){
            if(cnt == i){return;}
            var cntImg = slide.eq(cnt),
                nextImg = slide.eq(i);
            
            if(dir == 'next'){
                cntImg.css({left:0}).stop().animate({left:'-100%'});
                nextImg.css({left:'100%'}).stop().animate({left:0});
            }else{
                //prev
                cntImg.css({left:0}).stop().animate({left:'100%'});
                nextImg.css({left:'-100%'}).stop().animate({left:0});
            }
            cnt = i;   
        }

        // 자동 슬라이드 호출
        timer();

        // 자동 슬라이드 함수 선언
        var palytime = setInterval(timer, 3000);
        function timer(){
             
            var n = cnt + 1;//다음 나올 번호
            
            if(n==len){n=0;}
            slBtn.eq(n).trigger('click');
            // 이미지 슬라이드
            $tg.find('.slide ul li').eq(cnt).css({left:0}).stop().animate({left:'-100%'});
            $tg.find('.slide ul li').eq(n).css({left:'100%'}).stop().animate({left:0});

            cnt=n;
        }
        var play = 'true';
        $tg.find('.slide').mouseenter(function(){
            clearInterval(palytime);
            play=false;

        }).mouseleave(function(){
            palytime = setInterval(timer, 3000);
            play=true;
        });

        //다음
        $tg.find('.sl_btn > .next_btn').click(function(){
            dir = 'next';
            var n = cnt+1;
            if(n==len){n=0;}
            slBtn.eq(n).trigger('click');
        });

        //이전
        $tg.find('.sl_btn >.prev_btn').click(function(){
            dir = 'prev';
            var n = cnt-1;
            if(n<0){n=len - 1;}
            slBtn.eq(n).trigger('click');
        });

        // 터치 슬라이드
        $tg.find('.slide').swipe({
        swipe : function(event, direction, duration, fingerCount, fingerDate){
            if(direction == 'right'){
                $tg.find('.sl_btn >.prev_btn').trigger('click');
            }else if(direction =='left'){
                $tg.find('.sl_btn > .next_btn').trigger('click');
            }
        },
        threshold : 0,
        fingers:'all',
        excludedElements : '.m_slide_p, .m_slide_n' //스와프 영역에서 제외
    });
        
        
    }

    // bestView();
    function  bestView(){
        var total = $('.rank_v .list'),
            caffe = total.find('ul li'),
            cInfo = caffe.find('a > .c_info .c_con');
        var ww = $(window).width();

        caffe.click(function(){return false;});

        $(window).resize(function(){
            if($(this).innerWidth()> 768){
        
                total.find('ul li:gt(11)').hide();
                
            }
        });



    }
    //eventView - 이벤트
    function eventView(){
        var ev_list = $('.event_list > .es_con > ul > li'),
            view = $('.event_con  .view figure > img'),
            vCon = $('.event_con  .view  .v_con');
        ev_list.click(function(){
            var i = $(this).index();
            ev_list.removeClass('active');

            ev_list.eq(i).addClass('active');
            view.attr({
                src: ev_list.find('img:first').eq(i).attr('src'),  
                alt: ev_list.find('img:first').eq(i).attr('alt'),
            });
            vCon.find('h2').text(ev_list.find('.info  strong').eq(i).text());
            vCon.find('p').text(ev_list.find('.info > p').eq(i).text());



            return false;
        });





      
    }


    var swiper = new Swiper('.es_con', {

    observer:true,
    observeParents:true,
    breakpoints:{
        790:{
            slidesPerView: 3,
            spaceBetween: 10,
        },  
        
        600:{
            slidesPerView: 2,
            spaceBetween: 10,
        },  
        380:{
            slidesPerView: 1,
            spaceBetween: 10,
        },  
    }

  });

  var swiper1 = new Swiper('.best', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 10,
    // initialSlide:1,
    observer:true,
    observeParents:true,
    navigation: { //이전다음버튼 제어
        nextEl: '.best_n',
        prevEl: '.best_p',
      },
    breakpoints:{ 
        790:{
            centeredSlides:true,
            slidesPerView: 4,
            spaceBetween:0,
            slidesPerGroup: 1,
        }, 
    //    790:{
    //         centeredSlides:true,
    //         slidesPerView: 'auto',
    //         spaceBetween:0,
    //         slidesPerGroup: 1,
    //     },  
    600:{
        centeredSlides:true,
        slidesPerView: 3,
        spaceBetween:0,
        slidesPerGroup: 1,
    }, 
        500:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer:true,
            observeParents:true,
        }, 
    }

  });

});