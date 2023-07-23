import React from 'react';
import './ReviewList.css';

const ReviewList = ({ reviews }) => {

  return (
    <div className="review-list">
      <h2>Review List</h2>
      {reviews.map((review) => (
        <div key={review.ID}>

          <a href={review.URL} target="_blank" rel="noopener noreferrer">{review.URL}</a>
          <p>Brand: {review.Brand}</p>
          <p>Variety: {review.Variety}</p>
          <p>Style: {review.Style}</p>
          <p>Country: {review.Country}</p>
          <p>Stars: {review.Stars}</p>
          
        </div>
      ))}
      
      
    </div>
  );
};

export default ReviewList;
