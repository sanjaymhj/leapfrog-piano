function CreateKeys(){
  var highOctaveClass = 0;
  var octaveNum = 0;
  var octaveClass;

  var that = this;

  /* Create New Keys and place them according to the 'Octave Class and type like 
     sharp notes here represented as high. 
   */

  this.createNewKeys = function(noteName, keyType, i){
    octaveClass = Math.floor( i / 7 );
    var keyContainer = document.getElementById('octave'+octaveClass);

    this.element = document.createElement('div');

    if(keyType == 'high'){
      octaveNum = i%5;
      
      keyContainer = document.getElementById('octave'+(highOctaveClass));
      this.element.className = 'key' + ' high-notes';

      if(noteName == 'c4#' || noteName == 'c5#' || noteName == 'c6#')
        this.element.style.left = 30;


      else if(noteName == 'd4#' || noteName == 'd5#' || noteName == 'd6#')
        this.element.style.left = 30+46;


      else if(noteName == 'f4#' || noteName == 'f5#' || noteName == 'f6#'  )
        this.element.style.left = 174;


      else if(noteName == 'g4#' || noteName == 'g5#' || noteName == 'g6#'  )
        this.element.style.left = 222;


      else if(noteName == 'a4#' || noteName == 'a5#' || noteName == 'a6#' )
        this.element.style.left = 272;


      if(octaveNum == 0){
        highOctaveClass++;
      }

    }
     

    else
      this.element.className = 'key';

    this.element.id = noteName;
    this.element.innerHTML = noteName;

    
    keyContainer.appendChild(this.element);

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