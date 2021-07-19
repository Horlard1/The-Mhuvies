export const findNums = (string)=>{
    let regex = /[^0-9]/g;
    if(typeof string === 'string' && string.trim().length > 0){
        let matches = string.replace(regex,'');
        return[true, matches]
    }else{
        return [false, 'Number must be string']
    }
}
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }