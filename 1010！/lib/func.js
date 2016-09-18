//constructor
function Block(color){ //block constructor
	this.color = color;
	
	if(typeof this.createBlock !='function'){
		Block.prototype.createBlock = function(id,top,left,size){
			var block = document.createElement('div');
			if(size == 'big'){
				block.className = 'block'+' '+this.color;
			}else if(size == 'small'){
				block.className = 'sblock'+' '+this.color;
			}
			
			if(id){
				block.setAttribute('id',id);
			}

			block.style.top = top + 'px';
			block.style.left = left + 'px';
			return block;
		}
	}
}

//functions
function initGame(element,candidates,gameMatrix,columns,color){//initialize
	for(var i = 0; i < columns; i++){
		var temp = [];
		for(var j = 0; j < columns; j++){
			temp.push(0);
		}
		gameMatrix.push(temp);
	}
	appendBackBlocks(element,columns,color);
	for(i = 0;i < candidates.length;i++){
		var appendMatrix = randomMatrix();
		candidate.push(appendMatrix);
		appendBlocks(candidates[i],appendMatrix,'small');
	}
	backInfo = getElementsRect(backs,columns);
}

function appendBackBlocks(element,columns,color){//append game container
	for(var i = 0; i < columns; i++){
		for(var j = 0; j < columns; j++){//i for rows,j for cols
			var id = i+'-'+j;
			var t = i*50;
			var l = j*50;
			element.appendChild(color.createBlock(id,t,l,'big'));
		}
	}
}

function getElementsRect(elements,columns){
	var array = [];
	for(var i = 0; i < columns; i++){
		for(var j = 0; j < columns; j++){
			var tmpObj = {
				id:'',
				rect:{},
				row:i,
				col:j
			};
			tmpObj.id = elements[i*10+j].id;
			tmpObj.rect = elements[i*10+j].getBoundingClientRect();
			array.push(tmpObj);
		}
	}
	return array;
}

function appendBlocks(element,appendMatrix,size){//append new blocks
	//set parent node's size for position
	var wid = 0;
	if(size=='big')wid = 50;
	else if(size=='small')wid = 30;
	color = new Block(getColor(appendMatrix.matrix));
	element.style.height = appendMatrix.matrix.length * wid + 'px';
	element.style.width  = appendMatrix.matrix[0].length * wid + 'px';
	//append block
	for(var m = 0; m < appendMatrix.matrix.length; m++){
		var t = m*wid;
		if(appendMatrix.matrix[m]!=undefined){
			for(var n = 0; n < appendMatrix.matrix[m].length; n++){
				var l = n*wid;
				var id = 'n3-'+m+'-'+n;
				if(appendMatrix.matrix[m][n] == 1){
					element.appendChild(color.createBlock(id,t,l,size));
				}else{
					element.appendChild(tranBlock.createBlock(id,t,l,size));
				}
			}
		}else{
			var id = 'n3-'+m+'one'
			element.appendChild(color.createBlock(id,0,0,size));
		}
	}
}

function getClosest(array,num){
	var tmp = 999;
	var theOne = 0;
	for(var i = 0; i < array.length; i++){
		var nag = Math.abs(array[i]-num);
		if(nag<tmp){
			tmp = nag;
			theOne = array[i];
		}
	}
	return theOne;
}

function getColor(m){ //provide color of each group of matrix
	var res = ergodicMatrix(m);
	var o = res['1'],
		z = res['0'],
		c = res['c'],
		cc= res['cc'];
	if(z == 0){
		if(o==5){
			return 'cr5'
		}else if(o==3){
			return 'cr3'
		}else if(o==2){
			return 'cr2'
		}else if(o==1){
			return 'one'
		}else if(o==9){
			return 'all3'
		}else if(o==4){
			if(c==2){
				return 'all2'
			}else{
				return 'cr4'
			}
		}
	}else{
		if(cc==2){
			return 'tr2'
		}else if(cc==3){
			return 'tr3'
		}
	}
}

function ergodicMatrix(m){ 
	/* ergodic the matrix for 4 params: 
	   1 for num of 1,
	   0 for num of 0,
	   c for num of child array,
	   cc for num of child`s child
	 */
	var res = {
		c : 0,
		1 : 0,
		0 : 0,
		e : 0,
		cc: 0
	};
	var cc = 0;
	for(var i = 0; i<m.length;i++){
		res.c++;
		for(var j = 0; j<m[i].length;j++){
			if(m[i][j] == 1){
				res['1']++;
			}else if(m[i][j] == 0){
				res['0']++;
			}else{
				res['e']++;
			}
			cc++;
		}
	}
	res.cc = cc/res.c;
	return res;
}

function randomMatrix(){ //random 1 of 19 matrix
	var rnd = Math.floor(Math.random()*20);
	var mar = {
		matrix : [],
		color  : ''
	};
	if(rnd == 0)rnd = 1;
	if(rnd == 20)rnd = 19;
	mar.matrix = dict.matrix[dict.randoms[rnd]];
	return mar;
}

function cutMatrix(parent,son,id){
	var pc = parent[0].length;
	var sc = son.length;
	var scc = son[0].length;
	var arr = [];
	var row = id.substr(0,1);
	var col = id.substr(-1,1);
	for(var i = 0; i < son.length; i++){
		var temArr = [];
		for(var j = 0; j < son[0].length; j++){
			temArr.push(parent[parseInt(row)+i][parseInt(col)+j]);
		}
		arr.push(temArr);
	}
	return arr;
}

function getCss(o,key){	//get elements` currentStyle in a compatible way
	return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key]; 	
};

function dragEvent(elements){
	for(var i = 0; i<elements.length; i++){
		elements[i].addEventListener('mousedown',function(e){
			startDrag(this,e);
		});
	}
	document.onmouseup = function(e){
		dragContainer.style.visibility = 'hidden';
		dict.params.nowE.style.visibility = 'visible';
		dragContainer.innerHTML = '';
		dict.params.flag = false;
		if(dragContainer.getBoundingClientRect().top>backInfo[99].rect.top+40||dragContainer.getBoundingClientRect().top<backInfo[0].rect.top-40||dragContainer.getBoundingClientRect().left<backInfo[0].rect.left-40||dragContainer.getBoundingClientRect().left>backInfo[9].rect.left+40)return;
		var at = [];
		var al = [];
		var id = '';
		for(var i = 0; i < backInfo.length; i++){
			at.push(backInfo[i].rect.top);
		}

		for(var j = 0; j < backInfo.length; j++){
			al.push(backInfo[j].rect.left);
		}

		var top = getClosest(at,dragContainer.getBoundingClientRect().top);
		var left = getClosest(al,dragContainer.getBoundingClientRect().left);

		for(var k = 0; k < backInfo.length; k++){
			if(backInfo[k].rect.top == top&&backInfo[k].rect.left == left){
				id = backInfo[k].id;
			}
		}
		copArr = cutMatrix(GAME.game,dict.params.newA,id);
	}
	document.onmousemove = function(event){
		var e = event ? event : window.event;
		if(dict.params.flag){
			var nowX = e.clientX,
				nowY = e.clientY;
				disX = nowX - dict.params.currentX,
				disY = nowY - dict.params.currentY;
			dragContainer.style.left = parseInt(dict.params.left) + disX - parseInt(dict.params.trnX) + 'px';
			dragContainer.style.top = parseInt(dict.params.top) + disY - parseInt(dict.params.trnY) + 'px';
		}
	}
}

function dragElement(newb,e){
	startDrag(newb,e);
}

function startDrag(element,e){
	var st = element.id.substr(-1,1)-1;
	appendBlocks(dragContainer,candidate[st],'big');
	var trnY = ((e.pageY-element.getBoundingClientRect().top)/element.offsetHeight)*dragContainer.offsetHeight;
	var trnX = ((e.pageX-element.getBoundingClientRect().left)/element.offsetWidth)*dragContainer.offsetWidth;
	dragContainer.style.visibility = 'visible';
	dragContainer.style.top = e.pageY - trnY + 'px';
	dragContainer.style.left = e.clientX - trnX + 'px';
	element.style.visibility = 'hidden';
	dict.params.nowE = element;
	dict.params.newA = candidate[st].matrix;
	dict.params.trnX = trnX;
	dict.params.trnY = trnY;
	dict.params.flag = 'true';
}

/*
function startDrag(element,elements,callback){
	if(getCss(element, "left") !== "auto"){
		dict.params.left = getCss(element, "left");
	}
	if(getCss(element, "top") !== "auto"){
		dict.params.top = getCss(element, "top");
	}

	element.onmousedown = function(event){
		dict.params.flag = true;
		if(!event){
			event = window.event;
			element.onselectstart = function(){
				return false;
			}
		}
		var e = event;
		dict.params.currentX = e.clientX;
		dict.params.currentY = e.clientY;
	}

	document.onmouseup = function(){
		dict.params.flag = false;
		dict.params.mFlag = false;
		if(getCss(element, "left") !== "auto"){
			dict.params.left = getCss(element, "left");
		}
		if(getCss(element, "top") !== "auto"){
			dict.params.top = getCss(element, "top");
		}
		dragEvent(elements);
	}

	document.onmousemove = function(event){
		var e = event ? event : window.event;
		if(dict.params.flag){
			var nowX = e.clientX,
				nowY = e.clientY;
				disX = nowX - dict.params.currentX,
				disY = nowY - dict.params.currentY;
			element.style.left = parseInt(dict.params.left) + disX + 'px';
			element.style.top = parseInt(dict.params.top) + disY + 'px';
		}
	}
}
function stopDrag(){

}
*/