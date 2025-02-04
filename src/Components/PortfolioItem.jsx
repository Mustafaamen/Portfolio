// import React from 'react'
// import Close from '../assets/close.svg'
// import { useState } from 'react'

// const PortfolioItem = ({ img, title, details }) => {

//     let [model , setModel]=useState(false)
//     const toggleModel =() =>{
//       setModel(!model)
//     }
//     return (
//         <div className="portfolio__item">
//             <img src={img} alt="" className='portfolio__img' />
//             <div className="portfolio__hover" onClick={toggleModel}>
//                 <h3 className="portfolio__title">{title}</h3>
//             </div>

//             {model && ( <div className="portfolio__model">
//                 <div className="portfolio__model__content">
//                     <img src={Close} className='model__close' alt="" onClick={toggleModel } />
//                     <h3 className="model__title">
//                         {title}
//                     </h3>
//                     <ul className='model__list grid'>
//                         {details.map(({icon, title,desc} , index)=>{
//                             return (
//                                 <li className="model__item" key={index}>
//                                     <span className='item__icon'> {icon} </span>
//                                     <div>
//                                     <span className="item__title">{title}</span>
//                                     <span className="item__desc">{desc}</span>
                                  
//                                     </div>
                                    
//                                 </li>
                                
//                             )
//                         })}
//                     </ul>
// a
//                     <img src={img} alt="" className="model__img" />
//                 </div>
//             </div>)}
           
//         </div>
//     )
// }

// export default PortfolioItem
import React from 'react';
import { FiEye } from 'react-icons/fi'; // أيقونة العين
import Close from '../assets/close.svg';
import { useState } from 'react';

const PortfolioItem = ({ img, title, details }) => {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };

  // الحصول على الرابط
  const previewLink = details.find(detail => detail.title === 'Preview : ')?.desc;

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModel}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {model && (
        <div className="portfolio__model">
          <div className="portfolio__model__content">
            <img src={Close} className="model__close" alt="" onClick={toggleModel} />
            <h3 className="model__title">{title}</h3>
            <ul className="model__list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="model__item" key={index}>
                  <span className="item__icon">{icon}</span>
                  <div>
                    <span className="item__title">{title}</span>
                    <span className="item__desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="image-container">
              <img src={img} alt="" className="model__img" />
              {previewLink && (
                <a href={previewLink} target="_blank" rel="noopener noreferrer" className="eye-icon">
                  <FiEye size={32} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
