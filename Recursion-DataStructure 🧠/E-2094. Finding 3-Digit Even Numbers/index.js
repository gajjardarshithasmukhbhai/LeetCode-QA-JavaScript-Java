const findEvenNumbers = (digits) => {
    let result = new Set();
    let freq = new Map();

    for(let i=0;i<digits.length;i++) {
        freq.set(digits[i], (freq.get(digits[i]) || 0)+1);
    }
    const helper = (stack) => {
        if(stack.length === 3) {
            result.add(stack[0]*100+stack[1]*10+stack[2]);
            return;
        }

        for(let [digit, count] of [...freq]) {
            if(count === 0) continue;
            
            if(stack.length === 0 && digit === 0) continue;
            
            if(stack.length === 2 && digit%2 !==0) continue; 
            
            freq.set(digit, count-1);
            stack.push(digit);
            helper(stack);
            stack.pop();
            freq.set(digit, count);
        }
    }
    helper([]);
    return Array.from(result).sort((a, b) => a - b);
};
