function cmToKm(cm) {
    return cm / 100000; 
}

function kmToCm(km) {
    return km * 100000; 
}

const value = 10; 
const conversionType = 'cm'; 

let result;

if (conversionType === 'cm') {
    result = cmToKm(value);
    console.log(`${result} km`); 
} else if (conversionType === 'km') {
    result = kmToCm(value);
    console.log(`${result} cm`); 
} else {
    console.log("Invalid conversion type. Please use 'cm' or 'km'.");
}