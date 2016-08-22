var matrix = {
	//one block
	one:[[1]],
	//row
	row5  : [[1,1,1,1,1]],
	row4  : [[1,1,1,1]],
	row3  : [[1,1,1]],
	row2  : [[1,1]],
	//column
	col5  : [[1],[1],[1],[1],[1]],
	col4  : [[1],[1],[1],[1]],
	col3  : [[1],[1],[1]],
	col2  : [[1],[1]],
	//2*2 blocks
	all2  : [[1,1],[1,1]],
	tl2   : [[1,1],[1,0]],
	tr2   : [[1,1],[0,1]],
	bl2   : [[1,0],[1,1]],
	br2   : [[0,1],[1,1]],
	//3*3 blocks
	all3  : [[1,1,1],[1,1,1],[1,1,1]],
	tl3   : [[1,1,1],[1,0,0],[1,0,0]],
	tr3   : [[1,1,1],[0,0,1],[0,0,1]],
	bl3   : [[1,0,0],[1,0,0],[1,1,1]],
	br3   : [[0,0,1],[0,0,1],[1,1,1]]
}
var randoms = {
	1  : 'one',
	2  : 'row2',
	3  : 'row3',
	4  : 'row4',
	5  : 'row5',
	6  : 'col2',
	7  : 'col3',
	8  : 'col4',
	9  : 'col5',
	10 : 'all2',
	11 : 'tl2',
	12 : 'tr2',
	13 : 'bl2',
	14 : 'br2',
	15 : 'all3',
	16 : 'tr3',
	17 : 'tl3',
	18 : 'bl3',
	19 : 'br3'
}