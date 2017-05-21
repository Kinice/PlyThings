var qr = require('qr-image');

var qr_svg = qr.image('http://www.kinice.top',{type:'png',parse_url:true});
//qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));


var svg_string = qr.imageSync('http://www.kinice.top', { type: 'svg',parse_url:true});

console.log(svg_string)
