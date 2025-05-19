import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ content, author, position, avatar, rating = 5 }) => {
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={index < rating ? faStarSolid : faStarRegular}
        className={index < rating ? "star-filled" : "star-empty"}
      />
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="quote-icon">
        <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      <div className="rating">{renderStars()}</div>
      <p className="testimonial-content">{content}</p>
      <div className="testimonial-author">
        <img src={avatar || "/placeholder.svg"} alt={author} />
        <div className="author-info">
          <h4>{author}</h4>
          <p>{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
