// Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).
let factorial = (num) => {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

let prime = (min, max) => {
    for (let i = min; i <= max; i++) {
        let isPrime = 0;

        for(let j = 2; j < i; j++) { 

            if(i % j == 0) {
                isPrime = 1;
                break;
            }
        }

        if(i>1 && isPrime == 0) {
            // let res = factorial(i);
            console.log(`Factorial of the number ${i} is : ${factorial(i)}`); 
        }
        
    }
}
prime(1, 100);














