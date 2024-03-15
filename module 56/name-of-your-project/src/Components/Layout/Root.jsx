import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="header">
      <Header></Header>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
