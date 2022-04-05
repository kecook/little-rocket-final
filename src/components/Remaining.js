import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/Remaining.css';

const RemainingBudget = () => {
  const { donations, goal } = useContext(AppContext);

  const totalDonations = donations.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);

  const progressBarCal = (totalDonations / goal) * 100;
  console.log(progressBarCal);

  // const alertType = totalDonations === goal ? "alert-danger" : "alert-success";
  return (
    <div className=''>
      <div className='remaining-wrapper'>
        <span className='remaining-title'>
          $ {goal - totalDonations} still needed for this project
        </span>
      </div>
      <div className='progressBar'>
        <span>{progressBarCal}% </span>
      </div>
    </div>
  );
};

export default RemainingBudget;
