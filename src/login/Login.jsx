import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate ,Link } from "react-router-dom"
import style from './style.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import UserRegistration from './userRegistration/UserRegistration';



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
      

      <div
        class="container max-w-md mx-auto  xl:max-w-1xl h-4/6 flex bg-white rounded-lg shadow overflow-hidden opacity-95"
      >
        {/* <div class="relative hidden xl:block xl:w-1/2 h-full">
   
  </div> */}
        <div class="w-full  p-8">
          <form onSubmit={handleSubmit}>
            <h1 class=" text-2xl font-semibold">כניסה לחשבונך</h1>
            <br/>
            <div>
              <span class="text-gray-600 text-base">
                רוצה להצטרף לבניין קיים ?       </span>
              <span class="text-gray-700 text-sm font-semibold">
               <Link to={'/homePortal/signUp'}> הצטרף </Link> 
              </span>
            </div>
            <div>
              <span class="text-gray-600 text-base">
                רוצה לרשום את הבניין שלך לפורטל הבית?       </span>
              <span class="text-gray-700 text-sm font-semibold">
                להרשמה
              </span>
            </div>
            <div class="mb-4 mt-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                שם משתמש
              </label>
              <p > {formErrors.userName}</p>
              <input
                class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                type="text" id="userName" name="userName"
                onChange={handleChange}

              />
            </div>
            <div class="mb-6 mt-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                סיסמא
              </label>
              <p> {formErrors.password}</p>
              <input
                class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <a
                class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                href="#"
              >
                שכחת סיסמא?
              </a>
              <p>{formErrors.IncorrectDetails}</p>
            </div>
            <div class="flex w-full mt-8">
              <button
                class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="submit">

                כניסה
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>

  )
}



