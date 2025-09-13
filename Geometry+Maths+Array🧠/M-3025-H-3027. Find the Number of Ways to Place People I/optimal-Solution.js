const numberOfPairs = (points) => {
    let n = points.length;
    let count = 0;


    // sorting in Ascending Order
    
    const pointsAscVal = points.sort((a,b) => {
        if(a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });
   
    for(let i=0; i<n; i++) {
        // Upper left Points
        let x1 = pointsAscVal[i][0];
        let y1 = pointsAscVal[i][1];

        let maxIntY = 0;

        for(let j=i+1; j<n; j++) {
            
            // Lower Right pointsAscVal
            let x2 = pointsAscVal[j][0];
            let y2 = pointsAscVal[j][1]; 

            if(y2>y1) {
                continue;
            }

            if(maxIntY < y2) {
                count++;
                maxIntY = y2;
            }
        }
    }
    return count;
};