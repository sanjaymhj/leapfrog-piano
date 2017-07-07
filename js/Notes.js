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
  var note = data.notesByKeyCode[keyCode];
  if note == null {
    return
  }
  var tempNote = data.notesByKeyCode[tempKeyCode];
  debugger

  keyGuide.style.display = 'block';
  keyGuide.innerHTML = note.noteName;

  note.key.sound.play();

  /* used to control the class name since a many classes with same name are added in long press*/
  if(note.counter == 0){
    newKey.activeKey(note.noteName);
    note.counter = 1;
  }

  visual.updateVisuals('down',keyCode);

  if(tempKeyCode){

    if(tempKeyCode != keyCode){
      tempNote.key.sound.stop();
      // tempKeyCode = null;
      timeoutTime = 1500;
    }

    else{
      // timeoutTime = 10;
      tempNote.key.sound.stop();

      setTimeout(function(){
        tempNote.key.sound.play();
      },50);
    }
  }


  /* Starts recording only if record flag is true*/
  if(recorder.recordFlag())
    recorder.record(keyCode, event.timeStamp,'down');
  }

  this.endNote = function(event) {
    var keyCode = event.keyCode;

    var note = data.notesByKeyCode[keyCode];

    tempKeyCode = keyCode;

    setTimeout(function(){
       keyGuide.style.display = 'none';
       // note.key.sound.stop();
    },timeoutTime);

    newKey.inActiveKey(note.noteName);

    note.counter = 0;

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
