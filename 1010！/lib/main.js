var block = new Block(100,'grey');
var bd = document.getElementById('bd');
var container = document.getElementById('container');
var newb = document.getElementById('newb');

for(var i = 0; i < 10; i++){
	for(var j = 0; j < 10; j++){
		var id = i+'-'+j;
		var t = i*50;
		var l = j*50;
		container.appendChild(block.createBlock(id,t,l,'big'));
	}
}

for(var k = 0; k < 5; k++){
	var l = k*30;
	newb.appendChild(block.createBlock(k,0,l,'small'))
}