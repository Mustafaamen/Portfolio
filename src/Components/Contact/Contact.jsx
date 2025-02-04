import React from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <motion.section 
      className="contact section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section__title">Get In <span>Touch</span></h2>

      <div className="contact__container container grid">
        <motion.div 
          className="contact__data"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className="contact__desc">Talk to me</p>

          <div className="contact__info">
            {[
              {
                Icon: FaEnvelopeOpen,
                title: "Mail Me",
                desc: "Mustafaelhadad241@gmail.com",
                link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl"
              },
              {
                Icon: FaPhoneSquareAlt,
                title: "Call Me",
                desc: "+966553132969",
                link: "tel:+966553132969"
              },
              {
                Icon: FaWhatsapp,
                title: "Whatsapp Me",
                desc: "Whatsapp",
                link: "https://wa.me/+966553132969"
              }
            ].map((item, index) => (
              <motion.div 
                className="info__item border" 
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <item.Icon className="info__icon" />
                <div>
                  <span className="info__title">{item.title}</span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h4 className="info__desc">{item.desc}</h4>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="contact__social">
            {[
              { href: "https://www.facebook.com/elhdad20155?locale=ar_AR", Icon: FaFacebookF },
              { href: "https://www.instagram.com/muelhadad1/", Icon: FaInstagram },
              { href: "https://x.com/muelhadad1", Icon: FaTwitter },
              { href: "https://www.linkedin.com/in/mustafa-elhadad/", Icon: FaLinkedinIn }
            ].map((item, index) => (
              <motion.a 
                key={index} 
                href={item.href} 
                className="contact__social__link" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <item.Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form 
          className="contact__form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="form__input__group">
            {['Name', 'Email', 'Subject'].map((placeholder, index) => (
              <div className="form__input__div" key={index}>
                <input type={placeholder === 'Email' ? 'email' : 'text'} className="form__control" placeholder={placeholder} />
              </div>
            ))}
          </div>

          <div className="form__input__div">
            <textarea placeholder="Message" className="form__control textarea"></textarea>
          </div>

          <motion.button 
            className="button"
            whileHover={{ scale: 1.05 }}
          >
            Send Message <span className="button__icon contact__button__icon"><FiSend /></span>
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
