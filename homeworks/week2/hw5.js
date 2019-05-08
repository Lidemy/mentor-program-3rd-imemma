function join(str, concatStr) {
  let tempStr = '';
  for (let i = 0; i <= str.length - 1; i += 1) {
    tempStr += str.charAt(i) + concatStr;
  }
  return tempStr;
}

function repeat(str, times) {
  let tempStr = '';
  for (let i = 1; i <= times; i += 1) {
    tempStr += str;
  }
  return tempStr;
}

console.log(join('abc', '!'));
console.log(repeat('a', 5));
