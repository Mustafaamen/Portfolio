// import React from 'react'
// import Info from '../Info'
// import CV from '../../assets/CV Mustafa Amen Elhadad.pdf'
// import Stats from '../stats'
// import './About.css'
// import Skills from '../Skills'
// import { resume } from '../../data'
// import ResumeItem from '../ResumeItem'


// const About = () => {
//   return (
//     <>
//       <main className='section container'>
//         <section className="about">
//           <h2 className="section__title">
//             About <span>Me </span>
//           </h2>

//           <div className="about__container grid">
//             <div className="about__info">
//               <h3 className="section__subtitle">
//                 Personal Info
//               </h3>
//               <ul className="info__list grid">
//                 <Info />
//               </ul>

//               <a href={CV} download='' className='button'> Download CV  <span className="button__icon"><i class="fa-solid fa-download"></i></span></a>
//             </div>

//             <div className="stats grid">
//               <Stats />
//             </div>
//           </div>
//         </section>
//         <div className="separator"></div>

//         <section className='Skills'>
//           <h3 className='section__subtitle subtitle__center'> My Skills</h3>
//           <div className="skills__container grid">
//             <Skills />
//           </div>
//         </section>
//         <div className="separator"></div>

//         <section className="resume">
//           <h3 className='section__subtitle subtitle__center'> Expirience & Education</h3>
//           <div className="resume__container grid">
//             <div className="resume__data">
//               { resume.map((val)=>{
//                 if(val.category==='experience'){
//                   return <ResumeItem key={val.id} {...val}/>
//                 }
//               })}
//             </div>

//             <div className="resume__data">
//               { resume.map((val)=>{
//                 if(val.category==='education'){
//                   return <ResumeItem key={val.id} {...val}/>
//                 }
//               })}
//             </div>
//           </div>
//         </section>
//       </main>


//     </>
//   )
// }

// export default About


import React from 'react';
import Info from '../Info';
import CV from '../../assets/CV Mustafa Amen Elhadad.pdf';
import Stats from '../stats';
import './About.css';
import Skills from '../Skills';
import { resume } from '../../data';
import ResumeItem from '../ResumeItem';
import { motion } from 'framer-motion';
import Icon from '../Icon';

const About = () => {
  return (
    <>
      <main className='section container'>
        <section className="about">
          <motion.h2 
            className="section__title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span>Me </span>
          </motion.h2>

          <div className="about__container grid">
            <motion.div 
              className="about__info"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="section__subtitle">
                Personal Info
              </h3>
              <ul className="info__list ">
                {/* <Info /> */}
                <li className="info__item ">
                <span className='info__title'> Name : </span>
                <span className='info__description '> Mustafa Amen El-hadad </span>
                </li>
                <li className="info__item">
                <span className='info__title'> Age : </span>
                <span className='info__description'> 25 Years</span>
                </li>
                <li className="info__item">
                <span className='info__title'> Email : </span>
                <span className='info__description'> Mustafaelhadad241@gmail.com</span>
                </li>
                <li className="info__item">
                <span className='info__title'> Address : </span>
                <span className='info__description'> Saudi - Riyadh</span>
                </li>
                <li className="info__item">
                <span className='info__title'> Phone : </span>
                <span className='info__description'> +966553132969</span>
                </li>
               
                <li className="info__item">
                <span className='info__title'> Nationality : </span>
                <span className='info__description'> Egyption</span>
                </li>
                <li className="info__item info__itemm">
                <span className='info__title'> Freelance : </span>
                <span className='info__description'> Available </span>
                
                </li>
                <li className="info__item">
                <span className='info__title'> Langages : </span>
                <span className='info__description'> Arabic, English</span>
                </li>
              </ul>

              <motion.a 
                href={CV} 
                download='' 
                className='button'
                whileHover={{ scale: 1.05 }}
              >
                Download CV  <span className="button__icon"><i className="fa-solid fa-download"></i></span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="stats grid"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Stats />
            </motion.div>
          </div>
        </section>

        <motion.div 
          className="separator"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <section className='Skills'>
          <motion.h3 
            className='section__subtitle subtitle__center'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h3>
          <motion.div 
            className="skills__container grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Skills />

         
          </motion.div>
          <Icon />
        </section>

        <motion.div 
          className="separator"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <section className="resume">
          <motion.h3 
            className='section__subtitle subtitle__center'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience & Education
          </motion.h3>
          <motion.div 
            className="resume__container grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === 'experience') {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>

            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === 'education') {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>
          </motion.div>
          
        </section>
      </main>
    </>
  );
};

export default About;
