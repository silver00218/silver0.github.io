$(function(){


  // dj station
    var swiper = new Swiper(".feel_station", {
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints:{
           700:{
            slidesPerView: 3,
            spaceBetween: 10,
            freeMode: true,
            }, 
            400:{
                slidesPerView: 2,
                spaceBetween: 10,
                freeMode: true,
                },          
        }

      });
      var swiper1 = new Swiper(".genre_station", {
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints:{
            700:{
             slidesPerView: 3,
             spaceBetween: 10,
             freeMode: true,
             },    
             400:{
                slidesPerView: 2,
                spaceBetween: 10,
                freeMode: true,
                },     
         }
      });
// month
      var month = new Swiper(".swiper_m", {
        slidesPerView: 1,
        spaceBetween: 0,
        loopFillGroupWithBlank: false,
        observer:true, // 초기화
        observeParents:true, // 초기화
       

      });
});