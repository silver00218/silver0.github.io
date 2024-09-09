$(function(){
    mainSlide(); //메인 슬라이드
    mv(); // 뮤직비디오
    artCon();//가수 배우
    function mainSlide(){
        // 슬라이드
        var $tg = $('#main_slide'),
        visual = $tg.find('.slide ul li'),
        vLen = visual.length,
        cnt =0,
        setTime,
        dir = 'next';

        // 블릿버튼 생성
        $tg.append('<div class="list_btn"><ul class="slide_btn01"></ul></div>');
        // 이미지개수만큼 블릿 버튼 생성
        for(var i=0; i<vLen; i++){
        $('.slide_btn01').append('<li><a href="#"> 슬라이드'+(i+1)+'</a></li>');
        }
        var button = $tg.find('.slide_btn01 > li');
        button.eq(cnt).find('a').addClass('active');

        button.click(function(){
        var tg = $(this);
        var  i = tg.index();
        
        button.find('a').removeClass('active');
        tg.find('a').addClass('active');

        move(i);
        return false;
        
        });
        // 블릿버튼 클릭시 슬라이드 출력
        function move(i){
            if(cnt == i) return;
            // 현재 이미지
            var cnt_img = visual.eq(cnt);
            // 다음 이미지
            var next_img = visual.eq(i);

            if(dir == 'next'){
                cnt_img.css({left:0}).stop().animate({left:'-100%'});
                next_img.css({left:'100%'}).stop().animate({left:0});
            }else{
                //prev
                cnt_img.css({left:0}).stop().animate({left:'100%'});
                next_img.css({left:'-100%'}).stop().animate({left:0});
            }
            cnt = i;               
        }
        //다음
        $tg.find('.m_slide_n').click(function(){
            dir = 'next';
            var n = cnt+1;
            if(n==vLen){n=0;}
            button.eq(n).trigger('click');
        });

        //이전
        $tg.find('.m_slide_p').click(function(){
            dir = 'prev';
            var n = cnt-1;
            if(n<0){n=vLen - 1;}
            button.eq(n).trigger('click');
        });

        // 자동 슬라이드 호출
        timer();

        // 자동 슬라이드 함수 선언
        var palytime = setInterval(timer, 5000);
        function timer(){
             
            var n = cnt + 1;//다음 나올 번호
            
            if(n==vLen){n=0;}
            button.eq(n).trigger('click');
            // 이미지 슬라이드
            $('.slide_img li').eq(cnt).css({left:0}).stop().animate({
                left:'-100%',
            });
            $('.slide_img li').eq(n).css({left:'100%'}).stop().animate({
                left:'0',
            });
            cnt=n;
        }

        $tg.find('.list_btn').append('<div class="play_btn"><figure><img src="./img/main/icon_play.png" alt="슬라이드 정지하기"></figure></div>');
        var play = true;
        $tg.find('.play_btn').click(function(){
            if(play){
                clearInterval(palytime);
                $('.play_btn').find('img').attr({
                    src:'./img/main/icon_stop.png',
                    alt:'재생하기'
                });
                play=false;
            }else{
                palytime = setInterval(timer, 5000);
                $('.play_btn').find('img').attr({
                    src:'./img/main/icon_play.png',
                    alt:'정지하기'
                });
                play=true;
            }
             return false;
        });

        // 터치 슬라이드
        $tg.find('.slide').swipe({
            swipe : function(event, direction, duration, fingerCount, fingerDate){
                if(direction == 'right'){
                    $tg.find('.m_slide_p').trigger('click');
                }else if(direction =='left'){
                    $tg.find('.m_slide_n').trigger('click');
                }
            },
            threshold : 0,
            fingers:'all',
            excludedElements : '.m_slide_p, .m_slide_n' //스와프 영역에서 제외
        });

    }
    // 가수 배우
    function artCon(){
        // 탭 버튼 기능
        // $('#art_list .tab_btn li').click(function(){
        //    var i = $(this).index();
        //    $('.tab_btn li').removeClass('tab_v');
        //    $('#art_list .box').hide();

        //    $(this).addClass('tab_v');
        //    $('#art_list .box').eq(i).show();

        //    if($('.tab_btn li').eq(1).hasClass('tab_v')){
        //     $('.line1').animate({left:'0'}, 300);
        //     $('.line2').animate({left:'50%'}, 300);
        //    }else{
        //     $('.line1').animate({left:'50%'}, 300);
        //     $('.line2').animate({left:'0'}, 300);
        //    }


        artView();
        actView();
        function artView(){
            var artbanner = 0,
            first = 1, // 슬라이드 첫번째
            last, //마지막
            artcnt =0, // 슬라이드 갯수
            $artbox = $('.art_box.box'), // 불러오기
            $artlist = $artbox.find('ul li'),
            $first,
            $last;
            
            $artlist.each(function(){
                $(this).css('left', artbanner);
                artbanner += $(this).width();
                $(this).attr('id', 'banner'+(++artcnt));
            });
    
            if(artcnt > 4 ){
                last = artcnt;
                function artime(){
                    $artlist.each(function(){
                        $(this).css('left', $(this).position().left-1);
                    });
                    $first = $('#banner'+first);
                    $last = $('#banner'+last);
                    if($first.position().left < -240){ // 제일 왼쪽 배너의 상대위치의 left 값이 슬라이드 넓이보다 작을 경우 맨 뒤로 가기 
                        $first.css("left", $last.position().left + $last.width());                        
                        first++;                        
                        last++;                        
                        if(last > artcnt) { last=1; }                          
                        if(first > artcnt) { first=1; }
                        
                    }
                }
                var artTime = setInterval(artime, 30);
    
    
                $artlist.mouseenter(function(){
                        clearInterval(artTime);
    
                }).mouseleave(function(){
                    artTime = setInterval(artime, 30);
                });
    
            }
        }
    
        function actView(){
            var actbanner = 0,
            first = 1, // 슬라이드 첫번째
            last, //마지막
            actcnt =0, // 슬라이드 갯수
            $actbox = $('.act_box.box'), // 불러오기
            $actlist = $actbox.find('ul li'),
            $first,
            $last;
            
            $actlist.each(function(){
                $(this).css('left', actbanner);
                actbanner += $(this).width();
                $(this).attr('id', 'banner'+(++actcnt));
            });
    
            if(actcnt > 4 ){
                last = actcnt;
                function actime(){
                    $actlist.each(function(){
                        $(this).css('left', $(this).position().left-1);
                    });
                    $first = $('#banner'+first);
                    $last = $('#banner'+last);
                    if($first.position().left < -240){ // 제일 왼쪽 배너의 상대위치의 left 값이 슬라이드 넓이보다 작을 경우 맨 뒤로 가기 
                        $first.css("left", $last.position().left + $last.width());                        
                        first++;                        
                        last++;                        
                        if(last > actcnt) { last=1; }                          
                        if(first > actcnt) { first=1; }
                        
                    }
                }
                var actTime = setInterval(actime, 30);
    
    
                $actlist.mouseenter(function(){
                        clearInterval(actTime);
    
                }).mouseleave(function(){
                    actTime = setInterval(actime, 30);
                });
    
            }
        }
           return false;
        
    }
    // 뮤직비디오
    function mv(){
        // 뮤직비디오 블릿 버튼 클릭시
        $('.slide_btn03 > li').click(function(){
            var i= $(this).index();
            $('.slide_btn03 > li > a').removeClass('active');
            $(this).find('>a').addClass('active');
            // $('.mv_list > li .mv').get(i).currentTime=0;  

            $('.mv_list > li .mv').hide();
            $('.mv_list > li > .mv[poster]').eq(i).show();

            for (var k = 0; k < mvLen; k++) {
                    $('.mv_list > li').eq(k).find('.mv').get(0).pause();
                    //다시 처음부터 로드
                    $('.mv_list > li').eq(k).find('.mv').get(0).load();
                    //재생 버튼 모양
                    $('.ps_btn > span').text('play_circle');
            }
            return false;
            
        });
        // 재생 / 멈춤
        var mvLen = $('.mv_list > li').length;
        $('.mv_list > li').click(function(){
            var i= $(this).index();
            
            for (var k = 0; k < mvLen; k++) {
                if(i != k){
                    $('.mv_list > li').eq(k).find('.mv').get(0).pause();
                }
            }
            if ($('.mv_list > li').eq(i).find('.mv').get(0).paused) {
                $('.mv_list > li').eq(i).find('.mv').get(0).play();
                //일시정지 버튼 모양
                $('.ps_btn > span').text('stop_circle');
            }else{
                $('.mv_list > li').eq(i).find('.mv').get(0).pause(); 
                 //재생 버튼 모양
                 $('.ps_btn > span').text('play_circle');

            }
             
        });

        // 스토어
        $('.store').mouseover(function(){
            $(this).find(' figure > img').attr({
                src:'./img/main/icon_box_on.png'
            });
        }).mouseout(function(){
            $(this).find(' figure > img').attr({
                src:'./img/main/icon_box_off.png'
            });
        });
   }
});
