import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context";

const stylesInput = {
  width: '100%',
  padding: '15px 22px',
  margin: '10px 5px',
  boxSizing: 'border-box', 
  backgroundColor: 'white',
  color: 'black',
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
  color: 'white',
  textShadow: '#fcfcfc',
  fontSize: '5rem',
}

const stylesLabel = {
  color: 'white',
  textShadow: '#fcfcfc',
  fontSize: '2rem',
}

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      '/api/acts',
      {
        act: {
          title: inputs.title,
          content: inputs.content,
          status: inputs.status
        }
      }
    )
      .then(resp => {
        setRedirect(true);
        setNotification(notification => {
          return {
            ...notification,
            status: "success",
            message: "New Act added succesfully"
          };
      });
    })
      .catch(err => {
        console.log(err);
        setNotification(notification => {
          return {
            ...notification,
            status: "danger",
            message: "An error occured"
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
      }; 
    });
  }

  if (redirect) {
    return <Redirect to="/acts" />;
  }

  return (
    <div style={stylesPage} className="act">
      <div className="container">
  <header>
    <h1 style={h1}>New Act</h1>
  </header>
  <div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label style={stylesLabel}>Title</label>
        <input style = {stylesInput} className="form-control" name="title" required="required" onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label style={stylesLabel}>Content</label>
        <textarea style = {stylesInput} className="form-control" name="content" onChange={handleInputChange}></textarea>
      </div>

      <div className="form-group">
        <label style={stylesLabel}>Status</label>
        <select className="form-control" name="status" required="required" onChange={handleInputChange}>
          <option value="PENDING">pending</option>
          <option value="ACCOMPLISHED">accomplished</option>
        </select>
      </div>

      <div className="form-group">
       <button style={stylesButton} type="submit">Submit</button> 
      </div>
    </form>
  </div>
</div>
</div>);
}

export default New;