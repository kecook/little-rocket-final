import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SingleDonation = (props) => {
  return (
    <li>
      <div>
        <span>£{props.amount}</span>
      </div>
    </li>
  );
};

export default SingleDonation;
