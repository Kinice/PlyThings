var popEvent = function(elm,target){
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
			params.rhyt = this.id.substr(0,1);
			params.count = this.id.substr(0,1);
			popp(par);
		})
		par.appendChild(rhy);
	}
}

var onceTime = function(beats){
	var once = 60000/beats;
	params.once = once;
}

var startMusic = function(){
	if(params.stop) return;
	var b = true;
	if(params.rhyt-params.count!==0){
		b = false
	}
	music(bufferLoader.bufferList,b);
	if(params.count!=1){
		params.count--;
	}else{
		params.count = params.rhyt;
	}
	setTimeout(startMusic,parseInt(params.once));
}

var init = function(bufferList){
	try{
		context = new (window.AudioContext || window.webkitAudioContext);
		bufferLoader = new BufferLoader(context,bufferList,finishedLoading);
		bufferLoader.load();
	}catch(e){
		alert('nope!'+e);
	}
}

var finishedLoading = function(){
	console.log('done!');
}

var music = function(bufferList,b){
	hard = context.createBufferSource();

	light = context.createBufferSource();

	hard.buffer = bufferList[0];

	light.buffer = bufferList[1];

	light.connect(context.destination);

	hard.connect(context.destination);

	if(b){
		hard.start();
	}else{
		light.start();
	}
}