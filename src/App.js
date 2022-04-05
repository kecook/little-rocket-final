import React from 'react';

import { AppProvider } from './context/AppContext';
import AddSingleDonation from './components/AddSingleDonation';
import RemainingBudget from './components/Remaining';
import NumberOfDonations from './components/NumberOfDonations';
import FakeButtons from './components/FakeButtons';
import './style/App.css';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h2 className=''>Little Rocket Developer Challenge</h2>
        <p className=''>Created by Kate Cook </p>
        <p> kecook@gmail.com</p>

        <div className='info-wrapper'>
          <div className=''>
            <RemainingBudget />
          </div>
          <div className='main-section'>
            <div></div>

            <div className=''>
              <NumberOfDonations />
            </div>

            <div className=''>
              <AddSingleDonation />
            </div>
          </div>

          <div className='fake-buttons'>
            <FakeButtons />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
