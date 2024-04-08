import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function UserRegistration() {


    useEffect(() => {
        fetchCities();
    }, [])
    const fetchCities = async () => {

        let result = await axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba')
        console.log(result.data.result.records);
        result = result.data.result.records.map((record) => Object.values(record)[2]);
        console.log(result);
        setCities(result);
    }
    const [cities, setCities] = useState()

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        password: "",
        city: "",
        street: "",
        buildingPassword:""
    })
    const [formErrors, setFormErrors] = useState({

    });

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
            else if(key=="password" && formValues[key].length<4){
                errors[key] = " סיסמא קצרה מידי";
            }
             setFormErrors(errors);
        });

       if (Object.keys(formValues).length>0) return;

       sendFormValues();


    }

    const sendFormValues = ()=>{
const response = axios.get()

    }


    return (




        <body class="bg-gray-100 min-h-screen flex items-center justify-center ">

            <div class="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto mx-[max(20vw,12px)]">
                <h2 class="text-2xl font-semibold mb-4">טופס הצטרפות לבניין קיים</h2>

                <form onSubmit={handleSubmit} class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-first-name">
                                שם פרטי
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                name='firstName'
                                onChange={handelChange} />
                                <p>{formErrors.firstName}</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-last-name">
                                שם משפחה
                            </label>

                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                name='lastName'
                                onChange={handelChange} />
                            <p>{formErrors.lastName}</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-password">
                                סיסמא
                            </label>
                            <p>{formErrors.password}</p>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="password"
                                placeholder="*****"
                                name='password'
                                onChange={handelChange} />
                            <p class="text-gray-600 text-xs italic">בחר סיסמא עם 4 תווים לפחות</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-state">
                                עיר
                            </label>

                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                    name='city'
                                    onChange={handelChange}>{
                                        cities && cities.map((city) => <option>{city}</option>)
                                    }

                                </select>
                                <p>{formErrors.city}</p>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-city">
                                רחוב
                            </label>

                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city"
                                type="text"
                                name='street'
                                onChange={handelChange} />
                            <p>{formErrors.street}</p>
                        </div>

                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="grid-city">
                               סיסמת בניין
                            </label>

                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city"
                                type="text"
                                name='buildingPassword'
                                onChange={handelChange} />
                            <p>{formErrors.buildingPassword}</p>
                        </div>
                    </div>
                    <button type='submit' class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        שלח
                    </button>
                </form>
            </div>
        </body>)

    {/* <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************"/>
      <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
</div> */}

}
