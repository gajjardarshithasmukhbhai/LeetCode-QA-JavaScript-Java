const test = () => {
    let sum = 0;
    const helper = (num) => {
        if(num > 5) {
            return num;
        }
        return num+helper(num+1);
    }
    return helper(0);
}
console.log(test());