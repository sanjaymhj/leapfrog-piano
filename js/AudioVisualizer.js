function AudioVisualizer() {
  var context = null;
  var canvas;
  var canvasHeight, canvasWidth;
  var spacing = 5;
  var barWidth = 5;

  var data =new Data();

  /* Draws the bars according to note played in canvas */
  this.updateVisuals = function(state, keyCode){
    if (!context){
    canvas = document.getElementById('analyser');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    context = canvas.getContext('2d');
  }

  var i = 0;
  var dec = 1;
  
  var divider = data.notesByKeyCode[keyCode].frequency/1200;

  var interval = setInterval(function(){
    var grd=context.createLinearGradient(0,0,170,0);

    for(j = 0; j < Object.keys(data.freqData).length; j++){
      var frequencyValue = data.freqData[j].freqValue;

      if(j%2 == 0){
        context.beginPath();

        context.moveTo(j * spacing, canvasHeight);

        context.lineTo(barWidth + spacing * j, canvasHeight);
        context.lineTo(spacing * j + barWidth,  frequencyValue/ divider - dec);
        context.lineTo(spacing * j, frequencyValue/divider - dec);

        context.closePath();

        // context.fillStyle = 'red';

        grd.addColorStop(0,"black");
        grd.addColorStop(1,"white");

        context.fillStyle=grd;
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
