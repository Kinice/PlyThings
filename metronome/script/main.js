var rhythm = document.getElementById('rhythm');
var pop = document.getElementById('popout');
var turnsmall = document.getElementById('tsmall');
var turnbig = document.getElementById('tbig');
var beat = document.getElementById('beat');
var play = document.getElementById('play');
var pause = document.getElementById('pause');

var context;

window.addEventListener('load',init,false);

popout(rhythm,pop);

appendRhythm(pop,rhythms,rhythm);

turnbig.addEventListener('click',function(){
	beat.value = Number(beat.value) + 1;
});
turnsmall.addEventListener('click',function(){
	beat.value = Number(beat.value) - 1;
});

play.addEventListener('click',function(){
	this.style.display = 'none';
	pause.style.display = 'block';
	params.stop = false;
	onceTime(beat.value);
	playMusic(beat.value);
});

pause.addEventListener('click',function(){
	this.style.display = 'none';
	play.style.display = 'block';
	params.stop = true;
});