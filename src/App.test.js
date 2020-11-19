import { computeZip } from './utils';
import { isFormValid,isFormFullyFilled } from './selectors';

// would normally break these out into different files for utils, selectors, etc
it('computeZip returns invalid', () => {
  const notEnoughDigits = '1234';
  const tooManyDigits = '123456';
  const shouldOnlyAllowNumbers = '123ab';
  const shouldOnlyAllowSeattleZip = '12345';

  expect(computeZip(notEnoughDigits)).toEqual({"errorMessage": "Zip code can only be numeric and 5 digits", "valid": false, "value": "1234"});
  expect(computeZip(tooManyDigits)).toEqual({"errorMessage": "Zip code can only be numeric and 5 digits", "valid": false, "value": "123456"});
  expect(computeZip(shouldOnlyAllowNumbers)).toEqual({"errorMessage": "Zip code can only be numeric and 5 digits", "valid": false, "value": "123ab"});
  expect(computeZip(shouldOnlyAllowSeattleZip)).toEqual({"errorMessage": "Address is not correct", "valid": false, "value": "12345"});
});

it('computeZip returns valid', () => {
  const seattleZip = '98107';
  expect(computeZip(seattleZip)).toEqual({"errorMessage": "", "valid": true, "value": "98107"});
});

it('isFormValid returns false', () => {
  const invalidState = {
    firstName: { valid: true },
    lastName: { valid: false },
    email: { valid: true },
    zip: { valid: true },
    city: { valid: true }
  }
  expect(isFormValid(invalidState)).toEqual(false);
})

it('isFormValid returns true', () => {
  const validState = {
    firstName: { valid: true },
    lastName: { valid: true },
    email: { valid: true },
    zip: { valid: true },
    city: { valid: true }
  }
  expect(isFormValid(validState)).toEqual(true);
})

it('isFormFullyFilled returns false', () => {
  const invalidState = {
    firstName: { value: '' },
    lastName: { value: 'abc' },
    email: { value: 'abc' },
    zip: { value: 'abc' },
    city: { value: 'abc' }
  }
  expect(isFormFullyFilled(invalidState)).toEqual(false);
})

it('isFormFullyFilled returns true', () => {
  const validState = {
    firstName: { value: 'abc' },
    lastName: { value: 'abc' },
    email: { value: 'abc' },
    zip: { value: 'abc' },
    city: { value: 'abc' }
  }
  expect(isFormFullyFilled(validState)).toEqual(true);
})