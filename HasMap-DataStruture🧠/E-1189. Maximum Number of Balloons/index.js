const maxNumberOfBalloons = (text) => {
    let min = Infinity;
    let ballonMap = {'b': 1, 'a': 1, 'l':2, 'o': 2, 'n':1};

    let countFreqBallon = new Map();
    for(let i=0;i<text.length;i++) {
        countFreqBallon.set(text[i], (countFreqBallon.get(text[i]) || 0)+1);
    }

    for(let key in ballonMap) {
        let available = countFreqBallon.get(key) || 0;
        let required = ballonMap[key];
        min = Math.min(min, Math.floor(available/required));
    }

    return min;
};
