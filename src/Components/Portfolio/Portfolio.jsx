import React from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../PortfolioItem';
import './Portfolio.css';
import { motion } from 'framer-motion';
import PortfolioSlider from '../PortfolioSlider/PortfolioSlider';

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className='portfolio section'>
      <PortfolioSlider/>
      <motion.h2
        className="section__title"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        My <span>Projects</span>
      </motion.h2>

      <motion.div
        className="portfolio__container container grid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {portfolio.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <PortfolioItem {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
