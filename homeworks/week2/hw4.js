function printFactor(n) {
  let a = 1;
  let tempStr = '';
  while (a <= n) {
    if (n % a === 0) {
      tempStr += a.toString();
      tempStr += '\n';
    }
    a += 1;
  }
  return tempStr;
}

console.log(printFactor(10));
console.log(printFactor(100));
