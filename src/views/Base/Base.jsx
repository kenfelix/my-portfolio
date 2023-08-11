import { Outlet } from 'react-router-dom';
import { Header as Appheader, Footer as AppFooter } from '@components'
import { AppContextProvider } from '@helper'

const Base = () => {
    return (
      <AppContextProvider>
        <Appheader />
        <Outlet />
        <AppFooter />
      </AppContextProvider>
    );
};

export default Base;