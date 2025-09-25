const fractionToDecimal = (numerator, denominator) => {
    if(numerator === 0) return "0";

    let result = "";
    
    // this will apply, if reminder comes in Map
    let checkDenominator = new Map();

    if((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        result +="-";
    }
    
    let positiveNumerator = Math.abs(numerator); 
    let positiveDenominator = Math.abs(denominator);

    result += Math.floor(positiveNumerator / positiveDenominator);
    
    let reminder = positiveNumerator%positiveDenominator; 
    
    if(reminder === 0) {
        return result;
    }
    
    result += ".";

    while(reminder!==0) {
        if(checkDenominator.has(reminder)) {
            let index = checkDenominator.get(reminder);
            result = result.slice(0, index) + "(" + result.slice(index) + ")";
            return result;
        }
        
        checkDenominator.set(reminder, result.length);

        reminder *=10;
        result += Math.floor(reminder / positiveDenominator);
        reminder = reminder % positiveDenominator;
    }
    return result;
};