function Main() {
  var data = new Data();
  var newKeys = new CreateKeys();
  var bgAudio = new AudioInBackground();
  var learn = new LearnPiano();
  new Notes();
  
  var drum = false;
 
  /* Creates number of piano keys equal to available data of keys */
  for(var i = 0; i < Object.keys(data.noteList).length; i++){
    var noteList = data.noteList[i];
    newKeys.createNewKeys(noteList.name, noteList.notePitch, i, noteList.keyName);

  }  
 
}