/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    let index=0;

    let i = 0;

    let j = 0;
    let current_char = null;
    
    while(index < chars.length) {
        
        current_char = chars[index];
        
        let current_char_count = 1;
        
        while(chars[i] === chars[i+1]) {
            current_char_count++;
            i++;
        }

        chars[j++] = current_char;
        if(current_char_count > 1) {
            let numberToString = current_char_count.toString();

            for(let i=0;i<numberToString.length;i++) {
                chars[j++] = numberToString[i];
            }
        }
        i++;
        index = i;
    }
    return j;
};