import PropTypes from 'prop-types';
import Countdown from 'react-countdown';

const BirthdayCountdown = ({ birthday }) => {
  if (!(birthday)) {
    console.error("Invalid 'birthday' prop: expected a Date instance.");
    return <div>Please provide a valid birthday date.</div>;
  }

  const nextBirthday = new Date(new Date().getFullYear(), birthday.getMonth(), birthday.getDate());
  if (nextBirthday < new Date()) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  return (
    <div>
      <h3>Days until your next birthday:</h3>
      <Countdown date={nextBirthday} />
    </div>
  );
};

BirthdayCountdown.propTypes = {
  birthday: PropTypes.instanceOf(Date).isRequired,
};

export default BirthdayCountdown;
