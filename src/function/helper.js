
export const findNums = (string)=>{
    let regex = /[^0-9]/g;
    if(typeof string === 'string' && string.trim().length > 0){
        let matches = string.replace(regex,'');
        return[true, matches]
    }else{
        return [false, 'Number must be string']
    }
}
