function LearnPiano(){
  var intervalId;
  var i = 0;

  var song = [];
  var keyName = null;

  var key = new CreateKeys();
  var data = new Data();

  that = this;

  this.guidePlaying = function(songName){
    if(songName == 'twinkleTwinkle')
      song = data.twinkleTwinkle;

    setTimeout(function(){
      intervalId = setInterval(function(){
      if(i>0)
        key.inActiveKey(keyName);

      keyName = data.notesByKeyCode[song[i].keyCode].noteName;

      key.activeKey(keyName);
      keyGuide.innerHTML = 'Press  ' + data.notesByKeyCode[song[i].keyCode].keyName 
        + ' ('+data.notesByKeyCode[song[i].keyCode].noteName+')';

      i++;

      if(song.length <= i){
        keyGuide.style.display = 'none';
        key.inActiveKey(keyName);

        clearInterval(intervalId);

      }


    },song[i].duration);

    }, 2000);
    
  }

}