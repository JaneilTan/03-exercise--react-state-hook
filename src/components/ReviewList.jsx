import ReviewCard from './ReviewCard';
import './ReviewList.css';

const ReviewList = ({ reviews }) => {

  return (
    <div className="review-list">
      
      
      <ReviewCard  reviews={reviews} />
      
    
    </div>
  );
};

export default ReviewList;
