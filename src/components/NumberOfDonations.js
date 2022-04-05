import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/NumberOfDonations.css';

const NumberOfDonations = () => {
  const { donations } = useContext(AppContext);

  // const totalDonations = donations.reduce((total, item) => {
  //   return (total += item.amount);

  // }, 0);
  const totalDonations = donations.length;
  return (
    <div className='days-donors-wrap'>
      <div className='wrapper-days-left'>
        <p>
          <span className='orange-words'>Only 3 days left</span> to fund this
          project.
        </p>
      </div>
      <div className='wrapper-join'>
        <p>
          Join the <span className='numDonations'>{totalDonations}</span> other
          donors who have already supported this project. Every dollar helps.
        </p>
      </div>
    </div>
  );
};

export default NumberOfDonations;
