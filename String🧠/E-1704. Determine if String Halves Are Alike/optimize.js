const halvesAreAlike = (s) => {
    let balance = 0;
    let vowels = new Set("aeiouAEIOU");
    const mid = s.length/2;
    for(let i=0;i<mid;i++) {
        if(vowels.has(s[i])) ++balance;
        if(vowels.has(s[i+mid])) --balance;
    }
    
    return balance === 0;
};
