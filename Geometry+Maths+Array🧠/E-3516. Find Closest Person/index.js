var findClosest = function(x, y, z) {
    let firstPerson = Math.abs(z-x);
    let secondPerson = Math.abs(z-y);

    if(firstPerson === secondPerson) {
        return 0;
    }
    return firstPerson > secondPerson ? 2: 1;
};