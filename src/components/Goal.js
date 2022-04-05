import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Goal = () => {
  const { goal } = useContext(AppContext);
  return (
    <div className='goal-wrapper'>
      <span className='goal-title'>${goal} still needed for this project</span>
    </div>
  );
};

export default Goal;
