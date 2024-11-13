
import Countdown from 'react-countdown';

const QuizTimer = ({ onComplete }) => {
  const renderer = ({ minutes, seconds }) => (
    <span style={{ fontWeight: 'bold' }}>
      {minutes}:{seconds}
    </span>
  );

  return (
    <div>
      <h3>Quiz Timer</h3>
      <Countdown
        date={Date.now() + 10 * 60 * 1000} // 10 minutes
        renderer={renderer}
        onComplete={onComplete}
      />
    </div>
  );
};

export default QuizTimer;
