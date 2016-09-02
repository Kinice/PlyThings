//blocks
var backBlock = new Block('grey'),
	tranBlock = new Block('');
//elements
var bd = document.getElementById('bd'),
    container = document.getElementById('container'),
    newb1 = document.getElementById('newb1'),
    newb2 = document.getElementById('newb2'),
    newb3 = document.getElementById('newb3'),
    newbs = document.getElementsByClassName('newbcon');
//game matrix
var GAME = [];
var candidate = [];
var temp = [];
//functions
initGame(container,newbs,GAME,10,backBlock);


dragEvent(newbs);