$(function(){
  setSlickXS($('.slick-xs .slick-container'));
  setSlickLG($('.slick-md .slick-container'));

  function setSlickXS(el){
    el.slick({
      dots: true,
      infinite: true,
      speed: 650,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',
      prevArrow: '<div class="arrow-left"></div>',
      nextArrow: '<div class="arrow-right"></div>',
    });
  }

  function setSlickLG(el){
    el.slick({
      dots: true,
      infinite: true,
      speed: 450,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0px',
      prevArrow: '<div class="arrow-left"><img class="img-fluid" src="images/index/icon_arrow_left.png"></div>',
      nextArrow: '<div class="arrow-right"><img class="img-fluid" src="images/index/icon_arrow_right.png"></div>',
    });
  }

  $('.link-rule').on('click', function(){
    $('.lb-rule').fadeIn();
    return false;
  });

  $('.link-terms').on('click', function(){
    $('.lb-terms').fadeIn();
    return false;
  });

  $('.lb-rule .link-basic').on('click', function(){
    $('.lb-rule').fadeOut();
    return false;
  });

  $('.lb-terms .link-basic').on('click', function(){
    $('.lb-terms').fadeOut();
    return false;
  });

  $('#section_discount .link-basic').on('click', function(){
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    var top = $('#section_rule').offset().top;

    $body.animate({
        scrollTop: top
    }, 1000);
    return false;
  });
});