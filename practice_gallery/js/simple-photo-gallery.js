var container = document.querySelector('.container');
var gallery_controls = container.querySelector('.gallery-controls');
var gallery_control_buttons = gallery_controls.querySelectorAll('button');
var gallery_view = container.querySelector('.gallery-view')



var changeGalleryView = function(){
  var img = this.querySelector('img');
  var view = gallery_view.querySelector('img');
  var src = img.getAttribute('src');
  var alt = img.getAttribute('alt');
  var changed_src = src.replace('thumbs', 'big');

  view.setAttribute('src', changed_src);
  view.setAttribute('alt', alt);
};

for(var i=0; i<gallery_control_buttons.length; i++){
  gallery_control_buttons.item(i).onclick = changeGalleryView;
}



var btn_toggle = container.querySelector('.toggle-controls');


btn_toggle.onclick = function(){
  for(var i=0; i<gallery_control_buttons.length; i++){
    var controlClassList = gallery_control_buttons[i].classList;
    if (controlClassList.contains('hidden')){
      controlClassList.remove('hidden')
      btn_toggle.textContent = '-';
    }else{
      controlClassList.add('hidden')
      btn_toggle.textContent = '+';
    }
  }
}
