function Main() {
  var data = new Data();
  var newKeys = new CreateKeys();
  var bgAudio = new AudioInBackground();
  var learn = new LearnPiano();
  new Notes();
  
  var drum = false;
 
  that = this;

  for(var i = 0; i<Object.keys(data.noteList).length; i++){
    newKeys.createNewKeys(data.noteList[i].name,data.noteList[i].notePitch, i);

  }
  

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
      bgAudio.loadAudio('music/wipeout161.mp3');
      bgAudio.playAudio();
      drum = true;
    }

    else{
      drum2.className = 'drum';
      bgAudio.pauseAudio();
      drum = false;
    }

  });

  drum3.addEventListener("click",function(){
    if(!drum){
      drum3.className = 'drum active';
      bgAudio.loadAudio('music/wipeout161.mp3');
      bgAudio.playAudio();
      drum = true;
    }

    else{
      drum3.className = 'drum';
      bgAudio.pauseAudio();
      drum = false;
    }
  });

  volume.addEventListener("change",function(){
   bgAudio.volumeController(document.getElementById('volume').value);

  });

  learnPiano.addEventListener("change",function(){
    console.log(learnPiano.value,'value');
    learn.guidePlaying(learnPiano.value);
  });

 
}