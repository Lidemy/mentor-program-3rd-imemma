function stars(n) {
  const result = [];
  if (typeof n !== 'number') return '';
  if (n < 1 || n > 30) return '';
  for (let i = 1; i <= n; i += 1) {
    result.push('*'.repeat(i));
  }
  return result;
}

module.exports = stars;
