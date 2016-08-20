function Block(line_amount,color){ //块构造函数
	this.line_amount = line_amount;
	this.color = color;
	this.id = id;
	
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