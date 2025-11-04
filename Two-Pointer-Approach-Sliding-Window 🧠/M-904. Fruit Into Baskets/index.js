var totalFruit = function(fruits) {
    let i = 0;
    let j = 0;
    let max = 0;
    let map = {};

    while (j < fruits.length) {
        map[fruits[j]] = (map[fruits[j]] || 0) + 1;

        while (Object.keys(map).length > 2) {
            map[fruits[i]]--;
            if (map[fruits[i]] === 0) {
                delete map[fruits[i]];
            }
            i++;
        }

        max = Math.max(max, j - i + 1);
        j++;
    }

    return max;
};
