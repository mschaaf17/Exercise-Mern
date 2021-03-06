import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css'

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const location = useLocation()

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      console.log("Testing")
      //location.pathname = "/workout"
      window.location.href = "/workout"
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
    <div className="entry-container">
    <div className="entry-form">
      

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="inputs">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="email@emailaddress.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">Email address or password is incorrect. Please try again.</p>
          </div>
        ) : null}
        <div className="submit-btn inputs">
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to="/signup">New user? Signup here</Link>
    </div>
    </div>
  </>
  );
}

export default Login;
