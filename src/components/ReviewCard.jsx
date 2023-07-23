import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const { URL, Brand, Variety, Stars } = review;

  return (
    <div>
      {review.map((review) => (
        <div key={review.ID}>
          <h2>{review.URL}</h2>
          <p>{review.Brand}</p>
          <p>{review.Variety}</p>
          <p>{review.Stars}</p>
        </div>
      ))}
      <a className="review-link" href={URL} target="_blank"rel="noreferrer" >
        <div className="review-card">
          <div className="review-prop variety"><strong>{Variety}</strong></div>
          <div className="review-prop brand"><i>{Brand}</i></div>
          <div className="review-prop stars">⭐ {'\u00A0'} {Stars}</div>
        </div>
      </a>
    </div>
  );
};

export default ReviewCard;
