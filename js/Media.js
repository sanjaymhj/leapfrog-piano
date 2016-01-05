function Media(frequency,audioContext) {
  this.context = audioContext;

  /* Creates oscillator node which is audio-processing module that causes 
  a given frequency of wave to be created*/
  this.osc = this.context.createOscillator(); 

  /* Flag to indicate if sound is playing. */
  this.pressed = false; 

  if(typeof frequency !== 'undefined') {
      this.osc.frequency.value = frequency;
  
  }
  else{
    this.osc.frequency.value = 440;
  
  }
  
  /* Sets waveform type. */
  this.osc.type ='triangle';

  /* Specifies the exact time to start playing tone. */
  this.osc.start(0);

}


Media.prototype.play = function() {
  if(!this.pressed) {
    this.pressed = true;

    /* Attack and decay time are time to reach to maximum volume & zero volume. */
    var attack = 10, decay = 1000;

    /* createGain creates a GainNode, which can be used to control the overall volume of the audio graph. */
    var gainNode = this.context.createGain ? this.context.createGain() : this.context.createGainNode();

    this.osc.connect(gainNode);
    
    /* Connects to the final destination like speaker*/ 
    gainNode.connect(this.context.destination);

    gainNode.gain.setValueAtTime(0, this.context.currentTime);

    /* Schedules a gradual linear change in the value according to parameter  */
    gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + attack / 1000);
    gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + decay / 1000);
  



  }
}

Media.prototype.stop = function() {
  this.pressed = false;

  this.osc.disconnect();

}
