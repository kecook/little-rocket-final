import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import '../style/AddSingleDonation.css';

const AddSingleDonation = () => {
  const { dispatch } = useContext(AppContext);

  const [amount, setAmount] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const donation = {
      id: uuidv4(),
      amount: parseInt(amount),
    };

    dispatch({
      type: 'ADD_DONATION',
      payload: donation,
    });
  };
  return (
    <div className='section-wrapper'>
      <div className='input-and-button'>
        <div className='form-wrapper'>
          <form onSubmit={onSubmit}>
            <label htmlFor='amount'></label>
            <input
              required='required'
              type='number'
              min='1'
              className='input-field'
              id='amount'
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />

            <button type='submit' className='give-now-btn'>
              Give Now
            </button>
          </form>
        </div>
      </div>

      <div>
        <p className='why-give'>Why give ${amount}?</p>
      </div>
    </div>
  );
};

export default AddSingleDonation;
