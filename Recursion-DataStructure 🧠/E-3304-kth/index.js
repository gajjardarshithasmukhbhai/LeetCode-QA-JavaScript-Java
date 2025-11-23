var kthCharacter = function (k) {
    let word = 'a';
    
    function generateWord(word, k) {
        while (word.length < k) {
            let generatedWord = ''
            for (let ch of word) {
                generatedWord += String.fromCharCode((ch.charCodeAt() + 1) % 123) // handle out of bound for z
            }
            return generateWord(word + generatedWord, k)
        }
        return word;
    }
    return generateWord(word, k)[k - 1]
};



console.log(kthCharacter(5));