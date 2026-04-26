const validateColor = require('../js/validators.js');

test('Unit Test: validateColor should return false for empty strings', () =>
    {
        expect(validateColor("")).toBe(false);    //We expect a blank string to fail
        expect(validateColor("Red")).toBe(true);    //We expect a real color to pass
    });
