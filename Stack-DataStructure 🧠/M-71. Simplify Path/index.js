const simplifyPath = (path) => {
    const splittedValue = path.split('/');
    console.log('splittedValue: ', splittedValue);

    const stack = [];

    for(let i=0; i<splittedValue.length; i++) {
        if(splittedValue[i] === "..") {
            stack.pop();
        }
        if(splittedValue[i] !== "." && splittedValue[i]!=="" && splittedValue[i]!=="..") {
            stack.push(splittedValue[i]);
        }
    }
    return `/${stack.join("/")}`;
};
