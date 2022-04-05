import React from 'react';
import '../style/FakeButton.css';

const FakeButtons = () => {
  return (
    <div className='fake-buttons-wrapper'>
      <div>
        <button className='fake-button'>Save for later</button>
      </div>
      <div>
        <button className='fake-button'>Tell your friends</button>
      </div>
    </div>
  );
};

export default FakeButtons;
