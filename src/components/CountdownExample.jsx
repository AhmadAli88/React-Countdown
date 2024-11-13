
import Countdown from 'react-countdown';

const CountdownExample = () => {
  // Custom renderer function
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render when countdown is complete
      return <span>Times up!</span>;
    } else {
      // Render countdown in progress
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <Countdown date={Date.now() + 10000} renderer={renderer} />
    </div>
  );
};

export default CountdownExample;
