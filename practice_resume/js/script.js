var menu = document.querySelector('.h-menu');
var menuMobile = document.querySelector('.menu-mobile');
var picture = document.querySelector('.mypic');

//menu요소를 클릭했을떄
//클레스중에 hidden이 있으면
//hidden을 지운다
//클레스중에 hidden이 없으면
//hidden을 추가한다

menu.onclick = function(){
  var menuMobileClasses = menuMobile.classList;
  console.log('hee');
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

picture.onclick = function(){
  console.log('hello');
  var pictureClassList = picture.classList;
  console.log(pictureClassList);
  if(picture.classList.contains('myrealpic')){
    picture.classList.remove('myrealpic');
  }else{
    picture.classList.add('myrealpic');
  }
  }

//
//
// if ( _container.classList.contains('show-grid') ) {
//   _container.classList.remove('show-grid');
// }
// // 없으면?
// else {
//   _container.classList.add('show-grid');
