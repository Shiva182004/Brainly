export function random(len: number) {
    let options = "qwertyuioasdfghjk12345678";
    let l = options.length;
    let ans = "";
    for(let i=0; i<len; i++) {
        ans+= options[Math.floor((Math.random())*l)]
    }

    return ans;
}