import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ reviews }) => {
  // const { URL, Brand, Variety, Stars } = reviews;
  
  return (
    <div>
    {reviews.map((review) => (
      
      <a key={review.ID}
        className="review-link" 
        href={review.URL} target="_blank"
        rel="noreferrer" >
      <div className="review-card">
        <div className="review-prop variety"><strong>{review.Variety}</strong></div>
        <div className="review-prop brand"><i>{review.Brand}</i></div>
        <div className="review-prop stars">⭐ {'\u00A0'} {review.Stars}</div>
      </div>
    </a>
    ))}
      
    </div>
  );
};

export default ReviewCard;
