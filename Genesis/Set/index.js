// // *****  SET *****
// // 1. Unique
// // 2. Fast

// // let values = [7, 8];
// // (OR)
// // let values = new Array();

// let set = new Set();
// let array =new Array();

// set.add(10)
// set.add('Arpit')
// set.add(12.6)
// set.add(10)
// set.add('arpit')

// for(let i=1; i<=20; i++) {

//     let num = Math.ceil(Math.random()*100);
//     array.push(num);
//     set.add(num);
// }

// set.delete(12.6)

// console.log(set);
// console.log(array);
// console.log(set.size);

let map = new Map(); // => It create a set of keys and array of values.

map.set('Arpit', 'Full stack Developer')
map.set('Navin', 'JS');
map.set('Hyer', 'Java')
map.set('sanjeevan', 'Blockchain');
map.set('Arpit', 'Edge Computing')

// map.forEach((v, k) => console.log(k, v));

// let values = [3, 4, 5, 6, 8]
// values.forEach((v, i, values) => console.log(i, v));

// console.log(map);
// console.log(map.keys());
// console.log(map.values());