const kthGrammar = (n, k) => {
    // n --> Row
    // k --> Position of Array

    const helper = (row, string) => {
        
        if(row === n) {
            return parseInt(string[k-1]);
        }
        let tempString = "";
        for(let i=0;i<string.length;i++) {
            if(string[i] === "0") {
                tempString += "01";
            }
            if(string[i] === "1") {
                tempString+= "10";
            }
        }
        return helper(row+1, tempString);
    }
    return helper(1, "0");
};