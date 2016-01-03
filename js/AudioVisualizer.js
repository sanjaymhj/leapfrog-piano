function AudioVisualizer() {
  var context = null;
  var canvas;
  var canvasHeight, canvasWidth;
  var spacing = 5; 
  var barWidth = 5;

  var data =new Data(); 

  this.updateVisuals = function(state, keyCode){
    if (!context){
    canvas = document.getElementById('analyser');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    context = canvas.getContext('2d');
  }

  var i = 0;
  var dec = 1;
  var frequencyData;
  var divider = data.notesByKeyCode[keyCode].frequency/1200;
  var interval = setInterval(function(){
    for(j = 0; j<Object.keys(data.freqData).length; j++){
      if(j%2 == 0){
        context.beginPath();

        context.moveTo(j*spacing,canvasHeight);

        context.lineTo(barWidth+spacing*j, canvasHeight);
        context.lineTo(spacing*j+barWidth, data.freqData[j].freqValue/divider - dec);
        context.lineTo(spacing*j, data.freqData[j].freqValue/divider - dec);

        context.closePath();
        
        context.fillStyle = 'red'; 
        context.fill();
        
        dec++;

      }
      
    }
      
    i++;

    if(i==5){
      clearInterval(interval);
    
    }

    if(state == 'up'){
      context.clearRect(0, 0, canvas.width, canvas.height);

    }

  },100);

  } 
    
}

