// import React from 'react';
// import { portfolio } from '../../data';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// const PortfolioSlider = () => {
//   return (
//     <div className="portfolio-slider" style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
//       <Swiper
//         modules={[Pagination, Navigation, Autoplay]}
//         pagination={{ clickable: true }}
//         navigation
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         spaceBetween={30}
//         slidesPerView={1}
//       >
//         {portfolio.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div
//               style={{
//                 cursor: 'pointer',
//                 borderRadius: '15px',
//                 overflow: 'hidden',
//                 boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
//               }}
//               onClick={() => window.open(item.link, '_blank')}
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '100%', height: '300px', objectFit: 'cover' }}
//               />
//               <h3
//                 style={{
//                   textAlign: 'center',
//                   padding: '10px',
//                   backgroundColor: '#333',
//                   color: '#fff',
//                   margin: 0,
//                 }}
//               >
//                 {item.title}
//               </h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default PortfolioSlider;





import React from 'react';
import { portfolio } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './PortfolioSlider.css';

const PortfolioSlider = () => {
  return (
    <div className="portfolio-slider">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        autoplay={{ delay: 1200, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {portfolio.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="portfolio-item" onClick={() => window.open(item.link, '_blank')}>
              <img src={item.img} alt={item.title} className="portfolio-image" />
              <h3 className="portfolio-title">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default PortfolioSlider;