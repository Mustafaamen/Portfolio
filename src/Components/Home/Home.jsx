// import React from 'react'
// import protoflio from "../../assets/protoflio.jpg"
// import { Link } from 'react-router-dom'
// import "./Home.css"
// import Portfolio from './../Portfolio/Portfolio';
// import About from './../About/About';
// import Contact from './../Contact/Contact';

// const Home = () => {
//   return (
//     <>
//       <section className='home section grid'>
//         <img src={protoflio} alt="" className='home__img' />

//         <div className="home__content">
//           <div className="home__data">
//             <h1 className="home__title">
//               <span>I'm Mustafa Amen.</span> <br /> Front-End Developer

//             </h1>
//             <p className="home__description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis hic sunt! Rerum sit, quam ipsum laboriosam enim, recusandae saepe repellendus reiciendis exercitationem, perspiciatis veritatis.

//             </p>
//             <Link className='button' to='/about'> More About Me <span className='button__icon'> <i class="fa-solid fa-arrow-right"></i></span> </Link>
//           </div>
//         </div>
//         <div className="color__block"></div>
//       </section>


//       <About/>
//       <Portfolio/>
//       <Contact/>
//     </>
//   )
// }

// export default Home


import React, { useEffect } from 'react';
import protoflio from "../../assets/protoflio.jpg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["Front-End Developer"], // النص اللي هيتكتب
      typeSpeed: 50,  // سرعة الكتابة
      backSpeed: 30,  // سرعة المسح
      backDelay: 1000,  // التأخير قبل المسح
      startDelay: 500,  // التأخير قبل الكتابة
      loop: false  // لو عايز النص يتكرر
    };

    const typed = new Typed(".auto__play span", options);

    return () => {
      typed.destroy();  // تنظيف الذاكرة لما الـ component يتفكك
    };
  }, []);

  return (
    <>
      <section className='home section grid'>
        {/* Image with Animation */}
        <div className="relative">
          <motion.img
            src={protoflio}
            alt="Profile"
            className='home__img'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />

          <div className="social-icons contact__sociall img__iconnnn">
            <a href="https://www.facebook.com/elhdad20155?locale=ar_AR" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook" style={{ color: "#1877F2" }}></i>
            </a>
            <a href="https://x.com/muelhadad1" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter" style={{ color: "#1DA1F2" }}></i>
            </a>
            <a href="https://www.instagram.com/muelhadad1/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram" style={{ color: "#E4405F" }}></i>
            </a>
            <a href="https://www.linkedin.com/in/mustafa-elhadad/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin" style={{ color: "#0077B5" }}></i>
            </a>
            <a href="https://github.com/Mustafaamen" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" style={{ color: "#000" }}></i>
            </a>
          </div>
        </div>

        <div className="home__content">
          <div className="home__data">
            {/* Title Animation */}
            <motion.h1
              className="home__title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
            >
              <span>I'm Mustafa Amen.</span>
              <div className="auto__play">
                <span></span>
              </div>
            </motion.h1>

            {/* Description Animation */}
            <motion.p
              className="home__description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.6 }}
            >
              I am a Front End Developer from Egypt with over 2 years of experience.
              I have a degree in Computer Science (IS) from Kafr El-Sheikh University, Egypt.
            </motion.p>

            {/* Button Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 1.2 }}
            >
              <Link className='button' to='/about'>
                More About Me <span className='button__icon'> <i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="color__block"></div>
      </section>
    </>
  );
};

export default Home;
