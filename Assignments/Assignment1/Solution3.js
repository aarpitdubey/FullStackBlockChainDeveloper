// 3. Write a program to find the factorial of a number.
// Steps: 
// 1.  create a function named it as factorial and pass an argument fact
// 2. factorial of 0 or 1 is always 1
// 3. in return we call the same function many times
let factorial = (fact) => {
    return (fact == 0 || fact == 1) ? 1 : fact * factorial(fact - 1);
}

console.log(factorial(5));