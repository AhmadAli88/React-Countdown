import { useState } from 'react';
import Countdown from 'react-countdown';

const SessionTimeout = () => {
  const [isWarningShown, setIsWarningShown] = useState(false);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Show timeout message or redirect to login
      return <span>Session expired! Redirecting...</span>;
    } else {
      // Show countdown timer
      return (
        <span>
          {minutes}:{seconds} remaining
        </span>
      );
    }
  };

  return (
    <div>
      <h2>Session Timeout</h2>
      {isWarningShown && <p>Your session is about to expire!</p>}
      <Countdown
        date={Date.now() + 1 * 60 * 1000} // 5 minutes
        renderer={renderer}
        onTick={({ total }) => {
          if (total <= 60 * 1000) {
            setIsWarningShown(true);
          }
        }}
      />
    </div>
  );
};

export default SessionTimeout;
