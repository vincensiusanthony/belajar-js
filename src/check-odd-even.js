function isEven(n) {
    if (!Number.isInteger(n)) {
        return false; 
    }

    
    return n % 2 === 0;
}

const n = 1000; 

let result = isEven(n);
console.log(`isEven: ${result}`);