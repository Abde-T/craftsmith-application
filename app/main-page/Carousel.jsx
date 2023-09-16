'use client'
import { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState('s1'); 
  const handleSlideChange = (slideId) => {
    setCurrentSlide(slideId);
  };

  return (
    <section className="bg-black- h-[50vh]">
      <div id="slider">
        <input
          type="radio"
          name="slider"
          id="s1"
          checked={currentSlide === 's1'}
          onChange={() => handleSlideChange('s1')}
        />
        <input
          type="radio"
          name="slider"
          id="s2"
          checked={currentSlide === 's2'}
          onChange={() => handleSlideChange('s2')}
        />
        <input
          type="radio"
          name="slider"
          id="s3"
          checked={currentSlide === 's3'}
          onChange={() => handleSlideChange('s3')}
        />
        <input
          type="radio"
          name="slider"
          id="s4"
          checked={currentSlide === 's4'}
          onChange={() => handleSlideChange('s4')}
        />
        <input
          type="radio"
          name="slider"
          id="s5"
          checked={currentSlide === 's5'}
          onChange={() => handleSlideChange('s5')}
        />

        <label htmlFor="s1" id="slide1"></label>
        <label htmlFor="s2" id="slide2"></label>
        <label htmlFor="s3" id="slide3"></label>
        <label htmlFor="s4" id="slide4"></label>
        <label htmlFor="s5" id="slide5"></label>
      </div>
    </section>
  );
};

export default Carousel;