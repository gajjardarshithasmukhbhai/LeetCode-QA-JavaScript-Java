# 966. Vowel Spellchecker

## Topics & Tags
- **Data Structures**: HashMap, Hash Table, Map
- **String Processing**: String Manipulation, Pattern Matching
- **Algorithm Patterns**: Multiple Hash Maps, Priority-based Matching
- **String Operations**: Case Conversion, Character Replacement, Regex
- **Problem Type**: String Matching, Spellchecker, Dictionary Search
- **Difficulty**: Medium
- **Companies**: Google, Microsoft, Amazon
- **Similar Problems**: Edit Distance, Word Break, Implement Trie

## Related Concepts
- **Hash Map Applications**: Fast lookups, Multiple key transformations
- **String Normalization**: Case folding, Character substitution
- **Priority Handling**: Multiple matching criteria with precedence
- **Preprocessing**: Building auxiliary data structures for optimization

## Problem Description
Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

For a given query word, the spellchecker handles two categories of spelling mistakes:
1. **Capitalization**: If the query matches a word in the wordlist (case-insensitive), then the query is replaced by the word in the wordlist
2. **Vowel Errors**: If after replacing vowels ('a', 'e', 'i', 'o', 'u') with '*', the query matches a word in the wordlist, then the query is replaced by the word in the wordlist

In addition, the spellchecker operates under the following precedence rules:
- When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back
- When the query matches a word up to capitalization, you should return the first such match in the wordlist
- When the query matches a word up to vowel errors, you should return the first such match in the wordlist
- If the query has no matches in the wordlist, you should return the empty string

## Approach
The solution uses three HashMaps to handle different types of matches:

1. **Exact Match Map**: Stores exact word matches (case-sensitive)
2. **Case Error Map**: Stores lowercase versions of words for case-insensitive matching
3. **Vowel Error Map**: Stores words with vowels replaced by '*' for vowel error matching

### Algorithm Steps:
1. Build three maps from the wordlist:
   - Exact match map: `word -> word`
   - Case error map: `word.toLowerCase() -> first occurrence word`
   - Vowel error map: `word.toLowerCase().replace(/[aeiou]/g, '*') -> first occurrence word`

2. For each query, check in order:
   - Exact match
   - Case-insensitive match
   - Vowel error match
   - Return empty string if no match found

## Example
```javascript
Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]

Explanation:
- "kite" -> exact match -> "kite"
- "Kite" -> case error -> "KiTe" (first occurrence)
- "KiTe" -> exact match -> "KiTe"
- "Hare" -> exact match -> "Hare"
- "HARE" -> case error -> "Hare" (first occurrence)
- "Hear" -> no match -> ""
- "hear" -> no match -> ""
- "keti" -> vowel error -> "KiTe" (k*t* matches k*t*)
- "keet" -> no match -> ""
- "keto" -> vowel error -> "KiTe" (k*t* matches k*t*)
```

## Time Complexity
- **Building Maps**: O(N × M) where N is the number of words and M is the average length of words
- **Processing Queries**: O(Q × M) where Q is the number of queries
- **Overall**: O((N + Q) × M)

## Space Complexity
O(N × M) for storing the three HashMaps

## Key Points
- Priority: Exact match > Case error > Vowel error
- For case and vowel errors, return the **first** matching word from the wordlist
- Use three separate maps to handle different matching strategies efficiently
