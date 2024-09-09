
$(function(){


  // 스와이퍼
    var swiper = new Swiper('.slides', {
        slidesPerView: 1, //보여지는 슬라이드 개수
        loop: true,  // 반복 슬라이드
        loopSlides:1,
        keyboard: {
          enabled: true,  //키보드 제어
        },
        pagination: {
          el: ".s_btn",
          type: "progressbar",
        },
        autoplay: {
          delay: 4000, // 4초마다 슬라이드
          disableOnInteraction: true, //버튼 제어시 멈춤
        },
        navigation: { //이전다음버튼 제어
          nextEl: '.s_next',
          prevEl: '.s_prev',
        },
    });

    // 유기동물
    var swiper2 = new Swiper('.con4_slide', {
        slidesPerGroup: 3,
        spaceBetween:30, //슬라이드 사이 공간
        slidesPerView: 3,
        loop: true,
        loopFillGroupWithBlank: true, // 끝에 슬라이즈 부족할 경우 비워두기 true/ 자동으로 마지막 이미지 뒤에 바로 처음 이미지 호출 false 
        observer:true,
        observeParents:true,
        pagination: {
            el: '.con4_b',
            clickable: true,
        },
        navigation: {
            nextEl: '.con4_n',
            prevEl: '.con4_p',
        },
    
    //반응형 슬라이드
    breakpoints:{
        1024:{
         slidesPerView: 3,
         slidesPerGroup: 3,
        },  
        768:{
          slidesPerView: 2,
          slidesPerGroup: 2,
         },  
         500:{
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween:30, //슬라이드 사이 공간
         }, 
         425:{
          loop: false,
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween:30,
         },   
        320:{
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween:30, //슬라이드 사이 공간
         },      
    }
    });

     
});

