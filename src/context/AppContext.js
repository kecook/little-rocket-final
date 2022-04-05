import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DONATION':
      return {
        ...state,
        donations: [...state.donations, action.payload],
      };

    default:
      return state;
  }
};

const initialState = {
  goal: 500,
  donations: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        donations: state.donations,
        goal: state.goal,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
