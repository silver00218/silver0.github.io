$(function(){
    var newsCon = $('.img_con'),
        newsWrap = newsCon.find('.news_wrap'),
        news = newsWrap.find('li'),
        len = news.length,
        cnt = 0;
    setInterval(function(){
        var n = cnt + 1;
        if(n == len){n = 0}
        newsWrap.eq(cnt).css({left:0}).stop().animate({left:'-206px'});
        newsWrap.eq(n).css({left:'206px'}).stop().animate({left:0});
        cnt = n;
    }, 3000);
         
});