var menu = document.querySelector('.h-menu');
var menuMobile = document.querySelector('.menu-mobile');


//menu요소를 클릭했을떄
//클레스중에 hidden이 있으면
//hidden을 지운다
//클레스중에 hidden이 없으면
//hidden을 추가한다

menu.onclick = function(){
  var menuMobileClasses = menuMobile.classList;

  if(menuMobileClasses.contains('hidden')){
    menuMobileClasses.remove('hidden');
  }else{
    menuMobileClasses.add('hidden');
  }
}

//menuMobile요소를 클릭했을떄
//상단에 정의한 menu.onclick(); 함수를 호출한다

menuMobile.onclick= function(){
  menu.onclick();
}
