const fizzBuzz = require(('./fizzbuzz'))
test ('',()=>{
    expect (fizzbuzz(15)).toBe('FizzBuzz');
})
test ('',()=>{
    expect (fizzBuzz(9)).toBe('Fizz');
})
test ('',()=>{
    expect (fizzBuzz(20)).toBe('Buzz');
})
