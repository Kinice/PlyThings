//blocks
var backBlock = new Block('grey'),
	tranBlock = new Block('');
//elements
var bd = document.getElementById('bd'),
    container = document.getElementById('container'),
    dragContainer = document.getElementById('drag'),
    newb1 = document.getElementById('newb1'),
    newb2 = document.getElementById('newb2'),
    newb3 = document.getElementById('newb3'),
    newbs = document.getElementsByClassName('newbcon'),
    backs = document.getElementsByClassName('grey');
//game matrix
var GAME = [];
var backInfo = [];
var candidate = [];
var temp = [];
//functions
initGame(container,newbs,GAME,10,backBlock);


dragEvent(newbs);
