function Main() {
  var data = new Data();
  var newKeys = new CreateKeys();
  var bgAudio = new AudioInBackground();
  var learn = new LearnPiano();
  new Notes();
  
  var drum = false;
 
  var that = this;

  for(var i = 0; i<Object.keys(data.noteList).length; i++){
    newKeys.createNewKeys(data.noteList[i].name,data.noteList[i].notePitch, i);

  }
  
 
}  
 
}