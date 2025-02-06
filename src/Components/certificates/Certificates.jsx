import React, { useState, useEffect } from 'react';
import route from './../../assets/route.jpg';
import route2 from './../../assets/react.jpg';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificates.css';

const Certificates = () => {
  // State for each modal
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out' });
  }, []);

  return (
    <>
      <section className="contact section">
        <h2 className="section__title" data-aos="fade-up">
          My <span>Certificates</span>
        </h2>

        <div className="certificates__container container">
          <img
            src={route}
            alt="Certificate"
            className="certificate__image"
            data-aos="zoom-in"
            onClick={() => setOpenModal1(true)}
          />
          <img
            src={route2}
            alt="Certificate"
            className="certificate__image"
            data-aos="zoom-in"
            onClick={() => setOpenModal2(true)}
          />
        </div>
      </section>

      {/* Modal for the first certificate */}
      <Modal open={openModal1} onClose={() => setOpenModal1(false)} center>
        <div data-aos="fade-up">
          <img src={route} alt="Certificate" className="modal__image" />
          <h2 data-aos="fade-down">Front-End Diploma at Route Academy</h2>
        </div>
      </Modal>

      {/* Modal for the second certificate */}
      <Modal open={openModal2} onClose={() => setOpenModal2(false)} center>
        <div data-aos="fade-up">
          <img src={route2} alt="Certificate" className="modal__image" />
          <h2 data-aos="fade-down">React.JS Diploma at Route Academy</h2>
        </div>
      </Modal>
    </>
  );
};

export default Certificates;
