import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  apiData: [],
  user: {}
};

const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
        return {
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light',
        };
        case 'SET_API_DATA':
        return {
            ...state,
            apiData: action.payload,
        };
        case 'SET_USER':
        return {
            ...state,
            user: action.payload,
        };
        default:
        return state;
    }
};

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };