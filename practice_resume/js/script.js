var menu = document.querySelector('.h-menu');
var menuList = document.querySelector('.menu-mobile a')
var menuMobile = document.querySelector('.menu-mobile');

//menu요소를 클릭했을떄
//클레스중에 hidden이 있으면
//hidden을 지운다
//클레스중에 hidden이 없으면
//hidden을 추가한다
//
menu.onclick = function(){
  var menuMobileClasses = menuMobile.classList;

  if(menuMobileClasses.contains('hidden')){
    menuMobileClasses.remove('hidden');
  }else{
    menuMobileClasses.add('hidden');
  }
}

//menuList요소를 클릭했을떄
//menuMobile 클레스중에 hidden이 있으면
//hidden을 지운다
//클레스중에 hidden이 없으면
//hidden을 추가한다
//
menuList.onclick = function(){
  console.log('ccc');
  var menuMobileClasses = menuMobile.classList;
  console.log(menuMobileClasses);

  if(menuMobileClasses.contains('hidden')){
    menuMobileClasses.remove('hidden');
  }else{
    menuMobileClasses.add('hidden');
  }
}
