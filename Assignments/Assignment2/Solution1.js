// Q1. Write a Javascript function to check whether a triangle is equilateral, 
// isosceles or scalene

// Steps
// 1. create a function checkTriangle() which take three sides: side1, side2, and side3.
// 2. logic
// Equilateral Triangle : All the sides are equal side1 == side2 == side3 (or) side1 === side2 && side2 === side3
// Isosceles Triangle : Two sides are equal, side1 == side2 != side3 (or) side2 == side3 != side1 (or) side3 == side1 != side2 (or)
//  side1 === side2 || side2 === side3 || side3 === side1
// Scalene Triangle : No side equal to each other. side1 != side2 != side3
// 3. return string value accordingly

let checkTriangle = (side1, side2, side3) => {

    // check for equilateral triangle
    if (side1 === side2 && side2 === side3) {
        return "Equilateral Triangle";
    }

    // check for Isosceles triangle
    else if (side1 === side2 || side2 === side3 || side3 === side1) {
        return "Isosceles Triangle";
    }
    
    // check for Scalene Triangle
    else {
        return "Scalene Triangle";
    }
}

console.log(checkTriangle(16, 16, 16));
console.log(checkTriangle(16, 33, 16));
console.log(checkTriangle(16, 6, 1));
