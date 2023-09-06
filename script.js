// create a variable to accept birth year and current year input
let a = parseInt (prompt("Insert current year"))
let b = parseInt (prompt("Insert birth year"))
//create a substraction function
function substraction() {
    // the substraction function will return the substraction for input a and b
    return  a - b;
}
// invoke substraction function to run calculator
console.log(substraction())