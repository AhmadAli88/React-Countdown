
import Countdown from 'react-countdown';

const OfferCountdown = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Offer Expired</span>;
    } else {
      return (
        <span>
          Hurry! Offer ends in {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <div className="offer-banner" style={{ backgroundColor: '#FFD700', padding: '10px' }}>
      <Countdown date={Date.now() + 24 * 60 * 60 * 1000} renderer={renderer} />
    </div>
  );
};

export default OfferCountdown;
