
function add(a, b, c) {
    console.log(arguments);
    const arg = [...arguments]
    arg.push(60)
    console.log(arg);
    return a + b + c;
}
const result = add(10, 20, 30, 40, 50)
console.log(result);