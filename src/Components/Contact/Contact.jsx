import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import "./Contact.css";

const Contact = () => {


  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch </span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data" >
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__desc">Talk to me</p>
          <div className="contact__info">
            <div className="info__item border" >
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail Me</span>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">
                  <h4 className="info__desc">Mustafaelhadad241@gmail.com</h4>
                </a>
              </div>
            </div>

            <div className="info__item border" >
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call Me</span>
                <a href="tel:+966553132969">
                  <h4 className="info__desc">+966553132969</h4>
                </a>
              </div>
            </div>

            <div className="info__item border" >
              <FaWhatsapp className='info__icon' />
              <div>
                <span className="info__title">Whatsapp Me</span>
                <a href="https://wa.me/+966553132969" target="_blank" rel="noopener noreferrer">
                  <h4 className="info__desc">Whatsapp</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__social" >
            <a href="https://www.facebook.com/elhdad20155?locale=ar_AR" className="contact__social__link">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/muelhadad1/" className="contact__social__link">
              <FaInstagram />
            </a>
            <a href="https://x.com/muelhadad1" className="contact__social__link">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/mustafa-elhadad/" className="contact__social__link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className="coantact__form" >
          <div className="form__input__group">
            <div className="form__input__div">
              <input type="text" className="form__control" placeholder="Name" />
            </div>
            <div className="form__input__div">
              <input type="email" className="form__control" placeholder="Email" />
            </div>
            <div className="form__input__div">
              <input type="text" className="form__control" placeholder="Subject" />
            </div>
          </div>

          <div className="form__input__div">
            <textarea placeholder='Message' className="form__control textarea" name="" id=""></textarea>
          </div>
          <button className='button'>
            Send Message <span className="button__icon contact__button__icon"> <FiSend /> </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
