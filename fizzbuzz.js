/**
 * FizzBuzz Implementation
 * Prints numbers from 1 to 100, but:
 * - For multiples of 3, print "Fizz"
 * - For multiples of 5, print "Buzz"
 * - For multiples of both 3 and 5, print "FizzBuzz"
 */

function fizzBuzz(max = 100) {
  for (let i = 1; i <= max; i++) {
    let output = '';
    
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    
    console.log(output || i);
  }
}

// Execute FizzBuzz
console.log('Running FizzBuzz from 1 to 15:\n');
fizzBuzz(15);
