$(function(){
    $('.art_name > ul > li').eq(0).addClass('view');
    $('.music_video').hide();
    $('.music_video').eq(0).show();
    
    // 탭메뉴
    var swiper = new Swiper('.art_name',{
        slidesPerView: '7',
        freeMode: true,
        observer:true, // 초기화
        observeParents:true, // 초기화
    
        breakpoints:{
            768:{
                slidesPerView:3,
            },        
        }
    });
    // 탭버튼 클릭시 이름이랑 매칭되는 mv보이기
    $('.art_name > ul > li').click(function(){
        var i = $(this).index();
    
        $('.art_name > ul > li').removeClass('view');
        $(this).addClass('view');
    
        $('.box .music_video').hide(); // 영상 전체 가리기
        $('.box .music_video').eq(i).show(); // 해당 영상만 보이기
    
        $('.mv_title').text($('.music_video').eq(i).find('.music_list li a:eq(0) .music_tit').text()); //탭 클릭시 첫번째 영상 제목 나오기
    
        // 탭버튼 클릭시 페이징 초기화
        swiper0.slideTo(0);
        swiper1.slideTo(0);
        swiper2.slideTo(0);
        swiper3.slideTo(0);
        swiper4.slideTo(0);
        swiper5.slideTo(0);
        swiper6.slideTo(0);
    
        return false;
    });
    
    
    // 케이윌 LIST1 
    var swiper0 = new Swiper('.ms0',{
        slidesPerView: 1,
        spaceBetween:10,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
        pagination: {
            el: ".pg0",
            type: "fraction",
        },
        navigation: {
            nextEl: '.sb_n0' ,
            prevEl: '.sb_p0',
        },
    
    
    });
    var bmv0 = $('.box .music_video:eq(0)');
    bmv0.find('.music_list li a').click(function(){
        var i = $(this).attr('data-n');
    

        bmv0.find('.music_list li a').removeClass('active');
        $(this).addClass('active');
    
        bmv0.find('.video_box li').hide();
        bmv0.find('.video_box li').eq(i).show();
    
        $('.mv_title').text($(this).find('.music_tit').text());
       
        return false;
    });
    
    // 아이브
    var swiper1 = new Swiper('.ms1',{
        slidesPerView: 1,
        spaceBetween:10,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
        pagination: {
            el: ".pg1",
            type: "fraction",
        },
        navigation: {
            nextEl: '.sb_n1',
            prevEl: '.sb_p1',
        },
    });
    var bmv1 = $('.box .music_video:eq(1)');
    bmv1.find('.music_list li a').click(function(){
        var i = $(this).attr('data-n');
        
        var mvLen = bmv0.find('.videoE li ').length;
    
    
        bmv1.find('.music_list li a').removeClass('active');
        $(this).addClass('active');
    
        bmv1.find('.videoE li').hide();
        bmv1.find('.video_box li').eq(i).show();
    
        for (var k = 0; k < mvLen; k++) {
            bmv1.find('.videoE li').eq(k).find('.mv').get(0).pause();
            //다시 처음부터 로드
            bmv1.find('.video_box li').eq(k).find('.mv').get(0).load();
        }
    
        $('.mv_title').text($(this).find('.music_tit').text());
    return false;
    
    });
    
    // 몬스타엑스
    var swiper2 = new Swiper('.ms2',{
        slidesPerView: 1,
        spaceBetween:10,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
        pagination: {
            el: ".pg2",
            type: "fraction",
        },
        navigation: {
            nextEl: '.sb_n2',
            prevEl: '.sb_p2',
        },
    });
    
    var bmv2 = $('.box .music_video:eq(2)');
    bmv2.find('.music_list li a').click(function(){
        var i = $(this).attr('data-n');
    
        bmv2.find('.music_list li a').removeClass('active');
        $(this).addClass('active');
    
        bmv2.find('.video_box li').hide();
        bmv2.find('.video_box li').eq(i).show();
    
    
    
        $('.mv_title').text($(this).find('.music_tit').text());
       return false;
    
    });
    
    
    var swiper3 = new Swiper('.ms3',{
        slidesPerView: 1,
        spaceBetween:10,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
        pagination: {
            el: ".pg3",
            type: "fraction",
        },
        navigation: {
            nextEl: '.sb_n3',
            prevEl: '.sb_p3',
        },
    });
    var bmv3 = $('.box .music_video:eq(3)');
    bmv3.find('.music_list li a').click(function(){
        var i = $(this).attr('data-n');
    
        bmv3.find('.music_list li a').removeClass('active');
        $(this).addClass('active');
    
        bmv3.find('.video_box li').hide();
        bmv3.find('.video_box li').eq(i).show();
    
    
    
        $('.mv_title').text($(this).find('.music_tit').text());
       return false;
    
    });
    
    var swiper4 = new Swiper('.ms4',{
        slidesPerView: 1,
        spaceBetween:10,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
        pagination: {
            el: ".pg4",
            type: "fraction",
        },
        navigation: {
            nextEl: '.sb_n4',
            prevEl: '.sb_p4',
        },
    });
    var bmv4 = $('.box .music_video:eq(4)');
    bmv4.find('.music_list li a').click(function(){
        var i = $(this).attr('data-n');
    
        bmv4.find('.music_list li a').removeClass('active');
        $(this).addClass('active');
    
        bmv4.find('.video_box li').hide();
        bmv4.find('.video_box li').eq(i).show();
    
    
    
        $('.mv_title').text($(this).find('.music_tit').text());
       return false;
    
    });
    var swiper5 = new Swiper('.ms5',{
        slidesPerView: 1,
        spaceBetween:10,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
        pagination: {
            el: ".pg5",
            type: "fraction",
        },
        navigation: {
            nextEl: '.sb_n5',
            prevEl: '.sb_p5',
        },
    });
    var bmv5 = $('.box .music_video:eq(5)');
    bmv5.find('.music_list li a').click(function(){
        var i = $(this).attr('data-n');
    
        bmv5.find('.music_list li a').removeClass('active');
        $(this).addClass('active');
    
        bmv5.find('.video_box li').hide();
        bmv5.find('.video_box li').eq(i).show();
    
    
    
        $('.mv_title').text($(this).find('.music_tit').text());
       return false;
    
    });
    var swiper6 = new Swiper('.ms6',{
        slidesPerView: 1,
        spaceBetween:10,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
        pagination: {
            el: ".pg6",
            type: "fraction",
        },
        navigation: {
            nextEl: '.sb_n6',
            prevEl: '.sb_p6',
        },
    });
    var bmv6 = $('.box .music_video:eq(6)');
    bmv6.find('.music_list li a').click(function(){
        var i = $(this).attr('data-n');
    
        bmv6.find('.music_list li a').removeClass('active');
        $(this).addClass('active');
    
        bmv6.find('.video_box li').hide();
        bmv6.find('.video_box li').eq(i).show();
    
    
    
        $('.mv_title').text($(this).find('.music_tit').text());
       return false;
    
    });
    
});

