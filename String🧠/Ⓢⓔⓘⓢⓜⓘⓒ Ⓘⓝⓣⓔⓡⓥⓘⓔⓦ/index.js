// test darshit [click text 2](https://darshit.gajjar.com) test2 hasmukhbhai [click text 1](https://darshit-gajjar.com) test


const parsedTheText = (stringValue) => {
    let updatedString = "";
    let i = 0;

    while(i<stringValue.length) {
        let startText = stringValue.indexOf("[",i);

        if(startText === -1) {
            updatedString += stringValue.substring(i);
            break;
        }

        // add the text before [
        updatedString +=stringValue.substring(i, startText);

        let endText = stringValue.indexOf("]", startText);
        let startUrl = stringValue.indexOf("(", endText);
        let endUrl = stringValue.indexOf(")", startUrl);

        if(endText === -1 || startUrl === -1 || endUrl === -1) {
            updatedString += stringValue.substring(startText);
            break;
        }

        let text = stringValue.substring(startText+1, endText);
        let url = stringValue.substring(startUrl+1, endUrl);
        
        updatedString += `<a href="(${url})">${text}</a>`;

        i = endUrl+1;
    }
    return updatedString;
}

console.log(parsedTheText("test darshit [click text 2](https://darshit.gajjar.com)"));