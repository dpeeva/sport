
if($('#text_carousel').length != 0){
  function blade(){
    var ul      = $('#text_carousel ul'),
        first   = ul.find('li:nth-child(1)'),
        second  = ul.find('li:nth-child(2)'),
        speed   = 800;
    
    first.animate({'top': '-32px', 'opacity' : 0}, speed , function(){ first.appendTo(ul).css({top: '32px'}) });
    second.animate({'top': 0, 'opacity' : 1}, speed );
  }
  setInterval(blade, 5000); 
}

if($('#last_news').length != 0){
  $('#last_news ol li').click(function(){
    $('#last_news ol li').removeAttr('class');
    $('#last_news ul').animate({'left':  ( $(this).addClass('selected').index() * -965) }); 
  });
}
$('.bxslider ul').bxSlider({
  slideWidth: 185,
  pager:false
});


$('#breaking_news ul').bxSlider({
  slideWidth: 385
});


if($('#latest_features').length != 0){

  var slideTime   = 4000,
      slideSpeed  = 700,
      number      = 0,
      current     = null,
      ul          = $('#latest_features ul'), 
      ol          = $('#latest_features ol'), 
      slideTimer  = setInterval(slideShow, slideTime);

  function slideShow(a){
    if( a || a == 0)
      number = a;
    else{
      current = ol.find('li.selected').removeAttr('class');
      number  = (current.next().length > 0 ? current.next() : ol.find('li:first')).addClass('selected').index();
    }
    ul.find('li').fadeOut(slideSpeed);
    ul.find('li:eq('+number+')').fadeIn( slideSpeed, function(){ if(a || a == 0) slideTimer = setInterval(slideShow, slideTime); });
  }
  ol.find('a').on('click', function(e){
      clearInterval(slideTimer);
      e.preventDefault();
      ol.find('li').removeAttr('class');
      slideShow($(this).parent().addClass('selected').index() );
  })
}
