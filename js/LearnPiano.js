function LearnPiano(){
  var intervalId;
  var i = 0;

  var song = [];
  var keyName = null;

  var key = new CreateKeys();
  var data = new Data();

  var that = this;

  /* Loads the array according to song selected and change the property of key
     at the timing specified in the array*/
  this.guidePlaying = function(songName){
    if(songName == 'happyBirthday')
      song = data.happyBirthday;

    keyGuide.innerHTML = 'Loading ...'

    setTimeout(function(){
      intervalId = setInterval(function(){
        if(i>0)
          key.inActiveKey(keyName);

        var notesByKeyCode = data.notesByKeyCode[song[i].keyCode];

        // console.log(notesByKeyCode);
        keyName = notesByKeyCode.noteName;

        key.activeKey(keyName);

        keyGuide.innerHTML = 'Press  ' + notesByKeyCode.keyName + ' (' + notesByKeyCode.noteName + ')';
        i++;

        if(song.length <= i){
          keyGuide.style.display = 'none';
          key.inActiveKey(keyName);

          clearInterval(intervalId);
        }
      },song[i].duration);

    }, 2000);

  }

  /* Pass array to play according to the selection */
  // learnPiano.addEventListener("change",function(){
  //   // console.log(learnPiano.value,'value');
  //   that.guidePlaying(learnPiano.value);
  //
  // });
  // switch (expression) {
  //   case expression:
  //
  //     break;
  //   default:
  //
  // }
}
