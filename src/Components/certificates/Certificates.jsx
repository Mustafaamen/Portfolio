import React, { useState, useEffect } from 'react';
import route from './../../assets/route.jpg';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificates.css';

const Certificates = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out' });
  }, []);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

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
            onClick={openModal}
          />
        </div>
      </section>

      <Modal open={open} onClose={closeModal} center>
        <div data-aos="fade-up">
          <img src={route} alt="Certificate" className="modal__image" />
          <h2 data-aos="fade-down">I have completed a Front-End Diploma at Root Academy</h2>
        </div>
      </Modal>
    </>
  );
};

export default Certificates;
