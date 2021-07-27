var $rd_toggle = $('#rd_toggle');
var $rd_warning = $('#rd_warning');
var $toggle_statue = $('.toggle_statue');
var now_statue = $toggle_statue.text();
var lastId,
    menu = $("#menu"),
    menuHeight = menu.outerHeight(),
    menuItems = menu.find(".anchor"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// 點擊選單滾動畫面
function click_anchor(){
    menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = 0;
        // offsetTop = href === "#" ? 0 : $(href).offset().top-menuHeight+1;

        if(offsetTop = href === "#"){
            return
        }else{
            offsetTop = $(href).offset().top-menuHeight+1
        }

    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    });
}

// 滾動偵測錨點
function scroll_anchor(){
    $(window).scroll(function(){

    var fromTop = $(this).scrollTop()+menuHeight;
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
        return this;
    });

    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    
    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }                   
    });
}

// 回到最頂端
function gotop() {
    var $gotop = $('#gotop');
    $gotop.click(function () {

        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height()*0.5) {
            $gotop.stop().fadeIn('fast');
        } else {
            $gotop.stop().fadeOut('fast');
        }
    }).scroll();
}

// 警語收合
function warning(){
    $rd_toggle.click(function(){
        $rd_warning.toggleClass('warning_open');
        $(this).toggleClass('toggle_open');
        // $(this).children('.toggle_statue').text($(this).children('.toggle_statue').text() == '展開' ? '隱藏' : '展開');

       if( $(this).children('.toggle_statue').text() == '展開'){
        $(this).children('.toggle_statue').text($(this).children('.toggle_statue').text()) = '隱藏' 
       }else{
        $(this).children('.toggle_statue').text($(this).children('.toggle_statue').text()) = '展開' 
       }
    });
}


$(document).ready(function () {
    click_anchor();
    scroll_anchor();
    gotop();
    warning();
})
