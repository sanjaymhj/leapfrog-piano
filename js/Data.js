function Data(){

  /* used for generating sound on respective key press */
  this.notesByKeyCode = {
 81: { noteName: 'c4', frequency: 261.6, keyName: 'q', counter: 0},
 87: { noteName: 'd4', frequency: 293.7, keyName: 'w', counter: 0},
 69: { noteName: 'e4', frequency: 329.6, keyName: 'e', counter: 0},
 82: { noteName: 'f4', frequency: 349.2, keyName: 'r', counter: 0},
 84: { noteName: 'g4', frequency: 392.00, keyName: 't', counter: 0},
 89: { noteName: 'a4', frequency: 440.00, keyName: 'y', counter: 0},
 85: { noteName: 'b4', frequency: 493.9, keyName: 'u', counter: 0},
 73: { noteName: 'c5', frequency: 523.3, keyName: 'i', counter: 0},
 79: { noteName: 'd5', frequency: 587.3, keyName: 'o', counter: 0},
 80: { noteName: 'e5', frequency: 659.3, keyName: 'p', counter: 0},
 219: { noteName: 'f5', frequency: 698.46, keyName: '[', counter: 0},
 221: { noteName: 'g5', frequency: 783.99, keyName: ']', counter: 0},
 90: { noteName: 'a5', frequency: 880.00, keyName: 'z', counter: 0},
 88: { noteName: 'b5', frequency: 987.77, keyName: 'x', counter: 0},
 67: { noteName: 'c6', frequency: 1046.50, keyName: 'c', counter: 0},
 86: { noteName: 'd6', frequency: 1174.66, keyName: 'v', counter: 0},
 66: { noteName: 'e6', frequency: 1318.51, keyName: 'b', counter: 0},
 78: { noteName: 'f6', frequency: 1396.91, keyName: 'n', counter: 0},
 77:{ noteName: 'g6', frequency: 1567.98, keyName: 'm', counter: 0},
 188:{ noteName: 'a6', frequency: 1760.00, keyName: ',', counter: 0},
 190: { noteName: 'b6', frequency: 1975.53, keyName: '.', counter: 0},
 50: { noteName: 'c4#', frequency: 277.18, keyName: '2', counter: 0},
 51: { noteName: 'd4#', frequency: 311.13, keyName: '3', counter: 0},
 53: { noteName: 'f4#', frequency: 369.99, keyName: '5', counter: 0},
 54: { noteName: 'g4#', frequency: 415.30, keyName: '6', counter: 0},
 55: { noteName: 'a4#', frequency: 466.16, keyName: '7', counter: 0},
 57: { noteName: 'c5#', frequency: 554.37, keyName: '9', counter: 0},
 48: { noteName: 'd5#', frequency: 622.25, keyName: '0', counter: 0},
 173: { noteName: 'f5#', frequency: 739.99, keyName: '-', counter: 0},
 61: { noteName: 'g5#', frequency: 830.61, keyName: '=', counter: 0},
 83: { noteName: 'a5#', frequency: 932.33, keyName: 's', counter: 0},
 70: { noteName: 'c6#', frequency: 1108.73, keyName: 'f', counter: 0},
 71: { noteName: 'd6#', frequency: 1244.51, keyName: 'g', counter: 0},
 74: { noteName: 'f6#', frequency: 1479.98, keyName: 'j', counter: 0},
 75: { noteName: 'g6#', frequency: 1661.22, keyName: 'k', counter: 0},
 76: { noteName: 'a6#', frequency: 1864.66, keyName: 'l', counter: 0}

};

/* Used for creating  'Piano Keys' */
this.noteList={
  0:{name:'c4', notePitch: 'low', keyName: 'q'},
  1:{name:'d4', notePitch: 'low', keyName: 'w'},
  2:{name:'e4', notePitch: 'low', keyName: 'e'},
  3:{name:'f4', notePitch: 'low', keyName: 'r'},
  4:{name:'g4', notePitch: 'low', keyName: 't'},
  5:{name:'a4', notePitch: 'low', keyName: 'y',},
  6:{name:'b4', notePitch: 'low', keyName: 'u'},
  7:{name:'c5', notePitch: 'low', keyName: 'i'},
  8:{name:'d5', notePitch: 'low', keyName: 'o'},
  9:{name:'e5', notePitch: 'low', keyName: 'p'},
  10:{name:'f5', notePitch: 'low', keyName: '['},
  11:{name:'g5', notePitch: 'low', keyName: ']'},
  12:{name:'a5', notePitch: 'low', keyName: 'z'},
  13:{name:'b5', notePitch: 'low', keyName: 'x'},
  14:{name:'c6', notePitch: 'low', keyName: 'c'},
  15:{name:'d6', notePitch: 'low', keyName: 'v'},
  16:{name:'e6', notePitch: 'low', keyName: 'b'},
  17:{name:'f6', notePitch: 'low', keyName: 'n'},
  18:{name:'g6', notePitch: 'low', keyName: 'm'},
  19:{name:'a6', notePitch: 'low', keyName: ','},
  20:{name:'b6', notePitch: 'low', keyName: '.'},
  21:{name:'c4#', notePitch: 'high', keyName: '2'},
  22:{name:'d4#', notePitch: 'high', keyName: '3'},
  23:{name:'f4#', notePitch: 'high', keyName: '5'},
  24:{name:'g4#', notePitch: 'high', keyName: '6'},
  25:{name:'a4#', notePitch: 'high', keyName: '7'},
  26:{name:'c5#', notePitch: 'high', keyName: '9'},
  27:{name:'d5#', notePitch: 'high', keyName: '0'},
  28:{name:'f5#', notePitch: 'high', keyName: '-'},
  29:{name:'g5#', notePitch: 'high', keyName: '='},
  30:{name:'a5#', notePitch: 'high', keyName: 's'},
  31:{name:'c6#', notePitch: 'high', keyName: 'f'},
  32:{name:'d6#', notePitch: 'high', keyName: 'g'},
  33:{name:'f6#', notePitch: 'high', keyName: 'j'},
  34:{name:'g6#', notePitch: 'high', keyName: 'k'},
  35:{name:'a6#', notePitch: 'high', keyName: 'l'}

};

/* Used for visualizer */
this.freqData = {
  0:{ freqValue : 90}, 1:{ freqValue : 20}, 2:{ freqValue : 80}, 3:{ freqValue : 40}, 
  4:{ freqValue : 80}, 5:{ freqValue : 60}, 6:{ freqValue : 70}, 7:{ freqValue : 80},
  8:{ freqValue : 70}, 9:{ freqValue : 60}, 10:{ freqValue : 50}, 11:{ freqValue : 40},
  12:{ freqValue : 60}, 13:{ freqValue : 6}, 14:{ freqValue : 60}, 15:{ freqValue : 56},
  16:{ freqValue : 70}, 17:{ freqValue : 3}, 18:{ freqValue : 40}, 19:{ freqValue : 23},
  20:{ freqValue : 60}, 21:{ freqValue : 88}, 22:{ freqValue : 50 }, 23:{ freqValue : 65 },
  24:{ freqValue : 50}, 25:{ freqValue : 32 }, 26:{ freqValue : 70 }, 27:{ freqValue : 80 },
  28:{ freqValue : 50 }, 29:{ freqValue : 32 }, 30:{ freqValue : 80 }, 31:{ freqValue : 70 },
  32:{ freqValue : 90 }, 33:{ freqValue : 60 }, 34:{ freqValue : 80 }, 35:{ freqValue : 90 },
  36:{ freqValue : 100 }, 37:{ freqValue : 70 }, 38:{ freqValue : 90 }, 39:{ freqValue : 100 },
  40:{ freqValue : 110 }, 41:{ freqValue : 90 }, 42:{ freqValue : 120 }, 43:{ freqValue : 110 },
  44:{ freqValue : 90 }, 45:{ freqValue : 100 }, 46:{ freqValue : 80 }, 47:{ freqValue : 90 },
  48:{ freqValue : 130 }, 49:{ freqValue : 150 }, 50:{ freqValue : 120 }, 51:{ freqValue : 100 },
  51:{ freqValue : 90 }, 52:{ freqValue : 100 }, 53:{ freqValue : 80 }, 54:{ freqValue : 80 },
  54:{ freqValue : 70 }, 55:{ freqValue : 60 }, 56:{ freqValue : 100 }, 57:{ freqValue : 120 },
  58:{ freqValue : 80 }, 59:{ freqValue : 90 }, 60:{ freqValue : 100 }, 61:{ freqValue : 120 },
 };


/* Used for learning piano*/
this.twinkleTwinkle = [{keyCode: 71, duration: 2000},{keyCode: 73, duration: 2000},
  {keyCode: 71, duration: 1000},{keyCode: 73, duration: 2000},]



}

