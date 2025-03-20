# Belajar JavaScript

Repositori ini dibuat dalam Bahasa Indonesia untuk menyimpan projek belajar dan memenuhi tugas dari Mata Kuliah Web Client Development

## Apa Saja Yang Dibutuhkan

Berikut dibawah ini yang dibutuhkan untuk dapat mengubah dan menjalankan sumber kode dari projek belajar javacript :

- Pasang Local IDEs yaitu VSCode (**Kode ini dibuat di VSCode atau Gunakan Compiler Online sebagai alternatif**)

- Pasang Node.JS (**Dikarnakan kode ini dibuat di VSCode yang membutuhkan Node.JS sebagai runtime environment nya untuk dapat menjalankan kodenya**)

- Pasang Ekstensi Code Runner pada VSCode

- Semua file kode yang dibuat ada folder src

## Tugas dan Ekspektasi
Berikut dibawah ini ditampilkan 5 daftar tugas dan ekspektasi dari kode projek belajar yang sudah diselesaikan :

![Markdown](https://storage.googleapis.com/assets-edlink/p/medium-9010d7123737800b11fc1297173b4fb428606d4cbd46609f345850dad718f25f-exercise-2-2.png)

## Code Block 
> **NOTE**  
> Kode dan keterangan penjelasan ditulis dalam Bahasa Inggris

*fahrenheit-to-celsius-converter.js*
```javascript
// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Ask the user for input
rl.question("Enter a temperature in Fahrenheit: ", (input) => {
    // Convert the input to a floating-point number
    let fahrenheit = parseFloat(input);

    // Check if the input is a valid number
    if (!isNaN(fahrenheit)) {
        // Convert the temperature to Celsius
        let celsius = fahrenheitToCelsius(fahrenheit);

        // Display the converted temperature
        console.log(`The temperature converted to Celsius is: ${celsius.toFixed(2)}°C`);
    } else {
        // Handle invalid input
        console.log("Invalid input. Please enter a valid number.");
    }

    // Close the readline interface
    rl.close();
});
```
---
*convert-cm-to-km.js*
```javascript
// Function to convert centimeters to kilometers
function cmToKm(cm) {
    return cm / 100000; // Result is already a float
}

// Function to convert kilometers to centimeters
function kmToCm(km) {
    return km * 100000; // Result is already a float
}

// Hardcoded values for conversion
const value = 10; // Example value to convert (in cm or km)
const conversionType = 'cm'; // Conversion type: 'cm' for cm-to-km, 'km' for km-to-cm

let result;

// Perform the appropriate conversion based on the hardcoded conversion type
if (conversionType === 'cm') {
    result = cmToKm(value);
    console.log(`${result} km`); // Output as float
} else if (conversionType === 'km') {
    result = kmToCm(value);
    console.log(`${result} cm`); // Output as float
} else {
    console.log("Invalid conversion type. Please use 'cm' or 'km'.");
}
```
---
*check-odd-even.js*
```javascript
// Function to check if a number is even
function isEven(n) {
    // Check if the number is an integer
    if (!Number.isInteger(n)) {
        return false; // Return false for non-integer values
    }

    // Use the modulo operator to check if the number is even
    return n % 2 === 0;
}

// Hardcoded value for n
const n = 1000; // Example value to check (you can change this)

// Call the isEven function and display the result
let result = isEven(n);
console.log(`isEven: ${result}`);
```
---
*remove-first-occurrence.js*
```javascript
// Function to remove the first occurrence of a search string from a given string
function removeFirstOccurrence(mainString, searchString) {
    // Find the index of the first occurrence of the search string
    let index = mainString.indexOf(searchString);

    // If the search string is not found, return the original string
    if (index === -1) {
        return mainString;
    }

    // Remove the first occurrence of the search string
    return mainString.slice(0, index) + mainString.slice(index + searchString.length);
}

// Example usage:
let string = "Hello world";
let search = "ell";

let result = removeFirstOccurrence(string, search);
console.log(result); // Output: "Ho world"
```
---
*palindrome-checker.js*
```javascript
// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Get the length of the cleaned string
    const len = cleanedStr.length;

    // Check if the string is equal to its reverse
    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false; // Not a palindrome
        }
    }

    return true; // It's a palindrome
}

// Result:
const testString = 'Madam';
if (isPalindrome(testString)) {
    console.log(`'${testString}' → palindrome`);
} else {
    console.log(`'${testString}' → not a palindrome`);
}
```







