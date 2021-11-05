import React, { useState } from 'react';

import './Form.css';

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [birthDate, setBirthDate] = useState();
  const getName = (event) => {
    setName(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };
  const getBirthDate = (event) => {
    setBirthDate(event.target.value);
  };
  return (
    <div className='main_form_div'>
      <form>
        <input type='text' placeholder='Name' onChange={getName} />
        <input type='email' placeholder='Email' onChange={getEmail} />
        <input
          type='text'
          placeholder='MobileNumber'
          onChange={getMobileNumber}
        />
        <input
          dtae='date'
          placeholder='date of birth'
          onChange={getBirthDate}
        />
        <input
          type='submit'
          placeholder='Submit'
          onClick={() => {
            if(name&&email&&mobileNumber&&birthDate){
							alert("You submitted data")
						}
          }}
        />
      </form>
    </div>
  );
};

export default Form;
