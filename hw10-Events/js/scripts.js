let soundID = null;
document.addEventListener('keypress', function(event){
  const activeBtn = document.querySelector('.key.active');
  const audio = document.getElementById('sound'+event.keyCode);

  if(audio !== null){
    if(soundID != null){
      document.getElementById('sound'+soundID).pause();
      document.getElementById('sound'+soundID).currentTime = 0;
      document.getElementById('soundDefault').pause();
      document.getElementById('soundDefault').currentTime = 0;
    }
    soundID = event.keyCode;
    if(activeBtn !== null){
      activeBtn.classList.remove('active');
    }
    document.getElementsByClassName('key'+soundID)[0].classList.add('active');
    audio.play();
  }else{
    if(activeBtn !== null){
      activeBtn.classList.remove('active');
    }
    if(soundID != null){
      document.getElementById('sound'+soundID).pause();
      document.getElementById('sound'+soundID).currentTime = 0;
    }
    document.getElementById('soundDefault').play();
  }
});  