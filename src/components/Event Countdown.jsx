
import Countdown from 'react-countdown';

const EventCountdown = () => {
  // Custom renderer function to style the countdown
  const renderer = ({ days, hours, minutes, seconds }) => (
    <div style={{ fontSize: '2rem', color: '#ff4500' }}>
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  );

  return (
    <div>
      <h2>Product Launch In:</h2>
      <Countdown date={new Date('2024-12-31T23:59:59')} renderer={renderer} />
    </div>
  );
};

export default EventCountdown;
