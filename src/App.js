import React, { useReducer } from 'react';
import './App.css';
import { isFormValid, isFormFullyFilled } from './selectors';
import { formInitialState, reducer } from './reducers';

function App() {
  const [state, dispatch] = useReducer(reducer, formInitialState);
  
  const handleSubmit = e => {
    // using \n below on a single line as the default alert is not handling multi line string spacing as expected
    alert(`${state.firstName.value} ${state.lastName.value}\n${state.city.value}, ${state.zip.value}\n${state.email.value}`);
  }

  const handleChange = e => {
    const action = {
      type: e.target.name,
      value: e.target.value
    }
    dispatch(action)
  }

  const handleBlur = e => {
    dispatch({type: `${e.target.name}Touched`})
    const action = {
      type: e.target.name,
      value: e.target.value
    }
    dispatch(action)
  }

  return (
    <div className="App">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="firstName">
              First Name
            </label>
          </div>
          <input name="firstName" id="firstName" type="text" value={state.firstName.value} onChange={handleChange} onBlur={handleBlur} />
          <div className="validationMessage">{state.firstName.valid || !state.firstName.touched ? '' : state.firstName.errorMessage}</div>
        </div>
        <div>
          <div>
            <label htmlFor="lastName">
              Last Name
            </label>
          </div>
          <input name="lastName" id="lastName" type="text" value={state.lastName.value} onChange={handleChange} onBlur={handleBlur} />
          <div className="validationMessage">{state.lastName.valid || !state.lastName.touched ? '' : state.lastName.errorMessage}</div>
        </div>
        <div>
          <div>
            <label htmlFor="email">
              Email
            </label>
          </div>
          <input name="email" id="email" type="text" value={state.email.value} onChange={handleChange} onBlur={handleBlur} />
          <div className="validationMessage">{state.email.valid || !state.email.touched ? '' : state.email.errorMessage}</div>
        </div>
        <div>
          <div>
            <label htmlFor="city">
              City
            </label>
          </div>
          <input name="city" id="city" type="text" value={state.city.value} onChange={handleChange} onBlur={handleBlur} />
          <div className="validationMessage">{state.city.valid || !state.city.touched ? '' : state.city.errorMessage}</div>
        </div>
        <div>
          <div>
            <label htmlFor="zip">
              Zip
            </label>
          </div>
          <input name="zip" id="zip" type="text" value={state.zip.value} onChange={handleChange} onBlur={handleBlur} />
          <div className="validationMessage">{state.zip.valid || !state.zip.touched ? '' : state.zip.errorMessage}</div>
        </div>
        <div>
          <input type="submit" value="SIGN UP" disabled={!isFormValid(state) || !isFormFullyFilled(state)} />
        </div>
      </form>
    </div>
  );
}

export default App;
