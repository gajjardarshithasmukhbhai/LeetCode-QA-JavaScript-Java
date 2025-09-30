const removeDuplicates = (s) => {
    let stack = [];
    let left = 0;
    while(left < s.length) {

        while(stack.length && stack[stack.length-1] === s[left]) {
            stack.pop();
            ++left;
        }
        stack.push(s[left]);
        left++;
    }
    return stack.join('');
};
