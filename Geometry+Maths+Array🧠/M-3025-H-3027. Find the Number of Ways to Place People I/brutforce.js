const numberOfPairs = (points) => {
    let n = points.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let x1 = points[i][0];
        let y1 = points[i][1]; // candidate for upper-left

        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            let x2 = points[j][0];
            let y2 = points[j][1]; // candidate for lower-right

            // Condition: (x1, y1) must be upper-left of (x2, y2)
            if (x1 <= x2 && y1 >= y2) {
                let hasPointInside = false;

                // Check if some point lies inside or on the rectangle
                for (let k = 0; k < n; k++) {
                    if (k === i || k === j) continue;

                    let x3 = points[k][0];
                    let y3 = points[k][1];

                    if (x3 >= x1 && x3 <= x2 &&
                        y3 <= y1 && y3 >= y2) {
                        hasPointInside = true;
                        break;
                    }
                }

                if (!hasPointInside) {
                    result++;
                }
            }
        }
    }

    return result;
};