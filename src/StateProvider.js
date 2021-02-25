import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();//first he create the context

// Wrap our app and provide the Data layer
//then he provide the provider  of the component then he manipulate the value
export const StateProvider = ({ reducer, initialState, children }) => (
    
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
