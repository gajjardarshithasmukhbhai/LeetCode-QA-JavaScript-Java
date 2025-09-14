/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
const spellchecker = (wordlist, queries) => {

    let queriesMap = new Map(); // for Exact match
    let caseErrorMap = new Map(); // for case based math
    let removedVowelMap = new Map(); // for * based match

    let result = [];

    for(let i=0;i<wordlist.length;i++) {
        if(!queriesMap.has(wordlist[i])) {
            queriesMap.set(wordlist[i],wordlist[i]);
        }
    }

    for(let i=0;i<wordlist.length;i++) {
        let lower = wordlist[i].toLowerCase();
        if(!caseErrorMap.has(lower)) {
            caseErrorMap.set(lower, wordlist[i]);
        }
    }

    for(let i=0;i<wordlist.length;i++) {
        let replacedStr = wordlist[i].toLowerCase().replace(/[aeiou]/g, '*');
        
        if(!removedVowelMap.has(replacedStr)) {
            removedVowelMap.set(replacedStr, wordlist[i]);
        }
    }

    for(let i=0;i<queries.length;i++) {
        let query = queries[i];
        let lower = query.toLowerCase();

        let replacedStr = queries[i].toLowerCase().replace(/[aeiou]/g, '*');

        if(queriesMap.has(query)) {
            result.push(queriesMap.get(query));
        }
        else if(caseErrorMap.has(lower)) {
            result.push(caseErrorMap.get(lower));
        }
        else if(removedVowelMap.has(replacedStr)) {
            result.push(removedVowelMap.get(replacedStr));
        }
        else {
            result.push("");
        }
    }
    return result;
};