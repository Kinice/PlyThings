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

function startDrag(){

}

function stopDrag(){

}