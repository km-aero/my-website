import { Navbar } from '@/components';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};
