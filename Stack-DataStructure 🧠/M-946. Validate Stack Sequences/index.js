const validateStackSequences = (pushed, popped) => {
    
    let i = 0;
    let j = 0;

    let stack = [];

    for(let value of pushed) {
        stack.push(value);
        while(stack.length && stack[stack.length-1] === popped[j]) {
            j++;
            stack.pop();
        }
        
    }
    return stack.length === 0;
};