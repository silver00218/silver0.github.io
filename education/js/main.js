window.onload = function(){
    mainSlide(); //메인 슬라이드
    tabMenu(); //가로 탭 메뉴
    imgNews(); //사진영상 뉴스 
    boardSlide(); //알림판 슬라이드
    tit_slide(); //세로 탭메뉴(유튜브 페이스북 블로그)
    search(); // 검색창
    dropDownMenu(); //햄버거메뉴(전체메뉴_1200px)
    footerSlide(); //footer > banner

    // 메인슬라이드
    function mainSlide(){
        var slides = document.querySelectorAll('.slide_wrap > li');
        var prev = document.querySelector('#mn_prev');
        var next = document.querySelector('#mn_next');
        var play = document.querySelector('#mn_play');
        var  current = 0;
        var interval = setInterval(nextSlide, 6000);
        var toggle = true;
        showSlide(current);
        prev.addEventListener('click', prevSlide);
        next.addEventListener('click', nextSlide);
        function showSlide(n){
            for(var i=0; i<slides.length; i++){
                slides[i].style.display='none';
                slides[i].classList.remove('show');
            }
            slides[n].style.display='block';
            slides[n].classList.add('show');
        }
        // 이전버튼 클릭시
        function prevSlide(){
            if(current > 0) current -=1;
            else{current = slides.length -1;}
            showSlide(current);
        }
        // 다음버튼클릭시
        function nextSlide(){if(current < slides.length -1) current +=1;
            else{current = 0;}
            showSlide(current);
        }
        // 재생버튼 클릭시
        play.addEventListener('click', function(){
            if(play.dataset.stop==="0"){
                play.classList.add('stop');
                play.dataset.stop="1";
                clearInterval(interval);
                toggle=false;
            }
            else{
                play.classList.remove('stop');
                play.dataset.stop="0";
                interval = setInterval(nextSlide, 6000);
                toggle = true;
            }
        });
    }
    // tab menu
    function tabMenu(){
        const tab = document.querySelectorAll('.tabs > li');
        const tabCon = document.querySelectorAll('.tab_con');

        tab.forEach((item, idx) => {
            item.addEventListener('click', ()=>{
                tabCon.forEach((inner)=>{
                    inner.classList.remove('current');
                })
                tab.forEach((item) =>{  
                    item.classList.remove('current')
                })
                tab[idx].classList.add('current');
                tabCon[idx].classList.add('current');

            });
        });
    }
    // 사진영상 뉴스 
    function imgNews(){
        let news_wrap = document.querySelector('.news_wrap'),
            news_slide = news_wrap.querySelector('li');
        const prev = document.querySelector('.news_prev'),
              next = document.querySelector('.news_next'),
              newsStop = document.querySelector('.news_stop');
        let   newsInterval = setInterval(newsNext, 6000),
              toggle = true;
   
        prev.addEventListener('click', newsPrev);
        function newsPrev(){
            news_slide.removeAttribute('style');
            news_wrap.insertBefore(news_wrap.lastElementChild, news_wrap.firstElementChild);
            news_wrap.firstElementChild.style;
            news_slide.style.transition = 'all 5s linear 5s';
        }
        next.addEventListener('click', newsNext);
        function newsNext(){
           news_slide.removeAttribute('style');
           news_wrap.appendChild(news_wrap.firstElementChild);
        }
        newsStop.addEventListener('click', newsSlide);
        function newsSlide(){
            if(newsStop.dataset.stop ==="1"){
                newsStop.classList.add('play');
                newsStop.dataset.stop="0";
                clearInterval(newsInterval);
                toggle=false;
            }else{
                newsStop.classList.remove('play');
                newsStop.dataset.stop="1";
                toggle=true;
                newsInterval = setInterval(newsNext, 6000);
            }
        }
    }
    // 알림판 슬라이드
    function boardSlide(){
        let board_slide = document.querySelectorAll('.board_wrap li'), //이미지(슬라이드)
            prev = document.querySelector('.notice_prev'), //이전버튼
            next = document.querySelector('.notice_next'), // 다음버튼
            stop = document.querySelector('.notice_stop'), // 정지버튼
            page = document.querySelector('.page'), //슬라이드 페이지
            totalPage = document.querySelector('.total'), // 슬라이드 총 
            noticeIn =setInterval(noticeNext, 6000); // 슬라이드 넘어가는 시간
        let board_current = 0; 
        totalPage.textContent=board_slide.length;
        page.textContent=1;
        // 슬라이드
        boardShow(board_current);
        function boardShow(n){
            for(var i=0; i<board_slide.length; i++){
                board_slide[i].style.display='none';
                board_slide[i].classList.remove('show');
            }
            board_slide[n].style.display='block';
            board_slide[n].classList.add('show');
        }

        // 알림판 이전버튼 클릭시
        prev.addEventListener('click', noticePrev);
        function noticePrev(){
            if(board_current> 0) {
                board_current-=1; 
                page.textContent-=1;
            }
            else{
                board_current = board_slide.length -1; 
                page.textContent=board_slide.length;
            }
            boardShow(board_current);
        }
        // 알림판 다음버튼 클릭시 
        next.addEventListener('click', noticeNext);
        function noticeNext(){
            if(board_current < board_slide.length -1){
                board_current +=1;
                page.textContent++;
            }
            else{board_current = 0; page.textContent=1;}
            boardShow(board_current);

        }
        // 알림판 재생/정지 버튼 클릭시
        stop.addEventListener('click', noticeSlide);
        function noticeSlide(){
            if(stop.dataset.stop==="1"){
                stop.classList.add('play');
                stop.dataset.stop="0"
                clearInterval(noticeIn);
                toggle=false;
            }else{
                stop.classList.remove('play');
                stop.dataset.stop="1";
                toggle=true;
                noticeIn = setInterval(noticeNext, 6000);
            }
        }
    }
    // 세로 탭메뉴(유튜브 페이스북 블로그)
    function tit_slide(){
        const tit = document.querySelectorAll('.sns_tit > li'),
              titCon = document.querySelectorAll('.titCon');
        let titinter = setInterval(time, 3000),
            toggle = true;
        var idx=0;
        // 3초 지났을때
        function time(){
            for(var i=0; i<tit.length; i++){
                tit[i].classList.remove('cent');
            }
            for(var j=0; j<titCon.length; j++){
                titCon[j].classList.remove('show');
            }
            
            tit[idx].classList.add('cent');
            titCon[idx].classList.add('show');
            idx++;
            if(idx>=tit.length){idx=0;}
        }
        // 정지 버튼이벤트
        var titStop = document.querySelector('.tit_stop');
        titStop.addEventListener('click',titStoplay);
        function titStoplay(){
            if(titStop.dataset.stop==='1'){
                titStop.dataset.stop =0;
                titStop.classList.add("play");
                clearInterval(titinter);
                toggle=false;
            }else{
                titStop.dataset.stop=1;
                titStop.classList.remove('play');
                titinter = setInterval(time, 3000);
                toggle = true;
            }
        }
        // 세로 탭메뉴 클릭이벤트
        tit.forEach((item, idx) => {
            item.addEventListener('click', ()=>{
                titCon.forEach((inner)=>{
                    inner.classList.remove('show');
                })
                tit.forEach((item) =>{  
                    item.classList.remove('cent')
                })
                tit[idx].classList.add('cent');
                titCon[idx].classList.add('show');
            });

                const titSlides = titCon[idx].querySelector('.node'),
                      titSlide = titSlides.querySelector('li'),
                      titPrev = document.querySelector('.btn_prev'),
                      titNext = document.querySelector('.btn_next');
                const nTit = titSlide.length;

                titPrev.addEventListener('click', titPrevSlide);
                
                function titPrevSlide(){
                    titSlides.insertBefore(titSlides.lastElementChild, titSlides.firstElementChild);
                    titSlides.removeAttribute('style');
                    titSlides.style.transform = `translateX(titSlides * (100/titSlide.length)%)`;
                    titSlides.style.transitionDuration = '500ms';
                }
                titNext.addEventListener('click', titNextSlide);
                function titNextSlide(){
                    titSlide.removeAttribute('style');
                    titSlides.appendChild(titSlides.firstElementChild);
                }
        });

    }
    // 1200px 검색창
    function search(){
        var search_open =  document.querySelector('#open');
        var search_text = document.querySelector('#search_text');
        search_open.addEventListener('click', function(){
            if(search_text.dataset.v==="on"){
                search_text.dataset.v="off";
                search_text.style.display="none";
            }else{
                search_text.dataset.v="on";
                search_text.style.display="block";
            }
        });
    }
    //햄버거메뉴(전체메뉴_1200px)
    function dropDownMenu(){
        var hamView = document.querySelector('.hamBtn');
        var close = document.querySelector('#close');
        var hamMenu = document.querySelector('.slideMenu');
        // 전체메뉴 클릭시
        hamView.addEventListener('click', function(){
            if(hamMenu.dataset.slide==="off"){
                hamMenu.style.display="block";
                hamMenu.dataset.slide="on";
            } 
        });
        // 전체메뉴 닫기 버튼 클릭시
        close.addEventListener('click', function(){
            if( hamMenu.dataset.slide==="on"){
                hamMenu.style.display="none";
                hamMenu.dataset.slide="off";
            }
        });
    }
    // footer banner
    function footerSlide(){
        const banPrev = document.querySelector('.banner_prev');
        const banNext = document.querySelector('.banner_next');
        addEvent();
        function addEvent(){
            const container = document.querySelector('.banner_slides');
            const banner = container.querySelector('li'),
                  nBanner = banner.length;
                //   banner.style.transform = `translateX(\${direction * (100/${nBanner})}%)`;
                //   banner.style.transition = 'all 5s linear 5s';

            banPrev.addEventListener('click', prevSlide);
            banNext.addEventListener('click', nextSlide);

            function prevSlide(){
                // banner.removeAttribute('style');
                container.insertBefore(container.lastElementChild, container.firstElementChild);
                // container.firstElementChild.style.transform = `translateX(${direction * (100/6)}%)`;
                container.style.transitionDuration = '500ms';
            }
            function nextSlide(){
                banner.removeAttribute('style');
                container.appendChild(container.firstElementChild);
            }
        }
    }
    
}