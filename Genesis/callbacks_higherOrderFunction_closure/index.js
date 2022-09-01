 console.log("Welcome");

//  setTimeout(function print() 
//  {
//     console.log("Get lost");
//  }, 2000);

function add(a, b, handle) {
    let result = a + b;
    handle(result);
}


function print(result) {
    console.log(result);
}
//  function x() {
//     function y()
//     {
//         console.log("In y");
//     }

//     console.log("in x");
//     y();
//  }

//  x();


add(4, 5, print)