import { useState } from 'react';
import"../styles/startRating.css"
function StarRating() {
  const [rating, setRating] = useState(0);

  function handleStarClick(index) {
    setRating(index + 1);
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? 'star selected' : 'star'}
          onClick={() => handleStarClick(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
export default StarRating;
