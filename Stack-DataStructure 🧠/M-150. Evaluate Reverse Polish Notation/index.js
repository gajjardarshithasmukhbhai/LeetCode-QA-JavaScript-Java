const evalRPN = (tokens) => {
    let stack = [];

    for(let i=0;i<tokens.length;i++) {
        let tokenSign = tokens[i];
        if(["+", "-", "/", "*"].includes(tokenSign)) {
            let value1 = stack.pop();
            let value2 = stack.pop();
            if(tokenSign === "+") {
                let result = value1+value2;
                stack.push(result);
            }
            else if(tokenSign === "*") {
                let result = value1*value2;
                stack.push(result);
            }
            else if(tokenSign === "-") {
                let result = value2-value1;
                stack.push(result);
            }
            else if(tokenSign === "/") {
                let result =  Math.trunc(value2 / value1);
                stack.push(result);
            }
            
        }
        else {
            stack.push(parseInt(tokens[i]));
        }
        
    }    
    return stack.pop();
};

console.log(evalRPN(["2","1","+","3","*"]));