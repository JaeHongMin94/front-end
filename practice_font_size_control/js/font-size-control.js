var btn_inc = document.querySelector('.button-increase-font-size');
var btn_dec = document.querySelector('.button-decrease-font-size');
var demo_text = document.querySelector('.demo-text-area');

btn_inc.onclick = function(){
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = parseInt(current_font_size,10);
  var changed_font_size = current_font_size + 2;
  demo_text.style.fontSize = changed_font_size + "px";
};

btn_dec.onclick = function(){
  var current_font_size = window.getComputedStyle(demo_text).fontSize;
  current_font_size = parseInt(current_font_size,10);
  var changed_font_size = current_font_size - 2;
  demo_text.style.fontSize = changed_font_size + "px";
};
