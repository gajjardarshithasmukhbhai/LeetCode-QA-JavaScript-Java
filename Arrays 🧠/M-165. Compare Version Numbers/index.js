/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
*/

const compareVersion = (version1, version2) => {
    let value1 = version1.split('.');
    let value2 = version2.split('.');
    
    if(value1.length > value2.length) {
        for(let i=0;i<value1.length-value2.length+1;i++) {
            value2.push(0);
        }
    }
    if(value1.length < value2.length) {
        for(let i=0;i<value2.length-value1.length+1;i++) {
            value1.push(0);
        }
    }

    for(let i=0;i<value1.length;i++) {
        if(Number(value1[i]) > Number(value2[i])) {
            return 1;
        }
        if(Number(value1[i])<Number(value2[i])) {
            return -1;
        }
    }
    return 0;
};