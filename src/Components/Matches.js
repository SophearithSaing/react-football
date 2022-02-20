import { useContext, useState } from 'react';
import './Matches.scss';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import Context from '../store/context';
import CircularProgress from '@mui/material/CircularProgress';

export default function Matches() {
  const context = useContext(Context);
  const [open, setOpen] = useState(false);
  const [league, setLeague] = useState('');
  const [matches, setMatches] = useState([]);
  const [goals, setGoals] = useState({});
  const [teams, setTeams] = useState({});
  const [homeStat, setHomeStat] = useState([]);
  const [awayStat, setAwayStat] = useState([]);
  const [loadMatches, setLoadMatches] = useState(false);
  const [loadFixture, setloadFixture] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = async (event) => {
    setOpen(true);
    setloadFixture(true);
    setTeams({});
    setGoals({});
    setHomeStat([]);
    setAwayStat([]);

    const fixtureID = event.currentTarget.getAttribute('data-id');
    console.log(`https://v3.football.api-sports.io/fixtures?id=${fixtureID}`);
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?id=${fixtureID}`,
      {
        headers: {
          'x-apisports-key': 'cecd3586b04e7c5ec4f347e8b9278b36',
        },
      }
    );

    const data = await response.json();
    const fixture = await data.response[0];

    setTeams(fixture.teams);
    setGoals(fixture.goals);
    setHomeStat(fixture.statistics[0].statistics);
    setAwayStat(fixture.statistics[1].statistics);
    setloadFixture(false);
  }

  const changeLeagueHandler = async (event) => {
    setMatches([]);
    setLoadMatches(true);
    setLeague(event.currentTarget.getAttribute('data-league'));

    const leagueID = event.currentTarget.getAttribute('data-league-id');
    let date = context.date;
    if (date === '') {
      const today = new Date();
      const month =
        today.getMonth() + 1 < 10
          ? '0' + (today.getMonth() + 1)
          : today.getMonth() + 1;
      date = `${today.getFullYear()}-${month}-${today.getDate()}`;
    }

    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?league=${leagueID}&season=2021&date=${date}&timezone=Asia/Phnom_Penh`,
      {
        headers: {
          'x-apisports-key': 'cecd3586b04e7c5ec4f347e8b9278b36',
        },
      }
    );

    const data = await response.json();
    // console.log(data.response);
    setMatches(data.response);
    setLoadMatches(false);
  };

  const formatMatchTime = (time) => {
    time = new Date(time).toLocaleTimeString();
    time = time.split(' ');
    const number = time[0].split(':');
    number.pop();
    return `${number[0]}:${number[1]} ${time[1]}`;
  };
  return (
    <div className='matches'>
      <div className='matches__tournaments'>
        <Chip
          variant={league === 'premier-league' ? '' : 'outlined'}
          color='primary'
          label='Premier League'
          data-league='premier-league'
          data-league-id='39'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'la-liga' ? '' : 'outlined'}
          color='primary'
          label='La Liga'
          data-league='la-liga'
          data-league-id='140'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'bundesliga' ? '' : 'outlined'}
          color='primary'
          label='Bundesliga'
          data-league='bundesliga'
          data-league-id='78'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'serie-a' ? '' : 'outlined'}
          color='primary'
          label='Serie A'
          data-league='serie-a'
          data-league-id='135'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'league-1' ? '' : 'outlined'}
          color='primary'
          label='League 1'
          data-league='league-1'
          data-league-id='61'
          onClick={changeLeagueHandler}
        />
      </div>
      {loadMatches && <CircularProgress className='progress-spinner' />}
      {matches.map((match) => (
        <Card
          className='matches__item'
          onClick={match.fixture.status.long !== 'Not Started' ? handleOpen : undefined}
          key={match.fixture.id}
          data-id={match.fixture.id}
        >
          <div className='matches__item--content'>
            <div className='matches__item--team'>
              <img
                src={match.teams.home.logo}
                alt={`${match.teams.home.name} logo`}
              />
              <p>{match.teams.home.name}</p>
            </div>
            <div className='matches__item--score'>
              {match.fixture.status.long !== 'Not Started' && (
                <p>
                  {match.goals.home} : {match.goals.away}
                </p>
              )}
              {match.fixture.status.long === 'Not Started' && (
                <p>{formatMatchTime(match.fixture.date)}</p>
              )}
            </div>
            <div className='matches__item--team'>
              <p>{match.teams.away.name}</p>
              <img
                src={match.teams.away.logo}
                alt={`${match.teams.away.name} logo`}
              />
            </div>
          </div>
        </Card>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Card className='stats'>
          {loadFixture && <CircularProgress className='progress-spinner' />}
          {!loadFixture && <div className='stats__home'>
            <p className='stats__home--name'>{teams.home?.name}</p>
            {homeStat.map(stat => <p key={stat.type}>{stat.value !== null ? stat.value : 'N/A'}</p>)}
          </div>}
          {!loadFixture && <div className='stats__type'>
            <p className='stats__type--scores'>{goals.home} : {goals.away}</p>
            {homeStat.map(stat => <p key={stat.type}>{stat.type}</p>)}
          </div>}
          {!loadFixture && <div className='stats__away'>
            <p className='stats__away--name'>{teams.away?.name}</p>
            {awayStat.map(stat => <p key={stat.type}>{stat.value !== null ? stat.value : 'N/A'}</p>)}
          </div>}
        </Card>
      </Modal>
    </div>
  );
}
