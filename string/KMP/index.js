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
class Solution {
  computeLPS(pat, lps) {
    let low = 0;
    let fast = low + 1;
    let len = 0;
    while (fast < pat.length) {
      if (pat[low] === pat[fast]) {
        len++;
        lps[fast] = len;
        low++;
        fast++;
      } else {
        if (low === 0) {
          len = 0;
          lps[fast] = 0;
          fast++
        } else {
          low = lps[low - 1];
          len = lps[low];
        }
      }
    }
  }
  search(pat, txt) {
    const lps = [0];
    this.computeLPS(pat, lps);
    let low = 0;
    let fast = 0;
    const result = []
    while (fast < txt.length) {
      if (txt[fast] === pat[low]) {
        fast++;
        low++;
        if (low === pat.length) {
          result.push(fast - low + 1)
          low = lps[low - 1];
        }
      } else {
        if (low === 0) {
          fast++
        } else {
          low = lps[low - 1]
        }
      }
    }
    return result;
  }
}
const solution = new Solution();
solution.search('AABA', 'AABAACAADAABAABA')

https://www.geeksforgeeks.org/problems/search-pattern0205/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab