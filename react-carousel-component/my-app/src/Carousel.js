import {FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './index.css';

import { useState, useEffect } from 'react';

export default function Carousel() {
  const [activeImageIndex, setActiveImageIndex] = useState(1);
  const src = `/images/00${activeImageIndex}.png`;
  const alt = 'This is an awesome image';

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prevIndex) => {
        if (prevIndex === 5) {
          return 1;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function next() {
    setActiveImageIndex((prevIndex) => {
      if (prevIndex === 5) {
        return 1;
      } else {
        return prevIndex + 1;
      }
    });
  }

  function previous() {
    setActiveImageIndex((prevIndex) => {
      if (prevIndex === 1) {
        return 5;
      } else {
        return prevIndex - 1;
      }
    });
  }

  const numSlides = 5;
  const indicators = [];

  for (let i = 1; i < numSlides + 1; i++) {
    const isActive = i === activeImageIndex;
    const indicatorClass = isActive ? 'active' : '';

    indicators.push(<li key={i} className={indicatorClass}></li>);
  }

  return (
    <div className='carousel'>
      <div className='left-arrow'>
        <button onClick={previous}>
          <FaAngleLeft />
        </button>
      </div>
      <div className='image'>
        <img className='current-image' src={src} alt={alt} />
        <ol className='indicators'>{indicators}</ol>
      </div>
      <div className='right-arrow'>
        <button onClick={next}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
