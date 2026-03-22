const reverseString = require('./reverseString');

describe('Reverse String Tests', () => {
    test('normal word', () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test('senetence', () => {
        expect(reverseString("hello world")).toBe("dlrow olleh");
    });

    test('numbers', () => {
        expect(reverseString("12345")).toBe("54321");
    });

    test('single character', () => {
        expect(reverseString("a")).toBe("a");
    });

    test('special characters', () => {
        expect(reverseString("!@#")).toBe("#@!");
    });
});