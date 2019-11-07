$('.button-search').click(function(){
    $('.search-form__input').toggleClass('search-form__input-fw');
})

$('.button-menu').click(function(){
    $('.menu-row').toggleClass('menu-row-enabled');
})


function alo(){

    var object = document.getElementById('banana-contur-box');
    var contentDocument = object.contentDocument;
    var svgObject = contentDocument.getElementById('banana-contur');
    //$(image).css('transition','x .6s ease-out, y .6s ease-out');

    var body = document.body,
        startX = -30,
        startY = -30,
        w = document.documentElement.offsetWidth,
        h = document.documentElement.offsetHeight;
  
      body.addEventListener('mousemove', function(evt){
      var posX = Math.round(evt.clientX / w * startX)
      var posY = Math.round(evt.clientY / h * startY)
      $(image).css('x', posX+'px')
      $(image).css('y', posY+'px')
    })
  }

//setTimeout(alo, 1000);