import './App.scss';
import Calendar from './Components/Calendar';
import Matches from './Components/Matches';

function App() {
  return (
    <div className='app'>
      <h1>Untitled Football Project</h1>
      <Calendar />
      <h2>Matches</h2>
      <Matches />
      <div className='attribution'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://icons8.com/icon/GTsE9Lh1DNKA/football'
        >
          Football
        </a>{' '}
        icon by{' '}
        <a target='_blank' rel='noreferrer' href='https://icons8.com'>
          Icons8
        </a>
      </div>
    </div>
  );
}

export default App;
