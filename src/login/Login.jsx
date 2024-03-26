import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import style from './style.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';



export default function Login() {

  const navigate = useNavigate();

  useEffect(() => {

  }, [])
  const sendValue = {
    userName: "",
    password: "",
  }
  const [formValues, setFormValues] = useState(sendValue);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormErrors({})
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });


  }
  const handleSubmit = (e) => {

    e.preventDefault();

    setFormErrors(validate(formValues));




  }

  const validate = (value) => {
    const errors = {};

    if (value.userName.length > 0 && value.password.length >= 4) {
      send();
    }
    else {
      if (value.userName == 0) {
        errors.userName = "דרוש שם משתמש"
      }
      if (value.password.length == 0) {
        errors.password = " דרושה סיסמא "
      }
      else if (value.password.length < 4) {
        errors.password = "סיסמא קצרה מידי"
      }
    }

    return errors
  }

  const send = async () => {
    console.log(formValues);

    try {

      let response = await axios.post('http://localhost:3535/login', {}, {
        headers: {
          username: formValues.userName,
          password: formValues.password
        }
      })
      const token = 'Bearer ' + response.data['accessToken'];
      console.log(token);
      if (token) {
        Cookies.set('Token', token);
        navigate("/homePortal");
      }

    }
    catch (err) {
      console.log("IncorrectDetails"); setFormErrors({ IncorrectDetails: "אחד הפרטים שגויים" })
      console.log(err);

    }
  }

  return (

    <div className={style.loginContainer}>
      <div className={style.loginForm}>
        <h2>כניסה לחשבונך</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">שם משתמש:</label>
          <p > {formErrors.userName}</p>
          <input type="text" id="userName" name="userName"
            //  value={formValues.userName} 
            onChange={handleChange}
          />

          <label htmlFor="password">סיסמא:</label>
          <p> {formErrors.password}</p>
          <input type="password" id="password" name="password"
            onChange={handleChange} />
          <p style={{margin:"auto",
                     color:"red"}}>
          {formErrors.IncorrectDetails}</p>
          <button type="submit">כניסה</button>

        </form>
      </div>
    </div>

  )
}
