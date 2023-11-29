import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Created by Gustavo Nepomuceno

function PageLayout() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default PageLayout;
