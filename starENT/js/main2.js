$(function(){
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
   
});