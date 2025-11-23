const numberToWords = (nums) => {
    if(nums == 0) return "Zero";

    const belowTen = {
        0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five",
        6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
    };
    
    const belowTwenty = {
        10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen",
        15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Nineteen"
    };

    const belowHundred = {
        10: "Ten", 20: "Twenty", 30: "Thirty", 40: "Forty", 50: "Fifty",
        60: "Sixty", 70: "Seventy", 80: "Eighty", 90: "Ninety"
    };

    const solve = (num) => {
        if(num<10) {
            return belowTen[num];
        }
        if(num<20) {
            return belowTwenty[num];
        }
        if(num<100) {
            return belowHundred[Math.floor(num/10)*10]+ (num%10!==0 ? " "+solve(num%10): "");
        }
        if(num<1000) {
            return solve(Math.floor(num/100)) + " Hundred"+(num%100!==0 ? " "+solve(num%100): "");
        }
        if(num<1000000) {
            return solve(Math.floor(num/1000)) + " Thousand" + (num%1000!==0 ? " " + solve(num%1000): "");
        }
        if (num < 1000000000) {
            return solve(Math.floor(num / 1000000)) + " Million" +
                (num % 1000000 !== 0 ? " " + solve(num % 1000000) : "");
        }

        return solve(Math.floor(num / 1000000000)) + " Billion" +
            (num % 1000000000 !== 0 ? " " + solve(num % 1000000000) : "");
    }
    return solve(nums);
};

console.log(numberToWords(12345));