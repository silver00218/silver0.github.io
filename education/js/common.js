
window.onload = function(){
    search(); // 검색창
    dropDownMenu(); //햄버거메뉴(전체메뉴_1200px)
    footerSlide();
    // 1200px 검색창
    function search(){
        var search_open =  document.querySelector('#open');
        var search_text = document.getElementById('search_text');
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
    // footer
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

