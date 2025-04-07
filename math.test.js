const{add, subtract, multiply, divide} = require('./math');

test ('adds 2 + 3 to equal 5',()=> { expect(add(2,3)).toBe(5);});

test ('subtracts 2-3 to equal 1',()=>{expect(subtract(2,3)).toBe(1);});

test ('multiply 2*3 to equal 6',()=> {expect(multiply(2,3)).toBe(6);});

test ('divides 2/3 to equal 1.5',()=> {expect(divide(2,3)).toBe(1.5);});

