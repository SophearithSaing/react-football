import './App.scss';
import Calendar from './Components/Calendar';
import Matches from './Components/Matches';

function App() {
  return (
    <div className="app">
      <h1>Untitled Football Project</h1>
      <Calendar />
      <h2>Matches</h2>
      <Matches />
    </div>
  );
}

export default App;
