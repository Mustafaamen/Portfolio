import React, { useEffect } from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../PortfolioItem';
import './Portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <section className='portfolio section'>
      <h2 className="section__title" data-aos="fade-up">
        My <span>Projects</span>
      </h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item, index) => (
          <div
            key={item.id}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={`${index * 100}`}
          >
            <PortfolioItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
