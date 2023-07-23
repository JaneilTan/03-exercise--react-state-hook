import ReviewCard from './ReviewCard';
import './ReviewList.css';

const ReviewList = ({ reviews }) => {
  const slicedReviews = reviews.slice(0, 10);

  console.log(slicedReviews);

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
