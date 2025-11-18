/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = (bits) => {
    let index = 0;
    while(index<bits.length-1) {
      index += bits[index] === 0 ? 1:2;
    }
    return index === bits.length-1;
};