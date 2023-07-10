mute = document.getElementsByClassName('toggle');
var audio = new Audio('music/music.mp4');
mute[0].addEventListener("click",function(){
  if(mute[0].src.endsWith("images/mute.png")){
  mute[0].src = "images/unmute.png";
  audio.play();
  }
  else{
  mute[0].src = "images/mute.png";
  audio.pause();
  } 
});


scroll1 = document.getElementsByClassName('jett');
target1= document.getElementsByClassName('jett_background');
var audio1 = new Audio('music/jett.mp3')
scroll1[0].addEventListener("click",function() {
  target1[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio1.play();
});
scroll2 = document.getElementsByClassName('viper');
target2 = document.getElementsByClassName('viper_background');
var audio2 = new Audio('music/viper.mp3');
scroll2[0].addEventListener("click",function() {
  target2[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio2.play();
});
scroll3 = document.getElementsByClassName('raze');
target3 = document.getElementsByClassName('raze_background');
var audio3 = new Audio('music/raze.mp3');
scroll3[0].addEventListener("click",function() {
  target3[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio3.play();
});
scroll4 = document.getElementsByClassName('brim');
target4 = document.getElementsByClassName('brim_background');
var audio4 = new Audio('music/brim.mp3');
scroll4[0].addEventListener("click",function() {
  target4[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio4.play();
});
scroll5 = document.getElementsByClassName('kj');
target5 = document.getElementsByClassName('kj_background');
var audio5 = new Audio('music/kj.mp3');
scroll5[0].addEventListener("click",function() {
  target5[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio5.play();
});
scroll6 = document.getElementsByClassName('sova');
target6 = document.getElementsByClassName('sova_background');
var audio6 = new Audio('music/sova.mp3');
scroll6[0].addEventListener("click",function() {
  target6[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio6.play();
});
scroll7 = document.getElementsByClassName('sage');
target7 = document.getElementsByClassName('sage_background');
var audio7 = new Audio('music/sage.mp3');
scroll7[0].addEventListener("click",function() {
  target7[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio7.play();
});
scroll8 = document.getElementsByClassName('phoenix');
target8 = document.getElementsByClassName('phoenix_background');
var audio8 = new Audio('music/phoenix.mp3');
scroll8[0].addEventListener("click",function() {
  target8[0].scrollIntoView({
    block:'end',
    behavior: 'smooth',
    inline:'center'
  });
  audio8.play();
});