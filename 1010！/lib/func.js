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
function initGame(element,gameMatrix,columns,color){//initialize
	for(var i = 0; i < columns; i++){
		var temp = [];
		for(var j = 0; j < columns; j++){
			temp.push(0);
		}
		gameMatrix.push(temp);
	}
	appendBackBlocks(element,columns,color);
}

function appendBackBlocks(element,columns,color){//append game container
	for(var i = 0; i < columns; i++){
		for(var j = 0; j < columns; j++){
			var id = i+'-'+j;
			var t = i*50;
			var l = j*50;
			element.appendChild(color.createBlock(id,t,l,'big'));
		}
	}
}

function appendBlocks(element,matrix,color){//append new blocks
	//set parent node's size for position
	element.style.height = matrix.length * 30 + 'px';
	element.style.width  = matrix[0].length * 30 + 'px';

	//append block
	for(var m = 0; m < matrix.length; m++){
		var t = m*30;
		if(matrix[m]!=undefined){
			for(var n = 0; n < matrix[m].length; n++){
				var l = n*30;
				var id = 'n3-'+m+'-'+n;
				if(matrix[m][n] == 1){
					element.appendChild(color.createBlock(id,t,l,'small'));
				}else{
					element.appendChild(tranBlock.createBlock(id,t,l,'small'));
				}
			}
		}else{
			var id = 'n3-'+m+'one'
			element.appendChild(color.createBlock(id,0,0,'small'));
		}
	}
}

function getCss(o,key){
	return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key]; 	
};

function dragEvent(elements){
	for(var i = 0; i<3; i++){
		elements[i].addEventListener('mousedown',function(e){
			dragElement(this)
		});
	}
}

function dragElement(newb){
	var cnodes = newb.childNodes;
	for(var i = 1; i < cnodes.length; i++){
		console.log(cnodes[i].style);
	}
}
/*
function startDrag(element,elements,callback){
	if(getCss(element, "left") !== "auto"){
		params.left = getCss(element, "left");
	}
	if(getCss(element, "top") !== "auto"){
		params.top = getCss(element, "top");
	}

	element.onmousedown = function(event){
		params.flag = true;
		if(!event){
			event = window.event;
			element.onselectstart = function(){
				return false;
			}
		}
		var e = event;
		params.currentX = e.clientX;
		params.currentY = e.clientY;
	}

	document.onmouseup = function(){
		params.flag = false;
		params.mFlag = false;
		if(getCss(element, "left") !== "auto"){
			params.left = getCss(element, "left");
		}
		if(getCss(element, "top") !== "auto"){
			params.top = getCss(element, "top");
		}
		dragEvent(elements);
	}

	document.onmousemove = function(event){
		var e = event ? event : window.event;
		if(params.flag){
			var nowX = e.clientX,
				nowY = e.clientY;
				disX = nowX - params.currentX,
				disY = nowY - params.currentY;
			element.style.left = parseInt(params.left) + disX + 'px';
			element.style.top = parseInt(params.top) + disY + 'px';
		}
	}
}
function stopDrag(){

}
*/