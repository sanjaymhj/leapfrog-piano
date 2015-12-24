function PlayKeyBoard() {
  // Create audio (context) container
  var counter = 0;
  var newKey = new CreateKeyBoard();
  var visu = new AudioVisualizer();
  var playing;
  var state;
  var recorder = new Recorder();
  var recordFlag = false;
  var recordCounter = 0;
  var recordButton = document.getElementById("rec");
  var playButton = document.getElementById("play");
  var visu = new AudioVisualizer();

  this.init = function() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}

  var audioContext = new (AudioContext || webkitAudioContext)();
  that = this;


  for(var i = 0; i<Object.keys(noteList).length; i++){
  // console.log(noteList[i].name);

      newKey.createKey(noteList[i].name,noteList[i].notePitch);

  }

  this.generateSound = function(frequency) {
  var keySound = new Media(frequency,audioContext);
  return {sound:keySound};

  }

  this.loadNoteFrequency = function(notes) {
    console.log('loadNote');
    for(var keyCode in notes) {
      var note = notes[keyCode];
      note.key = that.generateSound(note.frequency);
    }
  };

  this.loadRecordedFrequency = function(notesRecorded){
    for(var frequency in notesRecorded) {
      var noteRecorded = notesRecorded[frequency];
      noteRecorded.key = that.generateSound(noteRecorded.frequency);
    }

  }

  this.playNote = function(event) {
    var keyCode = event.keyCode;
     console.log(keyCode);
    
    notesByKeyCode[keyCode].key.sound.play();
    if(notesByKeyCode[keyCode].counter == 0){
      newKey.activeKey(notesByKeyCode[keyCode].noteName);
      notesByKeyCode[keyCode].counter = 1;
    }
    
    visu.updateVisuals('down',keyCode);

    if(recordFlag)
      recorder.record(keyCode,event.timeStamp,'down');

  };

  this.endNote = function(event) {
    var keyCode = event.keyCode;
    notesByKeyCode[keyCode].key.sound.stop();
    newKey.inActiveKey(notesByKeyCode[keyCode].noteName);
    notesByKeyCode[keyCode].counter = 0;

    state = true;
    visu.updateVisuals(state, keyCode);

    if (recordFlag)
      recorder.record(keyCode,event.timeStamp,'up');

    visu.updateVisuals('up', keyCode);


  };

  this.filterRecordedMusic = function(){

    that.loadRecordedFrequency(recordedSong);
    console.log(recordedSong[0].time);

    if(recordedSong[0].time >= 10000)
      recordedSong.splice(0, 1);

    playing = 0;
    that.playRecorded();

  }

  this.playRecorded = function(){
    // playing = 0;
    console.log(recordedSong[playing]);
    recordedSong[playing].key.sound.play();
    
    setTimeout(function(){
      recordedSong[playing].key.sound.stop();
      playing++;
      if(recordedSong.length != playing)
      that.playRecorded();
    }, recordedSong[playing].time);
      
  }

  window.addEventListener('keydown', this.playNote);
  window.addEventListener('keyup', this.endNote);
  window.addEventListener('load', this.loadNoteFrequency(notesByKeyCode));

  playButton.addEventListener("click",function(){
    console.log(recordCounter);
    if(recordedSong.length == 0){
      playButton.innerHTML = "First Record";
    }

    else if(recordCounter == 0){
      console.log(recordCounter,'bhitra');
      that.filterRecordedMusic();
      playButton.innerHTML = "playing..."
    }

  });


  recordButton.addEventListener("click",function(){
    if(recordCounter == 0){
      recordFlag = true;
      recordButton.innerHTML = "Recording...";
      recordCounter++;
    }

    else{
      recordFlag = false;
      recordButton.innerHTML = "Record";
      recordCounter = 0;
    }
   
  });

}

