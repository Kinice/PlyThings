var stringfyJSON = arg =>{
    if(typeof arg !== 'object' || arg == null){
        return 'Syntax Error'
    }

    let finalStr = '';
    for(let i in arg){
        if(typeof arg == 'object' && arg !== null){
            finalStr += stringfyJSON(arg[i])
        }else{
            var
        }
    }
}