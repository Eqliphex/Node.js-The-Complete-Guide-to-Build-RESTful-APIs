const lib = require('./../lib');

// Number of tests: equal or greater than number of execution paths.
describe('absolute function:', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1); // res, matcher function
    });

    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1); // res, matcher function
    });

    it('should return zero if input is zero', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0); // res, matcher function
    });
});

describe('greet function:', () => {
   it('should return the greeting message', () => {
       const result = lib.greet('Patrick');
       expect(result).toMatch(/Patrick/);
   })
});


