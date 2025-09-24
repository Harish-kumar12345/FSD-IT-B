const number = [1,2,3,4,5,6,7,8,6,9];

const filternum = number.filter((num) => (num % 2 != 0));

console.log(filternum);

const mul = filternum.map((num) => (num *5));
console.log(mul)

