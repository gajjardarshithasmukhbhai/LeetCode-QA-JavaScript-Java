const calculate = (s) => {
    let number = 0;
    let sign = 1;
    let result = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue; // ✅ skip spaces

        if (!isNaN(s[i])) {
            number = number * 10 + parseInt(s[i]);
        }
        else if (s[i] === "+") {
            result += sign * number;
            number = 0;
            sign = 1;
        }
        else if (s[i] === "-") {
            result += sign * number;
            number = 0;
            sign = -1;
        }
        else if (s[i] === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
            number = 0;
        }
        else if (s[i] === ")") {
            result += sign * number;
            number = 0;
            let signOfValue = stack.pop();
            let prevResult = stack.pop();
            result = prevResult + signOfValue * result;
        }
    }

    // ✅ always add leftover number
    result += sign * number;

    return result;
};
