function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    const len = cleanedStr.length;

    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false; 
        }
    }

    return true; 
}

const testString = 'Madam';
if (isPalindrome(testString)) {
    console.log(`'${testString}' → palindrome`);
} else {
    console.log(`'${testString}' → not a palindrome`);
}