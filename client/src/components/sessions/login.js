import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context";

const stylesInput = {
    width: '80%',
    padding: '15px 22px',
    margin: '10px 5px',
    boxSizing: 'border-box', 
    backgroundColor: 'Khaki',
    color: 'Maroon',
    fontSize: '20px', 
}

const stylesButton = {
  backgroundColor: 'purple',
    border: 'none',
    color: 'white',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '20px',
    margin: '4px 4px',
    cursor: 'pointer',
    boxShadow: '0 9px 17px 0 rgba(0, 0, 0, 0.3), 0 7px 21px 0 rgba(0, 0, 0, 0.20)',
    padding: '12px 30px',
};

const stylesPage =  {
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const h1 = {
  color: 'White',
  textShadow: '#fcfcfc',
  fontSize: '5rem',
}
const stylesLabel = {
  color: 'White',
  textShadow: '#fcfcfc',
  fontSize: '2rem',
}

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
      return {
        ...inputs, [name]: value
      }
    });
  }

  if (redirect) {
    return <Redirect to="/acts" />;
  }

  return (
    <div style={stylesPage} className="sessions">
      <div className="container">
        <header>
          <h1 style={h1}>Login</h1>
        </header>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style= {stylesLabel}>Email</label>
              <input style = {stylesInput} className="form-control" name="email" required="required" onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <label style= {stylesLabel}>Password</label>
              <input style = {stylesInput} className="form-control" name="password" type="password" required="required" onChange={handleInputChange} />
            </div>

            <div className="form-group">
              <button style={stylesButton} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;