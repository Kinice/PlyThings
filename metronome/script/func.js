var popout = function(elm,target){
	elm.addEventListener('click',function(){
		popp(target);
	});
}

var popp = function(target){
	if(!params.flag){
		target.style.display = 'block';
		params.flag = true;
	}else{
		target.style.display = 'none';
		params.flag = false;
	}
}
var appendRhythm = function(par,rhythms,pars){
	for(var i in rhythms){
		var rhy = document.createElement('div');
		rhy.className = 'choose';
		rhy.innerHTML = rhythms[i];
		rhy.id = rhythms[i];
		rhy.addEventListener('click',function(){
			pars.innerHTML = this.id;
			params.rhyt = this.id;
			popp(par);
		})
		par.appendChild(rhy);
	}
}

var onceTime = function(beats){
	var once = 60000/beats;
	params.once = once;
}

var playMusic = function(){
	if(params.stop) return;
	console.log(params.once);
	setTimeout(playMusic,parseInt(params.once));
}

var init = function(bufferList){
	try{
		context = new AudioContext();
		bufferLoader = new BufferLoader(context,bufferList,finishedLoading);
		bufferLoader.load();
	}catch(e){
		console.log('nope!');
	}
}