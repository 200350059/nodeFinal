import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context";

function Login() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post('/api/authenticate', {
      email: inputs.email,
      password: inputs.password
    })
      .then((result) => {
        setNotification(notification => {
            return {
              ...notification,
              status: "success",
              message: "You have succesfully logged in"
            };
        });
        setInputs({}); 
        sessionStorage.setItem('token', result.data.token);
        setRedirect(true);
      })
      .catch(err => {
        setNotification(notification => {
          return {
            ...notification,
            status: "danger",
            message: "There was an error"
          };
      });
      });
  }

  function handleInputChange(event) {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;

    setInputs(inputs => {
      // Below is a shallow merge. It takes the original inputs value and merges in the new object key and value using the spread operator
      return {
        ...inputs, [name]: value
      }
    });
  }

  if (redirect) {
    return <Redirect to="/acts" />;
  }

  return (
    <div className="container">
      <header>
        <h1>Login</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="email" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input className="form-control" name="password" type="password" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;