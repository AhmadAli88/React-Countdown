import './App.css';
import BirthdayCountdown from './components/Birthday or Anniversary';
import CountdownExample from './components/CountdownExample';
import EventCountdown from './components/Event Countdown';
import OfferCountdown from './components/Limited-Time Offer Banner';
import QuizTimer from './components/Quiz Timer';
import SessionTimeout from './components/SessionTimeout';

function App() {
  return (
    <div>
      <CountdownExample />
      <EventCountdown />
      <SessionTimeout />
      <QuizTimer />
      <OfferCountdown />
      <BirthdayCountdown/>
      {/* <BirthdayCountdown birthday={new Date('2025-04-21')} /> */}
    </div>
  );
}

export default App;
