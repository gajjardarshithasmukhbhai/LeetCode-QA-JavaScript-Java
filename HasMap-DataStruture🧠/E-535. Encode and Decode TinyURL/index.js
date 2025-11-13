/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let url = new Map();

var encode = function(longUrl) {
    const smallLetter = "abcdefghijklmnopqurstqvwxyzABCDFGHIJKLMNOPQURSTUVWXYZ0123456789";

    let randomString = "";

    for(let i=0;i<6;i++) {
        randomString += smallLetter.charAt(Math.floor(Math.random()*82));
    }

    url.set(`http://tinyurl.com/${randomString}`, longUrl);

    return `http://tinyurl.com/${randomString}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    if(url.has(shortUrl)) {
        return url.get(shortUrl);
    }
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */