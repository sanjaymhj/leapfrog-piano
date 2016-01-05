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

    /* Plays the music in a loop */
    audioElement.addEventListener('ended', function() {
    currentTime = 0;
    
    audioElement.play();
  }, false);


  }

  this.stopAudio = function(){
    audioElement.pause();
    audioElement.currentTime = 0;

  }


  this.volumeController = function(volume){

    if(audioElement)
      audioElement.volume = volume;

  }


  /* Triggers play function in single click and stops in double click */
  drum1.addEventListener("click",function(){
    if(!drum){
      drum1.className = 'drum active';
      that.loadAudio('music/wipeout161.mp3');
      that.playAudio();
      drum = true;
    }

    else{
      drum1.className = 'drum';
      that.stopAudio();
      drum = false;
    }
    
  }); 
  

  drum2.addEventListener("click",function(){
    if(!drum){
      drum2.className = 'drum active';
      that.loadAudio('music/zoom173.mp3');
      that.playAudio();
      drum = true;
    }

    else{
      drum2.className = 'drum';
      that.stopAudio();
      drum = false;
    }

  });

  drum3.addEventListener("click",function(){
    if(!drum){
      drum3.className = 'drum active';
      that.loadAudio('music/foresty.mp3');
      that.playAudio();
      drum = true;
    }

    else{
      drum3.className = 'drum';
      that.stopAudio();
      drum = false;
    }
  });
  
  
  volume.addEventListener("change",function(){
    that.volumeController(document.getElementById('volume').value);

  });
}