const isIsomorphic = (s, t) => {
    let isomorphicMap = new Map();
    let reverseMap = new Map(); // added to validate reverse mapping

    // map one string to another
    for (let i = 0; i < s.length; i++) {  // fixed i++
        
        // forward map
        if (!isomorphicMap.has(s[i])) {
            isomorphicMap.set(s[i], t[i]);
        }

        // reverse map (to avoid cases like "ab" → "cc")
        if (!reverseMap.has(t[i])) {
            reverseMap.set(t[i], s[i]);
        }

        // validation
        if (isomorphicMap.get(s[i]) !== t[i] || reverseMap.get(t[i]) !== s[i]) {
            return false;
        }
    }

    let updatedString = "";
    for (let i = 0; i < s.length; i++) {
        updatedString += isomorphicMap.get(s[i]);
    }

    return updatedString === t;
};
