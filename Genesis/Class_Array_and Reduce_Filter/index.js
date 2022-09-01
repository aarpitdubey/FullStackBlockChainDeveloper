// let nums = [7, 5, 6];
// console.log(nums[0]); // print oth element
// console.log(nums[1]); // print 1st element
// console.log(nums[2]); // print 2nd element
// console.log(nums[3]); // print undefined 
// console.log(nums); // [7, 5, 6] print entire array

// let values = [5, "Arpit", {comp:'aarpitdubey.com'}, 
//                     function() { console.log("hi"); }];

// console.log(values);

// let run = values[3];
// run();

// console.log(values[3]())

// ****** Stack Implementation *******

// let values = [9, 5, 6, 3, 4, 7];

// console.log(values) // print whole array [9, 5, 3, 4, 7]

// console.log(values.push(100)); // push element "100" & print length of array i.e., 6

// console.log(values.push(10)); // push elemnet "10" & print length of array i.e., 7

// console.log(values.pop(10)); // pop out "10" and return the element "10".

// console.log(values) // print all the elements of the array [9, 5, 3, 4, 7, 100]

// console.log(values.shift()); // remove first element from array

// console.log(values); // all element

// console.log(values.unshift(1000)); // place the value "1000" at the first position of array

// console.log(values); // all element

// let nums = [];

// nums[0] = 9;
// nums[10] = 4;

// for(let i in nums)
// console.log(nums[i]);

// for(let num of nums)
// console.log(num);

// delete values[0]; // Not recommended to delete element because it waste memory
// console.log(values);


// values.splice(1, 2, 10);

// console.log(values);

// values.forEach((num)=> console.log(num)) // forEach belongs to stream API and looks like lambda function


// values.filter(function(num) {
//     return num%2===0;
// })
// .forEach((num)=> console.log(num))

// let values = [8, 6, 3, 4, 2]
// let result = values.filter( num => num%2===0 )
//     .map( num => num*2 )
//     .reduce((sum, num) => sum + num, 1);

// console.log(values);
// console.log(result);


// ******* Array Structuring ********

// let a = 9;
// let b = 6;
// let c = 5;
// let values = [a, b, c]; // Array Structuring
// console.log(values)

// ****** Array Destructuring ******
// let values=[9, 5, 3, 4, 7]
// let [a, b, c, ...d] = values; // for a=9, b=5, c=3 and d = [4, 7] ...d create d as an array // Array Destructuring

// console.log(a, b, c);
// console.log(d);


let string1 = "Aman Hitanshu Ninad Sanjeevan Hyder Navin"

let [x, y, ...z] = string1.split(' ');

console.log(x, y, z);
