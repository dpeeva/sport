
function blade(){
  var ul      = $('#text_carousel ul'),
      first   = ul.find('li:nth-child(1)'),
      second  = ul.find('li:nth-child(2)'),
      speed   = 800;
  
  first.animate({'top': '-32px', 'opacity' : 0}, speed , function(){ first.appendTo(ul).css({top: '32px'}) });
  second.animate({'top': 0, 'opacity' : 1}, speed );
}

setInterval(blade, 5000); 


$('#last_news ol li').click(function(){
  $('#last_news ol li').removeAttr('class');
  $('#last_news ul').animate({'left':  ( $(this).addClass('selected').index() * -965) }); 
});

$('.bxslider ul').bxSlider({
  slideWidth: 185,
  pager:false
});



$('#breaking_news ul').bxSlider({
  slideWidth: 385
});
































