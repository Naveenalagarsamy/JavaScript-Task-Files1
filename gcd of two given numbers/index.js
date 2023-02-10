function gcd(x, y) {
    if (y === 0) return x;
    /* else */ return gcd(y, x % y);
}

console.log(gcd(27, 12)); // 3
console.log(gcd(12, 27)); // 3