//blocks
var backBlock = new Block('grey'),
	redBlock  = new Block('dred'),
	blueBlock = new Block('dblue'),
	origBlock = new Block('loringe'),
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

//functions
initGame(container,GAME,10,backBlock);

appendBlocks(newb1,matrix.row5,redBlock);
appendBlocks(newb2,matrix.row5,blueBlock);
appendBlocks(newb3,matrix.row5,origBlock);


dragEvent(newbs);

