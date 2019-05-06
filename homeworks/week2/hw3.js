function reverse(str) {
  let tempStr = '';
  for (let i = str.length; i >= 0; i -= 1) {
    tempStr += str.charAt(i);
  }
  return tempStr;
}
console.log(reverse('hello'));
console.log(reverse('1abc2'));
console.log(reverse('1,2,3,2,1'));
