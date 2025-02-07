import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { PuffLoader } from 'react-spinners';
import logo from '../../assets/logo-2.png';
import Thems from '../Thems/Thems';

const LayOut = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <PuffLoader color="#8A2CE2" size={60} />
          <p className="loading-text animated-text">Mustafa Amin</p>
          <div className="posation">
            <img src={logo} className='logo' alt="" />
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <Thems/>
          <div className="posation">
            <img src={logo} className='logo' alt="" />
          </div>
          <div className="content">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default LayOut;
