import React, { useContext, useState } from 'react';
import './Calendar.scss';
import Button from '@mui/material/Button';
import Context from '../store/context';

export default function Calendar() {
  const [selectedDate, setSeletedDate] = useState(new Date().getDate());
  const today = new Date();
  const dateArr = [];
  const context = useContext(Context);

  for (let i = -2; i <= 2; i++) {
    const month =
      today.getMonth() + 1 < 10
        ? '0' + (today.getMonth() + 1)
        : today.getMonth() + 1;
    const fullDateString = `${today.getFullYear()}-${month}-${today.getDate()}`;
    dateArr.push({
      date: today.getDate() + i,
      month: new Date(fullDateString).toLocaleString('en-US', {
        month: 'short',
      }),
      fullDateString,
    });
  }

  const changeDateHandler = (event) => {
    setSeletedDate(event.currentTarget.getAttribute('data-date'));
    context.changeDate(event.currentTarget.getAttribute('data-date-string'));
  };

  return (
    <div className='calendar'>
      {dateArr.map((date) => (
        <Button
          key={date.date}
          variant={date.date === Number(selectedDate) ? 'contained' : 'outlined'}
          className='calendar__date'
          data-date={date.date}
          data-date-string={date.fullDateString}
          onClick={changeDateHandler}
        >
          <span>{date.date}</span> <span>{date.month}</span>
        </Button>
      ))}
    </div>
  );
}
