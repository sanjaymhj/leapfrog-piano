function Main() {
  var data = new Data();
  var newKeys = new CreateKeys();
  var bgAudio = new AudioInBackground();
  var learn = new LearnPiano();
  new Notes();

  var drum = false;

  /* Creates number of piano keys equal to available data of keys */
  for(var i = 0; i < Object.keys(data.noteList).length; i++){
    var note = data.noteList[i];
    newKeys.createNewKeys(note, i);
  }

  for(var i = 0; i < Object.keys(data.highNotesList).length; i++) {

    var highNote = data.highNotesList[i];
    console.log(highNote);
    newKeys.createHighNoteKeys(highNote, i);
// console.log("askdhflkasdhfk");
  }

}
