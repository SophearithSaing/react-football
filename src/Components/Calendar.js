import React, { useContext } from 'react';
import './Calendar.scss';
import Button from '@mui/material/Button';
import Context from '../store/context';

export default function Calendar() {
  const today = new Date();
  const dateArr = [];
  const context = useContext(Context);
  const changeDateHandler = (event) => {
    context.changeDate(event.currentTarget.getAttribute('data-date'));
  };
  for (let i = -2; i <= 2; i++) {
    const fullDateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + i}`;
    dateArr.push({
      date: today.getDate() + i,
      month: new Date(fullDateString).toLocaleString('en-US', {
        month: 'short',
      }),
      fullDateString,
    });
  }
  return (
    <div className='calendar'>
      {dateArr.map((date) => (
        <Button
          key={date.date}
          variant='outlined'
          className='calendar__date'
          data-date={date.fullDateString}
          onClick={changeDateHandler}
        >
          <span>{date.date}</span> <span>{date.month}</span>
        </Button>
      ))}
    </div>
  );
}
