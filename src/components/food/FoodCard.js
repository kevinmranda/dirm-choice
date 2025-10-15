import React from 'react';
import './FoodCard.css';

function FoodCard({ food, isSelected, onSelect, loading }) {
  return (
    <div
      className={`food-card ${isSelected ? 'selected' : ''} ${loading ? 'disabled' : ''}`}
      onClick={() => !loading && onSelect(food)}
    >
      <img src={food.image} alt={food.name} className="food-image" />
      <h3 className="food-name">{food.name}</h3>
      {loading && <div className="loader"></div>}
    </div>
  );
}

export default FoodCard;
