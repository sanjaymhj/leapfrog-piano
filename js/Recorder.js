function Recorder(audioContext){
  var key=0;

  var duration=0;
  var downTime=[];
  var upTime = 0;

  var recordFlag=false;
  var recordCounter = 0;
  var playRecordedCounter = 0;

  var playing;
  var recordedSong = [];

  var context = audioContext;
  
  var data = new Data();
  var that = this;

  
  this.record = function(keyCode, time, state){
    if( state == 'down' ){
      key++;

      downTime.push(time);

    if(key>1)
      that.gap(downTime.length);
    else
      that.gap(0);
      
    }

    else if( state == 'up'){
      upTime = time;
      downTime.push(time);
      
      duration = downTime[downTime.length - 1] - downTime[0];

      recordedSong.push({keyCode: keyCode, frequency: data.notesByKeyCode[keyCode].frequency, time: duration });
      
      key = 0;
      downTime = [];
      duration = 0;

    }

  }


  /* Calculates the time interval between two key press. */
  this.gap = function(gapp){
      var gap = downTime[gapp] - upTime;
      recordedSong.push({keyCode: null, frequency: 0, time: gap });

    }


  this.recordFlag =function(){
    return recordFlag;
  }

  /* Removes the unwanted first element of recorded array. */
  this.filterRecordedMusic = function(){

    that.loadRecordedFrequency(recordedSong);
    console.log(recordedSong[0].time);

    if(recordedSong[0].time >= 10000)
      recordedSong.splice(0, 1);

    playing = 0;

    that.playRecorded();

  }

  
  this.loadRecordedFrequency = function(notesRecorded){
    for(var frequency in notesRecorded) {
      var noteRecorded = notesRecorded[frequency];
      noteRecorded.key = that.generateRecordedSound(noteRecorded.frequency);

     }

  }

  
  this.generateRecordedSound = function(frequency) {
    var keySound = new Media(frequency, context);
    return {sound:keySound};

  }



  this.playRecorded = function(){
    // playing = 0;
    // console.log(recordedSo?ng);
    var recorded = recordedSong[playing];
    recorded.key.sound.play();
    
    setTimeout(function(){
      recorded.key.sound.stop();

      playing = playing + 2;

      if(!recordedSong[playing + 1]){
        playRecorded.className = 'record play';
        
        playRecordedCounter = 0;
        
      }

      if(recordedSong.length != playing)
        that.playRecorded();

    }, recorded.time + recordedSong[playing + 1].time);

      
  }


  this.stopPlaying = function(){
    context.suspend();
    playRecordedCounter = 3 ;
  }

  this.resumePlaying = function(){
    console.log('resume' );
    context.resume();
    that.playRecordedMusic();
  }




  startRecording.addEventListener("click",function(){
    if(recordCounter == 0){
      recordFlag = true;

      startRecording.className = 'record active';

      recordCounter++;

    }

    else{
      recordFlag = false;

      startRecording.className = 'record in-active';

      recordCounter = 0;
    }
   
  });


  playRecorded.addEventListener("click",function(){
    console.log('playRecordedCounter',playRecordedCounter);
    if(recordedSong.length == 0){
      window.alert("Please Record Audio First");

    }

    if(playRecordedCounter == 0){
      that.filterRecordedMusic();

      playRecorded.className = 'record pause';
      playRecordedCounter++;
    }

    else{
      // that.pausePlaying();
      
      playRecorded.className = 'record play';

      // playRecorded.className = 'record pause';
      playRecordedCounter = 0;
    }

    // else{
    //   that.resumePlaying();

    // }



  });

  stopPlaying.addEventListener("click",function(){
    playing = recordedSong.length -1;

    recordedSong[playing].key.sound.stop();

  });

}
