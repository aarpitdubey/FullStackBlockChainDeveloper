// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000.

let sum_of_multiples = (num) => {
    let sum = 0;

    for (let i=0; i<=num; i++) {

        if(i % 3 === 0 || i % 5 === 0) 
            sum += i;

    }

    return sum;
}

console.log(`The sum of the multiples of 3 and 5 under 1000 is ${sum_of_multiples(1000)}`)
console.log(`The sum of the multiples of 3 and 5 under 10 is ${sum_of_multiples(10)}`)
console.log(`The sum of the multiples of 3 and 5 under 5 is ${sum_of_multiples(5)}`)
console.log(`The sum of the multiples of 3 and 5 under 6 is ${sum_of_multiples(6)}`)



