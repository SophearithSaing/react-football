import { useState } from 'react';
import './Standings.scss';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Standings() {
  const [league, setLeague] = useState('');
  const [standings, setStandings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const changeLeagueHandler = async (event) => {
    setIsLoading(true);
    setStandings([]);
    setLeague(event.currentTarget.getAttribute('data-league'));

    const leagueID = event.currentTarget.getAttribute('data-league-id');

    const response = await fetch(
      `https://v3.football.api-sports.io/standings?league=${leagueID}&season=2021`,
      {
        headers: {
          'x-apisports-key': 'cecd3586b04e7c5ec4f347e8b9278b36',
        },
      }
    );

    const data = await response.json();
    const item = data.response[0];
    setStandings(item.league.standings[0]);
    setIsLoading(false);
  };

  return (
    <div className='standings'>
      <div className='standings__tournaments'>
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
      
      {isLoading && <CircularProgress className='progress-spinner' />}
      {!isLoading && standings.length > 0 && (
      <TableContainer component={Card} className='standings__table'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Club</TableCell>
                <TableCell>MP</TableCell>
                <TableCell>W</TableCell>
                <TableCell>D</TableCell>
                <TableCell>L</TableCell>
                <TableCell>GF</TableCell>
                <TableCell>GA</TableCell>
                <TableCell>GD</TableCell>
                <TableCell>Pts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.map((team) => (
                <TableRow key={team.rank}>
                  <TableCell>{team.rank}</TableCell>
                  <TableCell className='standings__table--team-name'>
                    <div>
                      <img src={team.team.logo} alt={`${team.team.name} logo`} />
                      <p>{team.team.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>{team.all.played}</TableCell>
                  <TableCell>{team.all.win}</TableCell>
                  <TableCell>{team.all.draw}</TableCell>
                  <TableCell>{team.all.lose}</TableCell>
                  <TableCell>{team.all.goals.for}</TableCell>
                  <TableCell>{team.all.goals.against}</TableCell>
                  <TableCell>{team.goalsDiff}</TableCell>
                  <TableCell>{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
      )}
    </div>
  );
}
