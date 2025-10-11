const halvesAreAlike = (s) => {
    let freq1 = 0;
    let freq2 = 0;
    let vowelsSmallerUppercase = ["a","e", "i", "o","u","A", "E", "I","O", "U"];
    for(let i=0;i<s.length/2;i++) {
        if(vowelsSmallerUppercase.includes(s[i])) {
            freq1 +=1;
        }
    }
    for(let j=s.length/2;j<s.length;j++) {
        if(vowelsSmallerUppercase.includes(s[j])) {
            freq2 +=1;
        }
    }

    return freq1 === freq2;
};
