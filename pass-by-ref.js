// primitive types pass by value
let num1 = 10;
let num2 = 20;

function numbers(a, b) {
    a = 20;
    const result = a + b;
    return result;
}
// console.log(num1);
const number = numbers(num1, num2)
// console.log(number); 

// object and array pass by referance

let student1 = {name: "jalil", partner: "borsha"}
let student12= {name: "raj", partner: "anika"}

function makeMovie(couple1,couple2){
    couple1.name ="ononto";
    couple2.partner ="mim";
}
console.log(student1, student12);
makeMovie(student1,student12)
console.log(student1, student12);