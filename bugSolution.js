function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 18)); // Output: 6
console.log(gcd(15, 9)); // Output: 3
console.log(gcd(4, 10)); // Output: 2
console.log(gcd(12, 18)); // Output: 6
console.log(gcd(Number.MAX_SAFE_INTEGER, 100)); //Output: 100