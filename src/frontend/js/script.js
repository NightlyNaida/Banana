


/*Поведение карточки банана*/
$('.banana-item__rate-container').mouseleave(function(e){
  let childArr = $(this).children('.banana-item__rate-item');// сгребаем все бананы в один массив
  childArr.each(function(i,elem){
      $(elem).css('transform','scale(1)');
      paintBanana(elem,'none');
  })
})


$('.banana-item__rate-item').mouseenter(function(e){
  let selfParent = $(this).parent(); // получаем родительский блок
  let index = $(this).index(); // получаем индекс текущего банана  под мышью
  let childArr = $(selfParent).children('.banana-item__rate-item');// сгребаем все бананы в один массив
  
  childArr.each(function(i,elem){ 
    if (i <= index){
      $(elem).css('transform','scale(1.2)');
      paintBanana(elem,'#FFE15A');
    }
    else if (i > index){
      $(elem).css('transform','scale(1)');
      paintBanana(elem, 'none');
    }
  })

})


$('.banana-item__rate-item').click(function(e){
  paintBanana(e.target,'#ffffff');
});

function paintBanana(elem, color){
  var object = $(elem).children('object')[0];
  var content = object.contentDocument;
  var svg = content.getElementById('banana-contur');
  var svgPath = svg.getElementById('banana-contur-path');
  svgPath.style.fill = color;
}

/*Конец поведения карточки банана*/




var choiceBoxIsAdded = false; //флаг добавления всплывающего списка выбора метода сортировки

$('.options-bar__sort-method-caption-container').mouseleave(function(){
  if (choiceBoxIsAdded){
    setTimeout(function(){$('.options-bar-sort-icon').toggleClass('options-bar-sort-icon-rotate');},20);//поворот стрелки в исходное положение  
    // setTimeout - фикс, ибо скрипт срабатывает ьыстрее подгрузкки css кода
  }
  
  let container = document.getElementsByClassName('options-bar__sort-method-caption-container')[0];//выдергиваем блок с заголовком
  $('.chocieBox').remove();//удаляем лобавленный при клике список
  $(container).css("border-radius", "10px");//закругляем все углы у блока заголовка
  choiceBoxIsAdded = false;// выключаем флаг добавления списка метода сортировки
})


$('.options-bar__sort-method-caption-container').click(function(){
  var code = "";// сюда складываем код списка
  let container = document.getElementsByClassName('options-bar__sort-method-caption-container')[0];//выдергиваем блок загловка метода сортировки

    let boxOpen = "<div class='chocieBox'>"; //Код списка разбитый по частям
    let boxClose = "</div>";
    let item = "<p class='value'></p>";
    let values = ['по алфавиту', 'по популярности' , 'по рейтингу']; // сюда складываем необходимые методы сортировки

    if (! choiceBoxIsAdded){ //Проверям, не добавлен ли список
      setTimeout(function(){$('.options-bar-sort-icon').toggleClass('options-bar-sort-icon-rotate');},20);//Переворачиваем стрелку
      for (i=0; i < values.length; i++) 
      {
          if (i == 0){ code += boxOpen } // во время первой итерации открываем блок списка 
          code += item; // добавляем элементы списка
          if (i == values.length - 1){ code += boxClose; choiceBoxIsAdded = true; } //закрываем блок списка во время последней итерации
      }

      container.innerHTML += code;// вставляем код списка в блок заголовка

      $('.value').each(function(i,elem){ // вставляем в абзацы элементов списка значения из массива
        elem.innerHTML += values[i];
      })

      var choiceBox = document.getElementsByClassName("chocieBox")[0];// выдергиваем список
      $(container).css("border-radius", "10px 10px 0 0"); //выклюаем нижнее скругление у блока заголовка
      setTimeout(function(){$('.chocieBox').toggleClass('chocieBox-show');},20);//показываем список (по умолчанию он скрыт и средствами css реализуется анимация появления) 
    }
})


$('.button-search').click(function(){
    $('.search-form').toggleClass('search-form-show');// Управляем Пположением ФОРМЫ
    $('.search-form__input').toggleClass('search-form__input-show');// Управляем внешним видом инпута
    $('.button-search').toggleClass('button-search-pushed');// Управляем внешним видом кнопки на которую нажали
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
