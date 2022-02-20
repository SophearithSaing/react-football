import './App.scss';
import Calendar from './Components/Calendar';
import Matches from './Components/Matches';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TocIcon from '@mui/icons-material/Toc';
import { Fragment, useState } from 'react';
import Standings from './Components/Standings';

function App() {
  const [value, setValue] = useState(1);

  return (
    <div className='app'>
      <h1>Untitled Football Project</h1>

      {value === 0 && (
        <Fragment>
          <Calendar />
          <h2>Matches</h2>
          <Matches />
        </Fragment>
      )}

      {value === 1 && (
        <Fragment>
          <h2>Standings</h2>
          <Standings />
        </Fragment>
      )}

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
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Matches" icon={<SportsSoccerIcon />} />
          <BottomNavigationAction label="Standings" icon={<TocIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default App;
