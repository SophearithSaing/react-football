import React, { useState } from 'react';

const Context = React.createContext({
  date: '',
  changeDate: (date) => {},
});

export const ContextProvider = (props) => {
  const [date, setDate] = useState('');

  const changeDate = (date) => {
    setDate(date);
  };

  return (
    <Context.Provider
      value={{
        date: date,
        changeDate: changeDate,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
