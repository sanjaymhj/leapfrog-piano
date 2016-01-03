 function Media(frequency,audioContext) {
  this.context = audioContext;

  this.osc = this.context.createOscillator(); // Create oscillator node

  this.pressed = false; // flag to indicate if sound is playing

  if(typeof frequency !== 'undefined') {
      this.osc.frequency.value = frequency;
  
  }
  else{
    this.osc.frequency.value = 440;
  
  }
  
  /* Set waveform type. */
  this.osc.type ='triangle';

  this.osc.start(0);

  }


Media.prototype.play = function() {
  if(!this.pressed) {
    this.pressed = true;

    var attack = 10,
    decay = 2000,

    gainNode = this.context.createGain ? this.context.createGain() : this.context.createGainNode();

    this.osc.connect(gainNode);
 
    gainNode.connect(this.context.destination);

    gainNode.gain.setValueAtTime(0, this.context.currentTime);

    gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + attack / 1000);
    gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + decay / 1000);
  

  }
}

Media.prototype.stop = function() {
  this.pressed = false;
  this.osc.disconnect();

}
