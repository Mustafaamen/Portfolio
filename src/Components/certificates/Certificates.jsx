import React, { useState } from 'react';
import route from './../../assets/route.jpg';
import { Modal } from 'react-responsive-modal'; // استيراد المودال
import 'react-responsive-modal/styles.css'; // استيراد الأنماط الخاصة بالمودال
import './Certificates.css'; // استيراد الأنماط الخاصة بالصفحة

const Certificates = () => {
  const [open, setOpen] = useState(false); // حالة لفتح المودال

  // دالة لفتح المودال
  const openModal = () => {
    setOpen(true);
  };

  // دالة لإغلاق المودال
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <section className='contact section'>
        <h2 className='section__title'>
          My <span>Certificates</span>
        </h2>

        <div className="certificates__container container">
          <img
            src={route}
            alt="Certificate"
            className="certificate__image"
            onClick={openModal} // عند الضغط على الصورة يتم فتح المودال
          />
        </div>
      </section>

      {/* المودال لعرض الصورة بحجم أكبر */}
      <Modal open={open} onClose={closeModal} center>
        
        <img src={route} alt="Certificate" className="modal__image" />
        <h2>I have completed a Front-End Diploma at Root Academy</h2>
      </Modal>
    </>
  );
};

export default Certificates;
