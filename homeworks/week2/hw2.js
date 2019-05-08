function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

console.log(capitalize('hello'));
console.log(capitalize(',hello'));
console.log(capitalize('Nick'));
console.log(capitalize('nick'));
console.log(capitalize('NiCk'));
