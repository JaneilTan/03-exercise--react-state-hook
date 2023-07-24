import ReviewCard from './ReviewCard';
import './ReviewList.css';

const ReviewList = ({ reviews, limit }) => {
  const slicedReviews = reviews.slice(0, limit);


  return (
    
    <>
      {slicedReviews.map((review) => (
      <div key ={review.ID} className="review-list">

       <ReviewCard review={review} />
      </div>
      ))}
    </>
  );
};

export default ReviewList;
