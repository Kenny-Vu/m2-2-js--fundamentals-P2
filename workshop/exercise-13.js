// HINT:
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Q13
// Write a function countBs that takes a string as its only argument
// and returns a number that indicates how many uppercase “B”
// characters there are in the string.

function countBs(str) {
    let uppercaseNum = null;
    for (index=0;index<str.length;index++) {
        if(str[index].includes('B')){
            uppercaseNum ++;
        }
    }
    return uppercaseNum;
}
// -------------------------------------------------------------------------
console.log('Q1: ', countBs('BananaBabyBubbles'));


