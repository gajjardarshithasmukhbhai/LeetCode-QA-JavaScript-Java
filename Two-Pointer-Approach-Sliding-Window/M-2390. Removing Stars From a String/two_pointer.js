const removeStars = (stars) => {
    let values = Array.from(stars);

    let writer = 0;
    for(let i=0;i<stars.length;i++) {
        if(values[i] === "*") {
            writer--;
        }
        else {
            values[writer] = stars[i];
            writer++;
        }
    }

    return values.slice(0, writer).join("");
}