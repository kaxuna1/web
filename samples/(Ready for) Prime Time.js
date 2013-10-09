/*
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.

For example:
*/
function prime(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
alert(prime(11));