const test = { "name1": "darshit", "data": {"name2": "nikunj", "value": {"valu1": "hasmukhbhai"}}};


const collectStrings = (obj) => {
    let result = [];
    const helper = (obj) => {
        Object.entries(obj).map(([key, value]) => {
            if(typeof value === "string") {
                result.push(value);
            }else {
                helper(obj[key]);
            }
        });
    }
    helper(obj);
    return result;
}

console.log(collectStrings(test));