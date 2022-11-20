// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber('123-466-7890')).toBe(true);
    expect(functions.isPhoneNumber('123-466-789')).toBe(false);
    expect(functions.isPhoneNumber('123-456-fs')).toBe(false);
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
    });
test('isEmail', () => {
    expect(functions.isEmail('dag.com')).toBe(false);
    expect(functions.isEmail('dag@com')).toBe(false);
    expect(functions.isEmail('dag@com.edu')).toBe(true);
    expect(functions.isEmail('4624@ab.bc')).toBe(true);
    });
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('dag')).toBe(false);
    expect(functions.isStrongPassword('dag123')).toBe(true);
    expect(functions.isStrongPassword('dag123456789012345')).toBe(false);
    expect(functions.isStrongPassword('dag123456_')).toBe(true);
    });
test('isDate', () => {
    expect(functions.isDate('11/13/2012')).toBe(true);
    expect(functions.isDate('6/12/15')).toBe(false);
    expect(functions.isDate('12/12/22122')).toBe(false);
    expect(functions.isDate('1/1/2013')).toBe(true);
    });
test('isHexColor', () => {
    expect(functions.isHexColor('#132')).toBe(true);
    expect(functions.isHexColor('#127476')).toBe(true);
    expect(functions.isHexColor('#1234567')).toBe(false);
    expect(functions.isHexColor('12563')).toBe(false);
    });