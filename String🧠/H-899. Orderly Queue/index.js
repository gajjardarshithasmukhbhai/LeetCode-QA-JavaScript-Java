// when k is >=2 we can sort directly
const sortStringOrder = (value) => {
    let smallest = value;
    for (let i = 1; i < value.length; i++) {
        const rotated = value.slice(i) + value.slice(0, i);
        if (rotated < smallest) smallest = rotated;
    }
    return smallest;
};

const orderlyQueue = (s, k) => {
    if (k >= 2) {
        return s.split('').sort().join('');
    } else {
        return sortStringOrder(s);
    }
};

console.log(sortStringOrder("baca",1));