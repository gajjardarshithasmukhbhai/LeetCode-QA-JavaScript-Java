const checkIfPangram = (sentence) => {
    const splitString = sentence.split("").sort().join("");

    const mapValue = new Map();
    for(let i=0;i<splitString.length;i++) {
        mapValue.set(splitString[i], (mapValue.get(splitString[i]) || 0) +1);
    }

    const getValues = [...mapValue.keys()];

    return getValues.length === 26;
};
