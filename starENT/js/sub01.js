$(function(){
sub01_1(); //회사소개 페이지
sub02_1(); //가수, 배우 페이지
sub06_1(); //베스트 상품 페이지

// 회사소개 페이지
function sub01_1(){
    //이미지 보이게 하기
    $(document).ready(function(){
        $('.con_intro .starin_img ul').addClass('fade');
    });
    // 브라우저 크기가 1024보다 작을 경우
    // $(window).resize(function(){
    //     if($(window).width()<768){
    //         $('.ci > .list01, .ci > .list02').find('p').hide();
    //         $('.ci > .list01, .ci > .list02').find('p').addClass('view');
    
    //     }else{
    //         $('.ci > .list01, .ci > .list02').find('p').removeClass('view');
    //         $('.ci > .list01, .ci > .list02').find('p').show();
    //         $('.arrow_p').text('expand_circle_down');
    //     }
    // });
     
    var arrBtn01 = $('.ci_list01 > .icon_arrow > .arrow_p');
    var arrBtn02 = $('.ci_list02 > .icon_arrow > .arrow_p');

    // 스타쉽 ci 더보기 버튼 클릭시
    arrBtn01.click(function(){
        $(this).toggleClass('show');
        $('.ci_list01').find('.con').stop().slideToggle('fast');

        if(arrBtn01.hasClass('show')){
            $(this).text('expand_circle_up');
        }else{
            $('.ci_list01 > .icon_arrow > .arrow_p').text('expand_circle_down');
        }
    });

    // 킹콩 ci 더보기 버튼 클릭시
    arrBtn02.click(function(){
        $(this).toggleClass('show');
        $('.ci_list02').find('.con').stop().slideToggle('fast');

        if( arrBtn02.hasClass('show')){
            arrBtn02.text('expand_circle_up');
        }else{
            arrBtn02.text('expand_circle_down');
        }

    });

}

// 가수, 배우 페이지
function sub02_1(){
    // 검색버튼
    var sec_btn = $('.art_box  .sec_btn');
    
    sec_btn.click(function(){
        if(sec_btn.find('span').hasClass('close')){
            sec_btn.find('span').removeClass('close');
            sec_btn.find('span').text('search');
            $('#sec_text').hide();
        }else{
            $('#sec_text').show();
            sec_btn.find('span').addClass('close');
            sec_btn.find('span').text('close');
        }
        return false;
    });
    
    // list
    var $artList = $('.art_list ul'), //목록 전체
        list = $artList.find('li'),
        listTotal = list.length;

    // PC버전
    //이미지 개수가 9개가 넘으면  페이지 번호 생성 

    for(var i=0; i<listTotal/9; i++){
        $('.page').append('<li>' + (i+1) +'</li>');
        pagePC();
    }
    // 개수가 9개 이상이면 다음 페이지로 넘어가기, 번호 클릭시 
    function pagePC(){
        var num = $('.page > li');

        num.eq(0).addClass('on');
        num.click(function(){
            var pgN = $(this).text() ;
            var pgE = pgN*9
            num.removeClass('on');
            $(this).addClass('on');
            $artList.find('li').hide();
            // 페이지 당 리스트(1~9)개 보이게 하기
            for(var k=(pgE-8);k <= (pgE); k++){
                $artList.find('li').eq(k-1).show(); 
            }
            
            return false;
        })

    
    }
    //select
    var viewText1 = $('.order li').eq(0).text();
    $('.view_select').text(viewText1);
    //select 클릭시 목록 보이게  하기
    $('.view_slt').click(function(){       
        if( $('.view_slt').hasClass('arrow_view')){
            $(this).removeClass('arrow_view');
            $('.view_select').find('+ .select_icon').text('expand_less');
        }else{
            $(this).addClass('arrow_view');
            $('.view_select').find('+ .select_icon').text('expand_more');
        }

        $('.order').toggle();  
        return false;
    });
    // 선택한 목록을 select box에 보이게 하기
    $('.order li').click(function(){
        var text =$(this).html();
        $('.view_select').html(text);
        $('.order').toggle();

        $('.view_slt').addClass('arrow_view');
        $('.view_select').find('+ .select_icon').text('expand_more');
        return false;
    });
}   


// 베스트 상품 페이지
function sub06_1(){
    $('.sub06_btn >  span').click(function(){
        $('.best_list .item_list li').hide();
        $(this).toggleClass('view');
        if($(this).hasClass('view')){
            $('.item_list li').show();
            $(this).text('expand_circle_up');
        }else{
            $('.item_list > li:nth-child(n+5)').hide();
            $(this).text('expand_circle_down');
        }
        return false;
    });
}

});

