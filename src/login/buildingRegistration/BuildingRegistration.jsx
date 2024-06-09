import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function BuildingRegistration() {
  const nav = useNavigate();

  const [formValues, setFormValues] = useState({

    city: "",
    street: "",
    houseNumber: "",
    buildingPassword: ""
  })
  const [formErrors, setFormErrors] = useState({});



  const handelChange = (e) => {
    setFormErrors({})
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    Object.keys(formValues).forEach((key) => {

      if (formValues[key].length === 0) {
        errors[key] = "שדה חובה";

      }
      else if (key == "buildingPassword" && formValues[key].length < 4) {
        errors[key] = " סיסמא קצרה מידי";
      }
      setFormErrors(errors);
    });

    if (Object.keys(errors).length > 0) { console.log(errors); return; }

    else sendFormValues();


  }

  const sendFormValues = async () => {
    console.log(formValues);

    try {
      const response = await axios.post('http://localhost:3535/homePortal/registration/BuildingRegistration',
        { ...formValues }
      )
      console.log(response);
      
      if (response.status == 201) nav('/');


    }
    catch (err) {
      console.log(err);
      if (err.response.status == 409) setFormErrors({ ...formErrors, ['badRequest']: " הבניין כבר רשום במערכת" })
      else if (err.code && err.code === "ERR_NETWORK") setFormErrors({ IncorrectDetails: "בדוק חיבור רשת" })
      else { setFormErrors({ ...formErrors, ['badRequest']: "הזנת נתונים שגויים" }) }
    }

  }


  return (




    <body class="bg-gray-100 min-h-screen flex items-center justify-center ">

      <div class="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto mx-[max(20vw,12px)]">
        <h2 class="text-2xl font-semibold mb-4">טופס צירוף בניין לפורטל הבית </h2>

        <form onSubmit={handleSubmit} class="w-full max-w-lg">

          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-state">
                עיר
              </label>

              <div class="relative">
                <input class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
                  type='text'
                  id="grid-state"
                  name='city'
                  onChange={handelChange}>
                  {/* {
                                          cities && cities.map((city) => <option>{city}</option>)
                                      } */}

                </input>
                <p>{formErrors.city}</p>
                {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                  </div> */}
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-city">
                רחוב
              </label>

              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                id="grid-city"
                type="text"
                name='street'
                onChange={handelChange} />
              <p>{formErrors.street}</p>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="houseNumber">
                מספר
              </label>

              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="houseNumber"
                type="text"
                name='houseNumber'
                onChange={handelChange} />
              <p>{formErrors.houseNumber}</p>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="houseNumber">
                כניסה
              </label>

              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="entrance"
                type="text"
                name='entrance'
                onChange={handelChange} />

            </div>

          </div>
          <br></br>
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-password">
              בחר סיסמת בניין              </label>
            <p>{formErrors.buildingPassword}</p>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="grid-buildingPassword"
              type="text"
              name='buildingPassword'
              onChange={handelChange} />
          </div>
          <p>{formErrors.badRequest}</p>
          <button type='submit' class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            שלח
          </button>
        </form>
      </div>
    </body>)

}
