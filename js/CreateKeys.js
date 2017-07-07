function CreateKeys(){
  var highOctaveClass = 0;
  var octaveNum = 0;
  var octaveClass;

  var that = this;

  /* Create New Keys and place them according to the 'Octave Class and type like
     sharp notes here represented as high.
   */

   this.createHighNoteKeys = function(note, i) {
     console.log(note);
     var noteName = note.name;
     var keyType = note.notePitch;
     var keyName = note.keyName;

     if(keyType == 'high'){
       octaveNumber = i%5;

      //  let highNoteKeyContainer = document.createElement('div');
      //  highNoteKeyContainer.className = 'highNoteKeyContainer';//+ octaveNumber

       var keyContainer = document.getElementById('highNoteKeyContainer');

       var key = document.createElement('div');
       key.className = 'key high-notes high'+octaveNumber;
       key.innerHTML = keyName;
       key.id = noteName;

       keyContainer.appendChild(key);


      //  keyContainer = document.getElementById('octave'+(highOctaveClass));
      //  this.element.className = 'key' + ' high-notes';

      //  if(noteName == 'c4#' || noteName == 'c5#' || noteName == 'c6#')
      //    this.element.style.left = 30;
       //
      //  else if(noteName == 'd4#' || noteName == 'd5#' || noteName == 'd6#')
      //    this.element.style.left = 30+46;
       //
      //  else if(noteName == 'f4#' || noteName == 'f5#' || noteName == 'f6#'  )
      //    this.element.style.left = 174;
       //
      //  else if(noteName == 'g4#' || noteName == 'g5#' || noteName == 'g6#'  )
      //    this.element.style.left = 222;
       //
      //  else if(noteName == 'a4#' || noteName == 'a5#' || noteName == 'a6#' )
      //    this.element.style.left = 272;

      //  if(octaveNum == 0){
      //    highOctaveClass++;
      //  }
     }
   };

  this.createNewKeys = function(note, i){
    var noteName = note.name;
    var keyType = note.notePitch;
    var keyName = note.keyName;

    var keyContainer = document.getElementById('lowNoteKeyContainer');
    var element = document.createElement('div');
    element.className = "key";
    element.id = noteName;
    element.innerHTML = keyName;
    keyContainer.appendChild(element);
  }

  this.activeKey = function(noteName){
    var keyClass = document.getElementById(noteName).className;

    if(keyClass == 'key active' || keyClass == 'key high-note active'){}

    else
      document.getElementById(noteName).className = keyClass + ' active';
  }


  this.inActiveKey = function(noteName){
    var keyClass = document.getElementById(noteName).className;
    var originalKeyClass = keyClass.replace(/active/i, '');

    document.getElementById(noteName).className = originalKeyClass;
  }


}
