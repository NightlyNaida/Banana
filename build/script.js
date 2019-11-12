$('.button-search').click(function(){
    $('.search-form__input').toggleClass('search-form__input-fw');
})

$('.button-menu').click(function(){
    $('.menu-row').toggleClass('menu-row-enabled');
})


function alo(){

  var objects = document.getElementsByClassName('banana-contur-box'); //храним переменные объектов с свг
  var images = [];
  for(let element of objects){
    var contentDocument = element.contentDocument;
    var svgObject = contentDocument.getElementById('banana-contur');
    let image = svgObject.getElementById('image');
    $(image).css('transition','x .6s ease-out, y .6s ease-out');
    images.push(image);
  }  
  
  var body = document.body,
  startX = -60,
  startY = -60,
  w = document.documentElement.offsetWidth,
  h = document.documentElement.offsetHeight;

  body.addEventListener('mousemove', function(evt){
    var posX = Math.round(evt.clientX / w * startX)
    var posY = Math.round(evt.clientY / h * startY)
    for(let image of images){
      $(image).css('x', posX+'px')
      $(image).css('y', posY+'px')
      }
  })
}

setTimeout(alo, 1000); 


$(function(){
  var neededSlide = $('.columns-box');
  var block = true;

  $(window).scroll(function(){
    var scrollEvent = ($(window).scrollTop() > (neededSlide.position().top - $(window).height()));
    
    if(scrollEvent && block){

      block = false;
      
      $('.banana-count').each(function () {
        var countOfBananas = $(this).text();
        console.log("countOfBananas is " + countOfBananas);
        var relation = (countOfBananas / 25000) * 100;
        console.log("relation is " + relation);
        var parent = $(this).parents('.column-box');
        console.log("Parent of " + $(this) + " is " + parent);

        parent.each(function(){
          $(this).css('height', Math.ceil(relation) + "%");
          console.log("new height of " + $(this) + " is " + Math.ceil(relation) + "%")
        })
        
        $(this).prop('Counter',0).animate({ 
          Counter: $(this).text()
        }, 
        {
          duration: 3000,
      
          step: function(now) {
            $(this).text(Math.ceil(now));
            }
          });
        })
    }
  })
})
