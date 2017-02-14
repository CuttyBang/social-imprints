
$(document).ready(function() {


  $('img.featured-photos').imageScale({
    rescaleOnResize: true,
  });




  window.setTimeout(function(){
    $('.overlay-text').css('opacity', '1');
  }, 5000);

  window.setTimeout(function(){
    $('.overlay-text').css('opacity', '0');
  }, 10000);

  $('.nav .nav-item').on('click', 'a', function(){
    var target = $(this).attr('rel');
    var item = $('#'+target);
    if(item.hasClass('active') === false ){
      $('.underline').removeClass('active');
      item.addClass('active');
    } else {
      window.setTimeout(function(){
        $('.nav-bar').css('margin', '-6em');
        $('.top-bar').css('marginTop', '0em');
        $('#menu-hamburger').removeClass('open');
      }, 500);
    }
    if($('#menu-hamburger').attr('class') == 'open'){
      window.setTimeout(function(){
        $('.nav-bar').css('margin', '-6em');
        $('.top-bar').css('marginTop', '0em');
        $('#menu-hamburger').removeClass('open');
      }, 500);
    }
  });

  $('.nav .nav-item').on('mouseleave', 'a', function(){
    var target = $(this).attr('rel');
    $('#' + target).removeClass('show');
    $('#' + target).addClass('hide');
  });

  $('.nav .nav-item').on('mouseover', 'a', function(){
    var target = $(this).attr('rel');
    //$('.underline').addClass('hide').css('width', '0');
    //$('#'+target).removeClass('hidden').css('width', '100%');
    $('#' + target).removeClass('hide');
    $('#' + target).addClass('show');
  });

  $('#menu-hamburger').on('click', function(){
    var condition = this.className;
    if(condition == 'open'){
      $('.nav-bar').css('margin', '-6em');
      $('.top-bar').css('marginTop', '0em');
      $('#menu-hamburger').removeClass('open');
    } else {
      $('#menu-hamburger').addClass('open');
      $('.nav-bar').css('margin', '0');
      $('.top-bar').css('marginTop', '6em');
    }
  });



});
