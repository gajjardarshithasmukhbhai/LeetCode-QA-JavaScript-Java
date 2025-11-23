const kthCharacter = (k) => {
    console.log("skjss");
    let str = "a";
    while(str.length < k) {
        let count = str.length;
        let temp = "";
        for(let j=0;j<count;j++) {
            temp +=String.fromCharCode(str.charCodeAt(j)+1);
        }
        str +=temp;
    }
    return str[k-1];
};
console.log(kthCharacter(5));