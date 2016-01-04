function Notes(){

  var counter = 0;
  var timeoutTime = 2000;
  var timer;
  
  var state;
  // var keyPressed = null;
  
  var keyCode;
  var tempKeyCode = null;
  
  var newKey = new CreateKeys();
  var visual = new AudioVisualizer();
  var data = new Data();
  
  try {
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    var audioContext = new AudioContext();
  
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }

  var recorder  = new Recorder(audioContext);
  
  that = this; 

  this.generateSound = function(frequency) {
    var keySound = new Media(frequency,audioContext);
    return {sound:keySound};

  }

  this.loadNoteFrequency = function(notes) {
    for(var keyCode in notes) {
      var note = notes[keyCode];
      note.key = that.generateSound(note.frequency);
    
    }

  }

 this.playNote = function(event) {
  // keyPressed = true;

  keyCode = event.keyCode;
  
  data.notesByKeyCode[keyCode].key.sound.play();

  if(data.notesByKeyCode[keyCode].counter == 0){
    newKey.activeKey(data.notesByKeyCode[keyCode].noteName);
    data.notesByKeyCode[keyCode].counter = 1;
  }
  visual.updateVisuals('down',keyCode);

  if(tempKeyCode){

    if(tempKeyCode != keyCode){
      data.notesByKeyCode[tempKeyCode].key.sound.stop();
      // tempKeyCode = null;
      timeoutTime = 1500;

      
    }

    else{
      timeoutTime = 100;

      data.notesByKeyCode[tempKeyCode].key.sound.stop();
      data.notesByKeyCode[tempKeyCode].key.sound.play();
      
      
    }

  }

  
  if(recorder.recordFlag())
    recorder.record(keyCode, event.timeStamp,'down');



  }

  
  this.endNote = function(event) {
    var keyCode = event.keyCode;
    tempKeyCode = keyCode;

    timer = setTimeout(function(){
      data.notesByKeyCode[keyCode].key.sound.stop();

    },timeoutTime);
    
    newKey.inActiveKey(data.notesByKeyCode[keyCode].noteName);
  
    data.notesByKeyCode[keyCode].counter = 0;

    state = true;
  
    // visual.updateVisuals(state, keyCode);
    visual.updateVisuals('up', keyCode);
    
    if(recorder.recordFlag())
      recorder.record(keyCode,event.timeStamp,'up');
    
    // keyPressed = false;



  };

  window.addEventListener('keydown', this.playNote);
  window.addEventListener('keyup', this.endNote);
  window.addEventListener('load', this.loadNoteFrequency(data.notesByKeyCode));


}