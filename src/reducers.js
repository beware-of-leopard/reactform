import { computeZip } from './utils';

export const formInitialState = {
    firstName: {
      value: '',
      valid: true,
      errorMessage: 'First name is required',
      touched: false
    },
    lastName: {
      value: '',
      valid: true,
      errorMessage: 'Last name is required',
      touched: false
    },
    email: {
      value: '',
      valid: true,
      errorMessage: 'Properly formatted email is required',
      touched: false
    },
    city: {
      value: '',
      valid: true,
      errorMessage: 'City is required',
      touched: false
    },
    zip: {
      value: '',
      valid: true,
      errorMessage: '',
      touched: false
    }
  }

  export const reducer = (state, action) => {
    const { type, value } = action
    switch(type) {
      case 'firstName':
        return {...state, firstName: {...state.firstName, value, valid: !!value}}
      case 'firstNameTouched':
        return {...state, firstName: {...state.firstName, touched: true}}
      case 'lastName':
        return {...state, lastName: {...state.lastName, value, valid: !!value}}
      case 'lastNameTouched':
        return {...state, lastName: {...state.lastName, touched: true}}
      case 'email':
        const emailIsValid = !!value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        return {...state, email: {...state.email, value, valid: emailIsValid}}
      case 'emailTouched':
        return {...state, email: {...state.email, touched: true}}
      case 'zip':
        const zip = computeZip(value);
        return {...state, zip: {...state.zip, ...zip}}
      case 'zipTouched':
        return {...state, zip: {...state.zip, touched: true}}
      case 'city':
        return {...state, city: {...state.city, value, valid: !!value}}
      case 'cityTouched':
        return {...state, city: {...state.city, touched: true}}
      default:
        return state;
    }
  }