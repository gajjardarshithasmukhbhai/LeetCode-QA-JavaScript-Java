const countKConstraintSubstrings = (s, k) => {
    let map = new Map();

    let count = 0;

    let left = 0;
    
    for(let right=0; right<s.length;right++) {
        
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        while(map.get("0")>k && map.get("1")>k) {
            if(map.get("0") > k || map.get("1") > k) {
                map.set(s[left], (map.get(s[left])||0)-1);
                left++;
            }            
        }
        count += right-left+1;
    }
    return count;
};

console.log(countKConstraintSubstrings("10101", 1));