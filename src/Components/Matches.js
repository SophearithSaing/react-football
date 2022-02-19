import React from 'react';
import './Matches.scss';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';

export default function Matches() {
  const [open, setOpen] = React.useState(false);
  const [league, setLeague] = React.useState('la-liga');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const changeLeagueHandler = (event) => {
    setLeague(event.currentTarget.getAttribute('data-league'));
  };
  return (
    <div className='matches'>
      <div className='matches__tournaments'>
        <Chip
          variant={league === 'premier-league' ? '' : 'outlined'}
          color='primary'
          label='Premier League'
          data-league='premier-league'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'la-liga' ? '' : 'outlined'}
          color='primary'
          label='La Liga'
          data-league='la-liga'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'bundesliga' ? '' : 'outlined'}
          color='primary'
          label='Bundesliga'
          data-league='bundesliga'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'serie-a' ? '' : 'outlined'}
          color='primary'
          label='Serie A'
          data-league='serie-a'
          onClick={changeLeagueHandler}
        />
        <Chip
          variant={league === 'league-1' ? '' : 'outlined'}
          color='primary'
          label='League 1'
          data-league='league-1'
          onClick={changeLeagueHandler}
        />
      </div>
      <Card className='matches__item' onClick={handleOpen}>
        <div className='matches__item--content'>
          <div className='matches__item--team'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcqGcoElVJ4JRk0hh2ips5R3yRvmzeYk8gkG-WN3O1-gD0W3lS-I7XVnA9CttQoPgZaQ&usqp=CAU'
              alt=''
            />
            <p>Real Madrid</p>
          </div>
          <div className='matches__item--score'>
            <p>3 : 2</p>
          </div>
          <div className='matches__item--team'>
            <p>Barcelona</p>
            <img
              src='https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png'
              alt=''
            />
          </div>
        </div>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Card className='stats'>
          <div className='stats__home'>
            <p>Real Madrid</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className='stats__type'>
            <p>3 : 2</p>
            <p>Shots on Goal</p>
            <p>Shots off Goal</p>
            <p>Total Shots</p>
          </div>
          <div className='stats__away'>
            <p>Barcelona</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </Card>
      </Modal>
      <Card className='matches__item'>
        <div className='matches__item--content'>
          <div className='matches__item--team'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcqGcoElVJ4JRk0hh2ips5R3yRvmzeYk8gkG-WN3O1-gD0W3lS-I7XVnA9CttQoPgZaQ&usqp=CAU'
              alt=''
            />
            <p>Real Madrid</p>
          </div>
          <div className='matches__item--score'>
            <p>3 : 2</p>
          </div>
          <div className='matches__item--team'>
            <p>Barcelona</p>
            <img
              src='https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png'
              alt=''
            />
          </div>
        </div>
      </Card>
      <Card className='matches__item'>
        <div className='matches__item--content'>
          <div className='matches__item--team'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcqGcoElVJ4JRk0hh2ips5R3yRvmzeYk8gkG-WN3O1-gD0W3lS-I7XVnA9CttQoPgZaQ&usqp=CAU'
              alt=''
            />
            <p>Real Madrid</p>
          </div>
          <div className='matches__item--score'>
            <p>3 : 2</p>
          </div>
          <div className='matches__item--team'>
            <p>Barcelona</p>
            <img
              src='https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/2020px-FC_Barcelona_%28crest%29.svg.png'
              alt=''
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
