function AudioInBackground(){
  var audioElement = null;
  var drum = false;

  var that = this;

  this.loadAudio = function(audioSource){
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', audioSource);

  }

  this.playAudio = function(){
    audioElement.play();

    audioElement.addEventListener('ended', function() {
    currentTime = 0;
    console.log('finished');
    audioElement.play();
  }, false);


  }

  this.pauseAudio = function(){
    audioElement.pause();
    audioElement.currentTime = 0;

  }


  this.volumeController = function(volume){

    if(audioElement)
      audioElement.volume = volume;

    console.log(volume);
  }


  volume.addEventListener("change",function(){
   that.volumeController(document.getElementById('volume').value);

  });


  drum1.addEventListener("click",function(){
    if(!drum){
      drum1.className = 'drum active';
      that.loadAudio('music/wipeout161.mp3');
      that.playAudio();
      drum = true;
    }

    else{
      drum1.className = 'drum';
      that.pauseAudio();
      drum = false;
    }
    
  }); 
  

  drum2.addEventListener("click",function(){
    if(!drum){
      drum2.className = 'drum active';
      that.loadAudio('music/wipeout161.mp3');
      that.playAudio();
      drum = true;
    }

    else{
      drum2.className = 'drum';
      that.pauseAudio();
      drum = false;
    }

  });

  drum3.addEventListener("click",function(){
    if(!drum){
      drum3.className = 'drum active';
      that.loadAudio('music/wipeout161.mp3');
      that.playAudio();
      drum = true;
    }

    else{
      drum3.className = 'drum';
      that.pauseAudio();
      drum = false;
    }
  });
  
  
}