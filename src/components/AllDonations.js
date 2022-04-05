import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SingleDonation from '../components/SingleDonation';

const AllDonations = () => {
  const { donations } = useContext(AppContext);

  return (
    <ul className=''>
      {donations.map((donation) => (
        <SingleDonation id={donation.id} amount={donation.amount} />
      ))}
    </ul>
  );
};

export default AllDonations;
