const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


rl.question("Enter a temperature in Fahrenheit: ", (input) => {
    let fahrenheit = parseFloat(input);

    if (!isNaN(fahrenheit)) {
        
        let celsius = fahrenheitToCelsius(fahrenheit);
        console.log(`The temperature converted to Celsius is: ${celsius.toFixed(2)}°C`);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }

    rl.close();
});