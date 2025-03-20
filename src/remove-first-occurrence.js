function removeFirstOccurrence(mainString, searchString) {
    let index = mainString.indexOf(searchString);

    if (index === -1) {
        return mainString;
    }

    return mainString.slice(0, index) + mainString.slice(index + searchString.length);
}

let string = "Hello world";
let search = "ell";

let result = removeFirstOccurrence(string, search);
console.log(result);