// we need to track baskets

import React , { Children, createContext , useContext , useReducer }
 from 'react';

export const StateContext = createContext();

//Build a provider

export const StateProvider =({ reducer , initialState , childern }) =>(

     <StateContext.Provider value = { useReducer ( reducer ,
        initialState)}>
        {Children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);


