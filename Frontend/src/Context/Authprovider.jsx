import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

export const Authcontex = createContext();

export const Authprovider = ({ children }) => {
  console.log('Children in Authprovider:', children); // Debug log

  const initialuserState = Cookies.get('jwt') || localStorage.getItem('messenger');
  const [authuser, setAuthUser] = useState(
    initialuserState ? JSON.parse(initialuserState) : undefined
  );

  return (
    <Authcontex.Provider value={[authuser, setAuthUser]}>
      {children}
    </Authcontex.Provider>
  );
};

export const useAuth = () => useContext(Authcontex);
