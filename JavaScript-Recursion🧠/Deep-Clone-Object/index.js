const sumObject = value => {
    let result = 0;

    for(let key in value) {
        if(typeof key === "number") {
            result += value[key];
        }
        else {
            result += sumObject(value[key]);
        }
    }
    return result;
}