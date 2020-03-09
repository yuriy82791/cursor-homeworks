const soundObj = {
  97: new Audio('./audio/avengers-assemble.mp3'),
  100: new Audio('./audio/deadpool.mp3'),
  98: new Audio('./audio/batman.mp3'),
  103: new Audio('./audio/groot.mp3'),
  105: new Audio('./audio/ironman.mp3'),
  118: new Audio('./audio/venom.mp3'),
  116: new Audio('./audio/thor.mp3'),
  114: new Audio('./audio/rocket.mp3'),
  soundDefault: new Audio('./audio/wonder-woman.mp3'),
}
const stopSound = (id = null) => {
  if(id !== null){
    soundObj[id].pause();
    soundObj[id].currentTime = 0;
  }else{
    soundObj['soundDefault'].pause();
    soundObj['soundDefault'].currentTime = 0;
  }
}
startPlay = (keyCode) => {
  const activeBtn = document.querySelector('.key.active');
  const audio = soundObj[keyCode];
  if(audio !== undefined){
    if(soundID != null){
      stopSound(soundID);
      soundObj[soundID].pause();
      soundObj[soundID].currentTime = 0;
    }
    soundID = keyCode;
    if(activeBtn !== null){
      activeBtn.classList.remove('active');
    }
    document.getElementsByClassName('key'+soundID)[0].classList.add('active');
    stopSound();
    audio.play();
  }else{
    if(activeBtn !== null){
      activeBtn.classList.remove('active');
    }
    if(soundID != null){
      stopSound(soundID);
    }
    soundObj['soundDefault'].play();
  }
}
let soundID = null;
document.addEventListener('keypress', function(){
  startPlay(event.keyCode);
});  
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('click', function(){
    let id = this.closest('.key').id;
    startPlay(id);
  });
});
