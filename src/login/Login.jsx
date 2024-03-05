import React from 'react';
import { useState } from 'react';
import style from './style.module.css';
import axios from 'axios';

export default function Login() {

  const sendValue = {
    userName: "",
    password: "",
  }
  const [formValues, setFormValues] = useState(sendValue);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    checkSucceededSubmit();

  }

  const validate = (value) => {
    const errors = {};
    if (!value.username) {
      errors.userName = "דרוש שם משתמש"
    }
    if (!value.password) {
      errors.password = " דרושה סיסמא "
    }
    else if (value.password.length < 4) {
      errors.password = "סיסמא קצרה מידי"
    }
    return errors
  }

  const checkSucceededSubmit = async () => {
    if (!formErrors.password && !formErrors.userName) {
      try{
        console.log("aaaaaa");
      let token =await axios.post('http://localhost:3535/login', {
        headers: {
          username: formValues.userName,
          password: formValues.password
        }
      }).data;
      console.log(token);
    }
  catch(err){
    console.log(err);
  }}
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

          <button type="submit">כניסה</button>
        </form>
      </div>
    </div>

  )
}
