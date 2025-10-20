import React, { useState, useEffect } from 'react';
import './FoodCarousel.css';
import heroImage from '../../assets/hero_image.avif';
import ugali from '../../assets/ugali.webp';
import rice from '../../assets/wali.webp';
import pilau from '../../assets/pilau.webp';
import chips from '../../assets/chips.webp';
import soda from '../../assets/soda.webp';

const images = [heroImage, ugali, rice, pilau, chips, soda];

function FoodCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <img src={images[index]} alt="Food" className="carousel-image" />
    </div>
  );
}

export default FoodCarousel;
