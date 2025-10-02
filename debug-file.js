var removeStars = function(s) {
    let chars = Array.from(s)

    let writer = 0; 

    for(let i = 0; i < s.length; i++){
        if(chars[i] === "*"){
            writer--;
        } else{
            chars[writer] = chars[i]
            writer++;
        }
    }
    return chars.slice(0, writer).join('')
};

console.log(removeStars("leet**cod*e"));