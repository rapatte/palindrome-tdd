// 1ère solution mauvaise performance car travail fait 2 fois 
// (parcours toute la longueur de la string)
// module.exports = palindrome = (str) => str
//     .split("")
//     .every((char, i) => char === str[str.length - i - 1])


//2ème solution
module.exports = plaindrome = (str) => {
    reversed = "";
    for (const char of str) {
        reversed = char + reversed
    }
    if (reversed === str) return true
    else return false
}