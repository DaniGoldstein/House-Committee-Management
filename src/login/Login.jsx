import React from 'react';
import { useState } from 'react';
import style from './style.module.css';

export default function Login() {

  const sendValue = {
    userName: "",
    password: "",
  }
  const [formValues, setFormValues] = useState(sendValue);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]:  value });
   
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  }

  const validate = (value) => {
const errors={};
if(!value.username){
  errors.userName="דרוש שם משתמש"
}
if(!value.password){
  errors.password=" דרושה סיסמא "
}
return errors
  }

  return (

    <div className={style.loginContainer}>
      <div className={style.loginForm}>
        <h2>כניסה לחשבונך</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">שם משתמש:</label>
          <p > {formErrors.userName }</p>
          <input type="text" id="username" name="username"
            //  value={formValues.userName} 
            onChange={handleChange}
          />

          <label htmlFor="password">סיסמא:</label>
          <p> {formErrors.password }</p>
          <input type="password" id="password" name="password"  />

          <button type="submit">כניסה</button>
        </form>
      </div>
    </div>

  )
}
