/**
 * The basic idea behind KMP’s algorithm is:
 * whenever we detect a mismatch (after some matches),
 * we already know some of the characters in the text of the next window.
 * We take advantage of this information to avoid matching the characters that we know will anyway match.
 *
 * how to know how many characters to be skipped.
 * we pre-process pattern and prepare an integer array lps[] that tells us the count of characters to be skipped
 */

/**
 * Preprocessing Overview
 * There are two arrays, one is pat[] and the other is lps[] which size is m (same as the size of the pattern) using to skip characters
 * lps[i] stores the length of the maximum matching proper prefix
 *
 *
 */


// lps ( length of the longest prefix suffix value)
// pat[len] and pat[i] match  => len = lps[i]= len + 1 i+1
// no match and  len is not 0   len  = lps[len -1] 
// AAAA
// [0,1,2,3]
// ABCDE
// [0,0,0,0]
// [0,1,0,1,2,2,2,2,3]
//  A A B A A A A A B A A
//              A A B
// [0,1,0,1,2,0,1,2,3,4,5]
//  A A A C A A A A A C
// [0,1,2,0,1,2,3,3,3,4]
// A A A B A A A
//[0,1,2,0,1,2,3]

// i(start) = i(current) - j
function computeLPS(pat, pLen) {
  const lps = [0]
  let len = 0;
  let i = 1;
  while (i < pLen) {
    if (pat.charAt(i) === pat.charAt(len)) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len === 0) {
        lps[i] = 0
        i++;
      } else {
        len = lps[len - 1]
      }
    }
  }
 return lps;
}
console.log(computeLPS('AABBCCDD', 8))
function KMPSearch(pat, txt) {
  const pLen = pat.length;
  const tLen = txt.length;
  const i = 0;
  const j = 0;
  const result = []
  const lps = computeLPS(txt);
  while(i< pLen) {
    if (pat.charAt[i] === txt.charAt[i]) {
      i++;
      j++;
      if (j === tLen) {
        result.push(i - j)
        j = lps[j - 1]
      }
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j-1]
      }
    }
  }

}