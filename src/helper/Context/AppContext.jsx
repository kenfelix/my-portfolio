import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [active, setActive] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppContext.Provider value={{ 
      active, setActive, prevScrollPos, setPrevScrollPos, visible, setVisible, isOpen, setIsOpen
     }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export {AppContextProvider, useAppContext}
