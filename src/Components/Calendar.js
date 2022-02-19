import React from 'react';
import './Calendar.scss';
import Button from '@mui/material/Button';

export default function Calendar() {
  const today = new Date();
  const dateArr = [];
  for (let i = -2; i <= 2; i++) {
    dateArr.push({
      date: today.getDate() + i,
      month: new Date(
        `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate() - i}`
      ).toLocaleString('en-US', {
        month: 'short',
      }),
    });
  }
  return (
    <div className='calendar'>
      {dateArr.map((date) => (
        <Button key={date.date} variant='outlined' className='calendar__date'>
          <span>{date.date}</span> <span>{date.month}</span>
        </Button>
      ))}
    </div>
  );
}
