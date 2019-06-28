let x,y,z;
x=10;
y = '10';
z=30;
console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

var newX = x++;

console.log(`x is ${x} newX is ${newX}`)

console.log('The comparison of x==y is:', (x==y))

let timeInMs = Date.now();

console.log(`how many years since epoch ${timeInMs/(365*24*60*60*60)}`)
