let removeStars = (s) => {
    let myValues = [];

    for(let i=0;i< s.length; i++) {
        while(myValues.length && s[i] === "*") {
            myValues.pop();
            break;
        }
        if(s[i]!=="*") {
            myValues.push(s[i]);
        }
    }
    return myValues.join('');
};