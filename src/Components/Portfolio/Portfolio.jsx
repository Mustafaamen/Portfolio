import React, { useEffect } from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../PortfolioItem';
import './Portfolio.css';

const Portfolio = () => {
  

  return (
    <section className='portfolio section'>
      <h2 className="section__title" data-aos="fade-up">
        My <span>Projects</span>
      </h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => (
          <div
            key={item.id}
       
          >
            <PortfolioItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
